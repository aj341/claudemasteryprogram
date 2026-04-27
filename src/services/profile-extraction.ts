import "server-only";
import { db } from "@/db";
import { profiles, profileExtractionLog } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

// W1-T03c: Extract structured profile fields from freeform lesson submissions.
// One Claude call per target field; only writes to profiles when the extraction
// returns a non-null, validated value. Every attempt is logged to
// profile_extraction_log for debugging, success-rate tracking, and the
// "captured from Lesson X.Y" annotation on /profile/edit.

const EXTRACTOR_MODEL = "claude-sonnet-4-5";
const EXTRACTOR_MAX_TOKENS = 200;

type ProfileField =
  | "businessName"
  | "weeklyTasks"
  | "goals"
  | "brandVoice"
  | "productsServices"
  | "customerSnapshot";

// Lesson → fields that lesson should attempt to extract. Locked per task spec.
const LESSON_FIELD_MAP: Record<string, ProfileField[]> = {
  "1.1-what-claude-is-and-what-it-isnt": ["businessName"],
  "1.2-write-your-first-real-prompt": ["productsServices", "customerSnapshot"],
  "1.3-audit-your-current-ai-use": ["weeklyTasks"],
  "1.4-map-your-weekly-tasks": ["brandVoice", "goals"]
};

type FieldSpec = {
  description: string;
  constraints: string;
  validate: (raw: unknown) => { ok: true; value: unknown } | { ok: false; reason: string };
  column:
    | "businessName"
    | "weeklyTasks"
    | "goals"
    | "brandVoice"
    | "productsServices"
    | "customerSnapshot";
};

const FIELD_SPECS: Record<ProfileField, FieldSpec> = {
  businessName: {
    description:
      "the name of the learner's business or organisation. Strip surrounding words like 'called', 'named', 'my business is'.",
    constraints: "string, 1-100 chars.",
    column: "businessName",
    validate: (raw) => {
      if (raw === null) return { ok: false, reason: "null" };
      if (typeof raw !== "string") return { ok: false, reason: "not_string" };
      const v = raw.trim();
      if (v.length < 1 || v.length > 100) return { ok: false, reason: "length" };
      return { ok: true, value: v };
    }
  },
  weeklyTasks: {
    description: "exactly 3 recurring tasks the learner does in their work week.",
    constraints:
      "array of exactly 3 strings, each 5-200 chars. Return null if fewer than 3 distinct tasks identifiable.",
    column: "weeklyTasks",
    validate: (raw) => {
      if (raw === null) return { ok: false, reason: "null" };
      if (!Array.isArray(raw)) return { ok: false, reason: "not_array" };
      if (raw.length !== 3) return { ok: false, reason: "wrong_count" };
      const cleaned: string[] = [];
      for (const item of raw) {
        if (typeof item !== "string") return { ok: false, reason: "item_not_string" };
        const v = item.trim();
        if (v.length < 5 || v.length > 200) return { ok: false, reason: "item_length" };
        cleaned.push(v);
      }
      return { ok: true, value: cleaned };
    }
  },
  goals: {
    description: "1 or more concrete goals the learner has for taking this course.",
    constraints: "array of 1-5 strings, each 5-200 chars.",
    column: "goals",
    validate: (raw) => {
      if (raw === null) return { ok: false, reason: "null" };
      if (!Array.isArray(raw)) return { ok: false, reason: "not_array" };
      if (raw.length < 1 || raw.length > 5) return { ok: false, reason: "wrong_count" };
      const cleaned: string[] = [];
      for (const item of raw) {
        if (typeof item !== "string") return { ok: false, reason: "item_not_string" };
        const v = item.trim();
        if (v.length < 5 || v.length > 200) return { ok: false, reason: "item_length" };
        cleaned.push(v);
      }
      return { ok: true, value: cleaned };
    }
  },
  brandVoice: {
    description:
      "a short description of how the learner's brand sounds when it writes/speaks.",
    constraints: "string, 10-500 chars.",
    column: "brandVoice",
    validate: (raw) => {
      if (raw === null) return { ok: false, reason: "null" };
      if (typeof raw !== "string") return { ok: false, reason: "not_string" };
      const v = raw.trim();
      if (v.length < 10 || v.length > 500) return { ok: false, reason: "length" };
      return { ok: true, value: v };
    }
  },
  productsServices: {
    description: "what the learner sells or provides.",
    constraints: "string, 10-500 chars.",
    column: "productsServices",
    validate: (raw) => {
      if (raw === null) return { ok: false, reason: "null" };
      if (typeof raw !== "string") return { ok: false, reason: "not_string" };
      const v = raw.trim();
      if (v.length < 10 || v.length > 500) return { ok: false, reason: "length" };
      return { ok: true, value: v };
    }
  },
  customerSnapshot: {
    description: "who the learner's typical customer is.",
    constraints: "string, 10-500 chars.",
    column: "customerSnapshot",
    validate: (raw) => {
      if (raw === null) return { ok: false, reason: "null" };
      if (typeof raw !== "string") return { ok: false, reason: "not_string" };
      const v = raw.trim();
      if (v.length < 10 || v.length > 500) return { ok: false, reason: "length" };
      return { ok: true, value: v };
    }
  }
};

function buildPrompt(field: ProfileField, answerText: string): string {
  const spec = FIELD_SPECS[field];
  return `You are extracting a single structured field from a freeform learner answer to a Claude Mastery Program lesson deliverable.

Field: ${field} — ${spec.description}
Constraints: ${spec.constraints}
If the learner did not provide enough information to populate this field, return null. Do NOT invent values.

Learner's answer:
${answerText}

Return ONLY a JSON object: { "${field}": "..." } or { "${field}": null }
No preamble, no commentary, no code fences.`;
}

async function callExtractor(field: ProfileField, answerText: string): Promise<{
  raw: unknown;
  errorClass?: string;
}> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return { raw: null, errorClass: "no_api_key" };

  let resp: Response;
  try {
    resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: EXTRACTOR_MODEL,
        max_tokens: EXTRACTOR_MAX_TOKENS,
        messages: [{ role: "user", content: buildPrompt(field, answerText) }]
      })
    });
  } catch {
    return { raw: null, errorClass: "network_error" };
  }

  if (!resp.ok) {
    return { raw: null, errorClass: `http_${resp.status}` };
  }

  let body: { content?: { text?: string }[] };
  try {
    body = await resp.json();
  } catch {
    return { raw: null, errorClass: "json_parse_response" };
  }
  let text = body.content?.[0]?.text ?? "";
  text = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
  const m = text.match(/\{[\s\S]+\}/);
  if (!m) return { raw: null, errorClass: "no_json_in_response" };
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(m[0]);
  } catch {
    return { raw: null, errorClass: "json_parse_extract" };
  }
  if (!(field in parsed)) return { raw: null, errorClass: "field_missing" };
  return { raw: parsed[field] };
}

export async function extractProfileFieldsForLesson(
  lessonSlug: string,
  submissionText: string,
  userId: string
): Promise<{ fieldsExtracted: string[]; fieldsFailed: string[] }> {
  const fields = LESSON_FIELD_MAP[lessonSlug];
  if (!fields || fields.length === 0) {
    return { fieldsExtracted: [], fieldsFailed: [] };
  }

  const fieldsExtracted: string[] = [];
  const fieldsFailed: string[] = [];

  for (const field of fields) {
    const spec = FIELD_SPECS[field];
    let success = false;
    let extractedValue: string | null = null;
    let errorClass: string | null = null;

    try {
      const { raw, errorClass: callError } = await callExtractor(field, submissionText);
      if (callError) {
        errorClass = callError;
      } else {
        const validation = spec.validate(raw);
        if (!validation.ok) {
          errorClass = `invalid_${validation.reason}`;
        } else {
          const valueForDb = validation.value;
          const isJsonField = field === "weeklyTasks" || field === "goals";

          const existing = await db
            .select({ id: profiles.id })
            .from(profiles)
            .where(eq(profiles.userId, userId));

          if (existing.length === 0) {
            const insertVals: Record<string, unknown> = {
              userId,
              profileVersion: 1,
              [spec.column]: valueForDb
            };
            await db.insert(profiles).values(insertVals as typeof profiles.$inferInsert);
          } else {
            const setObj: Record<string, unknown> = {
              updatedAt: new Date(),
              profileVersion: sql`${profiles.profileVersion} + 1`,
              [spec.column]: valueForDb
            };
            await db.update(profiles).set(setObj).where(eq(profiles.userId, userId));
          }

          success = true;
          extractedValue = isJsonField
            ? JSON.stringify(valueForDb)
            : String(valueForDb);
        }
      }
    } catch (err) {
      errorClass = `unexpected_${err instanceof Error ? err.name : "error"}`;
    }

    try {
      await db.insert(profileExtractionLog).values({
        userId,
        lessonSlug,
        field,
        success,
        extractedValue,
        errorClass
      });
    } catch (logErr) {
      console.error("[extraction] log insert failed:", logErr);
    }

    if (success) fieldsExtracted.push(field);
    else fieldsFailed.push(field);
  }

  return { fieldsExtracted, fieldsFailed };
}

export function lessonExtractsFields(lessonSlug: string): boolean {
  return Boolean(LESSON_FIELD_MAP[lessonSlug]);
}

// Exported for the backfill script; allows updating profile fields ONLY when
// they're currently null (so we never overwrite a manually-edited value).
export async function extractProfileFieldsForLessonNullSafe(
  lessonSlug: string,
  submissionText: string,
  userId: string
): Promise<{ fieldsExtracted: string[]; fieldsFailed: string[]; fieldsSkipped: string[] }> {
  const fields = LESSON_FIELD_MAP[lessonSlug];
  if (!fields || fields.length === 0) {
    return { fieldsExtracted: [], fieldsFailed: [], fieldsSkipped: [] };
  }

  const fieldsExtracted: string[] = [];
  const fieldsFailed: string[] = [];
  const fieldsSkipped: string[] = [];

  // Check current profile state once
  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId));

  for (const field of fields) {
    const spec = FIELD_SPECS[field];
    const current = profile ? (profile as Record<string, unknown>)[spec.column] : null;
    if (current !== null && current !== undefined) {
      fieldsSkipped.push(field);
      continue;
    }

    let success = false;
    let extractedValue: string | null = null;
    let errorClass: string | null = null;

    try {
      const { raw, errorClass: callError } = await callExtractor(field, submissionText);
      if (callError) {
        errorClass = callError;
      } else {
        const validation = spec.validate(raw);
        if (!validation.ok) {
          errorClass = `invalid_${validation.reason}`;
        } else {
          const valueForDb = validation.value;
          const isJsonField = field === "weeklyTasks" || field === "goals";

          if (!profile) {
            const insertVals: Record<string, unknown> = {
              userId,
              profileVersion: 1,
              [spec.column]: valueForDb
            };
            await db.insert(profiles).values(insertVals as typeof profiles.$inferInsert);
          } else {
            const setObj: Record<string, unknown> = {
              updatedAt: new Date(),
              profileVersion: sql`${profiles.profileVersion} + 1`,
              [spec.column]: valueForDb
            };
            await db.update(profiles).set(setObj).where(eq(profiles.userId, userId));
          }

          success = true;
          extractedValue = isJsonField
            ? JSON.stringify(valueForDb)
            : String(valueForDb);
        }
      }
    } catch (err) {
      errorClass = `unexpected_${err instanceof Error ? err.name : "error"}`;
    }

    try {
      await db.insert(profileExtractionLog).values({
        userId,
        lessonSlug,
        field,
        success,
        extractedValue,
        errorClass
      });
    } catch (logErr) {
      console.error("[extraction] log insert failed:", logErr);
    }

    if (success) fieldsExtracted.push(field);
    else fieldsFailed.push(field);
  }

  return { fieldsExtracted, fieldsFailed, fieldsSkipped };
}
