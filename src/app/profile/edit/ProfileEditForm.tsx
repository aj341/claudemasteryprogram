"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { saveProfileEditAction, type ProfileEditState } from "./actions";

const LESSON_LABELS: Record<string, string> = {
  "1.1-what-claude-is-and-what-it-isnt": "Lesson 1.1",
  "1.2-write-your-first-real-prompt": "Lesson 1.2",
  "1.3-audit-your-current-ai-use": "Lesson 1.3",
  "1.4-map-your-weekly-tasks": "Lesson 1.4"
};

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return d.toISOString().slice(0, 10);
}

function CapturedFrom({ source }: { source?: { lessonSlug: string; ts: string } }) {
  if (!source) return null;
  const lesson = LESSON_LABELS[source.lessonSlug] ?? source.lessonSlug;
  return (
    <div className="form-help" style={{ marginTop: 4, fontSize: 12, color: "var(--text-muted)" }}>
      Captured from {lesson} on {fmtDate(source.ts)} — edit any time.
    </div>
  );
}

const initialState: ProfileEditState = { ok: true };

type Initial = {
  businessName: string;
  productsServices: string;
  customerSnapshot: string;
  brandVoice: string;
  weeklyTasks: string;
  goals: string;
};

export default function ProfileEditForm({
  initial,
  captureSource,
  learnerEmail
}: {
  initial: Initial;
  captureSource: Record<string, { lessonSlug: string; ts: string }>;
  learnerEmail: string;
}) {
  const [state, formAction] = useActionState(saveProfileEditAction, initialState);

  return (
    <div className="auth-shell">
      <div className="auth-card" style={{ maxWidth: 640 }}>
        <div className="auth-brand">
          <div className="auth-brand-mark">CM</div>
          <div className="auth-brand-text">Claude Mastery</div>
        </div>

        <h1 className="auth-heading">Your profile</h1>
        <p className="auth-subhead">
          The course personalises lessons using a few facts about your business. We capture most of these
          automatically as you work through Module 1 — edit any of them here at any time.
        </p>

        <div className="form-field">
          <label className="form-label">Email</label>
          <input className="form-input" value={learnerEmail} disabled />
        </div>

        {!state.ok && state.error && (
          <div className="auth-error">{state.error}</div>
        )}
        {state.ok && state.saved && (
          <div className="auth-error" style={{ background: "rgba(46,160,67,0.1)", color: "#2ea043", borderColor: "rgba(46,160,67,0.3)" }}>
            Saved.
          </div>
        )}

        <form action={formAction} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="businessName">Business name</label>
            <input
              id="businessName" name="businessName" className="form-input"
              defaultValue={initial.businessName}
              placeholder="e.g. Sunshine Plumbing"
              maxLength={100}
            />
            <CapturedFrom source={captureSource.businessName} />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="productsServices">Products or services</label>
            <textarea
              id="productsServices" name="productsServices" className="form-input" rows={3}
              defaultValue={initial.productsServices}
              placeholder="What you sell or provide"
              maxLength={500}
            />
            <CapturedFrom source={captureSource.productsServices} />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="customerSnapshot">Typical customer</label>
            <textarea
              id="customerSnapshot" name="customerSnapshot" className="form-input" rows={3}
              defaultValue={initial.customerSnapshot}
              placeholder="Who your typical customer is"
              maxLength={500}
            />
            <CapturedFrom source={captureSource.customerSnapshot} />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="brandVoice">Brand voice</label>
            <textarea
              id="brandVoice" name="brandVoice" className="form-input" rows={3}
              defaultValue={initial.brandVoice}
              placeholder="How your brand sounds when it writes / speaks"
              maxLength={500}
            />
            <CapturedFrom source={captureSource.brandVoice} />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="weeklyTasks">Three recurring weekly tasks</label>
            <textarea
              id="weeklyTasks" name="weeklyTasks" className="form-input" rows={4}
              defaultValue={initial.weeklyTasks}
              placeholder={"One per line — exactly 3, e.g.\nDraft client emails\nReview weekly numbers\nWrite the team update"}
            />
            <div className="form-help" style={{ fontSize: 12, color: "var(--text-muted)" }}>
              Exactly 3 items, one per line. Used to ground lesson personalisation in your real week.
            </div>
            <CapturedFrom source={captureSource.weeklyTasks} />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="goals">Goals for the course</label>
            <textarea
              id="goals" name="goals" className="form-input" rows={4}
              defaultValue={initial.goals}
              placeholder={"One per line — up to 5, e.g.\nSave 5+ hours a week on writing\nShip our first AI-assisted client report"}
            />
            <div className="form-help" style={{ fontSize: 12, color: "var(--text-muted)" }}>
              1–5 items, one per line.
            </div>
            <CapturedFrom source={captureSource.goals} />
          </div>

          <div className="onboarding-controls" style={{ marginTop: 24 }}>
            <Link href="/dashboard" className="btn btn-outline">Cancel</Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? "Saving…" : "Save profile"}
    </button>
  );
}
