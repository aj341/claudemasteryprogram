import { brandShell, h1, p, primaryButton, tokens } from "./components/brand";

export interface GradeReadyProps {
  firstName: string;
  lessonNumber: string;       // e.g. "1.1"
  lessonTitle: string;
  score: number;              // 0-100
  feedbackTeaser: string;     // single sentence
  lessonUrl: string;
}

export function gradeReadySubject({ lessonNumber, score }: GradeReadyProps): string {
  return `Your Lesson ${lessonNumber} grade is ready (${score}/100)`;
}

export function gradeReadyHtml({ firstName, lessonNumber, lessonTitle, score, feedbackTeaser, lessonUrl }: GradeReadyProps): string {
  const passed = score >= 70;
  const badgeColor = passed ? tokens.blue : "#F59E0B";
  const badgeText = passed ? "Passed" : "Try again";
  const inner = `
    ${h1(`Lesson ${escapeHtml(lessonNumber)} graded`)}
    ${p(`Hi ${escapeHtml(firstName)}, Claude has finished grading <strong style="color:${tokens.text};">${escapeHtml(lessonTitle)}</strong>.`)}
    <div style="margin:24px 0 28px;padding:24px;background:${tokens.surfaceMuted};border-radius:12px;border:1px solid ${tokens.border};">
      <div style="display:inline-block;background:${badgeColor};color:${tokens.dark};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:4px 10px;border-radius:100px;font-family:${tokens.font};">${badgeText}</div>
      <div style="font-size:48px;font-weight:800;color:${tokens.text};margin:12px 0 4px;letter-spacing:-0.02em;font-family:${tokens.font};">${score}<span style="font-size:24px;color:${tokens.textFaint};font-weight:600;">/100</span></div>
      <div style="font-size:14px;color:${tokens.textBody};line-height:1.5;font-family:${tokens.font};">${escapeHtml(feedbackTeaser)}</div>
    </div>
    ${primaryButton(lessonUrl, "View grade and feedback &rarr;")}
    <p style="margin:32px 0 0;font-size:13px;color:${tokens.textFaint};line-height:1.6;font-family:${tokens.font};">Detailed rubric scores and personalised next steps are waiting in your dashboard.</p>
  `;
  return brandShell(inner);
}

export function gradeReadyText({ firstName, lessonNumber, lessonTitle, score, feedbackTeaser, lessonUrl }: GradeReadyProps): string {
  return `Lesson ${lessonNumber} graded

Hi ${firstName}, Claude has finished grading "${lessonTitle}".

Score: ${score}/100
${feedbackTeaser}

View grade and feedback: ${lessonUrl}

- Commercial Growth Pty Ltd`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"&lsquo;]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "&lsquo;": "&#39;" }[c]!));
}
