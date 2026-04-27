"use client";

import { useEffect, useMemo, useRef, useState, useTransition, type ReactNode } from "react";
import type { LessonPage } from "@/lib/lessons/1-1-content";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitAndGradeLesson1_1, type GradeResult } from "@/lib/grading-actions";

type Lesson = {
  slug: string;
  number: string;
  module: string;
  moduleTitle: string;
  title: string;
  lead: string;
  estTime: string;
  format: string;
  prerequisites: string;
  objectives: string[];
  passMark: number;
  rubric: { name: string; points: number; desc: string }[];
  deliverableBrief: string;
  deliverableSections: { num: number; title: string; desc: string; hint: string }[];
};

type Learner = { firstName: string; email: string; industry: string | null };

const MODULES = [
  {
    num: "01",
    title: "Claude Essentials",
    lessons: [
      { num: "1.1", name: "What is Claude AI?", slug: "1.1-what-claude-is-and-what-it-isnt", unlocked: true },
      { num: "1.2", name: "Write your first real prompt" },
      { num: "1.3", name: "Audit your current AI use" },
      { num: "1.4", name: "Map your weekly tasks" },
      { num: "1.5", name: "Your business context" },
      { num: "1.6", name: "Module deliverable" }
    ]
  },
  { num: "02", title: "Prompt Engineering Fundamentals", lessons: [] },
  { num: "03", title: "Practical Daily Applications", lessons: [] },
  { num: "04", title: "Claude Projects & Knowledge", lessons: [] },
  { num: "05", title: "Extended Capabilities", lessons: [] },
  { num: "06", title: "Core Capstone", lessons: [] }
];

const EXAMPLES = [
  { num: 1, scenario: "Financial adviser · Testing Claude's self-awareness about limitations", title: "Getting Claude to tell you where it's reliable — and where it isn't", prompt: "I'm a financial adviser in Australia. Before I start using Claude regularly for work, I need an honest answer about your limitations. Tell me:\n1. What your knowledge cutoff date is\n2. What kinds of financial information I should never rely on you for\n3. What kinds of information you ARE reliable for in my day-to-day advisory work\nBe direct and don't soften the limitations.", why: "It establishes who's asking and why, invites honesty explicitly, and asks numbered questions — which gets a structured, useful answer." },
  { num: 2, scenario: "Consultant · Comparing Claude to tools you've already used", title: "Getting an honest comparison without a sales pitch", prompt: "I've been using ChatGPT for about a year for business tasks — mainly writing emails, summarising reports, and drafting client proposals. I'm now testing Claude. Without making this a sales pitch for either tool, give me a straight list of where Claude is likely to perform differently to ChatGPT for business writing and document analysis. Include both where it might be better and where it might fall short.", why: "Asking for both better and worse keeps the response balanced and honest. \"Not a sales pitch\" pushes Claude toward useful comparison." },
  { num: 3, scenario: "GP clinic manager · Asking Claude to articulate risks in your context", title: "Getting calibrated advice on risk for a regulated environment", prompt: "I manage a GP clinic in regional Queensland. I want to use Claude for administrative work only: patient communication templates, internal policy documents, and staff rostering language. Before I start, tell me:\n- What could go wrong if I'm not careful\n- Which kinds of decisions I should never delegate to Claude without human review\n- Any specific considerations for a regulated healthcare setting\n\nI'm not planning to use Claude for clinical decisions — just admin.", why: "Asking Claude to articulate risks in a specific professional context gets genuinely useful, calibrated advice." },
  { num: 4, scenario: "Commercial property manager · Testing Claude on a real task immediately", title: "Getting Claude to write something for your actual business", prompt: "I run a small commercial property management firm. We manage around 30 commercial tenancies in Melbourne.\n\nA tenant submitted a maintenance request for a broken HVAC system 7 days ago. We're still waiting on a contractor quote. I need to send a holding email to the tenant — professional, honest about the delay, and keeping goodwill intact.\n\nWrite a draft. 150 words maximum.", why: "A real scenario with a specific word limit and a clear purpose. The word limit forces concision." },
  { num: 5, scenario: "Accounting practice · Understanding the no-memory behaviour", title: "Understanding the no-memory behaviour before it catches you", prompt: "I'm learning to use Claude for my accounting practice. I've heard that Claude doesn't remember previous conversations. Before I build any workflows around Claude, explain:\n1. Exactly what this means in practice\n2. What I should do to keep useful context available across sessions\n3. Whether there's a way to give Claude persistent context about my business\n\nKeep this practical.", why: "Numbered questions get structured answers. \"Keep it practical\" is an explicit constraint." }
];

const MIN_CHARS = 600;

export default function LessonShell({
  lesson,
  lessonPages,
  learner,
  priorSubmission,
  priorGrade
}: {
  lesson: Lesson;
  lessonPages: LessonPage[];
  learner: Learner;
  priorSubmission: string | null;
  priorGrade: { score: number; feedback: string; rubric: { label: string; score: number; max: number; tone?: "warn" | "danger" }[] } | null;
}) {
  const router = useRouter();
  const [submission, setSubmission] = useState(priorSubmission ?? "");
  const [grade, setGrade] = useState<GradeResult | null>(priorGrade ? { ok: true, scoreOverall: priorGrade.score, feedback: priorGrade.feedback, rubric: priorGrade.rubric } : null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [readingPct, setReadingPct] = useState(0);
  const [openModule, setOpenModule] = useState("01");
  const [pageIdx, setPageIdx] = useState(0);
  const [pageDir, setPageDir] = useState<"next" | "prev">("next");
  const totalPages = lessonPages.length;
  const currentPage = lessonPages[pageIdx];
  function goToPage(idx: number) {
    if (idx < 0 || idx >= totalPages) return;
    setPageDir(idx > pageIdx ? "next" : "prev");
    setPageIdx(idx);
    // Smooth-scroll to keep ebook in view
    const frame = document.querySelector(".reading-frame");
    if (frame) {
      const top = frame.getBoundingClientRect().top + window.scrollY - 80;
      if (window.scrollY > top + 100) window.scrollTo({ top, behavior: "smooth" });
    }
  }
  const submissionRef = useRef<HTMLTextAreaElement>(null);
  const gradeRef = useRef<HTMLDivElement>(null);

  const wordCount = submission.trim() === "" ? 0 : submission.trim().split(/\s+/).length;
  const charCount = submission.length;
  const canSubmit = charCount >= MIN_CHARS && !pending;

  // Reading progress bar
  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setReadingPct(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to grade when revealed
  useEffect(() => {
    if (grade?.ok && gradeRef.current) {
      setTimeout(() => gradeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [grade]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await submitAndGradeLesson1_1(fd);
      if (!result.ok) {
        setError(result.error ?? "Something went wrong.");
      } else {
        setGrade(result);
      }
    });
  }

  const initials = learner.firstName.slice(0, 2).toUpperCase();

  return (
    <div className="app-shell">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <Link href="/dashboard" className="sidebar-brand">
          <div className="brand-mark">CM</div>
          <div className="brand-text">
            <span className="brand-name">Claude Mastery</span>
            <span className="brand-sub">Core</span>
          </div>
        </Link>

        <div className="sidebar-progress">
          <div className="sidebar-progress-label">Course progress</div>
          <div className="sidebar-progress-bar">
            <div className="sidebar-progress-fill" style={{ width: priorGrade ? "3%" : "0%" }} />
          </div>
          <div className="sidebar-progress-stat">
            <strong>{priorGrade ? 1 : 0} of 34</strong> lessons complete
          </div>
        </div>

        <nav className="module-nav">
          {MODULES.map(m => {
            const open = openModule === m.num;
            const active = m.num === lesson.module;
            return (
              <div key={m.num} className={`module-group${active ? " active" : ""}${open ? " open" : ""}`}>
                <div className="module-header" onClick={() => setOpenModule(open ? "" : m.num)}>
                  <div className="module-num">{m.num}</div>
                  <div className="module-title-wrap">
                    <div className="module-title">{m.title}</div>
                    <div className="module-meta">{m.lessons.length || 6} lessons</div>
                  </div>
                  <svg className="module-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
                {open && m.lessons.length > 0 && (
                  <div className="lesson-list" style={{ maxHeight: 600 }}>
                    {m.lessons.map(l => {
                      const isActive = l.num === lesson.number;
                      const unlocked = (l as { unlocked?: boolean }).unlocked;
                      const slug = (l as { slug?: string }).slug;
                      const cls = `lesson-link${isActive ? " active" : ""}${unlocked ? "" : " locked"}`;
                      return slug && unlocked ? (
                        <Link key={l.num} href={`/lessons/${slug}`} className={cls}>
                          <span className="lesson-num">{l.num}</span>
                          <span className="lesson-name">{l.name}</span>
                        </Link>
                      ) : (
                        <span key={l.num} className={cls} aria-disabled="true">
                          <span className="lesson-num">{l.num}</span>
                          <span className="lesson-name">{l.name}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="avatar-circle">{initials}</div>
          <div className="avatar-info">
            <div className="avatar-name-text">{learner.firstName}</div>
            <div className="avatar-email">{learner.email}</div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <header className="top-bar">
          <div className="breadcrumb">
            <Link href="/dashboard" style={{ color: "var(--text-muted)" }}>Core</Link>
            <span className="sep">/</span>
            <span>Module {lesson.module} · {lesson.moduleTitle}</span>
            <span className="sep">/</span>
            <span className="current">Lesson {lesson.number}</span>
          </div>
          <div className="top-spacer" />
        </header>

        <div className="reading-progress">
          <div className="reading-progress-bar" style={{ width: `${readingPct}%` }} />
        </div>

        <div className="lesson-container">
          {/* HERO */}
          <div className="lesson-hero">
            <div className="lesson-eyebrow"><span className="dot" /> Module {lesson.module} · Lesson {lesson.number}</div>
            <h1 className="lesson-title">{lesson.title}</h1>
            <p className="lesson-lead">{lesson.lead}</p>
            <div className="lesson-meta-row">
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span className="label">Time</span>&nbsp;<span className="value">{lesson.estTime}</span>
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                <span className="label">Format</span>&nbsp;<span className="value">{lesson.format}</span>
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="label">Prerequisites</span>&nbsp;<span className="value">{lesson.prerequisites}</span>
              </div>
            </div>
          </div>

          {/* OBJECTIVES */}
          <div className="objectives-card">
            <div className="objectives-kicker">What you&apos;ll be able to do</div>
            <h2 className="objectives-title">By the end of this lesson</h2>
            <ul className="objectives-list">
              {lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </div>

          {/* EBOOK READER */}
          <section className="reading-frame">
            <div className="reading-frame-meta">
              <span className="reading-frame-chip">Flipbook Edition</span>
              <span className="reading-frame-line" />
              <span className="reading-frame-page">Page {pageIdx + 1}</span>
            </div>

            <div className="ebook-toolbar">
              <div className="ebook-toolbar-copy">
                <span className="ebook-toolbar-label">Turn the page</span>
                <p className="ebook-toolbar-sub">Read this lesson in a paged book view. Use the arrows below.</p>
              </div>
              <div className="ebook-controls">
                <button type="button" className="ebook-nav-btn" onClick={() => goToPage(pageIdx - 1)} disabled={pageIdx === 0} aria-label="Previous page">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <div className="ebook-page-status">Page {pageIdx + 1} of {totalPages}</div>
                <button type="button" className="ebook-nav-btn" onClick={() => goToPage(pageIdx + 1)} disabled={pageIdx === totalPages - 1} aria-label="Next page">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>

            <div className="ebook-book">
              <div className="ebook-stage">
                <article key={pageIdx} className={`ebook-page${pageDir === "prev" ? " is-prev" : ""}`}>
                  <div className="ebook-page-head">
                    <div className="ebook-page-kicker">{currentPage.kicker}</div>
                    <div className="ebook-page-title">{currentPage.title}</div>
                  </div>
                  <div className="ebook-page-body">{currentPage.body}</div>
                  <div className="ebook-page-foot">
                    <span>Claude Mastery</span>
                    <span>Page {pageIdx + 1}</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="ebook-progress" aria-label="Page navigation">
              {lessonPages.map((_, i) => (
                <button key={i} type="button" className={`ebook-progress-dot${i === pageIdx ? " active" : ""}`} onClick={() => goToPage(i)} aria-label={`Go to page ${i + 1}`} />
              ))}
            </div>
          </section>

          {/* WORKED EXAMPLES */}
          <div className="section-divider">
            <span className="line" />
            <span className="label">Worked examples</span>
            <span className="line" />
          </div>

          <h2 className="section-heading">Five prompts that get useful answers</h2>
          <p className="section-sub">Each example shows a real scenario, the actual prompt, and why it works.</p>

          {EXAMPLES.map(ex => (
            <div key={ex.num} className="example-card">
              <div className="example-header">
                <span className="example-num-chip">Example {ex.num}</span>
                <span className="example-scenario">{ex.scenario}</span>
              </div>
              <div className="example-title">{ex.title}</div>
              <div className="example-prompt">{ex.prompt}</div>
              <div className="example-why"><strong>Why it works:</strong> {ex.why}</div>
            </div>
          ))}

          {/* DELIVERABLE */}
          <div className="section-divider">
            <span className="line" />
            <span className="label">Graded deliverable</span>
            <span className="line" />
          </div>

          <div className="deliverable-card">
            <div className="deliverable-kicker">Your turn</div>
            <h2 className="deliverable-title">Your first Claude comparison</h2>
            <p className="deliverable-brief">{lesson.deliverableBrief}</p>

            <div className="deliverable-spec">
              <div className="spec-card"><div className="spec-label">Pass mark</div><div className="spec-value">{lesson.passMark} / 100</div></div>
              <div className="spec-card"><div className="spec-label">Feedback</div><div className="spec-value">~ 30 seconds</div></div>
              <div className="spec-card"><div className="spec-label">Resubmit</div><div className="spec-value">Up to 2 times</div></div>
              <div className="spec-card"><div className="spec-label">Rubric</div><div className="spec-value">4 × 25 pts</div></div>
            </div>

            <div className="deliverable-sections-title">What to submit</div>
            <ul className="deliverable-sections">
              {lesson.deliverableSections.map(s => (
                <li key={s.num} className="deliverable-section-item">
                  <div className="deliverable-section-num">{s.num}</div>
                  <div>
                    <div className="deliverable-section-title">{s.title}</div>
                    <div className="deliverable-section-desc">{s.desc} <em>{s.hint}</em></div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rubric-box">
              <div className="rubric-head">
                <div className="rubric-title">How this gets graded</div>
                <div className="rubric-pass">Pass at <strong>{lesson.passMark}/100</strong></div>
              </div>
              <div className="rubric-list">
                {lesson.rubric.map(r => (
                  <div key={r.name} className="rubric-item">
                    <div className="rubric-item-name">{r.name}<span className="pts">{r.points}</span></div>
                    <div className="rubric-item-desc">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {error && <div className="auth-error" style={{ marginBottom: 16 }}>{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="submission-wrap">
                <div className="submission-label">
                  <span className="label-dot" />
                  Your submission
                </div>
                <textarea
                  ref={submissionRef}
                  name="submission"
                  className="submission-input"
                  value={submission}
                  onChange={e => setSubmission(e.target.value)}
                  placeholder="Paste or type your three sections here.&#10;&#10;1. Your current AI tool use (2-4 sentences)&#10;&#10;2. How Claude differs from what you've used (250-400 words)&#10;&#10;3. Three specific applications in your actual work (3 applications, 3-4 sentences each)"
                  disabled={pending}
                />
                <div className="submission-foot">
                  <div className="submission-stats">
                    <span>Words: <span className="stat-value">{wordCount}</span></span>
                    <span>Characters: <span className="stat-value">{charCount}</span></span>
                    <span className={charCount >= MIN_CHARS ? "stat-ok" : "stat-warn"}>
                      {charCount >= MIN_CHARS ? "Ready to submit" : `${MIN_CHARS - charCount} more chars`}
                    </span>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
                    {pending ? (
                      <>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "spin 1s linear infinite" }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Grading… ~30s
                      </>
                    ) : (
                      <>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                        {priorGrade ? "Resubmit for grading" : "Submit for grading"}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* GRADE DISPLAY */}
          {grade?.ok && (
            <div ref={gradeRef} className="grade-display">
              <div className="grade-display-head">
                <div>
                  <div className="grade-display-title">Your grade</div>
                  <div className="grade-display-sub">Graded by Claude · {grade.scoreOverall! >= lesson.passMark ? "Passed" : "Did not pass — try a resubmit"}</div>
                </div>
                <div className="grade-big">
                  <div className="grade-big-num">{grade.scoreOverall}</div>
                  <div className="grade-big-denom">/ 100</div>
                </div>
              </div>

              <div className="grade-display-feedback">{grade.feedback}</div>

              <div className="grade-rubric">
                {grade.rubric?.map(row => {
                  const pct = (row.score / row.max) * 100;
                  return (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <div className="rubric-row-head">
                        <span className="rubric-row-label">{row.label}</span>
                        <span className="rubric-row-score">{row.score} / {row.max}</span>
                      </div>
                      <div className="rubric-row-bar">
                        <div className={`rubric-row-fill${row.tone ? " " + row.tone : ""}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
                <button onClick={() => router.push("/dashboard")} className="btn btn-primary">
                  Continue to dashboard →
                </button>
                <button
                  onClick={() => {
                    setGrade(null);
                    submissionRef.current?.focus();
                    submissionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="btn btn-outline"
                >
                  Edit and resubmit
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <style>{`@keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
