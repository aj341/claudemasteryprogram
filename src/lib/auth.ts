import NextAuth, { type DefaultSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Resend from "next-auth/providers/resend";
import { db } from "@/db";
import { users, accounts, sessions, verificationTokens } from "@/db/schema";

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
      // Custom branded email
      sendVerificationRequest: async ({ identifier: email, url }) => {
        const { Resend: ResendClient } = await import("resend");
        const resend = new ResendClient(process.env.RESEND_API_KEY!);
        const { error } = await resend.emails.send({
          from: "Claude Mastery <noreply@commercialgrowth.com.au>",
          to: email,
          subject: "Sign in to Claude Mastery",
          html: signInEmailHtml(url),
          text: signInEmailText(url)
        });
        if (error) {
          throw new Error(`Resend error: ${JSON.stringify(error)}`);
        }
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

function signInEmailHtml(url: string) {
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:'Poppins',-apple-system,BlinkMacSystemFont,sans-serif;color:#111827;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F8FAFC;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          <tr>
            <td style="padding:32px 40px;background:#0F1623;color:#FFFFFF;">
              <div style="font-size:18px;font-weight:700;letter-spacing:-0.01em;">Claude Mastery</div>
              <div style="font-size:13px;color:#9CA3AF;margin-top:4px;">by Commercial Growth</div>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h1 style="margin:0 0 16px;font-size:24px;font-weight:700;color:#111827;">Sign in to your account</h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#374151;">Click the button below to sign in. This link expires in 24 hours and can only be used once.</p>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#3BB9F5;border-radius:100px;">
                    <a href="${url}" style="display:inline-block;padding:14px 28px;color:#0F1623;font-weight:600;font-size:15px;text-decoration:none;">Sign in to Claude Mastery →</a>
                  </td>
                </tr>
              </table>
              <p style="margin:32px 0 0;font-size:13px;color:#6B7280;line-height:1.6;">If the button doesn't work, copy and paste this URL into your browser:<br><span style="color:#1A9EDE;word-break:break-all;">${url}</span></p>
              <p style="margin:24px 0 0;font-size:13px;color:#9CA3AF;">If you didn't request this, you can safely ignore this email.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background:#F8FAFC;border-top:1px solid #E5E7EB;font-size:12px;color:#9CA3AF;">
              Commercial Growth Pty Ltd · ABN 72 671 869 298 · NSW Australia
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function signInEmailText(url: string) {
  return `Sign in to Claude Mastery

Click the link below to sign in. This link expires in 24 hours.

${url}

If you didn't request this, you can safely ignore this email.

— Commercial Growth Pty Ltd`;
}
