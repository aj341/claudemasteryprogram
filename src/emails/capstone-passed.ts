import { brandShell, h1, p, primaryButton, outlineButton, tokens, divider } from "./components/brand";

export interface CapstonePassedProps {
  firstName: string;
  cohortNumber: number;
  finalScore: number;
  certificateUrl: string;
  dashboardUrl: string;
}

export function capstonePassedSubject(): string {
  return "Capstone passed - you have finished Claude Mastery";
}

export function capstonePassedHtml({ firstName, cohortNumber, finalScore, certificateUrl, dashboardUrl }: CapstonePassedProps): string {
  const inner = `
    ${h1(`You did it, ${escapeHtml(firstName)}.`)}
    ${p(`You&lsquo;ve passed the Module 6 capstone and finished the Claude Mastery <strong style="color:${tokens.text};">Cohort ${cohortNumber}</strong> programme.`)}
    <div style="margin:28px 0;padding:28px;background:${tokens.surfaceMuted};border-radius:12px;border:1px solid ${tokens.border};text-align:center;">
      <div style="font-size:11px;color:${tokens.textFaint};font-weight:700;text-transform:uppercase;letter-spacing:0.08em;font-family:${tokens.font};">Final score</div>
      <div style="font-size:56px;font-weight:800;color:${tokens.text};margin:8px 0 4px;letter-spacing:-0.02em;font-family:${tokens.font};">${finalScore}<span style="font-size:24px;color:${tokens.textFaint};font-weight:600;">/100</span></div>
      <div style="font-size:14px;color:${tokens.textBody};font-family:${tokens.font};">Cohort ${cohortNumber} graduate</div>
    </div>
    <div style="margin:0 0 16px;">
      ${primaryButton(certificateUrl, "Download your certificate &rarr;")}
    </div>
    <div style="margin:0 0 24px;">
      ${outlineButton(dashboardUrl, "Open your dashboard")}
    </div>
    ${divider()}
    <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:${tokens.text};font-family:${tokens.font};">What&lsquo;s next</p>
    <ul style="margin:0;padding-left:20px;color:${tokens.textBody};font-size:14px;line-height:1.7;font-family:${tokens.font};">
      <li>Your dashboard stays open &mdash; revisit any lesson, anytime</li>
      <li>Share your win on LinkedIn (we&lsquo;ll cheer you on)</li>
      <li>Watch your inbox for the alumni programme launching mid-year</li>
    </ul>
  `;
  return brandShell(inner);
}

export function capstonePassedText({ firstName, cohortNumber, finalScore, certificateUrl, dashboardUrl }: CapstonePassedProps): string {
  return `You did it, ${firstName}.

You've passed the Module 6 capstone and finished the Claude Mastery Cohort ${cohortNumber} programme.

Final score: ${finalScore}/100

Download your certificate: ${certificateUrl}
Open your dashboard: ${dashboardUrl}

What's next:
- Your dashboard stays open - revisit any lesson, anytime
- Share your win on LinkedIn
- Watch your inbox for the alumni programme launching mid-year

- Commercial Growth Pty Ltd`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"&lsquo;]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "&lsquo;": "&#39;" }[c]!));
}
