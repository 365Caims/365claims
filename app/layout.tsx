import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ======================================================
   METADATA (SERVER-SAFE)
====================================================== */
export const metadata: Metadata = {
  title: "365Claims — Premium Accident Support",
  description:
    "UK-wide non-fault accident support, recovery, replacement vehicles and claims handling.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

/* ======================================================
   VIEWPORT (themeColor FIX)
====================================================== */
export const viewport: Viewport = {
  themeColor: "#0EA5E9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[var(--page-bg)]
          text-slate-900
          relative
        `}
      >
        {/* ====================================================== */}
        {/* GLOBAL TOP BAR                                         */}
        {/* ====================================================== */}
        <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 UK accident helpline</span>
            </div>

            <div className="flex items-center gap-6">
              <span className="hidden sm:inline text-slate-300">
                Average callback under 30 minutes
              </span>
              <a href="tel:+44 7440 138946" className="font-semibold">
                Call free: +44 7440 138946
              </a>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* HEADER (CLIENT COMPONENT)                              */}
        {/* ====================================================== */}
        <Header />

        {/* ====================================================== */}
        {/* PAGE CONTENT                                           */}
        {/* ====================================================== */}
        {children}
      </body>
    </html>
  );
}
