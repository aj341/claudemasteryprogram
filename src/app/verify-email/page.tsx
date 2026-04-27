import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-alt)] p-6">
      <div className="w-full max-w-md text-center">
        <div className="card">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--blue-pale)] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3BB9F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Check your email</h1>
          <p className="text-[var(--text-body)] mb-6">
            We&apos;ve sent you a magic sign-in link. Click it from any device to access your dashboard.
          </p>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            The link expires in 24 hours. Don&apos;t see it? Check your spam folder.
          </p>
          <Link href="/login" className="btn-secondary inline-flex">
            ← Try a different email
          </Link>
        </div>
      </div>
    </main>
  );
}
