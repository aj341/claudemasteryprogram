/**
 * scripts/import-presale-orders.ts
 *
 * Reconcile pre-sale Stripe checkout sessions into the platform DB.
 *
 *   pnpm tsx scripts/import-presale-orders.ts                # full sync (90 days)
 *   pnpm tsx scripts/import-presale-orders.ts --dry-run      # report only, no writes
 *   pnpm tsx scripts/import-presale-orders.ts --since=120    # widen the window in days
 *
 * Idempotent: re-running only inserts rows that don't already exist.
 * Read-only against Stripe — never mutates Stripe state.
 */

import "dotenv/config";
import Stripe from "stripe";
import { db } from "../src/db";
import { users, enrolments } from "../src/db/schema";
import { and, eq } from "drizzle-orm";

const COHORT = "2026-06-01";
const TIER = "core" as const;
const MIN_AMOUNT_CENTS = 29700; // AUD $297
const DEFAULT_DAYS = 90;

interface Args {
  dryRun: boolean;
  sinceDays: number;
}

function parseArgs(): Args {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const sinceArg = args.find((a) => a.startsWith("--since="));
  const sinceDays = sinceArg ? Number(sinceArg.split("=")[1]) : DEFAULT_DAYS;
  return { dryRun, sinceDays };
}

async function main() {
  const { dryRun, sinceDays } = parseArgs();
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.error("STRIPE_SECRET_KEY is not set. Aborting.");
    process.exit(1);
  }
  const stripe = new Stripe(key, { apiVersion: "2024-11-20.acacia", typescript: true });

  const since = Math.floor(Date.now() / 1000) - sinceDays * 24 * 60 * 60;
  console.log(`[import] window: last ${sinceDays} days (since ${new Date(since * 1000).toISOString()})`);
  console.log(`[import] mode: ${dryRun ? "DRY RUN (no DB writes)" : "WRITE"}`);
  console.log(`[import] minimum: AUD ${MIN_AMOUNT_CENTS / 100}`);

  // List all completed checkout sessions in the window.
  const sessions: Stripe.Checkout.Session[] = [];
  for await (const session of stripe.checkout.sessions.list({
    limit: 100,
    created: { gte: since },
    expand: ["data.customer_details", "data.payment_intent"]
  })) {
    if (session.status !== "complete") continue;
    if ((session.amount_total ?? 0) < MIN_AMOUNT_CENTS) continue;
    if ((session.currency ?? "aud").toLowerCase() !== "aud") continue;
    sessions.push(session);
  }

  console.log(`[import] found ${sessions.length} qualifying sessions in Stripe`);

  let usersCreated = 0;
  let usersExisting = 0;
  let enrolmentsCreated = 0;
  let enrolmentsExisting = 0;
  const flagged: Array<{ email: string; reason: string; sessionId: string }> = [];

  for (const session of sessions) {
    const email = (session.customer_details?.email ?? session.customer_email ?? "").trim().toLowerCase();
    if (!email) {
      flagged.push({ email: "(missing)", reason: "no customer email on session", sessionId: session.id });
      continue;
    }

    const amountCents = session.amount_total ?? 0;
    const currency = (session.currency ?? "aud").toUpperCase();
    const paymentIntentId = typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id ?? null;
    const customerId = typeof session.customer === "string"
      ? session.customer
      : session.customer?.id ?? null;

    // Upsert user.
    const [existingUser] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    let userId: string;
    if (existingUser) {
      userId = existingUser.id;
      usersExisting++;
    } else {
      if (dryRun) {
        userId = "(would-create)";
        usersCreated++;
      } else {
        const fullName = session.customer_details?.name ?? null;
        const [created] = await db
          .insert(users)
          .values({ email, name: fullName })
          .returning({ id: users.id });
        userId = created.id;
        usersCreated++;
      }
    }

    if (dryRun && userId === "(would-create)") {
      // Can't check enrolments for a user that doesn't exist in this dry-run pass.
      enrolmentsCreated++;
      continue;
    }

    // Check enrolment.
    const [existingEnrolment] = await db
      .select()
      .from(enrolments)
      .where(and(eq(enrolments.userId, userId), eq(enrolments.tier, TIER)))
      .limit(1);

    if (existingEnrolment) {
      enrolmentsExisting++;
      continue;
    }

    if (!dryRun) {
      await db.insert(enrolments).values({
        userId,
        tier: TIER,
        status: "presale",
        cohort: COHORT,
        stripeCustomerId: customerId,
        stripePaymentIntentId: paymentIntentId,
        amountPaidCents: amountCents,
        currency
      });
    }
    enrolmentsCreated++;
  }

  console.log("\n[import] reconciliation summary");
  console.table({
    "Stripe qualifying sessions": sessions.length,
    "Users — pre-existing": usersExisting,
    "Users — created": usersCreated,
    "Enrolments — pre-existing": enrolmentsExisting,
    "Enrolments — created": enrolmentsCreated
  });

  if (flagged.length > 0) {
    console.warn(`\n[import] ${flagged.length} sessions flagged (skipped):`);
    for (const f of flagged) console.warn(`  - session=${f.sessionId} email=${f.email} reason=${f.reason}`);
  }

  const expected = sessions.length - flagged.length;
  const actual = enrolmentsExisting + enrolmentsCreated;
  if (expected === actual) {
    console.log(`\n[import] OK — ${actual} of ${expected} reconciled`);
  } else {
    console.error(`\n[import] MISMATCH — expected ${expected} reconciled, got ${actual}`);
    process.exit(2);
  }
}

main().catch((err) => {
  console.error("[import] fatal:", err);
  process.exit(1);
});
