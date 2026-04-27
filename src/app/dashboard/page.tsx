import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getDashboardData } from "@/lib/dashboard-data";
import DashboardShell from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: "Dashboard — Claude Mastery"
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  // W1-T03: gate — new users are sent through /onboarding so we have an
  // industry to drive lesson personalisation. Once industry is set + flag
  // flipped this redirect short-circuits and they go straight to the dashboard.
  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, session.user.id));
  if (!profile?.onboardingComplete) redirect("/onboarding");

  const data = await getDashboardData(
    session.user.id,
    session.user.email!,
    session.user.name
  );

  return (
    <DashboardShell
      data={data}
      signOutAction={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    />
  );
}
