import Link from "next/link";
import { signIn, auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Sign in — Claude Mastery",
  description: "Sign in to continue your Claude Mastery course."
};

export default async function LoginPage({
  searchParams
}: {
  searchParams?: Promise<{ error?: string; sent?: string }>;
}) {
  const session = await auth();
  if (session?.user) redirect("/dashboard");
  const sp = (await searchParams) ?? {};

  return (
    <main className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-brand-mark">CM</div>
          <div className="auth-brand-text">Claude Mastery</div>
        </div>

        <h1 className="auth-heading">Welcome back</h1>
        <p className="auth-subhead">
          Sign in to continue your Claude Mastery course. We&apos;ll email you a one-time
          link — no password needed.
        </p>

        {sp.error && (
          <div className="auth-error">
            We couldn&apos;t send your sign-in link. Please check the email and try again.
          </div>
        )}

        <form
          action={async (formData) => {
            "use server";
            const email = String(formData.get("email") ?? "").trim().toLowerCase();
            await signIn("resend", { email, redirectTo: "/dashboard" });
          }}
        >
          <div className="form-field">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="you@yourbusiness.com"
              autoComplete="email"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Send my sign-in link
          </button>
        </form>

        <div className="divider">No password needed</div>

        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.6 }}>
          Click the link in the email to sign in. The link expires in 24 hours and can only be used once.
        </p>

        <p className="auth-alt">
          Don&apos;t have an account?{" "}
          <a href="https://commercialgrowth.com.au/claudemastery">Start your course</a>
        </p>
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
