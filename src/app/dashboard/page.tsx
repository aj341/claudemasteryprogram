import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getDashboardData } from "@/lib/dashboard-data";
import DashboardShell from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: "Dashboard — Claude Mastery"
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

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
