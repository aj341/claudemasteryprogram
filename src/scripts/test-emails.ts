/**
 * CLI: send one of every transactional template to the test recipients.
 *
 *   tsx src/scripts/test-emails.ts
 *
 * Requires RESEND_API_KEY in env.
 */
import "dotenv/config";
import { sendEmail } from "../lib/email-service";

const RECIPIENTS = ["aj@commercialgrowth.com.au", "aj@designbees.com.au"];
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://claudemasteryprogram.vercel.app";

async function main() {
  const results: Array<{ template: string; to: string; id: string | null; latencyMs: number; error?: string }> = [];

  for (const to of RECIPIENTS) {
    const tasks: Array<[string, () => Promise<{ id: string | null; latencyMs: number }>]> = [
      ["account_activation", () => sendEmail("account_activation", to, {
        firstName: "AJ",
        activationUrl: `${APP_URL}/activate?token=test_${Date.now()}`,
        cohortStartDate: "1 June 2026"
      })],
      ["magic_link_signin", () => sendEmail("magic_link_signin", to, {
        url: `${APP_URL}/api/auth/callback/resend?token=test_${Date.now()}&email=${encodeURIComponent(to)}`
      })],
      ["grade_ready", () => sendEmail("grade_ready", to, {
        firstName: "AJ",
        lessonNumber: "1.1",
        lessonTitle: "What is Claude (and what isn't it)",
        score: 87,
        feedbackTeaser: "Strong examples — push harder on edge cases in question 3.",
        lessonUrl: `${APP_URL}/lessons/1-1-what-is-claude`
      })],
      ["capstone_passed", () => sendEmail("capstone_passed", to, {
        firstName: "AJ",
        cohortNumber: 1,
        finalScore: 92,
        certificateUrl: `${APP_URL}/certificates/test`,
        dashboardUrl: `${APP_URL}/dashboard`
      })],
      ["payment_receipt", () => sendEmail("payment_receipt", to, {
        firstName: "AJ",
        orderId: "ord_test_" + Date.now().toString(36),
        productName: "Claude Mastery — Core Cohort",
        amount: "$297.00 AUD",
        paidOn: "27 April 2026",
        cohortStartDate: "1 June 2026",
        dashboardUrl: `${APP_URL}/dashboard`
      })],
      ["weekly_progress", () => sendEmail("weekly_progress", to, {
        firstName: "AJ",
        weekNumber: 2,
        completedLastWeek: [
          { lessonNumber: "1.1", title: "What is Claude (and what isn't it)", score: 87 },
          { lessonNumber: "1.2", title: "First-message anatomy", score: 92 }
        ],
        queuedThisWeek: [
          { lessonNumber: "1.3", title: "Roles, tone, and personas" },
          { lessonNumber: "1.4", title: "Iterating in the same chat" }
        ],
        averageGrade: 89,
        currentStreak: 7,
        dashboardUrl: `${APP_URL}/dashboard`
      })]
    ];

    for (const [name, run] of tasks) {
      try {
        const r = await run();
        results.push({ template: name, to, id: r.id, latencyMs: r.latencyMs });
      } catch (e: any) {
        results.push({ template: name, to, id: null, latencyMs: 0, error: String(e?.message ?? e) });
      }
    }
  }

  console.log("\n=== Send results ===");
  for (const r of results) {
    console.log(`${r.template.padEnd(20)} → ${r.to.padEnd(32)} ${r.error ? "FAILED " + r.error : `id=${r.id} (${r.latencyMs}ms)`}`);
  }

  const failed = results.filter(r => r.error);
  if (failed.length) {
    console.error(`\n${failed.length} send(s) failed`);
    process.exit(1);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
