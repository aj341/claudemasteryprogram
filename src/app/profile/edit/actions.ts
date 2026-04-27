"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export type ProfileEditState = { ok: boolean; error?: string; saved?: boolean };

function clean(v: FormDataEntryValue | null, max: number): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().slice(0, max);
  return s.length > 0 ? s : null;
}

function parseLines(v: FormDataEntryValue | null, maxItems: number, maxLen: number): string[] | null {
  if (typeof v !== "string") return null;
  const lines = v.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0).slice(0, maxItems);
  for (const l of lines) {
    if (l.length > maxLen) return null;
  }
  return lines;
}

export async function saveProfileEditAction(
  _prev: ProfileEditState,
  formData: FormData
): Promise<ProfileEditState> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "You're signed out — sign in again to continue." };

  const businessName = clean(formData.get("businessName"), 100);
  const productsServices = clean(formData.get("productsServices"), 500);
  const customerSnapshot = clean(formData.get("customerSnapshot"), 500);
  const brandVoice = clean(formData.get("brandVoice"), 500);

  const weeklyTasksLines = parseLines(formData.get("weeklyTasks"), 10, 200);
  // Validation: matches per-field rules — exactly 3 items, 5-200 chars each.
  // We allow null (cleared field), but if the user provided anything, it must
  // pass the same shape rules the extractor enforces.
  let weeklyTasks: string[] | null = null;
  if (weeklyTasksLines !== null && weeklyTasksLines.length > 0) {
    if (weeklyTasksLines.length !== 3) {
      return { ok: false, error: "Weekly tasks must be exactly 3 items, one per line." };
    }
    for (const t of weeklyTasksLines) {
      if (t.length < 5) return { ok: false, error: "Each weekly task needs to be at least 5 characters." };
    }
    weeklyTasks = weeklyTasksLines;
  }

  const goalsLines = parseLines(formData.get("goals"), 10, 200);
  let goals: string[] | null = null;
  if (goalsLines !== null && goalsLines.length > 0) {
    if (goalsLines.length < 1 || goalsLines.length > 5) {
      return { ok: false, error: "Goals must be between 1 and 5 items, one per line." };
    }
    for (const g of goalsLines) {
      if (g.length < 5) return { ok: false, error: "Each goal needs to be at least 5 characters." };
    }
    goals = goalsLines;
  }

  // Per-field length checks for the string fields (matching the extractor).
  if (businessName !== null && (businessName.length < 1 || businessName.length > 100)) {
    return { ok: false, error: "Business name must be between 1 and 100 characters." };
  }
  for (const [label, val] of [
    ["Products / services", productsServices],
    ["Customer snapshot", customerSnapshot],
    ["Brand voice", brandVoice]
  ] as const) {
    if (val !== null && (val.length < 10 || val.length > 500)) {
      return { ok: false, error: `${label} must be between 10 and 500 characters.` };
    }
  }

  const userId = session.user.id;
  const existing = await db.select().from(profiles).where(eq(profiles.userId, userId));

  if (existing.length === 0) {
    await db.insert(profiles).values({
      userId,
      businessName,
      productsServices,
      customerSnapshot,
      brandVoice,
      weeklyTasks,
      goals,
      profileVersion: 1
    });
  } else {
    await db
      .update(profiles)
      .set({
        businessName,
        productsServices,
        customerSnapshot,
        brandVoice,
        weeklyTasks,
        goals,
        profileVersion: sql`${profiles.profileVersion} + 1`,
        updatedAt: new Date()
      })
      .where(eq(profiles.userId, userId));
  }

  revalidatePath("/profile/edit");
  revalidatePath("/dashboard");

  return { ok: true, saved: true };
}
