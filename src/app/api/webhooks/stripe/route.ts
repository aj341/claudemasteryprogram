import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { db } from "@/db";
import { users, enrolments, stripeEvents } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { stripe, STRIPE_WEBHOOK_SECRET } from "@/lib/stripe/client";
import { sendActivationEmail } from "@/lib/email/activation";

// Stripe needs the raw, untouched request body to verify the signature.
// Next.js 15 App Router: opting out of any request transformation.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COHORT = "2026-06-01";

/**
 * POST /api/webhooks/stripe
 *
 * Always returns 200 once the signature is verified — even if downstream
 * processing fails — so Stripe doesn't bury us in retries. Failures are
 * captured in stripe_events.processing_error and surfaced via console
 * logs (Vercel forwards to whatever observability is wired up).
 */
export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "missing stripe-signature header" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET());
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed", err);
    return NextResponse.json({ error: "signature verification failed" }, { status: 400 });
  }

  // Idempotency: insert first, on conflict bail out with 200.
  // ON CONFLICT (stripe_event_id) DO NOTHING — drizzle returning() reveals if we inserted.
  const inserted = await db
    .insert(stripeEvents)
    .values({
      stripeEventId: event.id,
      type: event.type,
      payload: event as unknown as Record<string, unknown>
    })
    .onConflictDoNothing({ target: stripeEvents.stripeEventId })
    .returning({ id: stripeEvents.id });

  if (inserted.length === 0) {
    console.log("[stripe-webhook] duplicate event ignored", { id: event.id, type: event.type });
    return NextResponse.json({ received: true, duplicate: true });
  }

  const auditId = inserted[0].id;

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "payment_intent.succeeded":
        // No-op: the checkout.session.completed event is the canonical signal
        // for granting access. Logging here keeps the audit trail rich.
        console.log("[stripe-webhook] payment_intent.succeeded received", { id: event.id });
        break;
      case "charge.refunded":
        await handleChargeRefunded(event.data.object as Stripe.Charge);
        break;
      default:
        console.log("[stripe-webhook] unhandled event type", { id: event.id, type: event.type });
    }

    await db
      .update(stripeEvents)
      .set({ processedAt: new Date() })
      .where(eq(stripeEvents.id, auditId));

    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[stripe-webhook] processing failed", { id: event.id, type: event.type, message });
    await db
      .update(stripeEvents)
      .set({ processingError: message })
      .where(eq(stripeEvents.id, auditId));
    // Still 200: we have the event durably stored. A human can re-process from stripe_events.
    return NextResponse.json({ received: true, processed: false, error: message });
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const email = (session.customer_details?.email ?? session.customer_email ?? "").trim().toLowerCase();
  if (!email) {
    throw new Error(`checkout.session ${session.id} has no email`);
  }

  const amountCents = session.amount_total ?? 0;
  const currency = (session.currency ?? "aud").toUpperCase();
  const paymentIntentId = typeof session.payment_intent === "string"
    ? session.payment_intent
    : session.payment_intent?.id ?? null;
  const customerId = typeof session.customer === "string"
    ? session.customer
    : session.customer?.id ?? null;
  const subscriptionId = typeof session.subscription === "string"
    ? session.subscription
    : session.subscription?.id ?? null;

  // 1. Upsert user by email (Auth.js's drizzle adapter manages users; we mirror its
  //    shape here so that when the user clicks the magic link Auth.js finds the row).
  const [existingUser] = await db.select().from(users).where(eq(users.email, email)).limit(1);

  let userId: string;
  if (existingUser) {
    userId = existingUser.id;
  } else {
    const fullName = session.customer_details?.name ?? null;
    const [created] = await db
      .insert(users)
      .values({ email, name: fullName })
      .returning({ id: users.id });
    userId = created.id;
  }

  // 2. Insert enrolment if there isn't one for (user, core) already.
  const [existingEnrolment] = await db
    .select()
    .from(enrolments)
    .where(and(eq(enrolments.userId, userId), eq(enrolments.tier, "core")))
    .limit(1);

  if (!existingEnrolment) {
    await db.insert(enrolments).values({
      userId,
      tier: "core",
      status: "active",
      cohort: COHORT,
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscriptionId,
      stripePaymentIntentId: paymentIntentId,
      amountPaidCents: amountCents,
      currency,
      accessGrantedAt: new Date()
    });
  } else if (existingEnrolment.status === "presale") {
    // Pre-sale buyer is checking out for real — promote them.
    await db
      .update(enrolments)
      .set({
        status: "active",
        stripeCustomerId: customerId ?? existingEnrolment.stripeCustomerId,
        stripeSubscriptionId: subscriptionId ?? existingEnrolment.stripeSubscriptionId,
        stripePaymentIntentId: paymentIntentId ?? existingEnrolment.stripePaymentIntentId,
        amountPaidCents: amountCents || existingEnrolment.amountPaidCents,
        currency,
        accessGrantedAt: new Date(),
        updatedAt: new Date()
      })
      .where(eq(enrolments.id, existingEnrolment.id));
  }

  // 3. Send activation email. Wrapped so a Resend hiccup doesn't poison the webhook
  //    response — the audit log will still flag it as processing_error.
  await sendActivationEmail({ email, cohortStartDate: "1 June 2026" });

  console.log("[stripe-webhook] enrolled", {
    email,
    userId,
    amountCents,
    currency,
    paymentIntentId,
    sessionId: session.id
  });
}

async function handleChargeRefunded(charge: Stripe.Charge): Promise<void> {
  const paymentIntentId = typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent?.id;
  if (!paymentIntentId) return;
  const [enr] = await db
    .select()
    .from(enrolments)
    .where(eq(enrolments.stripePaymentIntentId, paymentIntentId))
    .limit(1);
  if (!enr) return;
  await db
    .update(enrolments)
    .set({ status: "refunded", updatedAt: new Date() })
    .where(eq(enrolments.id, enr.id));
  console.log("[stripe-webhook] refunded enrolment", { enrolmentId: enr.id });
}
