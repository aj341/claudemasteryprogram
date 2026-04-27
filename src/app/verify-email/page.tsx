import Link from "next/link";

export const metadata = {
  title: "Check your email — Claude Mastery"
};

export default function VerifyEmailPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-brand-mark">CM</div>
          <div className="auth-brand-text">Claude Mastery</div>
        </div>

        <div className="auth-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 5L2 7" />
          </svg>
        </div>

        <h1 className="auth-heading">Check your email</h1>
        <p className="auth-subhead">
          We&apos;ve sent you a one-time sign-in link. Click it from any device to access your dashboard.
        </p>

        <div style={{ background: "var(--bg-alt)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "var(--space-4)", fontSize: "0.85rem", color: "var(--text-body)", marginBottom: "var(--space-4)" }}>
          <strong style={{ color: "var(--text)", display: "block", marginBottom: 4 }}>Don&apos;t see it?</strong>
          Check your spam folder or wait 60 seconds — emails from{" "}
          <code style={{ background: "var(--surface)", padding: "1px 6px", borderRadius: 4, fontSize: "0.82rem", border: "1px solid var(--border)" }}>noreply@commercialgrowth.com.au</code>{" "}
          can occasionally take a moment.
        </div>

        <Link href="/login" className="btn btn-outline btn-full">
          ← Try a different email
        </Link>
      </div>

      <div className="auth-footer">
        <a href="mailto:hello@commercialgrowth.com.au">hello@commercialgrowth.com.au</a>
        <span className="sep" />
        <a href="https://commercialgrowth.com.au/terms">Terms</a>
        <span className="sep" />
        <a href="https://commercialgrowth.com.au/privacy">Privacy</a>
      </div>
    </main>
  );
}
