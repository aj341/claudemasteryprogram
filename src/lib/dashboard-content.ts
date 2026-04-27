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

export const MODULE_1_LESSONS: LessonMeta[] = [
  { slug: "1.1-what-claude-is-and-what-it-isnt", number: "1.1", title: "What Claude actually is", blurb: "The honest version. What Claude is very good at, what it's bad at, where the edges are. No marketing — just what you need to know to use it well.", weekday: "Mon", estTime: "~ 15 min", graded: true, primer: true },
  { slug: "1.2-write-your-first-real-prompt", number: "1.2", title: "Write your first real prompt", blurb: "Compose a prompt for a real task from your business. Graded on clarity, context, and constraints. This is where grading begins.", weekday: "Tue", estTime: "~ 18 min", graded: true },
  { slug: "1.3-audit-your-current-ai-use", number: "1.3", title: "Audit your current AI use", blurb: "Map how and how well you're using AI right now. Captures your stack, comfort level, and tasks you've already tried.", weekday: "Wed", estTime: "~ 22 min", graded: true },
  { slug: "1.4-map-your-weekly-tasks", number: "1.4", title: "Map your weekly tasks", blurb: "Identify the highest-value tasks in your week that Claude can take a run at. Fed by what you captured in 1.3.", weekday: "Thu", estTime: "~ 20 min", graded: true },
  { slug: "1.5-your-business-context", number: "1.5", title: "Your business context", blurb: "Turn what you already know about your business into a context block Claude uses on every prompt from Module 02 forward.", weekday: "Fri", estTime: "~ 25 min", graded: true },
  { slug: "1.6-put-your-context-to-work", number: "1.6", title: "Module deliverable", blurb: "Combine everything from this week into a single working prompt for your business. Graded.", weekday: "Fri", estTime: "~ 30 min", graded: true }
];

export const MODULES = [
  { number: 1, slug: "01-claude-essentials", title: "Foundations", lessons: MODULE_1_LESSONS },
  { number: 2, slug: "02-prompt-engineering-fundamentals", title: "Prompt Engineering", lessons: [] as LessonMeta[] },
  { number: 3, slug: "03-practical-daily-applications", title: "Daily Applications", lessons: [] as LessonMeta[] },
  { number: 4, slug: "04-claude-projects-knowledge", title: "Projects & Knowledge", lessons: [] as LessonMeta[] },
  { number: 5, slug: "05-extended-capabilities", title: "Extended Capabilities", lessons: [] as LessonMeta[] },
  { number: 6, slug: "06-core-capstone", title: "Capstone", lessons: [] as LessonMeta[] }
];
