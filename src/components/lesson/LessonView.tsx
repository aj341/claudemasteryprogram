"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitAndGradeLesson, type GradeResult } from "@/lib/grading-actions";

// ----- Types matching what /lib/lessons.ts produces -----

type RubricItem = { name: string; points: number; desc: string };
type DeliverableSection = {
  num: number;
  title: string;
  desc: string;
  hint: string;
  minWords: number | null;
  maxWords: number | null;
};
type Deliverable = {
  title: string;
  brief: string;
  sections: DeliverableSection[];
  rubric: RubricItem[];
  passMark: number;
};
type LessonPage = { kicker: string; title: string; html: string };
type Example = { num: number; scenario: string; title: string; prompt: string; why: string };

export type LessonViewData = {
  slug: string;
  module: string;
  moduleTitle: string;
  number: string;
  title: string;
  lead: string;
  estimatedMinutes: string;
  format: string;
  prerequisites: string[];
  objectives: string[];
  body: { pages: LessonPage[] };
  examples: Example[];
  deliverable: Deliverable | null;
};

export type ModuleNavItem = {
  module: string;
  moduleSlug: string;
  moduleTitle: string;
  lessons: { number: string; title: string; slug: string; unlocked: boolean }[];
};

type Learner = { firstName: string; email: string; industry: string | null };

type PriorGrade = {
  score: number;
  feedback: string;
  rubric: { label: string; score: number; max: number; tone?: "warn" | "danger" }[];
};

export default function LessonView({
  lesson,
  modules,
  learner,
  completedCount,
  priorSubmission,
  priorGrade
}: {
  lesson: LessonViewData;
  modules: ModuleNavItem[];
  learner: Learner;
  completedCount: number;
  priorSubmission: Record<string, string> | null;
  priorGrade: PriorGrade | null;
}) {
  const router = useRouter();
  const sections = lesson.deliverable?.sections ?? [];

  // One state per question — keyed by section.num as q1, q2, ...
  const seedAnswer = (num: number) =>
    priorSubmission && typeof priorSubmission === "object"
      ? priorSubmission[`q${num}`] ?? ""
      : "";

  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    const init: Record<number, string> = {};
    for (const s of sections) init[s.num] = seedAnswer(s.num);
    return init;
  });

  const [grade, setGrade] = useState<GradeResult | null>(
    priorGrade
      ? { ok: true, scoreOverall: priorGrade.score, feedback: priorGrade.feedback, rubric: priorGrade.rubric }
      : null
  );
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [readingPct, setReadingPct] = useState(0);
  const [openModule, setOpenModule] = useState(lesson.module);
  const [pageIdx, setPageIdx] = useState(0);
  const [pageDir, setPageDir] = useState<"next" | "prev">("next");
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchActive = useRef(false);
  const gradeRef = useRef<HTMLDivElement>(null);

  const pages = lesson.body.pages;
  const totalPages = pages.length;
  const currentPage = pages[pageIdx];

  function goToPage(idx: number) {
    if (idx < 0 || idx >= totalPages) return;
    setPageDir(idx > pageIdx ? "next" : "prev");
    setPageIdx(idx);
    const frame = document.querySelector(".reading-frame");
    if (frame) {
      const top = frame.getBoundingClientRect().top + window.scrollY - 80;
      if (window.scrollY > top + 100) window.scrollTo({ top, behavior: "smooth" });
    }
  }

  const SWIPE_THRESHOLD = 50;
  const SWIPE_RESTRAINT = 80;
  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    const t = e.changedTouches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    touchActive.current = true;
  }
  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (!touchActive.current || touchStartX.current === null || touchStartY.current === null) return;
    touchActive.current = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;
    if (Math.abs(dy) > SWIPE_RESTRAINT) return;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (dx < 0) goToPage(pageIdx + 1);
    else goToPage(pageIdx - 1);
  }

  function countWords(s: string): number {
    const t = s.trim();
    return t === "" ? 0 : t.split(/\s+/).length;
  }

  // Per-question state
  const wordCounts: Record<number, number> = {};
  const wordOk: Record<number, boolean> = {};
  for (const sec of sections) {
    const wc = countWords(answers[sec.num] ?? "");
    wordCounts[sec.num] = wc;
    wordOk[sec.num] = sec.minWords === null ? wc > 0 : wc >= sec.minWords;
  }
  const allOk = sections.length === 0 ? false : sections.every(s => wordOk[s.num]);
  const canSubmit = allOk && !pending && !!lesson.deliverable;
  const failingSections = sections.filter(s => !wordOk[s.num]).map(s => `Q${s.num}`);

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

  useEffect(() => {
    if (grade?.ok && gradeRef.current) {
      setTimeout(() => gradeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [grade]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    fd.set("__lessonSlug", lesson.slug);
    startTransition(async () => {
      const result = await submitAndGradeLesson(lesson.slug, fd);
      if (!result.ok) setError(result.error ?? "Something went wrong.");
      else setGrade(result);
    });
  }

  const initials = learner.firstName.slice(0, 2).toUpperCase();
  const passMark = lesson.deliverable?.passMark ?? 70;
  const rubric = lesson.deliverable?.rubric ?? [];
  const rubricPointsTotal = rubric.reduce((sum, r) => sum + r.points, 0) || 100;
  const rubricBoxLine = `${rubric.length} × ${rubric.length ? Math.round(rubricPointsTotal / rubric.length) : 25} pts`;

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
            <div className="sidebar-progress-fill" style={{ width: `${Math.min(100, (completedCount / 34) * 100)}%` }} />
          </div>
          <div className="sidebar-progress-stat">
            <strong>{completedCount} of 34</strong> lessons complete
          </div>
        </div>

        <nav className="module-nav">
          {modules.map(m => {
            const open = openModule === m.module;
            const active = m.module === lesson.module;
            return (
              <div key={m.module} className={`module-group${active ? " active" : ""}${open ? " open" : ""}`}>
                <div className="module-header" onClick={() => setOpenModule(open ? "" : m.module)}>
                  <div className="module-num">{m.module}</div>
                  <div className="module-title-wrap">
                    <div className="module-title">{m.moduleTitle}</div>
                    <div className="module-meta">{m.lessons.length} lessons</div>
                  </div>
                  <svg className="module-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
                {open && m.lessons.length > 0 && (
                  <div className="lesson-list" style={{ maxHeight: 600 }}>
                    {m.lessons.map(l => {
                      const isActive = l.number === lesson.number;
                      const cls = `lesson-link${isActive ? " active" : ""}${l.unlocked ? "" : " locked"}`;
                      return l.unlocked ? (
                        <Link key={l.number} href={`/lessons/${l.slug}`} className={cls}>
                          <span className="lesson-num">{l.number}</span>
                          <span className="lesson-name">{l.title}</span>
                        </Link>
                      ) : (
                        <span key={l.number} className={cls} aria-disabled="true">
                          <span className="lesson-num">{l.number}</span>
                          <span className="lesson-name">{l.title}</span>
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
                <span className="label">Time</span>&nbsp;<span className="value">{lesson.estimatedMinutes}</span>
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                <span className="label">Format</span>&nbsp;<span className="value">{lesson.format}</span>
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="label">Prerequisites</span>&nbsp;<span className="value">{lesson.prerequisites.length ? lesson.prerequisites.join("; ") : "None"}</span>
              </div>
            </div>
          </div>

          {/* OBJECTIVES */}
          {lesson.objectives.length > 0 && (
            <div className="objectives-card">
              <div className="objectives-kicker">What you&apos;ll be able to do</div>
              <h2 className="objectives-title">By the end of this lesson</h2>
              <ul className="objectives-list">
                {lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>
          )}

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
                <p className="ebook-toolbar-sub">Read this lesson in a paged book view. Navigation controls are below the page.</p>
              </div>
              <div className="ebook-page-status">Page {pageIdx + 1} of {totalPages}</div>
            </div>

            <div className="ebook-book" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="ebook-stage">
                <article key={pageIdx} className={`ebook-page${pageDir === "prev" ? " is-prev" : ""}`}>
                  <div className="ebook-page-head">
                    <div className="ebook-page-kicker">{currentPage.kicker}</div>
                    <div className="ebook-page-title">{currentPage.title}</div>
                  </div>
                  <div className="ebook-page-body" dangerouslySetInnerHTML={{ __html: currentPage.html }} />
                  <div className="ebook-page-foot">
                    <span>Claude Mastery</span>
                    <span>Page {pageIdx + 1}</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="ebook-controls-bottom">
              <button type="button" className="ebook-nav-btn" onClick={() => goToPage(pageIdx - 1)} disabled={pageIdx === 0} aria-label="Previous page">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                <span>Previous</span>
              </button>
              <div className="ebook-page-status">Page {pageIdx + 1} of {totalPages}</div>
              <button type="button" className="ebook-nav-btn ebook-nav-btn-primary" onClick={() => goToPage(pageIdx + 1)} disabled={pageIdx === totalPages - 1} aria-label="Next page">
                <span>{pageIdx === totalPages - 1 ? "Finished" : "Next"}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>

            <div className="ebook-progress" aria-label="Page navigation">
              {pages.map((_, i) => (
                <button key={i} type="button" className={`ebook-progress-dot${i === pageIdx ? " active" : ""}`} onClick={() => goToPage(i)} aria-label={`Go to page ${i + 1}`} />
              ))}
            </div>
          </section>

          {/* WORKED EXAMPLES */}
          {lesson.examples.length > 0 && (
            <>
              <div className="section-divider">
                <span className="line" />
                <span className="label">Worked examples</span>
                <span className="line" />
              </div>
              <h2 className="section-heading">{lesson.examples.length} prompts that get useful answers</h2>
              <p className="section-sub">Each example shows a real scenario, the actual prompt, and why it works.</p>
              {lesson.examples.map(ex => (
                <div key={ex.num} className="example-card">
                  <div className="example-header">
                    <span className="example-num-chip">Example {ex.num}</span>
                    <span className="example-scenario">{ex.scenario}</span>
                  </div>
                  <div className="example-title">{ex.title}</div>
                  {ex.prompt && <div className="example-prompt">{ex.prompt}</div>}
                  {ex.why && <div className="example-why"><strong>Why it works:</strong> {ex.why}</div>}
                </div>
              ))}
            </>
          )}

          {/* DELIVERABLE */}
          {lesson.deliverable && (
            <>
              <div className="section-divider">
                <span className="line" />
                <span className="label">Graded deliverable</span>
                <span className="line" />
              </div>

              <div className="deliverable-card">
                <div className="deliverable-kicker">Your turn</div>
                <h2 className="deliverable-title">{lesson.deliverable.title}</h2>
                <p className="deliverable-brief">{lesson.deliverable.brief}</p>

                <div className="deliverable-spec">
                  <div className="spec-card"><div className="spec-label">Pass mark</div><div className="spec-value">{passMark} / 100</div></div>
                  <div className="spec-card"><div className="spec-label">Feedback</div><div className="spec-value">~ 30 seconds</div></div>
                  <div className="spec-card"><div className="spec-label">Resubmit</div><div className="spec-value">Up to 2 times</div></div>
                  <div className="spec-card"><div className="spec-label">Rubric</div><div className="spec-value">{rubricBoxLine}</div></div>
                </div>

                <div className="deliverable-sections-title">What to submit</div>
                <ul className="deliverable-sections">
                  {sections.map(s => (
                    <li key={s.num} className="deliverable-section-item">
                      <div className="deliverable-section-num">{s.num}</div>
                      <div>
                        <div className="deliverable-section-title">{s.title}</div>
                        <div className="deliverable-section-desc">
                          {s.desc}
                          {s.minWords !== null && s.maxWords !== null ? <em> {s.minWords}–{s.maxWords} words.</em> : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="rubric-box">
                  <div className="rubric-head">
                    <div className="rubric-title">How this gets graded</div>
                    <div className="rubric-pass">Pass at <strong>{passMark}/100</strong></div>
                  </div>
                  <div className="rubric-list">
                    {rubric.map(r => (
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
                      Your submission · {sections.length} question{sections.length === 1 ? "" : "s"}
                    </div>

                    {sections.map(sec => {
                      const wc = wordCounts[sec.num];
                      const ok = wordOk[sec.num];
                      const min = sec.minWords;
                      const max = sec.maxWords;
                      let statusText: string;
                      if (min === null) {
                        statusText = wc > 0 ? "✓" : "Add your answer";
                      } else if (!ok) {
                        statusText = `${min - wc} more to reach min`;
                      } else if (max !== null && wc > max) {
                        statusText = `${wc - max} over the cap`;
                      } else {
                        statusText = "✓ in range";
                      }
                      return (
                        <div key={sec.num} className="q-field">
                          <div className="q-field-head">
                            <span className="q-field-num">{sec.num}</span>
                            <div>
                              <div className="q-field-title">{sec.title}</div>
                              <div className="q-field-hint">
                                {sec.desc}
                                {min !== null && max !== null ? <> <strong>{min}–{max} words.</strong></> : null}
                              </div>
                            </div>
                          </div>
                          <textarea
                            name={`q${sec.num}`}
                            className="submission-input"
                            rows={Math.max(6, Math.min(12, Math.round((max ?? 200) / 25)))}
                            value={answers[sec.num] ?? ""}
                            onChange={e => setAnswers(a => ({ ...a, [sec.num]: e.target.value }))}
                            placeholder=""
                            disabled={pending}
                          />
                          <div className="q-field-foot">
                            <span className={ok ? "stat-ok" : "stat-warn"}>
                              {wc} word{wc === 1 ? "" : "s"} · {statusText}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    <div className="submission-foot">
                      <div className="submission-stats">
                        <span className={canSubmit ? "stat-ok" : "stat-warn"}>
                          {canSubmit
                            ? `All ${sections.length} question${sections.length === 1 ? "" : "s"} ready — submit for grading`
                            : `${failingSections.join(", ")} below word count`}
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
            </>
          )}

          {/* GRADE DISPLAY */}
          {grade?.ok && (
            <div ref={gradeRef} className="grade-display">
              <div className="grade-display-head">
                <div>
                  <div className="grade-display-title">Your grade</div>
                  <div className="grade-display-sub">Graded by Claude · {grade.scoreOverall! >= passMark ? "Passed" : "Did not pass — try a resubmit"}</div>
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
                    const firstField = document.querySelector('textarea[name="q1"]') as HTMLTextAreaElement | null;
                    firstField?.focus();
                    firstField?.scrollIntoView({ behavior: "smooth", block: "center" });
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
