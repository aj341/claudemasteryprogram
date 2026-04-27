"use client";

// W1-T03: Slim onboarding form. Step 1 captures the required field (industry)
// plus first name + business; step 2 collects optional context (role, team
// size, current AI use). Two short steps to keep total time under 60 seconds.
//
// Industry must match a value in INDUSTRIES exactly because the JSON config
// blocks in each lesson key against the same labels.

import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitOnboardingAction, type OnboardingFormState } from "./actions";
import { INDUSTRIES } from "@/lib/industries";

const TEAM_SIZES = ["Solo (just me)", "2–5", "6–15", "16–50", "50+"];

const initialState: OnboardingFormState = { ok: true };

export default function OnboardingForm({ defaults }: { defaults: { fullName: string } }) {
  const [step, setStep] = useState(1);
  const [state, formAction] = useActionState(submitOnboardingAction, initialState);

  const [fullName, setFullName] = useState(defaults.fullName ?? "");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [currentAiUse, setCurrentAiUse] = useState("");

  const totalSteps = 2;
  const canAdvance = step === 1 ? fullName.trim().length > 0 && industry.trim().length > 0 : true;

  function next(e: React.MouseEvent) {
    e.preventDefault();
    if (step < totalSteps && canAdvance) setStep(step + 1);
  }
  function back(e: React.MouseEvent) {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className="auth-shell">
      <div className="auth-card" style={{ maxWidth: 520 }}>
        <div className="auth-brand">
          <div className="auth-brand-mark">CM</div>
          <div className="auth-brand-text">Claude Mastery</div>
        </div>

        <div className="onboarding-progress" aria-label={`Step ${step} of ${totalSteps}`}>
          {Array.from({ length: totalSteps }).map((_, i) => {
            const idx = i + 1;
            const cls = `onboarding-progress-dot${idx === step ? " active" : ""}${idx < step ? " done" : ""}`;
            return <span key={idx} className={cls} />;
          })}
        </div>

        <h1 className="auth-heading">
          {step === 1 ? "Tell us about your business" : "A bit more context (optional)"}
        </h1>
        <p className="auth-subhead">
          {step === 1
            ? "We use your industry to swap in the right examples in every lesson — same teaching, your industry's scenarios."
            : "Skip any field that doesn't fit. You can always update these in your account settings."}
        </p>

        {!state.ok && state.error && (
          <div className="auth-error">{state.error}</div>
        )}

        <form action={formAction} noValidate>
          <div style={{ display: step === 1 ? "block" : "none" }}>
            <div className="form-field">
              <label className="form-label" htmlFor="fullName">First name</label>
              <input
                id="fullName" name="fullName" className="form-input" required
                placeholder="Your first name"
                value={fullName} onChange={e => setFullName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="businessName">Business name</label>
              <input
                id="businessName" name="businessName" className="form-input"
                placeholder="e.g. Sunshine Plumbing"
                value={businessName} onChange={e => setBusinessName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="industry">Industry</label>
              <select
                id="industry" name="industry" className="form-input" required
                value={industry} onChange={e => setIndustry(e.target.value)}
              >
                <option value="">Pick the closest match…</option>
                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: step === 2 ? "block" : "none" }}>
            <div className="form-field">
              <label className="form-label" htmlFor="role">Your role</label>
              <input
                id="role" name="role" className="form-input"
                placeholder="e.g. Owner, Operations Manager, Marketing Lead"
                value={role} onChange={e => setRole(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="teamSize">Team size</label>
              <select
                id="teamSize" name="teamSize" className="form-input"
                value={teamSize} onChange={e => setTeamSize(e.target.value)}
              >
                <option value="">Choose…</option>
                {TEAM_SIZES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="currentAiUse">What do you use AI for today? (if anything)</label>
              <textarea
                id="currentAiUse" name="currentAiUse" className="form-input" rows={3}
                placeholder="e.g. Drafting client emails, summarising notes"
                value={currentAiUse} onChange={e => setCurrentAiUse(e.target.value)}
              />
            </div>
          </div>

          <div className="onboarding-controls">
            {step > 1 && (
              <button type="button" className="btn btn-outline" onClick={back}>← Back</button>
            )}
            <span className="onboarding-step-counter">Step {step} of {totalSteps}</span>
            {step < totalSteps ? (
              <button type="button" className="btn btn-primary" onClick={next} disabled={!canAdvance}>Next →</button>
            ) : (
              <SubmitButton />
            )}
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
      {pending ? "Saving…" : "Personalise my course →"}
    </button>
  );
}
