// W1-T03c: One-time backfill — re-runs extraction over any existing
// lesson_submissions for lessons 1.1, 1.2, 1.3, 1.4. Only updates fields
// that are currently null on the learner's profile. Logs every attempt.

import "dotenv/config";
import { db } from "@/db";
import { lessonSubmissions } from "@/db/schema";
import { inArray, eq } from "drizzle-orm";
import { extractProfileFieldsForLessonNullSafe } from "@/services/profile-extraction";

const TARGET_LESSONS = [
  "1.1-what-claude-is-and-what-it-isnt",
  "1.2-write-your-first-real-prompt",
  "1.3-audit-your-current-ai-use",
  "1.4-map-your-weekly-tasks"
];

async function main() {
  console.log("[backfill] looking for submissions in:", TARGET_LESSONS);
  const rows = await db
    .select()
    .from(lessonSubmissions)
    .where(inArray(lessonSubmissions.lessonSlug, TARGET_LESSONS));

  console.log(`[backfill] found ${rows.length} submission(s) to process`);

  let total = { extracted: 0, failed: 0, skipped: 0 };
  for (const row of rows) {
    const text = row.promptUsed ?? "";
    if (!text || text.length < 30) {
      console.log(`[backfill] skipping ${row.id} (${row.lessonSlug}) — empty submissionText`);
      continue;
    }
    console.log(`[backfill] processing ${row.id} (${row.lessonSlug}) for user ${row.userId}…`);
    const r = await extractProfileFieldsForLessonNullSafe(row.lessonSlug, text, row.userId);
    console.log("  extracted:", r.fieldsExtracted, "failed:", r.fieldsFailed, "skipped:", r.fieldsSkipped);
    total.extracted += r.fieldsExtracted.length;
    total.failed += r.fieldsFailed.length;
    total.skipped += r.fieldsSkipped.length;
  }

  console.log("\n[backfill] complete:", total);
  process.exit(0);
}

main().catch(err => {
  console.error("[backfill] error:", err);
  process.exit(1);
});
