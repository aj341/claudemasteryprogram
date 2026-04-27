-- W4-T15: Stripe webhook idempotency / audit log
-- Every Stripe webhook event we receive is logged here. The route handler
-- looks up by stripe_event_id before re-processing to stay idempotent, and
-- this table doubles as an audit trail for reconciliation.

CREATE TABLE IF NOT EXISTS "stripe_events" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "stripe_event_id" text NOT NULL,
  "type" text NOT NULL,
  "payload" jsonb NOT NULL,
  "received_at" timestamp DEFAULT now() NOT NULL,
  "processed_at" timestamp,
  "processing_error" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "stripe_events_event_id_idx" ON "stripe_events" ("stripe_event_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "stripe_events_type_idx" ON "stripe_events" ("type");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "stripe_events_unprocessed_idx" ON "stripe_events" ("received_at") WHERE "processed_at" IS NULL;
