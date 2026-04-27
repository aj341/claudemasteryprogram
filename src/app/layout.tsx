import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Mastery Program",
  description: "Master Claude in 6 weeks. Personalised graded course by Commercial Growth.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
