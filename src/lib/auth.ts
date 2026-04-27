import NextAuth, { type DefaultSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Resend from "next-auth/providers/resend";
import { db } from "@/db";
import { users, accounts, sessions, verificationTokens } from "@/db/schema";
import { sendEmail } from "@/lib/email-service";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens
  }),
  session: { strategy: "database" },
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: "Claude Mastery <noreply@commercialgrowth.com.au>",
      sendVerificationRequest: async ({ identifier: email, url }) => {
        // Routes through the typed email service so every transactional
        // send shares one rendering, logging, and Resend client.
        await sendEmail("magic_link_signin", email, { url });
      }
    })
  ],
  pages: {
    signIn: "/login",
    verifyRequest: "/verify-email"
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) session.user.id = user.id;
      return session;
    }
  }
});
