"use server";

import { auth } from "@/lib/auth";
import { db } from "@/db";
import { lessonSubmissions, grades, profiles } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GRADER_MODEL = "claude-sonnet-4-5"; // we'll use the latest sonnet for grading; works in Apr 2026

export type GradeResult = {
  ok: boolean;
  scoreOverall?: number;
  feedback?: string;
  rubric?: { label: string; score: number; max: number; tone?: "warn" | "danger" }[];
  error?: string;
};

const RUBRIC_1_1 = [
  { name: "Specificity", points: 25, desc: "Names specific tools and describes concrete, observable differences. Applications describe named, specific tasks - not categories." },
  { name: "Structure", points: 25, desc: "All three sections present and distinguishable. Logical flow from experience to observation to application. Each application stands on its own." },
  { name: "Constraint clarity", points: 25, desc: "Grounded in your actual business, not generic scenarios. Applications realistic for your industry and role." },
  { name: "Outcome focus", points: 25, desc: "Applications identify genuine business value, not demos. Shows awareness of any limitations you'd need to manage." }
];

function buildGradingPrompt(submission: string, learnerIndustry: string | null) {
  return `You are grading a student's submission for Lesson 1.1 of the Claude Mastery Program — "What is Claude AI?".

The student is enrolled in a 6-week course teaching Australian SMB owners and operators to use Claude effectively in their business. ${learnerIndustry ? `The student works in: ${learnerIndustry}.` : ""}

The deliverable they were asked to submit has three sections:
1. Their current AI tool use (which tools, for what tasks, honest assessment) - 2-4 sentences total.
2. How Claude differs from what they've used - 250-400 words, grounded in their specific work.
3. Three specific applications in their actual work - each names the task, context, and why Claude is suitable. 3-4 sentences each.

Grade against this 4-criteria rubric (25 points each, 100 total). Pass mark is 70.

${RUBRIC_1_1.map(r => `**${r.name}** (25 pts): ${r.desc}`).join("\n")}

Return ONLY a valid JSON object with this exact structure (no markdown, no commentary, no code fences — just the JSON):

{
  "score_overall": <integer 0-100>,
  "feedback": "<2-3 sentence summary of what they did well and what to improve, addressed to the student in plain English>",
  "rubric": [
    { "label": "Specificity", "score": <0-25 integer> },
    { "label": "Structure", "score": <0-25 integer> },
    { "label": "Constraint clarity", "score": <0-25 integer> },
    { "label": "Outcome focus", "score": <0-25 integer> }
  ]
}

The four rubric scores must sum to score_overall.

Be a generous-but-honest grader. If a section is missing entirely, dock that section's structure score severely. If applications are abstract categories ("use it for marketing") rather than named tasks ("draft the monthly newsletter to my 480 retail customers"), dock specificity. Reward concrete, business-grounded answers.

---STUDENT SUBMISSION BEGINS---
${submission}
---STUDENT SUBMISSION ENDS---

Now return only the JSON.`;
}

export async function submitAndGradeLesson1_1(formData: FormData): Promise<GradeResult> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "Not signed in" };
  if (!ANTHROPIC_API_KEY) return { ok: false, error: "Grader is not configured" };

  const submissionText = String(formData.get("submission") ?? "").trim();
  if (submissionText.length < 200) return { ok: false, error: "Submission is too short — needs at least 200 characters." };

  const userId = session.user.id;
  const lessonSlug = "1.1-what-claude-is-and-what-it-isnt";
  const moduleSlug = "01-claude-essentials";

  // Fetch profile for context
  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, userId));

  // Upsert submission row
  const existing = await db
    .select()
    .from(lessonSubmissions)
    .where(and(eq(lessonSubmissions.userId, userId), eq(lessonSubmissions.lessonSlug, lessonSlug)));

  let submissionId: string;
  if (existing.length > 0) {
    await db
      .update(lessonSubmissions)
      .set({
        responses: { full: submissionText },
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
        responses: { full: submissionText },
        promptUsed: submissionText,
        status: "submitted",
        submittedAt: new Date()
      })
      .returning();
    submissionId = row.id;
  }

  // Call Claude API
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
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: buildGradingPrompt(submissionText, profile?.industry ?? null)
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

    // Strip markdown fences if any
    text = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
    // Find first { ... } block
    const m = text.match(/\{[\s\S]+\}/);
    if (!m) throw new Error("No JSON in grader response");
    parsed = JSON.parse(m[0]);
  } catch (err) {
    console.error("Grading error:", err);
    return { ok: false, error: "Couldn't parse grader response. Try again." };
  }

  // Persist grade
  const breakdown: Record<string, number> = {};
  for (const r of parsed.rubric) {
    const key = r.label.toLowerCase().replace(/[^a-z0-9]+/g, "_");
    breakdown[key] = r.score;
  }

  // Mark submission as graded
  await db
    .update(lessonSubmissions)
    .set({ status: "graded", updatedAt: new Date() })
    .where(eq(lessonSubmissions.id, submissionId));

  // Insert grade row
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

  // Return grade result for inline reveal
  return {
    ok: true,
    scoreOverall: parsed.score_overall,
    feedback: parsed.feedback,
    rubric: parsed.rubric.map(r => ({
      label: r.label,
      score: r.score,
      max: 25,
      tone: r.score / 25 < 0.6 ? "danger" as const : r.score / 25 < 0.75 ? "warn" as const : undefined
    }))
  };
}
