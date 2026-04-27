// Shared building blocks for branded transactional emails.
// Hex values are sourced from the Claude Mastery design system and must
// match exactly. Email clients do not reliably honour <style> blocks,
// so every rule is inlined.

export const tokens = {
  dark: "#0F1623",
  blue: "#3BB9F5",
  blueDark: "#1A9EDE",
  text: "#111827",
  textBody: "#374151",
  textMuted: "#6B7280",
  textFaint: "#9CA3AF",
  surface: "#FFFFFF",
  surfaceMuted: "#F8FAFC",
  border: "#E5E7EB",
  font: "&lsquo;Poppins&lsquo;,-apple-system,BlinkMacSystemFont,&lsquo;Segoe UI&lsquo;,Roboto,sans-serif"
};

export function brandHeader(): string {
  return `
    <tr>
      <td style="padding:32px 40px;background:${tokens.dark};color:#FFFFFF;">
        <div style="font-size:18px;font-weight:700;letter-spacing:-0.01em;">Claude Mastery</div>
        <div style="font-size:13px;color:${tokens.textFaint};margin-top:4px;">by Commercial Growth</div>
      </td>
    </tr>`;
}

export function brandFooter(): string {
  return `
    <tr>
      <td style="padding:24px 40px;background:${tokens.surfaceMuted};border-top:1px solid ${tokens.border};font-size:12px;color:${tokens.textFaint};">
        Commercial Growth Pty Ltd &middot; ABN 72 671 869 298 &middot; NSW Australia
      </td>
    </tr>`;
}

export function primaryButton(href: string, label: string): string {
  return `
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="background:${tokens.blue};border-radius:100px;">
          <a href="${href}" style="display:inline-block;padding:14px 28px;color:${tokens.dark};font-weight:600;font-size:15px;text-decoration:none;font-family:${tokens.font};">${label}</a>
        </td>
      </tr>
    </table>`;
}

export function outlineButton(href: string, label: string): string {
  return `
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="border:1.5px solid ${tokens.dark};border-radius:100px;">
          <a href="${href}" style="display:inline-block;padding:12px 26px;color:${tokens.dark};font-weight:600;font-size:15px;text-decoration:none;font-family:${tokens.font};">${label}</a>
        </td>
      </tr>
    </table>`;
}

export function brandShell(innerHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body style="margin:0;padding:0;background:${tokens.surfaceMuted};font-family:${tokens.font};color:${tokens.text};">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${tokens.surfaceMuted};padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="background:${tokens.surface};border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          ${brandHeader()}
          <tr>
            <td style="padding:40px;">
              ${innerHtml}
            </td>
          </tr>
          ${brandFooter()}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function h1(text: string): string {
  return `<h1 style="margin:0 0 16px;font-size:24px;font-weight:800;letter-spacing:-0.01em;color:${tokens.text};font-family:${tokens.font};">${text}</h1>`;
}

export function p(text: string): string {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${tokens.textBody};font-family:${tokens.font};">${text}</p>`;
}

export function pSmall(text: string): string {
  return `<p style="margin:24px 0 0;font-size:13px;color:${tokens.textFaint};line-height:1.6;font-family:${tokens.font};">${text}</p>`;
}

export function divider(): string {
  return `<hr style="border:none;border-top:1px solid ${tokens.border};margin:32px 0;">`;
}

export function statRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;font-size:14px;color:${tokens.textBody};font-family:${tokens.font};">${label}</td>
      <td style="padding:8px 0;font-size:14px;color:${tokens.text};font-weight:600;text-align:right;font-family:${tokens.font};">${value}</td>
    </tr>`;
}
