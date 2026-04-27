import { brandShell, h1, p, primaryButton, tokens, divider } from "./components/brand";

export interface CompletedLesson { lessonNumber: string; title: string; score: number; }
export interface QueuedLesson { lessonNumber: string; title: string; }

export interface WeeklyProgressProps {
  firstName: string;
  weekNumber: number;
  completedLastWeek: CompletedLesson[];
  queuedThisWeek: QueuedLesson[];
  averageGrade: number;       // current overall avg
  currentStreak: number;      // days
  dashboardUrl: string;
}

export function weeklyProgressSubject(): string {
  return "Your Claude Mastery week ahead";
}

export function weeklyProgressHtml({ firstName, weekNumber, completedLastWeek, queuedThisWeek, averageGrade, currentStreak, dashboardUrl }: WeeklyProgressProps): string {
  const completedRows = completedLastWeek.length === 0
    ? `<tr><td style="padding:10px 0;font-size:14px;color:${tokens.textFaint};font-style:italic;font-family:${tokens.font};">No lessons completed last week.</td></tr>`
    : completedLastWeek.map(l => `
      <tr>
        <td style="padding:10px 0;font-size:14px;color:${tokens.text};font-family:${tokens.font};">
          <span style="color:${tokens.textFaint};font-weight:600;">${escapeHtml(l.lessonNumber)}</span> &nbsp; ${escapeHtml(l.title)}
        </td>
        <td style="padding:10px 0;font-size:14px;font-weight:700;color:${tokens.text};text-align:right;font-family:${tokens.font};">${l.score}/100</td>
      </tr>`).join("");

  const queuedRows = queuedThisWeek.length === 0
    ? `<tr><td style="padding:10px 0;font-size:14px;color:${tokens.textFaint};font-style:italic;font-family:${tokens.font};">No lessons queued — check your dashboard.</td></tr>`
    : queuedThisWeek.map(l => `
      <tr>
        <td style="padding:10px 0;font-size:14px;color:${tokens.text};font-family:${tokens.font};">
          <span style="color:${tokens.textFaint};font-weight:600;">${escapeHtml(l.lessonNumber)}</span> &nbsp; ${escapeHtml(l.title)}
        </td>
      </tr>`).join("");

  const inner = `
    ${h1(`Week ${weekNumber} — your week ahead`)}
    ${p(`Morning ${escapeHtml(firstName)}. Here's where you stand and what's queued.`)}

    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:20px 0;">
      <tr>
        <td width="50%" style="padding-right:8px;">
          <div style="padding:20px;background:${tokens.surfaceMuted};border:1px solid ${tokens.border};border-radius:12px;text-align:center;">
            <div style="font-size:11px;color:${tokens.textFaint};font-weight:700;text-transform:uppercase;letter-spacing:0.08em;font-family:${tokens.font};">Avg grade</div>
            <div style="font-size:32px;font-weight:800;color:${tokens.text};margin:4px 0 0;letter-spacing:-0.02em;font-family:${tokens.font};">${averageGrade}<span style="font-size:14px;color:${tokens.textFaint};font-weight:600;">/100</span></div>
          </div>
        </td>
        <td width="50%" style="padding-left:8px;">
          <div style="padding:20px;background:${tokens.surfaceMuted};border:1px solid ${tokens.border};border-radius:12px;text-align:center;">
            <div style="font-size:11px;color:${tokens.textFaint};font-weight:700;text-transform:uppercase;letter-spacing:0.08em;font-family:${tokens.font};">Current streak</div>
            <div style="font-size:32px;font-weight:800;color:${tokens.text};margin:4px 0 0;letter-spacing:-0.02em;font-family:${tokens.font};">${currentStreak}<span style="font-size:14px;color:${tokens.textFaint};font-weight:600;"> days</span></div>
          </div>
        </td>
      </tr>
    </table>

    ${divider()}

    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:${tokens.text};font-family:${tokens.font};">Last week — completed</p>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 24px;">${completedRows}</table>

    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:${tokens.text};font-family:${tokens.font};">This week — queued</p>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 28px;">${queuedRows}</table>

    ${primaryButton(dashboardUrl, "Pick up where you left off →")}
  `;
  return brandShell(inner);
}

export function weeklyProgressText({ firstName, weekNumber, completedLastWeek, queuedThisWeek, averageGrade, currentStreak, dashboardUrl }: WeeklyProgressProps): string {
  const completedLines = completedLastWeek.length === 0
    ? "  (no lessons completed last week)"
    : completedLastWeek.map(l => `  ${l.lessonNumber}  ${l.title} — ${l.score}/100`).join("\n");
  const queuedLines = queuedThisWeek.length === 0
    ? "  (no lessons queued)"
    : queuedThisWeek.map(l => `  ${l.lessonNumber}  ${l.title}`).join("\n");

  return `Week ${weekNumber} — your week ahead

Morning ${firstName}. Here's where you stand and what's queued.

Avg grade: ${averageGrade}/100
Current streak: ${currentStreak} days

Last week — completed
${completedLines}

This week — queued
${queuedLines}

Pick up where you left off: ${dashboardUrl}

— Commercial Growth Pty Ltd`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]!));
}
