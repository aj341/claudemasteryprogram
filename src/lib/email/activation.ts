import "server-only";
import { randomBytes, createHash } from "crypto";
import { db } from "@/db";
import { verificationTokens, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sendEmail } from "@/lib/email-service";

const TOKEN_TTL_DAYS = 30; // pre-sale buyers may not click for weeks

function deriveBaseUrl(): string {
  const explicit = process.env.NEXTAUTH_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://app.commercialgrowth.com.au";
}

/**
 * Creates a verification token row that Auth.js will accept on /api/auth/callback/resend
 * when the user clicks it. We hash the token with sha256 + AUTH_SECRET because that is
 * how next-auth's Resend provider stores tokens — keeping the storage format consistent
 * means the existing /api/auth handler verifies the link without any custom logic.
 */
async function createSignInToken(email: string): Promise<{ url: string }> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not set");

  const rawToken = randomBytes(32).toString("hex");
  const hashed = createHash("sha256").update(`${rawToken}${secret}`).digest("hex");
  const expires = new Date(Date.now() + TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);

  await db.insert(verificationTokens).values({
    identifier: email.toLowerCase(),
    token: hashed,
    expires
  });

  const base = deriveBaseUrl();
  const params = new URLSearchParams({
    callbackUrl: `${base}/welcome`,
    token: rawToken,
    email: email.toLowerCase()
  });
  const url = `${base}/api/auth/callback/resend?${params.toString()}`;
  return { url };
}

export interface SendActivationOptions {
  email: string;
  firstName?: string;
  cohortStartDate?: string;
}

/**
 * Generates a fresh sign-in token for the user and sends the branded
 * "You're in" activation email. Returns the Resend message id and
 * the magic link (handy for logging / re-sending).
 */
export async function sendActivationEmail(opts: SendActivationOptions): Promise<{
  resendId: string | null;
  url: string;
}> {
  const { email } = opts;
  // Try to recover a friendly first name from the user row if not provided.
  let firstName = opts.firstName;
  if (!firstName) {
    const [u] = await db.select().from(users).where(eq(users.email, email.toLowerCase())).limit(1);
    if (u?.name) firstName = u.name.split(" ")[0];
  }
  if (!firstName) firstName = "there";

  const { url } = await createSignInToken(email);
  const result = await sendEmail("account_activation", email, {
    firstName,
    activationUrl: url,
    cohortStartDate: opts.cohortStartDate ?? "1 June 2026"
  });
  return { resendId: result.id, url };
}
