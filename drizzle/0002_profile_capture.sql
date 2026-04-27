-- W1-T03c: invisible profile field capture from lesson 1.1-1.4 submissions.
-- profile_version: bumped any time any personalisation-relevant profiles
-- field changes; variant caches downstream invalidate when this advances.
ALTER TABLE "profiles" ADD COLUMN IF NOT EXISTS "profile_version" integer DEFAULT 1 NOT NULL;
--> statement-breakpoint
-- profile_extraction_log: per-attempt audit of Claude-driven extraction so we
-- can debug bad rewordings, track success rate, and surface "captured from
-- Lesson X.Y" annotations on the profile edit page.
CREATE TABLE IF NOT EXISTS "profile_extraction_log" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "lesson_slug" text NOT NULL,
  "field" text NOT NULL,
  "success" boolean NOT NULL,
  "extracted_value" text,
  "error_class" text,
  "ts" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "profile_extraction_log_user_field_idx" ON "profile_extraction_log" ("user_id", "field", "ts" DESC);
