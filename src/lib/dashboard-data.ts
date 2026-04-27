import "server-only";

import { db } from "@/db";
import { profiles, enrolments, lessonSubmissions, grades } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
import type { DashboardData } from "./dashboard-content";

export async function getDashboardData(userId: string, email: string, name?: string | null): Promise<DashboardData> {
  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, userId));
  const [enrolment] = await db.select().from(enrolments).where(eq(enrolments.userId, userId));

  const submissions = await db
    .select()
    .from(lessonSubmissions)
    .where(and(eq(lessonSubmissions.userId, userId), eq(lessonSubmissions.status, "graded")));

  const completedCount = submissions.length;

  const userGrades = await db
    .select()
    .from(grades)
    .where(eq(grades.userId, userId))
    .orderBy(desc(grades.createdAt))
    .limit(10);

  const avgGrade =
    userGrades.length > 0
      ? Math.round(userGrades.reduce((sum, g) => sum + (g.scoreOverall ?? 0), 0) / userGrades.length)
      : null;

  const latest = userGrades[0] ?? null;
  const latestGrade = latest
    ? {
        lessonSlug: submissions.find((s) => s.id === latest.submissionId)?.lessonSlug ?? "",
        lessonTitle: humanizeLessonSlug(submissions.find((s) => s.id === latest.submissionId)?.lessonSlug ?? ""),
        score: latest.scoreOverall ?? 0,
        feedback: latest.feedback ?? "",
        rubric: parseRubric(latest.scoreBreakdown),
        gradedAtRelative: relativeTime(latest.createdAt)
      }
    : null;

  const fullName = profile?.fullName ?? name ?? "";
  const firstName = (fullName || email.split("@")[0]).split(" ")[0];

  return {
    userId,
    email,
    firstName: capitalize(firstName),
    fullName,
    industry: profile?.industry ?? null,
    profileExists: !!profile,
    onboardingComplete: profile?.onboardingComplete ?? false,
    enrolment: enrolment
      ? { tier: enrolment.tier, status: enrolment.status, cohort: enrolment.cohort ?? null }
      : null,
    completedCount,
    avgGrade,
    streakDays: 0,
    latestGrade,
    state: completedCount === 0 ? "day1" : "week2"
  };
}

function parseRubric(breakdown: unknown): { label: string; score: number; max: number; tone?: "warn" | "danger" }[] {
  if (!breakdown || typeof breakdown !== "object") return [];
  const obj = breakdown as Record<string, number>;
  return Object.entries(obj).map(([label, score]) => {
    const pct = (score / 25) * 100;
    return {
      label: prettyLabel(label),
      score,
      max: 25,
      tone: pct < 60 ? "danger" : pct < 75 ? "warn" : undefined
    };
  });
}

function prettyLabel(slug: string) {
  return slug.replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function humanizeLessonSlug(slug: string) {
  if (!slug) return "Lesson";
  const cleaned = slug.replace(/^\d+\.\d+-/, "").replace(/-/g, " ");
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function relativeTime(date: Date) {
  const diff = Date.now() - date.getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}d ago`;
  return date.toLocaleDateString();
}

function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
