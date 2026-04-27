/**
 * scripts/send-activation-emails.ts
 *
 * Launch-day script. Sends the "You're in" activation email to every
 * pre-sale enrolment, generating a magic-link sign-in URL backed by
 * Auth.js's verificationTokens table. Marks the enrolment status
 * "active" only when Resend confirms the send.
 *
 *   pnpm tsx scripts/send-activation-emails.ts                # send to all presale
 *   pnpm tsx scripts/send-activation-emails.ts --dry-run      # report only
 *   pnpm tsx scripts/send-activation-emails.ts --limit=5      # cap how many to send
 *   pnpm tsx scripts/send-activation-emails.ts --to=foo@bar   # only this email
 *
 * Idempotent: re-running picks up only enrolments still status=presale.
 *
 * Run from production (Vercel) or anywhere with these env vars:
 *   DATABASE_URL, RESEND_API_KEY, AUTH_SECRET, NEXTAUTH_URL
 */

import "dotenv/config";
import { db } from "../src/db";
import { enrolments, users } from "../src/db/schema";
import { eq, and } from "drizzle-orm";
import { sendActivationEmail } from "../src/lib/email/activation";

interface Args {
  dryRun: boolean;
  limit: number | null;
  onlyEmail: string | null;
}

function parseArgs(): Args {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const limitArg = args.find((a) => a.startsWith("--limit="));
  const limit = limitArg ? Number(limitArg.split("=")[1]) : null;
  const toArg = args.find((a) => a.startsWith("--to="));
  const onlyEmail = toArg ? toArg.split("=")[1].toLowerCase() : null;
  return { dryRun, limit, onlyEmail };
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const { dryRun, limit, onlyEmail } = parseArgs();
  console.log(`[activate] mode: ${dryRun ? "DRY RUN" : "SEND"}`);
  if (limit) console.log(`[activate] limit: ${limit}`);
  if (onlyEmail) console.log(`[activate] only: ${onlyEmail}`);

  // Fetch all presale enrolments + their user.
  const rows = await db
    .select({
      enrolmentId: enrolments.id,
      userId: enrolments.userId,
      email: users.email,
      name: users.name
    })
    .from(enrolments)
    .innerJoin(users, eq(enrolments.userId, users.id))
    .where(eq(enrolments.status, "presale"));

  let queue = rows;
  if (onlyEmail) queue = queue.filter((r) => r.email.toLowerCase() === onlyEmail);
  if (limit) queue = queue.slice(0, limit);

  console.log(`[activate] ${queue.length} enrolments to process`);

  let sent = 0;
  let failed = 0;
  const errors: Array<{ email: string; error: string }> = [];

  for (const row of queue) {
    try {
      if (dryRun) {
        console.log(`[activate] (dry) would send to ${row.email}`);
        sent++;
        continue;
      }
      const firstName = row.name?.split(" ")[0];
      const result = await sendActivationEmail({
        email: row.email,
        firstName,
        cohortStartDate: "1 June 2026"
      });
      // Only flip status to active after the email actually goes out.
      await db
        .update(enrolments)
        .set({
          status: "active",
          accessGrantedAt: new Date(),
          updatedAt: new Date()
        })
        .where(eq(enrolments.id, row.enrolmentId));
      console.log(`[activate] sent → ${row.email} (resendId=${result.resendId})`);
      sent++;
      // Light rate limit: 250ms between sends to stay under Resend's burst cap.
      await sleep(250);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[activate] FAILED → ${row.email}: ${message}`);
      errors.push({ email: row.email, error: message });
      failed++;
    }
  }

  console.log("\n[activate] summary");
  console.table({
    queued: queue.length,
    sent,
    failed
  });
  if (errors.length > 0) {
    console.error("\n[activate] failures (re-run the script — it will retry only these):");
    for (const e of errors) console.error(`  - ${e.email}: ${e.error}`);
    process.exit(2);
  }
}

main().catch((err) => {
  console.error("[activate] fatal:", err);
  process.exit(1);
});
