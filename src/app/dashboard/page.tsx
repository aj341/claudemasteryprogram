import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { profiles, enrolments } from "@/db/schema";
import { eq } from "drizzle-orm";
import DashboardShell from "@/components/DashboardShell";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, session.user.id));
  const userEnrolments = await db.select().from(enrolments).where(eq(enrolments.userId, session.user.id));

  return (
    <DashboardShell
      user={{
        name: session.user.name ?? profile?.fullName ?? null,
        email: session.user.email!,
        image: session.user.image ?? null
      }}
      profile={profile ?? null}
      enrolments={userEnrolments}
      signOutAction={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    />
  );
}
