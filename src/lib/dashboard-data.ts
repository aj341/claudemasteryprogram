import { db } from "@/db";
import { profiles, enrolments, lessonSubmissions, grades } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";

export type DashboardData = {
  userId: string;
  email: string;
  firstName: string;
  fullName: string;
  industry: string | null;
  profileExists: boolean;
  onboardingComplete: boolean;
  enrolment: {
    tier: "core" | "pro" | "elite";
    status: string;
    cohort: string | null;
  } | null;
  completedCount: number;
  avgGrade: number | null;
  streakDays: number;
  latestGrade: {
    lessonSlug: string;
    lessonTitle: string;
    score: number;
    feedback: string;
    rubric: { label: string; score: number; max: number; tone?: "warn" | "danger" }[];
    gradedAtRelative: string;
  } | null;
  state: "day1" | "week2";
};

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
    streakDays: 0, // TODO: derive from submission timestamps once W2-T07 lands
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
  return slug
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function humanizeLessonSlug(slug: string) {
  if (!slug) return "Lesson";
  // e.g. "1.2-write-your-first-real-prompt" -> "Write your first real prompt"
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

// Static curriculum (until W1-T03 ships dynamic lesson loading)
export type LessonMeta = {
  slug: string;
  number: string; // "1.1"
  title: string;
  blurb: string;
  weekday: string;
  estTime: string;
  graded: boolean;
  primer?: boolean;
};

export const MODULE_1_LESSONS: LessonMeta[] = [
  { slug: "1.1-what-claude-is-and-what-it-isnt", number: "1.1", title: "What Claude actually is", blurb: "The honest version. What Claude is very good at, what it's bad at, where the edges are. No marketing — just what you need to know to use it well.", weekday: "Mon", estTime: "~ 15 min", graded: false, primer: true },
  { slug: "1.2-write-your-first-real-prompt", number: "1.2", title: "Write your first real prompt", blurb: "Compose a prompt for a real task from your business. Graded on clarity, context, and constraints. This is where grading begins.", weekday: "Tue", estTime: "~ 18 min", graded: true },
  { slug: "1.3-audit-your-current-ai-use", number: "1.3", title: "Audit your current AI use", blurb: "Map how and how well you're using AI right now. Captures your stack, comfort level, and tasks you've already tried.", weekday: "Wed", estTime: "~ 22 min", graded: true },
  { slug: "1.4-map-your-weekly-tasks", number: "1.4", title: "Map your weekly tasks", blurb: "Identify the highest-value tasks in your week that Claude can take a run at. Fed by what you captured in 1.3.", weekday: "Thu", estTime: "~ 20 min", graded: true },
  { slug: "1.5-your-business-context", number: "1.5", title: "Your business context", blurb: "Turn what you already know about your business into a context block Claude uses on every prompt from Module 02 forward.", weekday: "Fri", estTime: "~ 25 min", graded: true },
  { slug: "1.6-put-your-context-to-work", number: "1.6", title: "Module deliverable", blurb: "Combine everything from this week into a single working prompt for your business. Graded.", weekday: "Fri", estTime: "~ 30 min", graded: true }
];

export const MODULES = [
  { number: 1, slug: "01-claude-essentials", title: "Foundations", lessons: MODULE_1_LESSONS },
  { number: 2, slug: "02-prompt-engineering-fundamentals", title: "Prompt Engineering", lessons: [] },
  { number: 3, slug: "03-practical-daily-applications", title: "Daily Applications", lessons: [] },
  { number: 4, slug: "04-claude-projects-knowledge", title: "Projects & Knowledge", lessons: [] },
  { number: 5, slug: "05-extended-capabilities", title: "Extended Capabilities", lessons: [] },
  { number: 6, slug: "06-core-capstone", title: "Capstone", lessons: [] }
];
