"use server";

import { auth } from "@/lib/auth";
import { db } from "@/db";
import { lessonSubmissions, grades, profiles } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getLessonBySlug } from "@/lib/lessons";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GRADER_MODEL = "claude-sonnet-4-5";

export type GradeResult = {
  ok: boolean;
  scoreOverall?: number;
  feedback?: string;
  rubric?: { label: string; score: number; max: number; tone?: "warn" | "danger" }[];
  error?: string;
};

function moduleSlugForLessonSlug(slug: string): string {
  const numMatch = slug.match(/^(\d+)\./);
  const num = numMatch?.[1] ?? "01";
  const lookup: Record<string, string> = {
    "1": "01-claude-essentials",
    "2": "02-prompt-engineering-fundamentals",
    "3": "03-practical-daily-applications",
    "4": "04-claude-projects-knowledge",
    "5": "05-extended-capabilities",
    "6": "06-core-capstone"
  };
  return lookup[num] ?? "01-claude-essentials";
}

function buildGradingPrompt(lessonSlug: string, lessonTitle: string, lessonNumber: string, deliverableTitle: string, sectionsSummary: string, rubric: { name: string; points: number; desc: string }[], submission: string, learnerIndustry: string | null) {
  const passMark = 70;
  const totalPoints = rubric.reduce((sum, r) => sum + r.points, 0) || 100;

  return `You are grading a student's submission for Lesson ${lessonNumber} of the Claude Mastery Program — "${lessonTitle}".

The student is enrolled in a 6-week course teaching Australian SMB owners and operators to use Claude effectively in their business. ${learnerIndustry ? `The student works in: ${learnerIndustry}.` : ""}

The deliverable they were asked to submit ("${deliverableTitle}") has the following sections:
${sectionsSummary}

Grade against this ${rubric.length}-criteria rubric (${totalPoints} points total). Pass mark is ${passMark}.

${rubric.map(r => `**${r.name}** (${r.points} pts): ${r.desc}`).join("\n")}

Return ONLY a valid JSON object with this exact structure (no markdown, no commentary, no code fences — just the JSON):

{
  "score_overall": <integer 0-${totalPoints}>,
  "feedback": "<2-3 sentence summary of what they did well and what to improve, addressed to the student in plain English>",
  "rubric": [
${rubric.map(r => `    { "label": "${r.name}", "score": <0-${r.points} integer> }`).join(",\n")}
  ]
}

The rubric scores must sum to score_overall.

Be a generous-but-honest grader. If a section is missing entirely, dock heavily. Reward concrete, business-grounded answers that show real understanding. Penalise generic, abstract, or hypothetical answers — the goal is for the student to apply this lesson to their actual work.

---STUDENT SUBMISSION BEGINS---
${submission}
---STUDENT SUBMISSION ENDS---

Now return only the JSON.`;
}

export async function submitAndGradeLesson(lessonSlug: string, formData: FormData): Promise<GradeResult> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "Not signed in" };
  if (!ANTHROPIC_API_KEY) return { ok: false, error: "Grader is not configured" };

  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson || !lesson.deliverable) {
    return { ok: false, error: "This lesson doesn't have a graded deliverable." };
  }

  const sections = lesson.deliverable.sections;

  // Read each q{n} field
  const responses: Record<string, string> = {};
  const wordCounts: Record<string, number> = {};
  const wc = (s: string) => (s.trim() === "" ? 0 : s.trim().split(/\s+/).length);

  for (const sec of sections) {
    const value = String(formData.get(`q${sec.num}`) ?? "").trim();
    responses[`q${sec.num}`] = value;
    wordCounts[`q${sec.num}`] = wc(value);
    if (sec.minWords !== null && wordCounts[`q${sec.num}`] < sec.minWords) {
      return { ok: false, error: `Section ${sec.num} (${sec.title}) is below the ${sec.minWords}-word minimum.` };
    }
    if (value === "") {
      return { ok: false, error: `Section ${sec.num} (${sec.title}) is empty.` };
    }
  }

  // Legacy single-field fallback for older lessons that may not be wired with q{n} yet
  const legacy = String(formData.get("submission") ?? "").trim();
  let submissionText: string;
  let storedResponses: Record<string, string>;

  if (sections.length > 0 && Object.values(responses).every(v => v.length > 0)) {
    submissionText = sections
      .map(s => `${s.num}. ${s.title}\n${responses[`q${s.num}`]}`)
      .join("\n\n");
    storedResponses = responses;
  } else if (legacy.length >= 100) {
    submissionText = legacy;
    storedResponses = { full: legacy };
  } else {
    return { ok: false, error: "Please answer all questions and meet the word count for each." };
  }

  const userId = session.user.id;
  const moduleSlug = moduleSlugForLessonSlug(lessonSlug);

  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, userId));

  const existing = await db
    .select()
    .from(lessonSubmissions)
    .where(and(eq(lessonSubmissions.userId, userId), eq(lessonSubmissions.lessonSlug, lessonSlug)));

  let submissionId: string;
  if (existing.length > 0) {
    await db
      .update(lessonSubmissions)
      .set({
        responses: storedResponses,
        promptUsed: submissionText,
        status: "submitted",
        submittedAt: new Date(),
        updatedAt: new Date()
      })
      .where(eq(lessonSubmissions.id, existing[0].id));
    submissionId = existing[0].id;
  } else {
    const [row] = await db
      .insert(lessonSubmissions)
      .values({
        userId,
        lessonSlug,
        moduleSlug,
        responses: storedResponses,
        promptUsed: submissionText,
        status: "submitted",
        submittedAt: new Date()
      })
      .returning();
    submissionId = row.id;
  }

  // Build prompt
  const sectionsSummary = sections
    .map(s => {
      const wc = s.minWords !== null && s.maxWords !== null ? ` (${s.minWords}–${s.maxWords} words)` : "";
      return `${s.num}. ${s.title}${wc} — ${s.desc}`;
    })
    .join("\n");

  let parsed: { score_overall: number; feedback: string; rubric: { label: string; score: number }[] };
  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: GRADER_MODEL,
        max_tokens: 1500,
        messages: [
          {
            role: "user",
            content: buildGradingPrompt(
              lessonSlug,
              lesson.title,
              lesson.number,
              lesson.deliverable.title,
              sectionsSummary,
              lesson.deliverable.rubric,
              submissionText,
              profile?.industry ?? null
            )
          }
        ]
      })
    });

    if (!resp.ok) {
      const errBody = await resp.text();
      console.error("Anthropic API error:", resp.status, errBody);
      return { ok: false, error: `Grader unavailable (${resp.status}). Try again in a moment.` };
    }

    const data = await resp.json();
    let text = data.content?.[0]?.text ?? "";
    text = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
    const m = text.match(/\{[\s\S]+\}/);
    if (!m) throw new Error("No JSON in grader response");
    parsed = JSON.parse(m[0]);
  } catch (err) {
    console.error("Grading error:", err);
    return { ok: false, error: "Couldn't parse grader response. Try again." };
  }

  const breakdown: Record<string, number> = {};
  for (const r of parsed.rubric) {
    const key = r.label.toLowerCase().replace(/[^a-z0-9]+/g, "_");
    breakdown[key] = r.score;
  }

  await db
    .update(lessonSubmissions)
    .set({ status: "graded", updatedAt: new Date() })
    .where(eq(lessonSubmissions.id, submissionId));

  await db.insert(grades).values({
    submissionId,
    userId,
    scoreOverall: parsed.score_overall,
    scoreBreakdown: breakdown,
    feedback: parsed.feedback,
    graderModel: GRADER_MODEL
  });

  revalidatePath("/dashboard");
  revalidatePath(`/lessons/${lessonSlug}`);

  return {
    ok: true,
    scoreOverall: parsed.score_overall,
    feedback: parsed.feedback,
    rubric: parsed.rubric.map(r => {
      const sec = lesson.deliverable!.rubric.find(rr => rr.name === r.label);
      const max = sec?.points ?? 25;
      return {
        label: r.label,
        score: r.score,
        max,
        tone: r.score / max < 0.6 ? "danger" as const : r.score / max < 0.75 ? "warn" as const : undefined
      };
    })
  };
}

// Backward-compat alias used by the existing LessonShell for lesson 1.1.
export async function submitAndGradeLesson1_1(formData: FormData): Promise<GradeResult> {
  return submitAndGradeLesson("1.1-what-claude-is-and-what-it-isnt", formData);
}
