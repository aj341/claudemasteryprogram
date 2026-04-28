import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { db } from "@/db";
import { profiles, lessonSubmissions, grades } from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { LESSON_1_1, LESSON_1_1_PAGES, type LessonPage } from "@/lib/lessons/1-1-content";
import LessonShell from "@/components/lesson/LessonShell";
import LessonView, { type LessonViewData, type ModuleNavItem } from "@/components/lesson/LessonView";
import { getLessonBySlug, listAllLessons, getModuleTitle, pickExamplesForIndustry, type PersonalisationProfile } from "@/lib/lessons";
import { normaliseIndustry } from "@/lib/industries";

const HARDCODED_1_1_SLUG = "1.1-what-claude-is-and-what-it-isnt";

function buildModuleNav(currentSlug: string, completedSlugs: Set<string>): ModuleNavItem[] {
  const all = listAllLessons();
  const byModule = new Map<string, ModuleNavItem>();

  for (const l of all) {
    if (!byModule.has(l.module)) {
      byModule.set(l.module, {
        module: l.module,
        moduleSlug: l.moduleSlug,
        moduleTitle: getModuleTitle(l.module),
        lessons: []
      });
    }
    // Unlock rule for v1: every lesson is reachable so users can navigate.
    // Lesson 1.1 is the active starting point; once a lesson is completed, subsequent
    // lessons stay accessible. (Cohort gating can be layered on later.)
    const isCurrent = l.slug === currentSlug;
    const isCompleted = completedSlugs.has(l.slug);
    const unlocked = isCurrent || isCompleted || true; // open access in v1
    byModule.get(l.module)!.lessons.push({
      number: l.number,
      title: l.title,
      slug: l.slug,
      unlocked
    });
  }

  return Array.from(byModule.values()).sort((a, b) => a.module.localeCompare(b.module));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (lesson) return { title: `${lesson.title} — Claude Mastery` };
  if (slug === LESSON_1_1.slug) return { title: `${LESSON_1_1.title} — Claude Mastery` };
  return { title: "Lesson — Claude Mastery" };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const userId = session.user.id;
  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, userId));
  // W1-T03: gate — deep links into a lesson before onboarding bounce to /onboarding
  if (!profile?.onboardingComplete) redirect("/onboarding");
  const fullName = profile?.fullName ?? session.user.name ?? "";
  const firstName = (fullName || session.user.email!.split("@")[0]).split(" ")[0];

  // W1-T03c: profile object handed to getLessonBySlug so it can pick the
  // industry variant from content/lessons-personalised/ and run token
  // substitution against the learner's actual data.
  const personalisationProfile: PersonalisationProfile = {
    firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
    industry: profile?.industry ?? null,
    businessName: profile?.businessName ?? null,
    weeklyTasks: (profile?.weeklyTasks as string[] | null) ?? null,
    goals: (profile?.goals as string[] | null) ?? null,
    brandVoice: profile?.brandVoice ?? null,
    productsServices: profile?.productsServices ?? null,
    customerSnapshot: profile?.customerSnapshot ?? null
  };

  // Check existing submission/grade for this lesson
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
      const lessonForRubric = getLessonBySlug(slug);
      const rubricSrc = lessonForRubric?.deliverable?.rubric ?? LESSON_1_1.rubric.map(r => ({ name: r.name, points: r.points, desc: r.desc }));
      priorGrade = {
        score: g.scoreOverall ?? 0,
        feedback: g.feedback ?? "",
        rubric: rubricSrc.map(r => {
          const key = r.name.toLowerCase().replace(/[^a-z0-9]+/g, "_");
          const score = breakdown[key] ?? 0;
          const max = r.points;
          const pct = score / max;
          return {
            label: r.name,
            score,
            max,
            tone: pct < 0.6 ? "danger" as const : pct < 0.75 ? "warn" as const : undefined
          };
        })
      };
    }
  }

  // Pull the user's completed lesson set (for module-nav locked state and progress count)
  const completedRows = await db
    .select({ slug: lessonSubmissions.lessonSlug, status: lessonSubmissions.status })
    .from(lessonSubmissions)
    .where(eq(lessonSubmissions.userId, userId));
  const completedSlugs = new Set(completedRows.filter(r => r.status === "graded").map(r => r.slug));
  const completedCount = completedSlugs.size;

  const learner = {
    firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
    email: session.user.email!,
    industry: profile?.industry ?? null
  };

  // -------- Lesson 1.1 — keep using the polished hardcoded path. --------
  // This preserves the exact pixel-perfect ebook reader / submission UX that
  // shipped previously, while every other lesson renders via the generic
  // markdown loader. If for any reason the hardcoded source goes missing
  // we fall back to the markdown path.
  if (slug === HARDCODED_1_1_SLUG) {
    // W1-T03: hardcoded 1.1 path uses the same personalisation filter as the
    // generic loader. We read the .md file's parsed examples + personalisation
    // config so the hardcoded React content stays in sync with the .md source.
    const sourceLesson = getLessonBySlug(HARDCODED_1_1_SLUG, personalisationProfile);
    const learnerIndustryShell = normaliseIndustry(profile?.industry ?? null);
    const filteredShellExamples = sourceLesson
      ? pickExamplesForIndustry(sourceLesson.examples, sourceLesson.personalisation, learnerIndustryShell)
      : [];
    const tunedShellLabel = sourceLesson?.personalisation?.mode === "industry-personalised" && learnerIndustryShell
      ? learnerIndustryShell
      : null;
    // W1-T03c: if the variant markdown has parsed pages, use those instead of
    // the hardcoded LESSON_1_1_PAGES so the learner sees their industry's body.
    // Falls back to LESSON_1_1_PAGES when variant pages can't be derived.
    const variantPages: LessonPage[] | null = sourceLesson && sourceLesson.body?.pages?.length
      ? sourceLesson.body.pages.map(p => ({
          kicker: p.kicker,
          title: p.title,
          body: <div dangerouslySetInnerHTML={{ __html: p.html }} />
        }))
      : null;
    return (
      <LessonShell
        lesson={LESSON_1_1}
        lessonPages={variantPages ?? LESSON_1_1_PAGES}
        learner={learner}
        priorSubmission={existingSubmission?.responses ? (existingSubmission.responses as Record<string, string>) : null}
        priorGrade={priorGrade}
        personalisedExamples={filteredShellExamples}
        tunedForLabel={tunedShellLabel}
      />
    );
  }

  // -------- All other lessons render from markdown via the generic loader. --------
  const lesson = getLessonBySlug(slug, personalisationProfile);
  if (!lesson) notFound();

  // W1-T03: industry personalisation. Filter examples down to the one that
  // matches the learner's industry (or default_index) before rendering. For
  // keep-all and no-config lessons this is a no-op pass-through.
  const learnerIndustry = normaliseIndustry(profile?.industry ?? null);
  const filteredExamples = pickExamplesForIndustry(lesson.examples, lesson.personalisation, learnerIndustry);
  const tunedForLabel = lesson.personalisation?.mode === "industry-personalised" && learnerIndustry
    ? learnerIndustry
    : null;

  const lessonViewData: LessonViewData = {
    slug: lesson.slug,
    module: lesson.module,
    moduleTitle: lesson.moduleTitle,
    number: lesson.number,
    title: lesson.title,
    lead: lesson.lead,
    estimatedMinutes: lesson.estimatedMinutes,
    format: lesson.format,
    prerequisites: lesson.prerequisites,
    objectives: lesson.objectives,
    body: lesson.body,
    examples: filteredExamples,
    workedExamplesContent: lesson.workedExamplesContent,
    tunedForLabel,
    deliverable: lesson.deliverable
      ? {
          title: lesson.deliverable.title,
          brief: lesson.deliverable.brief,
          sections: lesson.deliverable.sections,
          rubric: lesson.deliverable.rubric,
          passMark: lesson.deliverable.passMark
        }
      : null
  };

  const modules = buildModuleNav(slug, completedSlugs);
  const priorSubmission = existingSubmission?.responses
    ? (existingSubmission.responses as Record<string, string>)
    : null;

  return (
    <LessonView
      lesson={lessonViewData}
      modules={modules}
      learner={learner}
      completedCount={completedCount}
      priorSubmission={priorSubmission}
      priorGrade={priorGrade}
    />
  );
}
