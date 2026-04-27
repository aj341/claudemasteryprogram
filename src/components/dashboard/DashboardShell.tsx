"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import type { DashboardData } from "@/lib/dashboard-content";
import { MODULE_1_LESSONS } from "@/lib/dashboard-content";
import { updateProfileAction } from "@/lib/profile-actions";

const INDUSTRIES = [
  "Agency / Consulting",
  "Accounting / Bookkeeping",
  "Trades & Services",
  "Retail / E-commerce",
  "Health & Wellness",
  "Real estate",
  "Legal",
  "Education / Training",
  "Hospitality",
  "Other"
];

const LAUNCH_DATE = new Date("2026-06-01T09:00:00+10:00");
const LAUNCH_DATE_STR = "Mon, 1 Jun"; // fixed string — avoids server/client locale/timezone hydration mismatch
function computeDaysUntilLaunch() {
  return Math.max(0, Math.ceil((LAUNCH_DATE.getTime() - Date.now()) / 86400000));
}

export default function DashboardShell({
  data,
  signOutAction
}: {
  data: DashboardData;
  signOutAction: () => Promise<void>;
}) {
  const state = data.state; // "day1" | "week2" — auto-derived from completedCount
  const firstName = data.firstName || "there";
  const industry = data.industry || "your industry";
  const initials = firstName.slice(0, 2).toUpperCase();
  const cohort = data.enrolment?.cohort ?? "2026-06-01";
  // Defer days calc to client to avoid hydration mismatch (server vs client clock).
  const [days, setDays] = useState(0);
  useEffect(() => { setDays(computeDaysUntilLaunch()); }, []);

  // Progress
  const totalLessons = 34;
  const pct = Math.round((data.completedCount / totalLessons) * 100);
  const ringCircumference = 213.6;
  const ringOffset = ringCircumference - (pct / 100) * ringCircumference;

  // Module 1 status — for sidebar nav
  // For now: in pre-launch (state==="day1"), show all locked. In week2, mark first 2 done, 3rd active, rest pending.
  const m1Status: ("done" | "active" | "")[] =
    state === "day1"
      ? ["", "", "", "", "", ""]
      : ["done", "done", "active", "", "", ""];
  const m1Done = m1Status.filter((s) => s === "done").length;

  // Profile editing
  const [editing, setEditing] = useState(false);
  const [pending, startTransition] = useTransition();
  const [toast, setToast] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2400);
      return () => clearTimeout(t);
    }
  }, [toast]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    startTransition(async () => {
      try {
        await updateProfileAction(formData);
        setEditing(false);
        setToast("Profile saved · course is re-tuned");
      } catch (err) {
        setToast("Couldn't save — try again.");
      }
    });
  }

  return (
    <div data-active-state={state}>
      {/* APP BAR */}
      <header className="app-bar">
        <div className="container">
          <div className="app-bar-inner">
            <Link href="/dashboard" className="brand">
              <div className="brand-mark">CM</div>
              <div className="brand-text">
                <div className="brand-name">Claude Mastery</div>
                <div className="brand-sub">by Commercial Growth</div>
              </div>
            </Link>
            <nav className="app-nav">
              <Link href="/dashboard" className="active">Dashboard</Link>
              <Link href="#modules">Modules</Link>
              <Link href="#deliverables">Deliverables</Link>
              <Link href="#library">Library</Link>
            </nav>
            <div className="spacer" />
            <div className="app-actions">
              <button className="icon-btn" aria-label="Notifications">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                {state === "week2" && <span className="dot" />}
              </button>
              <form action={signOutAction} style={{ display: "inline-flex" }}>
                <button type="submit" className="avatar" aria-label="Sign out / account">
                  <div className="avatar-img">{initials}</div>
                  <span className="avatar-name">{firstName}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        {/* PAGE HEAD */}
        <div className="page-head">
          <div className="greeting">
            <div className="greeting-eyebrow">
              <span className="dot" />
              <span data-state="day1-inline">Day 01 · You&apos;re in</span>
              <span data-state="week2-inline">Week 02 · Foundations</span>
            </div>
            <h1>
              <span data-state="day1-inline">Welcome, {firstName}.</span>
              <span data-state="week2-inline">Good to see you back, {firstName}.</span>
            </h1>
            <p data-state="day1" suppressHydrationWarning>
              {days > 0
                ? `Lesson 1.1 lands ${LAUNCH_DATE_STR} 9:00 AEST. Set your profile below and the course tunes itself to your industry from day one.`
                : "Your cohort is live. Lesson 1.1 is ready below."}
            </p>
            <p data-state="week2">
              You&apos;ve got one lesson in flight and a graded deliverable waiting for review. Best use of the next 20 minutes: finish the active lesson.
            </p>
          </div>
        </div>

        {/* PROGRESS STRIP */}
        <div className="progress-strip">
          <div className="strip-ring">
            <div className="progress-ring">
              <svg viewBox="0 0 80 80">
                <circle className="progress-ring-track" cx="40" cy="40" r="34" />
                <circle
                  className="progress-ring-fill"
                  cx="40" cy="40" r="34"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringOffset}
                />
              </svg>
              <span className="progress-ring-label">{pct}%</span>
            </div>
            <div>
              <div className="ring-meta-label">Program progress</div>
              <div className="ring-meta-value">{data.completedCount} / {totalLessons} lessons</div>
              <div className="ring-meta-sub">Module 01 of 06 · Foundations</div>
            </div>
          </div>
          <div className="strip-stat">
            <div className="strip-stat-label">Avg grade</div>
            <div className="strip-stat-value">
              {data.avgGrade !== null
                ? <>{data.avgGrade}<span className="unit">/100</span></>
                : "—"}
            </div>
            <div className="strip-stat-sub">
              {data.avgGrade !== null
                ? "Across your graded lessons"
                : "First grade lands Lesson 1.2"}
            </div>
          </div>
          <div className="strip-stat">
            <div className="strip-stat-label">Streak</div>
            <div className="strip-stat-value">
              {data.streakDays}<span className="unit">days</span>
            </div>
            <div className="strip-stat-sub">
              {data.streakDays === 0 ? "Starts when you open Lesson 1.1" : "Keep it going."}
            </div>
          </div>
          <div className="strip-stat">
            <div className="strip-stat-label">Capstone</div>
            <div className="strip-stat-value">M6</div>
            <div className="strip-stat-sub">Unlocks after Module 05</div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="dash-grid">
          {/* LEFT COLUMN */}
          <div className="col">
            {/* Profile card — only shown on day1 */}
            <div data-state="day1">
              <div className={`profile-card${editing ? " is-editing" : ""}`}>
                <div className="profile-card-head">
                  <div className="profile-head-left">
                    <span className="profile-eyebrow">Your profile</span>
                    <span className="profile-head-sub">Drives how every lesson is shaped.</span>
                  </div>
                  {!editing && (
                    <button type="button" className="profile-edit-btn" onClick={() => setEditing(true)}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" />
                      </svg>
                      Edit
                    </button>
                  )}
                </div>

                {!editing && (
                  <div className="profile-summary">
                    <div className="profile-chips">
                      <span className="profile-chip is-accent">{firstName}</span>
                      <span className="profile-chip">{industry}</span>
                    </div>
                  </div>
                )}

                {editing && (
                  <form ref={formRef} onSubmit={handleSubmit} className="profile-form">
                    <div className="profile-form-grid">
                      <div className="pf-field">
                        <label className="pf-label" htmlFor="pf-firstName">First name</label>
                        <input
                          className="pf-input"
                          id="pf-firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          defaultValue={firstName === "there" ? "" : firstName}
                          required
                        />
                      </div>
                      <div className="pf-field pf-field-wide">
                        <label className="pf-label" htmlFor="pf-industry">Industry</label>
                        <select className="pf-select" id="pf-industry" name="industry" defaultValue={data.industry ?? ""} required>
                          <option value="" disabled>Select your industry</option>
                          {INDUSTRIES.map((i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="profile-form-actions">
                      <button type="button" className="profile-btn profile-btn-ghost" onClick={() => setEditing(false)} disabled={pending}>Cancel</button>
                      <button type="submit" className="profile-btn profile-btn-primary" disabled={pending}>
                        {pending ? "Saving…" : "Save profile"}
                      </button>
                    </div>
                  </form>
                )}

                <div className="profile-enrichment">
                  <div className="enrichment-head">
                    <span className="enrichment-title">Personalisation gets richer as you go</span>
                    <span className="enrichment-sub">Each lesson adds a new layer of context to every prompt.</span>
                  </div>
                  <ul className="enrichment-list">
                    <li className="enrichment-item is-active">
                      <span className="enrichment-status"><span className="enrichment-dot" /></span>
                      <span className="enrichment-body">
                        <span className="enrichment-label">Lesson 1.3 · How you currently use AI</span>
                        <span className="enrichment-meta">Active this week</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Continue card — week2 variant */}
            <div data-state="week2">
              <div className="continue-card">
                <div className="continue-top">
                  <div className="continue-label">CONTINUE WHERE YOU LEFT OFF</div>
                  <span className="badge"><span className="badge-dot" />In progress</span>
                </div>
                <div className="continue-title">Audit your current AI use.</div>
                <div className="continue-sub">Map how and how well you&apos;re using AI right now. This captures your stack, your comfort level, and the tasks you&apos;ve already been trying — it feeds every prompt later in the program.</div>
                <div className="continue-tuned"><span className="tuned-dot" />Tuned for <strong>{industry}</strong></div>
                <div className="continue-meta">
                  <div className="continue-meta-item"><span className="continue-meta-label">Lesson</span><span className="continue-meta-value">1.3 of 6</span></div>
                  <div className="continue-meta-item"><span className="continue-meta-label">Est. time</span><span className="continue-meta-value">22 min</span></div>
                  <div className="continue-meta-item"><span className="continue-meta-label">Deliverable</span><span className="continue-meta-value">Yes · graded</span></div>
                  <div className="continue-meta-item"><span className="continue-meta-label">Progress</span><span className="continue-meta-value">40%</span></div>
                </div>
                <div className="continue-actions">
                  <Link href="/lessons/1.1-what-claude-is-and-what-it-isnt" className="btn btn-white">Continue lesson →</Link>
                  <a href="#module" className="btn btn-outline-light">Module overview</a>
                </div>
              </div>
            </div>

            {/* Continue card — day1 variant */}
            <div data-state="day1">
              <div className="continue-card day1">
                <div className="continue-top">
                  <div className="continue-label">START HERE · PERSONALISE YOUR COURSE</div>
                  <span className="badge badge-warn"><span className="badge-dot" />1 short form · 2 min</span>
                </div>
                <div className="continue-title">Tell us who you are. The course tunes itself around it.</div>
                <div className="continue-sub" suppressHydrationWarning>Lesson 1.1 lands {LAUNCH_DATE_STR} 9:00 AEST. The more you give the profile above, the more every prompt, example, and graded deliverable speaks to your industry instead of a generic learner.</div>
                <div className="continue-meta">
                  <div className="continue-meta-item"><span className="continue-meta-label">Course opens</span><span className="continue-meta-value">{LAUNCH_DATE_STR} · 9:00 AEST</span></div>
                  <div className="continue-meta-item"><span className="continue-meta-label">Tier</span><span className="continue-meta-value">{data.enrolment?.tier ? `${data.enrolment.tier.charAt(0).toUpperCase()}${data.enrolment.tier.slice(1)} · enrolled` : "Pre-sale"}</span></div>
                  <div className="continue-meta-item"><span className="continue-meta-label">Graded by</span><span className="continue-meta-value">Claude · 4-criteria rubric</span></div>
                </div>
                <div className="continue-actions">
                  <Link href="/lessons/1.1-what-claude-is-and-what-it-isnt" className="btn btn-white">Start Lesson 1.1 →</Link>
                  <button onClick={() => { setEditing(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="btn btn-outline-light">Edit your profile ↑</button>
                </div>
              </div>
            </div>

            {/* Up next — week2 */}
            <section data-state="week2">
              <div className="section-kicker"><span className="num">01</span>Up next<span className="line" /></div>
              <h2 className="section-title">Two lessons queued for this week.</h2>
              <div className="section-sub">About 40 minutes total. Pacing keeps you ready for the Module 1 capstone.</div>
              <div className="lesson-grid">
                <article className="lesson-card">
                  <div className="lesson-card-top">
                    <div>
                      <div className="lesson-card-num">LESSON 1.4</div>
                      <div className="lesson-card-title">Map your weekly tasks</div>
                    </div>
                    <span className="badge badge-neutral">Queued</span>
                  </div>
                  <div className="lesson-card-blurb">Identify the highest-value tasks in your week that Claude can take a run at. Fed by what you captured in 1.3.</div>
                  <div className="lesson-card-foot">
                    <span className="lesson-card-time">~ 20 min</span>
                    <span className="lesson-card-time">Unlocks after 1.3</span>
                  </div>
                </article>
                <article className="lesson-card locked">
                  <div className="lesson-card-top">
                    <div>
                      <div className="lesson-card-num">LESSON 1.5</div>
                      <div className="lesson-card-title">Your business context</div>
                    </div>
                    <span className="badge badge-neutral">Locked</span>
                  </div>
                  <div className="lesson-card-blurb">Turn what you already know about your business into a context block Claude uses on every prompt from Module 02 forward.</div>
                  <div className="lesson-card-foot">
                    <span className="lesson-card-time">~ 25 min</span>
                    <span className="lesson-card-time">Locked</span>
                  </div>
                </article>
              </div>
            </section>

            {/* Latest grade — week2 */}
            <section data-state="week2">
              <div className="section-kicker"><span className="num">02</span>Latest grade<span className="line" /></div>
              <h2 className="section-title">Lesson 1.2 · Your first real prompt.</h2>
              <div className="section-sub">Graded by Claude. You have 2 free resubmits if you want to push higher.</div>
              <div className="grade-card">
                <div className="grade-top">
                  <div>
                    <div className="grade-label">GRADED · {data.latestGrade?.gradedAtRelative ?? "RECENTLY"}</div>
                    <div className="grade-lesson">{data.latestGrade?.lessonTitle ?? "Your first real prompt"}</div>
                  </div>
                  <span className="badge badge-green"><span className="badge-dot" />Passed</span>
                </div>
                <div className="grade-body">
                  <div className="grade-score">{data.latestGrade?.score ?? 84}<span className="denom">/100</span></div>
                  <div>
                    <div className="grade-note-label">GRADER NOTE</div>
                    <div className="grade-note">{data.latestGrade?.feedback ?? "Strong on role and audience. Constraints are aspirational rather than measurable — two of your three are directional rather than testable. Next pass, give Claude a word count and a readability target."}</div>
                  </div>
                </div>
                <div className="grade-rubric">
                  {(data.latestGrade?.rubric.length ? data.latestGrade.rubric : [
                    { label: "Lesson grasp", score: 22, max: 25 },
                    { label: "Specificity", score: 23, max: 25 },
                    { label: "Real context", score: 17, max: 25, tone: "warn" as const },
                    { label: "Prompt craft", score: 22, max: 25 }
                  ]).map((row) => {
                    const pct = (row.score / row.max) * 100;
                    return (
                      <div key={row.label}>
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
              </div>
            </section>

            {/* What to expect — day1 */}
            <section data-state="day1">
              <div className="section-kicker"><span className="num">02</span>What the program looks like<span className="line" /></div>
              <h2 className="section-title">6 modules · 34 lessons · 1 capstone.</h2>
              <div className="section-sub">Here&apos;s how the first week plays out. Every lesson ends in a deliverable. Every deliverable is graded by Claude against a four-criteria rubric.</div>
              <div className="lesson-grid">
                {MODULE_1_LESSONS.slice(0, 2).map((l) => (
                  <Link
                    key={l.slug}
                    href={l.number === "1.1" ? `/lessons/${l.slug}` : "#"}
                    className="lesson-card"
                    style={l.number !== "1.1" ? { opacity: 0.55, cursor: "default" } : undefined}
                    onClick={(e) => { if (l.number !== "1.1") e.preventDefault(); }}
                  >
                    <div className="lesson-card-top">
                      <div>
                        <div className="lesson-card-num">LESSON {l.number} · {l.weekday.toUpperCase()}</div>
                        <div className="lesson-card-title">{l.title}</div>
                      </div>
                      <span className={l.graded ? "badge" : "badge badge-neutral"}>
                        {l.graded ? <><span className="badge-dot" />First graded</> : `${l.weekday} 9:00`}
                      </span>
                    </div>
                    <div className="lesson-card-blurb">{l.blurb}</div>
                    <div className="lesson-card-foot">
                      <span className="lesson-card-time">{l.estTime}</span>
                      <span className="lesson-card-time">{l.graded ? "Deliverable" : "Primer · not graded"}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="col">
            <div className="side-card">
              <div className="side-card-head">
                <span className="side-title">Module 01 · Foundations</span>
                <span className="side-meta">{m1Done} / 6</span>
              </div>
              <div className="module-list">
                {MODULE_1_LESSONS.map((l, i) => {
                  const status = m1Status[i];
                  return (
                    <div key={l.slug} className={`module-item${status ? " " + status : ""}`}>
                      <div className={`module-status${status ? " " + status : ""}`}>
                        {status === "done" && (
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                      <span className="module-num">{l.number}</span>
                      <span className="module-label">
                        {l.title}
                        <span data-state="day1-inline" style={{ color: "var(--text-muted)", fontWeight: 500 }}> · {l.weekday}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="capstone-side">
              <div className="capstone-label">MODULE 06 · CAPSTONE</div>
              <div className="capstone-title">Ship a real workflow.</div>
              <div className="capstone-sub" data-state="week2">Unlocks when you finish Module 05. You&apos;ll build and submit a working Claude workflow for your actual business — graded against a four-criteria rubric you&apos;ll know by heart.</div>
              <div className="capstone-sub" data-state="day1">The program ends with a real deliverable you ship in your business. Not a quiz, not a mock. A graded piece of Claude work your manager or clients would pay for.</div>
              <div className="capstone-lock">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span data-state="week2-inline">Locked · 4 modules to go</span>
                <span data-state="day1-inline" suppressHydrationWarning>Locked · starts {days > 0 ? `${days} day${days === 1 ? "" : "s"} from now` : "today"}</span>
              </div>
            </div>

            {/* Activity feed — week2 only */}
            <div className="side-card" data-state="week2">
              <div className="side-card-head">
                <span className="side-title">Recent activity</span>
                <a href="#all" className="side-meta" style={{ color: "var(--blue)" }}>See all</a>
              </div>
              <div>
                <div className="feed-item">
                  <div className="feed-icon green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="feed-body">
                    <div className="feed-title">Latest lesson graded</div>
                    <div className="feed-sub">{data.latestGrade?.feedback?.slice(0, 80) ?? "Strong on role and audience. Constraints could be more measurable."}</div>
                    <div className="feed-time">{data.latestGrade?.gradedAtRelative ?? "Recently"}</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {toast && (
        <div className="profile-toast is-visible">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
