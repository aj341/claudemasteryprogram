"use client";

import { useState } from "react";
import Link from "next/link";

type EnrolmentRow = {
  id: string;
  tier: "core" | "pro" | "elite";
  status: string;
  cohort: string | null;
};

type ProfileRow = {
  fullName: string | null;
  businessName: string | null;
  industry: string | null;
  onboardingComplete: boolean;
} | null;

type Module = {
  slug: string;
  number: number;
  title: string;
  description: string;
  lessons: { slug: string; number: string; title: string }[];
};

const MODULES: Module[] = [
  {
    slug: "01-claude-essentials",
    number: 1,
    title: "Claude Essentials",
    description: "Foundation week — what Claude is, how to talk to it, mapping your business context.",
    lessons: [
      { slug: "1.1-what-claude-is-and-what-it-isnt", number: "1.1", title: "What Claude is and what it isn't" },
      { slug: "1.2-write-your-first-real-prompt", number: "1.2", title: "Write your first real prompt" },
      { slug: "1.3-audit-your-current-ai-use", number: "1.3", title: "Audit your current AI use" },
      { slug: "1.4-map-your-weekly-tasks", number: "1.4", title: "Map your weekly tasks" },
      { slug: "1.5-your-business-context", number: "1.5", title: "Your business context" },
      { slug: "1.6-put-your-context-to-work", number: "1.6", title: "Put your context to work" }
    ]
  },
  {
    slug: "02-prompt-engineering-fundamentals",
    number: 2,
    title: "Prompt Engineering Fundamentals",
    description: "The four levers of every great prompt. Goal, context, format, examples.",
    lessons: [
      { slug: "2.1", number: "2.1", title: "The anatomy of a great prompt" },
      { slug: "2.2", number: "2.2", title: "Setting the right context" },
      { slug: "2.3", number: "2.3", title: "Format and structure" },
      { slug: "2.4", number: "2.4", title: "Examples that teach Claude your style" },
      { slug: "2.5", number: "2.5", title: "Iterating without starting over" },
      { slug: "2.6", number: "2.6", title: "Library of reusable prompts" }
    ]
  },
  {
    slug: "03-practical-daily-applications",
    number: 3,
    title: "Practical Daily Applications",
    description: "Real workflows — email, content, customer responses, analysis, decisions.",
    lessons: [
      { slug: "3.1", number: "3.1", title: "Email and inbox automation" },
      { slug: "3.2", number: "3.2", title: "Content creation in your voice" },
      { slug: "3.3", number: "3.3", title: "Customer responses at scale" },
      { slug: "3.4", number: "3.4", title: "Analysis and decision support" },
      { slug: "3.5", number: "3.5", title: "Meetings, notes, and follow-ups" },
      { slug: "3.6", number: "3.6", title: "Building your daily AI rhythm" }
    ]
  },
  {
    slug: "04-claude-projects-knowledge",
    number: 4,
    title: "Claude Projects & Knowledge",
    description: "Persistent context — Projects, knowledge bases, and reusable assets.",
    lessons: [
      { slug: "4.1", number: "4.1", title: "What Projects are for" },
      { slug: "4.2", number: "4.2", title: "Designing your first Project" },
      { slug: "4.3", number: "4.3", title: "Curating Project knowledge" },
      { slug: "4.4", number: "4.4", title: "Project instructions that scale" },
      { slug: "4.5", number: "4.5", title: "Sharing and team Projects" },
      { slug: "4.6", number: "4.6", title: "Maintaining Projects over time" }
    ]
  },
  {
    slug: "05-extended-capabilities",
    number: 5,
    title: "Extended Capabilities",
    description: "Skills, MCPs, computer use, scheduled tasks — the power features.",
    lessons: [
      { slug: "5.1", number: "5.1", title: "Skills — packaged expertise" },
      { slug: "5.2", number: "5.2", title: "MCPs and connectors" },
      { slug: "5.3", number: "5.3", title: "Files and document workflows" },
      { slug: "5.4", number: "5.4", title: "Scheduled and automated tasks" },
      { slug: "5.5", number: "5.5", title: "Computer use and browser tools" },
      { slug: "5.6", number: "5.6", title: "Putting it all together" }
    ]
  },
  {
    slug: "06-core-capstone",
    number: 6,
    title: "Core Capstone",
    description: "Your final project — design, build, evaluate, present a real AI workflow.",
    lessons: [
      { slug: "6.1", number: "6.1", title: "Capstone — design phase" },
      { slug: "6.2", number: "6.2", title: "Capstone — implementation" },
      { slug: "6.3", number: "6.3", title: "Capstone — evaluation and impact" },
      { slug: "6.4", number: "6.4", title: "Capstone — presentation and next steps" }
    ]
  }
];

const LAUNCH_DATE = new Date("2026-06-01T00:00:00+10:00");

function daysUntilLaunch() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function DashboardShell({
  user,
  profile,
  enrolments,
  signOutAction
}: {
  user: { name: string | null; email: string; image: string | null };
  profile: ProfileRow;
  enrolments: EnrolmentRow[];
  signOutAction: () => Promise<void>;
}) {
  const [openModule, setOpenModule] = useState<string | null>("01-claude-essentials");
  const days = daysUntilLaunch();
  const isPresale = enrolments.some((e) => e.status === "presale");
  const firstName = (user.name ?? "").split(" ")[0] || "there";

  return (
    <div className="min-h-screen bg-[var(--bg-alt)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--border)] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--dark)] text-white flex items-center justify-center text-sm font-bold">
              CM
            </div>
            <div>
              <div className="text-[15px] font-bold leading-tight">Claude Mastery</div>
              <div className="text-xs text-[var(--text-muted)]">by Commercial Growth</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/account" className="text-sm text-[var(--text-body)] hover:text-[var(--text)]">
              Account
            </Link>
            <form action={signOutAction}>
              <button type="submit" className="text-sm text-[var(--text-body)] hover:text-[var(--text)]">
                Sign out
              </button>
            </form>
            <div className="w-9 h-9 rounded-full bg-[var(--blue)] text-[var(--dark)] flex items-center justify-center text-sm font-bold">
              {(firstName[0] || "U").toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {firstName}.</h1>
          <p className="text-[var(--text-body)]">
            {isPresale && days > 0
              ? `Your cohort starts in ${days} day${days === 1 ? "" : "s"} — June 1, 2026. We'll email you the morning of launch.`
              : "Pick up where you left off."}
          </p>
        </div>

        {/* Status cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="card">
            <div className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-2">Enrolment</div>
            <div className="text-2xl font-bold capitalize">
              {enrolments[0]?.tier ?? "—"} {enrolments[0]?.status === "presale" ? "(pre-sale)" : ""}
            </div>
            <div className="text-sm text-[var(--text-body)] mt-2">
              {enrolments[0]?.cohort ? `Cohort ${enrolments[0].cohort}` : "Cohort 2026-06-01"}
            </div>
          </div>
          <div className="card">
            <div className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-2">Progress</div>
            <div className="text-2xl font-bold">0 / 34</div>
            <div className="text-sm text-[var(--text-body)] mt-2">Lessons unlock on launch day.</div>
          </div>
          <div className="card">
            <div className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-2">Profile</div>
            <div className="text-2xl font-bold">
              {profile?.onboardingComplete ? "Complete" : "Incomplete"}
            </div>
            <Link href="/account/profile" className="text-sm text-[var(--blue-dark)] mt-2 inline-block">
              {profile?.onboardingComplete ? "Update business context →" : "Finish onboarding →"}
            </Link>
          </div>
        </div>

        {/* Curriculum */}
        <h2 className="text-xl font-bold mb-4">Curriculum</h2>
        <div className="space-y-3">
          {MODULES.map((m) => {
            const open = openModule === m.slug;
            return (
              <div key={m.slug} className="card !p-0 overflow-hidden">
                <button
                  onClick={() => setOpenModule(open ? null : m.slug)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--bg-alt)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--blue-pale)] text-[var(--blue-dark)] flex items-center justify-center font-bold">
                      {m.number}
                    </div>
                    <div>
                      <div className="font-semibold">{m.title}</div>
                      <div className="text-sm text-[var(--text-muted)]">{m.description}</div>
                    </div>
                  </div>
                  <span className="text-[var(--text-muted)] text-sm">{open ? "▾" : "▸"}</span>
                </button>
                {open && (
                  <div className="border-t border-[var(--border)]">
                    {m.lessons.map((l) => (
                      <div
                        key={l.slug}
                        className="px-6 py-3 flex items-center justify-between border-b border-[var(--border)] last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[var(--text-muted)] w-10">{l.number}</span>
                          <span className="text-sm">{l.title}</span>
                        </div>
                        <span className="text-xs text-[var(--text-dim)] inline-flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          Locked until June 1
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[var(--text-dim)] mt-12">
          Commercial Growth Pty Ltd · ABN 72 671 869 298
        </p>
      </main>
    </div>
  );
}
