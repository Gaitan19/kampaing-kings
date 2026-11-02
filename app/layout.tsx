import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Vehicle Services Group — Outbound Call Script & Objection Playbook",
  description:
    "Interactive outbound call center agent cockpit for Vehicle Extended Warranty campaigns. Live dynamic script personalization, step-by-step objection handling, rebuttals matrix, and licensed Service Advisor transfer protocols.",
  keywords: [
    "Vehicle Extended Warranty",
    "Call Center Script",
    "Outbound Telemarketing",
    "Objection Handling Matrix",
    "Rebuttals Guide",
    "Vehicle Services Group",
    "Service Advisor Transfer",
  ],
  authors: [{ name: "Vehicle Services Group Training Dept" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vehicle Extended Warranty — Outbound Agent Call Script & Rebuttals",
    description:
      "Interactive outbound telemarketing guide with live personalized scripts and tactical rebuttals for vehicle warranty campaigns.",
    type: "website",
    locale: "en_US",
    siteName: "Vehicle Services Group Call Center Playbook",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Extended Warranty — Outbound Agent Playbook",
    description:
      "High-conversion call center outbound script and objection rebuttals matrix for vehicle warranty campaigns.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-100 text-slate-900 antialiased selection:bg-lime-400 selection:text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
