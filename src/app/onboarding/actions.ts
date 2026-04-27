"use server";

// W1-T03: Onboarding submission. Industry is the only required field —
// everything else is collected here so we don't need a second profile-edit
// visit, but it can be left blank without blocking the user. After save we
// flip onboardingComplete=true and bounce to /dashboard.

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ALLOWED_INDUSTRIES } from "@/lib/industries";

export type OnboardingFormState = { ok: boolean; error?: string };

function clean(v: FormDataEntryValue | null, max = 200): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().slice(0, max);
  return s.length > 0 ? s : null;
}

export async function submitOnboardingAction(
  _prev: OnboardingFormState,
  formData: FormData
): Promise<OnboardingFormState> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "You're signed out — sign in again to continue." };

  const fullName = clean(formData.get("fullName"), 120);
  const industryRaw = clean(formData.get("industry"), 80);
  const industry = industryRaw && ALLOWED_INDUSTRIES.has(industryRaw) ? industryRaw : null;
  const role = clean(formData.get("role"), 120);
  const businessName = clean(formData.get("businessName"), 120);
  const teamSize = clean(formData.get("teamSize"), 40);
  const currentAiUse = clean(formData.get("currentAiUse"), 400);

  if (!fullName) return { ok: false, error: "Please tell us your first name." };
  if (!industry) return { ok: false, error: "Please pick the closest industry — examples in every lesson use it." };

  const existing = await db.select().from(profiles).where(eq(profiles.userId, session.user.id));
  if (existing.length === 0) {
    await db.insert(profiles).values({
      userId: session.user.id,
      fullName,
      businessName,
      industry,
      role,
      teamSize,
      currentAiUse,
      onboardingComplete: true
    });
  } else {
    await db.update(profiles).set({
      fullName,
      businessName,
      industry,
      role,
      teamSize,
      currentAiUse,
      onboardingComplete: true,
      updatedAt: new Date()
    }).where(eq(profiles.userId, session.user.id));
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
