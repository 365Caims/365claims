"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  // Lock body scroll when menu is open (iOS safe)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={onClose}
          />

          {/* MENU PANEL */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="
              fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-sm
              bg-white shadow-2xl
              flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
              <span className="text-sm font-semibold text-slate-900">
                Menu
              </span>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 hover:bg-slate-100 transition"
              >
                <X className="h-5 w-5 text-slate-700" />
              </button>
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col px-6 py-6 gap-5 text-[15px] font-medium text-slate-800">
              <Link href="/accident-claims" onClick={onClose}>Accident Claims</Link>
              <Link href="/about" onClick={onClose}>About</Link>
              <Link href="/case-studies" onClick={onClose}>Case Studies</Link>
              <Link href="/blog" onClick={onClose}>Advice Centre</Link>
              <Link href="/faq" onClick={onClose}>FAQ</Link>
              <Link href="/contact" onClick={onClose}>Contact</Link>
            </nav>

            {/* CTA */}
            <div className="mt-auto px-6 pb-8">
              <Link
                href="/#claim-form"
                onClick={onClose}
                className="
                  block w-full text-center
                  rounded-full bg-sky-600 text-white
                  py-3 font-semibold text-sm
                  shadow-lg shadow-sky-500/40
                  hover:bg-sky-500 transition
                "
              >
                Start your claim
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
