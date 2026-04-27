import "server-only";
import { Resend } from "resend";
import {
  accountActivationHtml,
  accountActivationText,
  accountActivationSubject,
  type AccountActivationProps
} from "@/emails/account-activation";
import {
  magicLinkSigninHtml,
  magicLinkSigninText,
  magicLinkSigninSubject,
  type MagicLinkSigninProps
} from "@/emails/magic-link-signin";
import {
  gradeReadyHtml,
  gradeReadyText,
  gradeReadySubject,
  type GradeReadyProps
} from "@/emails/grade-ready";
import {
  capstonePassedHtml,
  capstonePassedText,
  capstonePassedSubject,
  type CapstonePassedProps
} from "@/emails/capstone-passed";
import {
  paymentReceiptHtml,
  paymentReceiptText,
  paymentReceiptSubject,
  type PaymentReceiptProps
} from "@/emails/payment-receipt";
import {
  weeklyProgressHtml,
  weeklyProgressText,
  weeklyProgressSubject,
  type WeeklyProgressProps
} from "@/emails/weekly-progress";

export type EmailTemplate =
  | "account_activation"
  | "magic_link_signin"
  | "grade_ready"
  | "capstone_passed"
  | "payment_receipt"
  | "weekly_progress";

// Discriminated map: each template name → its props type.
export interface EmailParamsMap {
  account_activation: AccountActivationProps;
  magic_link_signin: MagicLinkSigninProps;
  grade_ready: GradeReadyProps;
  capstone_passed: CapstonePassedProps;
  payment_receipt: PaymentReceiptProps;
  weekly_progress: WeeklyProgressProps;
}

const FROM = "Claude Mastery <noreply@commercialgrowth.com.au>";
const REPLY_TO = "hello@commercialgrowth.com.au";

let _resend: Resend | null = null;
function client(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY is not set");
    _resend = new Resend(key);
  }
  return _resend;
}

export interface SendEmailResult {
  id: string | null;
  latencyMs: number;
}

export async function sendEmail<T extends EmailTemplate>(
  template: T,
  to: string | string[],
  params: EmailParamsMap[T]
): Promise<SendEmailResult> {
  const start = Date.now();
  const { subject, html, text } = render(template, params);
  const recipients = Array.isArray(to) ? to : [to];
  const { data, error } = await client().emails.send({
    from: FROM,
    to: recipients,
    replyTo: REPLY_TO,
    subject,
    html,
    text
  });
  const latencyMs = Date.now() - start;
  if (error) {
    console.error("[email-service] send failed", { template, to: recipients, latencyMs, error });
    throw new Error(`Resend error (${template}): ${JSON.stringify(error)}`);
  }
  console.log("[email-service] sent", { template, to: recipients, id: data?.id ?? null, latencyMs });
  return { id: data?.id ?? null, latencyMs };
}

function render<T extends EmailTemplate>(
  template: T,
  params: EmailParamsMap[T]
): { subject: string; html: string; text: string } {
  switch (template) {
    case "account_activation": {
      const p = params as AccountActivationProps;
      return { subject: accountActivationSubject(), html: accountActivationHtml(p), text: accountActivationText(p) };
    }
    case "magic_link_signin": {
      const p = params as MagicLinkSigninProps;
      return { subject: magicLinkSigninSubject(), html: magicLinkSigninHtml(p), text: magicLinkSigninText(p) };
    }
    case "grade_ready": {
      const p = params as GradeReadyProps;
      return { subject: gradeReadySubject(p), html: gradeReadyHtml(p), text: gradeReadyText(p) };
    }
    case "capstone_passed": {
      const p = params as CapstonePassedProps;
      return { subject: capstonePassedSubject(), html: capstonePassedHtml(p), text: capstonePassedText(p) };
    }
    case "payment_receipt": {
      const p = params as PaymentReceiptProps;
      return { subject: paymentReceiptSubject(), html: paymentReceiptHtml(p), text: paymentReceiptText(p) };
    }
    case "weekly_progress": {
      const p = params as WeeklyProgressProps;
      return { subject: weeklyProgressSubject(), html: weeklyProgressHtml(p), text: weeklyProgressText(p) };
    }
    default: {
      const _exhaustive: never = template;
      throw new Error(`Unknown email template: ${String(_exhaustive)}`);
    }
  }
}
