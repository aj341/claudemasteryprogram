import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import OnboardingForm from "./OnboardingForm";

export const metadata = { title: "Personalise your course — Claude Mastery" };

// W1-T03: Slim onboarding entry. Bounces signed-in users to /dashboard if
// they've already completed it, and to /login if signed out.
export default async function OnboardingPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const [existing] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, session.user.id));

  if (existing?.onboardingComplete) redirect("/dashboard");

  const fullName = existing?.fullName ?? session.user.name ?? "";
  const firstName = fullName.split(" ")[0] ?? "";
  return <OnboardingForm defaults={{ fullName: firstName }} />;
}
