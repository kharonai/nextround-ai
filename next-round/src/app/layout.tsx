import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "NextHire - AI Mock Interviews",
  description: "Prepare for your next interview with AI-driven mock interviews and real-time feedback.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-darkest">{children}</body>
    </html>
  );
}
