import { brandShell, h1, p, primaryButton, pSmall, tokens } from "./components/brand";

export interface MagicLinkSigninProps {
  url: string;
}

export function magicLinkSigninSubject(): string {
  return "Sign in to Claude Mastery";
}

export function magicLinkSigninHtml({ url }: MagicLinkSigninProps): string {
  const inner = `
    ${h1("Sign in to your account")}
    ${p("Click the button below to sign in. This link expires in 24 hours and can only be used once.")}
    <div style="margin:28px 0 0;">
      ${primaryButton(url, "Sign in to Claude Mastery &rarr;")}
    </div>
    ${pSmall("If the button doesn&lsquo;t work, copy and paste this URL into your browser:<br><span style=\"color:" + tokens.blueDark + ";word-break:break-all;\">" + url + "</span>")}
    <p style="margin:24px 0 0;font-size:13px;color:${tokens.textFaint};font-family:${tokens.font};">If you didn&lsquo;t request this, you can safely ignore this email.</p>
  `;
  return brandShell(inner);
}

export function magicLinkSigninText({ url }: MagicLinkSigninProps): string {
  return `Sign in to Claude Mastery

Click the link below to sign in. This link expires in 24 hours.

${url}

If you didn't request this, you can safely ignore this email.

- Commercial Growth Pty Ltd`;
}
