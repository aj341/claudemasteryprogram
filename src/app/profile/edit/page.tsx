import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { profiles, profileExtractionLog } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
import ProfileEditForm from "./ProfileEditForm";

// W1-T03c: Profile edit page. Lets the learner see and override the 6 fields
// captured invisibly via lesson 1.1-1.4 deliverables (plus three onboarding
// fields that round out the picture). Annotations show which lesson surfaced
// each value, so it's clear what came from extraction vs manual entry.

export const metadata = { title: "Your profile — Claude Mastery" };

const FIELDS_FROM_EXTRACTION = [
  "businessName",
  "weeklyTasks",
  "goals",
  "brandVoice",
  "productsServices",
  "customerSnapshot"
] as const;

export default async function ProfileEditPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const userId = session.user.id;

  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId));

  // Look up the last successful extraction per field so we can annotate the
  // form with "Captured from Lesson X.Y on YYYY-MM-DD". Single roundtrip — we
  // pull all successful logs for this user then group in memory.
  const logs = await db
    .select()
    .from(profileExtractionLog)
    .where(and(eq(profileExtractionLog.userId, userId), eq(profileExtractionLog.success, true)))
    .orderBy(desc(profileExtractionLog.ts));

  const captureSource: Partial<Record<(typeof FIELDS_FROM_EXTRACTION)[number], { lessonSlug: string; ts: Date }>> = {};
  for (const log of logs) {
    if (!FIELDS_FROM_EXTRACTION.includes(log.field as (typeof FIELDS_FROM_EXTRACTION)[number])) continue;
    const f = log.field as (typeof FIELDS_FROM_EXTRACTION)[number];
    if (!captureSource[f]) {
      captureSource[f] = { lessonSlug: log.lessonSlug, ts: log.ts };
    }
  }

  // If a captured value has been overwritten manually since extraction (i.e.
  // profile.updatedAt > log.ts), drop the annotation.
  if (profile?.updatedAt) {
    for (const f of FIELDS_FROM_EXTRACTION) {
      const src = captureSource[f];
      if (src && profile.updatedAt > src.ts) {
        // updatedAt is a row-level timestamp; we can't be sure which field
        // changed, so we keep the annotation as long as the log is at least
        // 5 seconds before updatedAt, which separates extraction-time updates
        // from manual edits.
        const drift = profile.updatedAt.getTime() - src.ts.getTime();
        if (drift > 5_000) {
          delete captureSource[f];
        }
      }
    }
  }

  // Serialise capture source dates so they cross the server/client boundary.
  const captureSourceForClient: Record<string, { lessonSlug: string; ts: string }> = {};
  for (const [k, v] of Object.entries(captureSource)) {
    if (v) captureSourceForClient[k] = { lessonSlug: v.lessonSlug, ts: v.ts.toISOString() };
  }

  const initial = {
    businessName: profile?.businessName ?? "",
    productsServices: profile?.productsServices ?? "",
    customerSnapshot: profile?.customerSnapshot ?? "",
    brandVoice: profile?.brandVoice ?? "",
    weeklyTasks: Array.isArray(profile?.weeklyTasks)
      ? (profile?.weeklyTasks as string[]).join("\n")
      : "",
    goals: Array.isArray(profile?.goals) ? (profile?.goals as string[]).join("\n") : ""
  };

  return (
    <ProfileEditForm
      initial={initial}
      captureSource={captureSourceForClient}
      learnerEmail={session.user.email ?? ""}
    />
  );
}
