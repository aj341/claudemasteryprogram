import { signIn } from "@/lib/auth";
import Link from "next/link";

export default function LoginPage({ searchParams }: { searchParams?: Promise<{ error?: string; from?: string }> }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-alt)] p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-[20px] font-bold tracking-tight text-[var(--dark)]">Claude Mastery</span>
          </Link>
          <p className="text-sm text-[var(--text-muted)] mt-1">by Commercial Growth</p>
        </div>

        <div className="card">
          <h1 className="text-2xl font-bold mb-2">Sign in</h1>
          <p className="text-sm text-[var(--text-body)] mb-6">
            Enter the email you used to enrol. We&apos;ll send you a magic link to sign in — no password needed.
          </p>

          <form
            action={async (formData) => {
              "use server";
              await signIn("resend", { email: formData.get("email"), redirectTo: "/dashboard" });
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-body)] mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="input"
                autoComplete="email"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send magic link
            </button>
          </form>

          <p className="text-xs text-[var(--text-muted)] mt-6 text-center">
            By continuing you agree to the Commercial Growth{" "}
            <a href="https://commercialgrowth.com.au/terms" className="underline">Terms</a> and{" "}
            <a href="https://commercialgrowth.com.au/privacy" className="underline">Privacy Policy</a>.
          </p>
        </div>

        <p className="text-center text-xs text-[var(--text-muted)] mt-6">
          Need help? Email{" "}
          <a href="mailto:hello@commercialgrowth.com.au" className="underline">hello@commercialgrowth.com.au</a>
        </p>
      </div>
    </main>
  );
}
