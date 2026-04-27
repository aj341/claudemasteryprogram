import { brandShell, h1, p, primaryButton, pSmall, divider } from "./components/brand";

export interface AccountActivationProps {
  firstName: string;
  activationUrl: string;
  cohortStartDate?: string;
}

export function accountActivationSubject(): string {
  return "You're in. Welcome to Claude Mastery.";
}

export function accountActivationHtml({ firstName, activationUrl, cohortStartDate = "1 June 2026" }: AccountActivationProps): string {
  const inner = `
    ${h1(`Welcome, ${escape(firstName)}.`)}
    ${p("Your seat in the Claude Mastery Core cohort is confirmed.")}
    ${p(`We start <strong style="color:#111827;">${escape(cohortStartDate)}</strong>. Before then, set up your account and complete your profile so the course personalises itself to your role, goals, and the tools you actually use.`)}
    <div style="margin:28px 0 24px;">
      ${primaryButton(activationUrl, "Set up your account &rarr;")}
    </div>
    ${divider()}
    <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#111827;font-family:&lsquo;Poppins&lsquo;,sans-serif;">What to expect</p>
    <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.7;font-family:&lsquo;Poppins&lsquo;,sans-serif;">
      <li>34 lessons across 6 modules &mdash; released weekly through the cohort</li>
      <li>Each lesson is graded by Claude with personalised feedback</li>
      <li>A Module 6 capstone you&lsquo;ll build using everything you&lsquo;ve learned</li>
      <li>One chance to repeat the cohort if you don&lsquo;t pass the capstone</li>
    </ul>
    ${pSmall("If the button doesn&lsquo;t work, paste this into your browser:<br><span style=\"color:#1A9EDE;word-break:break-all;\">" + activationUrl + "</span>")}
  `;
  return brandShell(inner);
}

export function accountActivationText({ firstName, activationUrl, cohortStartDate = "1 June 2026" }: AccountActivationProps): string {
  return `Welcome, ${firstName}.

Your seat in the Claude Mastery Core cohort is confirmed.

We start ${cohortStartDate}. Before then, set up your account and complete your profile so the course personalises itself to your role, goals, and tools.

Set up your account: ${activationUrl}

What to expect:
- 34 lessons across 6 modules - released weekly
- Each lesson graded by Claude with personalised feedback
- A Module 6 capstone you'll build using everything you've learned
- One chance to repeat the cohort if you don't pass the capstone

- Commercial Growth Pty Ltd`;
}

function escape(s: string): string {
  // NOTE: previous version used `&lsquo;` inside the character class, which
  // ripgrep'd-into a literal char class of [& l s q u o ;] and replaced every
  // `u` (etc.) with `undefined`. Using real apostrophe + entity map fixes it.
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };
  return s.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
