import { brandShell, h1, p, primaryButton, statRow, tokens, divider } from "./components/brand";

export interface PaymentReceiptProps {
  firstName: string;
  orderId: string;
  productName: string;        // "Claude Mastery &mdash; Core Cohort"
  amount: string;             // "$297.00 AUD"
  paidOn: string;             // "27 April 2026"
  cohortStartDate: string;    // "1 June 2026"
  dashboardUrl: string;
}

export function paymentReceiptSubject(): string {
  return "Payment received - your seat in Claude Mastery is confirmed";
}

export function paymentReceiptHtml({ firstName, orderId, productName, amount, paidOn, cohortStartDate, dashboardUrl }: PaymentReceiptProps): string {
  const inner = `
    ${h1("Payment received")}
    ${p(`Thanks ${escapeHtml(firstName)} &mdash; your seat is locked in. Stripe will follow up with their automatic receipt for accounting; this email is your warm welcome.`)}
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0 8px;border:1px solid ${tokens.border};border-radius:12px;background:${tokens.surfaceMuted};">
      <tr><td style="padding:20px 24px 0;font-size:11px;color:${tokens.textFaint};font-weight:700;text-transform:uppercase;letter-spacing:0.08em;font-family:${tokens.font};">Order summary</td></tr>
      <tr><td style="padding:8px 24px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          ${statRow("Product", escapeHtml(productName))}
          ${statRow("Amount", escapeHtml(amount))}
          ${statRow("Paid on", escapeHtml(paidOn))}
          ${statRow("Order ID", `<span style="font-family:ui-monospace,monospace;font-size:12px;color:${tokens.textBody};">${escapeHtml(orderId)}</span>`)}
          ${statRow("Cohort start", `<strong style="color:${tokens.text};">${escapeHtml(cohortStartDate)}</strong>`)}
        </table>
      </td></tr>
    </table>
    <div style="margin:24px 0 0;">
      ${primaryButton(dashboardUrl, "Open your dashboard &rarr;")}
    </div>
    ${divider()}
    <p style="margin:0;font-size:13px;color:${tokens.textFaint};line-height:1.6;font-family:${tokens.font};">Questions about your order? Reply to this email &mdash; it goes straight to AJ at Commercial Growth.</p>
  `;
  return brandShell(inner);
}

export function paymentReceiptText({ firstName, orderId, productName, amount, paidOn, cohortStartDate, dashboardUrl }: PaymentReceiptProps): string {
  return `Payment received

Thanks ${firstName} - your seat is locked in.

Order summary
Product:      ${productName}
Amount:       ${amount}
Paid on:      ${paidOn}
Order ID:     ${orderId}
Cohort start: ${cohortStartDate}

Open your dashboard: ${dashboardUrl}

Questions? Reply to this email - it goes straight to AJ.

- Commercial Growth Pty Ltd`;
}

function escapeHtml(s: string): string {
  const _m: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" };
  return String(s).replace(/[&<>"']/g, (c) => _m[c] ?? c);
}
