// CLIENT-SAFE: pure data + types. No imports from db/, no server-only code.
// Both server and client components can import from here.

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

export type LessonMeta = {
  slug: string;
  number: string;
  title: string;
  blurb: string;
  weekday: string;
  estTime: string;
  graded: boolean;
  primer?: boolean;
};

// Module 1 — hand-curated blurbs for the dashboard cards.
// Slugs match the canonical filenames under content/lessons/01-claude-essentials/.
export const MODULE_1_LESSONS: LessonMeta[] = [
  { slug: "1.1-what-claude-is-and-what-it-isnt", number: "1.1", title: "What Claude actually is", blurb: "The honest version. What Claude is very good at, what it's bad at, where the edges are. No marketing — just what you need to know to use it well.", weekday: "Mon", estTime: "~ 15 min", graded: true, primer: true },
  { slug: "1.2-write-your-first-real-prompt", number: "1.2", title: "Write your first real prompt", blurb: "Compose a prompt for a real task from your business. Graded on clarity, context, and constraints. This is where grading begins.", weekday: "Tue", estTime: "~ 18 min", graded: true },
  { slug: "1.3-audit-your-current-ai-use", number: "1.3", title: "Audit your current AI use", blurb: "Map how and how well you're using AI right now. Captures your stack, comfort level, and tasks you've already tried.", weekday: "Wed", estTime: "~ 22 min", graded: true },
  { slug: "1.4-map-your-weekly-tasks", number: "1.4", title: "Map your weekly tasks", blurb: "Identify the highest-value tasks in your week that Claude can take a run at. Fed by what you captured in 1.3.", weekday: "Thu", estTime: "~ 20 min", graded: true },
  { slug: "1.5-your-business-context", number: "1.5", title: "Your business context", blurb: "Turn what you already know about your business into a context block Claude uses on every prompt from Module 02 forward.", weekday: "Fri", estTime: "~ 25 min", graded: true },
  { slug: "1.6-put-your-context-to-work", number: "1.6", title: "Module deliverable", blurb: "Combine everything from this week into a single working prompt for your business. Graded.", weekday: "Fri", estTime: "~ 30 min", graded: true }
];

// Light-touch lesson lists for Modules 2–6 — slugs come from the actual markdown filenames.
// The dashboard renders Module 1 as the active week; later modules show as locked teasers
// until a cohort reaches them. Keep titles short (the markdown holds the canonical long titles).
export const MODULE_2_LESSONS: LessonMeta[] = [
  { slug: "2.1-the-anatomy-of-an-effective-prompt", number: "2.1", title: "Anatomy of an effective prompt", blurb: "Role, Context, Task, Format — the four building blocks every prompt needs.", weekday: "Mon", estTime: "~ 25 min", graded: true },
  { slug: "2.2-context-and-clarity-saying-what-you-mean", number: "2.2", title: "Context and clarity", blurb: "Saying what you mean — the precision principle applied in practice.", weekday: "Tue", estTime: "~ 30 min", graded: true },
  { slug: "2.3-prompt-templates-and-reusable-patterns", number: "2.3", title: "Prompt templates & reusable patterns", blurb: "Templates that compound — patterns you'll use weekly.", weekday: "Wed", estTime: "~ 25 min", graded: true },
  { slug: "2.4-advanced-prompt-techniques", number: "2.4", title: "Advanced prompt techniques", blurb: "Chain-of-thought, few-shot, role play — when each one earns its keep.", weekday: "Thu", estTime: "~ 20 min", graded: true },
  { slug: "2.5-testing-evaluating-and-iterating", number: "2.5", title: "Testing, evaluating and iterating", blurb: "How to know whether a prompt is actually working.", weekday: "Fri", estTime: "~ 25 min", graded: true },
  { slug: "2.6-prompt-engineering-for-your-business", number: "2.6", title: "Prompt engineering for your business", blurb: "Capstone for Module 02 — your own working prompt library.", weekday: "Fri", estTime: "~ 30 min", graded: true }
];

export const MODULE_3_LESSONS: LessonMeta[] = [
  { slug: "3.1-writing-with-claude-from-ideas-to-finished-drafts", number: "3.1", title: "Writing with Claude", blurb: "From ideas to finished drafts — Claude as a writing partner.", weekday: "Mon", estTime: "~ 30 min", graded: true },
  { slug: "3.2-research-and-analysis-with-claude", number: "3.2", title: "Research and analysis", blurb: "Distil long documents and reports into decisions.", weekday: "Tue", estTime: "~ 30 min", graded: true },
  { slug: "3.3-problem-solving-and-decision-making", number: "3.3", title: "Problem-solving & decision making", blurb: "Claude as a thinking tool — structuring messy problems.", weekday: "Wed", estTime: "~ 25 min", graded: true },
  { slug: "3.4-learning-and-explanation", number: "3.4", title: "Learning and explanation", blurb: "Get Claude to explain anything in plain language.", weekday: "Thu", estTime: "~ 25 min", graded: true },
  { slug: "3.5-time-management-and-workflow-integration", number: "3.5", title: "Time management & workflow", blurb: "Integrate Claude into your weekly cadence without breaking it.", weekday: "Fri", estTime: "~ 20 min", graded: true },
  { slug: "3.6-practical-applications-capstone", number: "3.6", title: "Practical applications capstone", blurb: "Capstone — apply the module to a real workflow you do every week.", weekday: "Fri", estTime: "~ 30 min", graded: true }
];

export const MODULE_4_LESSONS: LessonMeta[] = [
  { slug: "4.1-introduction-to-claude-projects", number: "4.1", title: "Introduction to Claude Projects", blurb: "What Projects are and why they change how you work.", weekday: "Mon", estTime: "~ 25 min", graded: true },
  { slug: "4.2-building-your-first-project", number: "4.2", title: "Building your first project", blurb: "Set up a Project end-to-end with custom instructions and knowledge.", weekday: "Tue", estTime: "~ 30 min", graded: true },
  { slug: "4.3-knowledge-management-and-document-organization", number: "4.3", title: "Knowledge management", blurb: "How to organise documents inside a Project so Claude actually uses them.", weekday: "Wed", estTime: "~ 25 min", graded: true },
  { slug: "4.4-project-based-workflows-and-systems", number: "4.4", title: "Project-based workflows", blurb: "Turn a Project into a repeatable system.", weekday: "Thu", estTime: "~ 30 min", graded: true },
  { slug: "4.5-advanced-project-features-and-integration", number: "4.5", title: "Advanced project features", blurb: "Integration patterns and edge cases.", weekday: "Fri", estTime: "~ 25 min", graded: true },
  { slug: "4.6-projects-capstone-building-your-project-system", number: "4.6", title: "Projects capstone", blurb: "Build a Project system you'll actually use this quarter.", weekday: "Fri", estTime: "~ 30 min", graded: true }
];

export const MODULE_5_LESSONS: LessonMeta[] = [
  { slug: "5.1-vision-capabilities-analyzing-images-and-documents", number: "5.1", title: "Vision capabilities", blurb: "Analyse images, screenshots, scanned documents.", weekday: "Mon", estTime: "~ 25 min", graded: true },
  { slug: "5.2-working-with-files-and-complex-documents", number: "5.2", title: "Working with files", blurb: "Long PDFs, spreadsheets, and structured data.", weekday: "Tue", estTime: "~ 30 min", graded: true },
  { slug: "5.3-introduction-to-claude-api-and-automation", number: "5.3", title: "Claude API & automation", blurb: "What's available beyond the chat box.", weekday: "Wed", estTime: "~ 25 min", graded: true },
  { slug: "5.4-emerging-features-and-staying-current", number: "5.4", title: "Emerging features", blurb: "Stay current without chasing every release.", weekday: "Thu", estTime: "~ 20 min", graded: true },
  { slug: "5.5-evaluating-extended-capabilities-vs-basic-features", number: "5.5", title: "Extended vs basic features", blurb: "When to reach for the heavy machinery.", weekday: "Fri", estTime: "~ 25 min", graded: true },
  { slug: "5.6-extended-capabilities-capstone", number: "5.6", title: "Extended capabilities capstone", blurb: "Capstone — apply at least two extended capabilities to a real task.", weekday: "Fri", estTime: "~ 30 min", graded: true }
];

export const MODULE_6_LESSONS: LessonMeta[] = [
  { slug: "6.1-capstone-project-design-phase", number: "6.1", title: "Capstone — Design", blurb: "Design document for the capstone project.", weekday: "Mon", estTime: "~ 45 min", graded: true },
  { slug: "6.2-capstone-project-implementation-phase", number: "6.2", title: "Capstone — Implementation", blurb: "Build the capstone project itself.", weekday: "Wed", estTime: "~ 60 min", graded: true },
  { slug: "6.3-capstone-project-evaluation-and-impact", number: "6.3", title: "Capstone — Evaluation", blurb: "Measure whether it worked.", weekday: "Thu", estTime: "~ 45 min", graded: true },
  { slug: "6.4-capstone-project-presentation-and-next-steps", number: "6.4", title: "Capstone — Presentation", blurb: "Present what you built and what's next.", weekday: "Fri", estTime: "~ 45 min", graded: true }
];

export const MODULES = [
  { number: 1, slug: "01-claude-essentials", title: "Foundations", lessons: MODULE_1_LESSONS },
  { number: 2, slug: "02-prompt-engineering-fundamentals", title: "Prompt Engineering", lessons: MODULE_2_LESSONS },
  { number: 3, slug: "03-practical-daily-applications", title: "Daily Applications", lessons: MODULE_3_LESSONS },
  { number: 4, slug: "04-claude-projects-knowledge", title: "Projects & Knowledge", lessons: MODULE_4_LESSONS },
  { number: 5, slug: "05-extended-capabilities", title: "Extended Capabilities", lessons: MODULE_5_LESSONS },
  { number: 6, slug: "06-core-capstone", title: "Capstone", lessons: MODULE_6_LESSONS }
];
