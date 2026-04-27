import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { db } from "@/db";
import { profiles, lessonSubmissions, grades } from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { LESSON_1_1, LESSON_1_1_PAGES } from "@/lib/lessons/1-1-content";
import LessonShell from "@/components/lesson/LessonShell";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === LESSON_1_1.slug) {
    return { title: `${LESSON_1_1.title} — Claude Mastery` };
  }
  return { title: "Lesson — Claude Mastery" };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  // Only lesson 1.1 is implemented for now
  if (slug !== LESSON_1_1.slug) notFound();

  const userId = session.user.id;
  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, userId));

  // Load any existing submission + most recent grade
  const [existingSubmission] = await db
    .select()
    .from(lessonSubmissions)
    .where(and(eq(lessonSubmissions.userId, userId), eq(lessonSubmissions.lessonSlug, slug)));

  let priorGrade: { score: number; feedback: string; rubric: { label: string; score: number; max: number; tone?: "warn" | "danger" }[] } | null = null;
  if (existingSubmission?.status === "graded") {
    const [g] = await db
      .select()
      .from(grades)
      .where(eq(grades.submissionId, existingSubmission.id))
      .orderBy(desc(grades.createdAt))
      .limit(1);
    if (g) {
      const breakdown = (g.scoreBreakdown ?? {}) as Record<string, number>;
      priorGrade = {
        score: g.scoreOverall ?? 0,
        feedback: g.feedback ?? "",
        rubric: LESSON_1_1.rubric.map(r => {
          const key = r.name.toLowerCase().replace(/[^a-z0-9]+/g, "_");
          const score = breakdown[key] ?? 0;
          const pct = score / 25;
          return {
            label: r.name,
            score,
            max: 25,
            tone: pct < 0.6 ? "danger" as const : pct < 0.75 ? "warn" as const : undefined
          };
        })
      };
    }
  }

  const fullName = profile?.fullName ?? session.user.name ?? "";
  const firstName = (fullName || session.user.email!.split("@")[0]).split(" ")[0];

  return (
    <LessonShell
      lesson={LESSON_1_1}
      lessonPages={LESSON_1_1_PAGES}
      learner={{
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        email: session.user.email!,
        industry: profile?.industry ?? null
      }}
      priorSubmission={existingSubmission?.responses ? (existingSubmission.responses as Record<string, string>) : null}
      priorGrade={priorGrade}
    />
  );
}
