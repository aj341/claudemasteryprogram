"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function updateProfileAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not signed in");

  const firstName = String(formData.get("firstName") ?? "").trim();
  const industry = String(formData.get("industry") ?? "").trim();

  if (!firstName) throw new Error("First name is required");

  // Use firstName to populate fullName if fullName is empty
  const existing = await db.select().from(profiles).where(eq(profiles.userId, session.user.id));
  const fullName = existing[0]?.fullName ?? firstName;

  if (existing.length === 0) {
    await db.insert(profiles).values({
      userId: session.user.id,
      fullName,
      industry: industry || null,
      onboardingComplete: !!industry
    });
  } else {
    await db
      .update(profiles)
      .set({
        fullName: firstName, // store the first-name-as-fullName if user only types first name
        industry: industry || null,
        onboardingComplete: !!industry || existing[0].onboardingComplete,
        updatedAt: new Date()
      })
      .where(eq(profiles.userId, session.user.id));
  }

  revalidatePath("/dashboard");
}
