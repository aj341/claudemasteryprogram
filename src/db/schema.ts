import {
  pgTable,
  text,
  timestamp,
  integer,
  boolean,
  jsonb,
  primaryKey,
  uuid,
  pgEnum,
  uniqueIndex
} from "drizzle-orm/pg-core";

// Auth.js core tables (compatible with @auth/drizzle-adapter)
export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull()
});

export const accounts = pgTable(
  "accounts",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state")
  },
  (account) => ({
    pk: primaryKey({ columns: [account.provider, account.providerAccountId] })
  })
);

export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull()
});

export const verificationTokens = pgTable(
  "verificationTokens",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull()
  },
  (vt) => ({
    pk: primaryKey({ columns: [vt.identifier, vt.token] })
  })
);

// Domain tables
export const tierEnum = pgEnum("tier", ["core", "pro", "elite"]);
export const enrolmentStatusEnum = pgEnum("enrolment_status", [
  "presale",
  "active",
  "paused",
  "completed",
  "refunded"
]);
export const submissionStatusEnum = pgEnum("submission_status", [
  "draft",
  "submitted",
  "graded",
  "needs_revision"
]);

// Profiles — captured during onboarding for personalisation engine
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  fullName: text("full_name"),
  businessName: text("business_name"),
  industry: text("industry"),
  role: text("role"),
  teamSize: text("team_size"),
  currentAiUse: text("current_ai_use"),
  weeklyTasks: jsonb("weekly_tasks"), // array of task strings
  goals: jsonb("goals"), // array
  brandVoice: text("brand_voice"),
  productsServices: text("products_services"),
  customerSnapshot: text("customer_snapshot"),
  onboardingComplete: boolean("onboarding_complete").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Enrolments — one per user per cohort/tier
export const enrolments = pgTable(
  "enrolments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    tier: tierEnum("tier").notNull().default("core"),
    status: enrolmentStatusEnum("status").notNull().default("presale"),
    cohort: text("cohort"), // e.g. "2026-06-01"
    stripeCustomerId: text("stripe_customer_id"),
    stripeSubscriptionId: text("stripe_subscription_id"),
    stripePaymentIntentId: text("stripe_payment_intent_id"),
    amountPaidCents: integer("amount_paid_cents"),
    currency: text("currency").default("AUD"),
    accessGrantedAt: timestamp("access_granted_at"),
    expiresAt: timestamp("expires_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (t) => ({
    userTierIdx: uniqueIndex("enrolments_user_tier_idx").on(t.userId, t.tier)
  })
);

// Lesson submissions — student response per lesson
export const lessonSubmissions = pgTable(
  "lesson_submissions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonSlug: text("lesson_slug").notNull(), // e.g. "1.1-what-claude-is-and-what-it-isnt"
    moduleSlug: text("module_slug").notNull(), // e.g. "01-claude-essentials"
    responses: jsonb("responses").notNull(), // map of field id -> response text
    promptUsed: text("prompt_used"), // optional final prompt the student wrote
    aiOutputSnapshot: text("ai_output_snapshot"), // optional sample output
    status: submissionStatusEnum("status").notNull().default("draft"),
    submittedAt: timestamp("submitted_at"),
    timeSpentSeconds: integer("time_spent_seconds"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (t) => ({
    userLessonIdx: uniqueIndex("lesson_submissions_user_lesson_idx").on(t.userId, t.lessonSlug)
  })
);

// Grades — Claude-graded feedback on each submission
export const grades = pgTable("grades", {
  id: uuid("id").primaryKey().defaultRandom(),
  submissionId: uuid("submission_id")
    .notNull()
    .references(() => lessonSubmissions.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  scoreOverall: integer("score_overall"), // 0-100
  scoreBreakdown: jsonb("score_breakdown"), // { specificity: 18, structure: 15, ... }
  feedback: text("feedback"), // markdown feedback
  strengths: jsonb("strengths"), // array of strings
  improvements: jsonb("improvements"), // array of strings
  exemplarPrompt: text("exemplar_prompt"), // a stronger version of their prompt
  graderModel: text("grader_model"), // e.g. "claude-sonnet-4-6"
  graderTokensIn: integer("grader_tokens_in"),
  graderTokensOut: integer("grader_tokens_out"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
