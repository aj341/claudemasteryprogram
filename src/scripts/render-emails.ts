/**
 * Render every email template to /tmp/email-html/{name}.html for local
 * preview / screenshotting. No network calls.
 */
import { writeFileSync, mkdirSync } from "fs";
import {
  accountActivationHtml, accountActivationSubject
} from "../emails/account-activation";
import {
  magicLinkSigninHtml, magicLinkSigninSubject
} from "../emails/magic-link-signin";
import {
  gradeReadyHtml, gradeReadySubject
} from "../emails/grade-ready";
import {
  capstonePassedHtml, capstonePassedSubject
} from "../emails/capstone-passed";
import {
  paymentReceiptHtml, paymentReceiptSubject
} from "../emails/payment-receipt";
import {
  weeklyProgressHtml, weeklyProgressSubject
} from "../emails/weekly-progress";

const OUT = "/tmp/email-html";
mkdirSync(OUT, { recursive: true });

const APP = "https://claudemasteryprogram.vercel.app";

const samples: Array<{ name: string; subject: string; html: string }> = [
  {
    name: "account_activation",
    subject: accountActivationSubject(),
    html: accountActivationHtml({ firstName: "AJ", activationUrl: `${APP}/activate?token=demo`, cohortStartDate: "1 June 2026" })
  },
  {
    name: "magic_link_signin",
    subject: magicLinkSigninSubject(),
    html: magicLinkSigninHtml({ url: `${APP}/api/auth/callback/resend?token=demo` })
  },
  {
    name: "grade_ready",
    subject: gradeReadySubject({ firstName: "AJ", lessonNumber: "1.1", lessonTitle: "What is Claude (and what isn't it)", score: 87, feedbackTeaser: "Strong.", lessonUrl: APP }),
    html: gradeReadyHtml({ firstName: "AJ", lessonNumber: "1.1", lessonTitle: "What is Claude (and what isn't it)", score: 87, feedbackTeaser: "Strong examples — push harder on edge cases in question 3.", lessonUrl: `${APP}/lessons/1-1-what-is-claude` })
  },
  {
    name: "capstone_passed",
    subject: capstonePassedSubject(),
    html: capstonePassedHtml({ firstName: "AJ", cohortNumber: 1, finalScore: 92, certificateUrl: `${APP}/certificates/demo`, dashboardUrl: `${APP}/dashboard` })
  },
  {
    name: "payment_receipt",
    subject: paymentReceiptSubject(),
    html: paymentReceiptHtml({ firstName: "AJ", orderId: "ord_demo_42", productName: "Claude Mastery — Core", amount: "$297.00 AUD", paidOn: "27 April 2026", cohortStartDate: "1 June 2026", dashboardUrl: `${APP}/dashboard` })
  },
  {
    name: "weekly_progress",
    subject: weeklyProgressSubject(),
    html: weeklyProgressHtml({
      firstName: "AJ", weekNumber: 2,
      completedLastWeek: [
        { lessonNumber: "1.1", title: "What is Claude (and what isn't it)", score: 87 },
        { lessonNumber: "1.2", title: "First-message anatomy", score: 92 }
      ],
      queuedThisWeek: [
        { lessonNumber: "1.3", title: "Roles, tone, and personas" },
        { lessonNumber: "1.4", title: "Iterating in the same chat" }
      ],
      averageGrade: 89, currentStreak: 7, dashboardUrl: `${APP}/dashboard`
    })
  }
];

for (const s of samples) {
  const wrapped = `<!--Subject: ${s.subject}-->\n${s.html}`;
  writeFileSync(`${OUT}/${s.name}.html`, wrapped);
  console.log(`wrote ${OUT}/${s.name}.html  (subject: "${s.subject}")`);
}
