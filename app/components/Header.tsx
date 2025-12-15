"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Logo size={48} />
            <div className="-mt-0.5">
              <span className="block text-base sm:text-lg font-semibold text-slate-900">
                365Claims
              </span>
              <span className="block text-[11px] text-slate-500">
                Accident Claims Made Easy
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <Link href="/accident-claims">Accident Claims</Link>
            <Link href="/about">About</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/blog">Advice Centre</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>

            <Link
              href="/#claim-form"
              className="bg-sky-600 text-white font-semibold px-4 py-2 rounded-full text-xs"
            >
              Start your claim
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden border border-slate-300 text-slate-700 text-xs px-3 py-1 rounded-full"
          >
            Menu
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
