import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { eq } from "drizzle-orm";

export const metadata = {
  title: "You're in. — Claude Mastery"
};

export default async function WelcomePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  // Mark welcome seen so they don't see this again
  // (Profile may not exist yet — upsert it)
  const userId = session.user.id;
  const existing = await db.select().from(profiles).where(eq(profiles.userId, userId));
  if (existing.length === 0) {
    await db.insert(profiles).values({ userId, fullName: session.user.name ?? null });
  }

  return (
    <main className="welcome-shell">
      <div className="welcome-card">
        <div className="welcome-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1>You&apos;re in.</h1>
        <p className="welcome-lede">
          Welcome to the Claude Mastery Program.
          The course launches <strong style={{ color: "var(--text)" }}>1 June 2026</strong> —
          we&apos;ll email you the morning of, with Lesson 1.1 ready to go.
        </p>

        <div className="next-steps">
          <div className="next-steps-heading">What happens next</div>

          <div className="step-row">
            <div className="step-num">1</div>
            <div>
              <div className="step-title">Tell us about your work</div>
              <div className="step-sub">
                Add your industry, business name, and a couple of weekly tasks so the course tunes itself
                to your actual day-job — not a generic learner.
              </div>
            </div>
          </div>

          <div className="step-row">
            <div className="step-num">2</div>
            <div>
              <div className="step-title">Start with Module 1 on launch day</div>
              <div className="step-sub">
                Six lessons over six weekdays. Each one ends in a deliverable Claude grades against a four-criteria rubric.
              </div>
            </div>
          </div>

          <div className="step-row">
            <div className="step-num">3</div>
            <div>
              <div className="step-title">Submit, get graded, improve</div>
              <div className="step-sub">
                You can resubmit any deliverable up to twice for free. The grade you keep is the highest one — push it.
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-actions">
          <Link href="/dashboard" className="btn btn-primary">
            Open your dashboard →
          </Link>
        </div>
      </div>
    </main>
  );
}
