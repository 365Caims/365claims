"use client";

import Link from "next/link";
import {
  Car,
  Wrench,
  Shield,
  Briefcase,
  Users,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

/* ======================================================
   PAGE
====================================================== */

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-slate-900 relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full bg-white border border-slate-200 text-sky-700 shadow-sm tracking-wide">
            Real scenarios · Real outcomes
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-[1.18] tracking-tight relative pb-3">
            Real accident situations we resolve for UK drivers
            <span className="absolute left-0 bottom-0 h-[3px] w-16 bg-sky-600 rounded-full" />
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            From family cars to licensed PCO and work-essential vans, every accident
            brings uncertainty. These case studies show how our team steps in with
            clarity, structure and fast action — keeping drivers mobile while we
            handle everything behind the scenes.
          </p>
        </motion.header>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />

        {/* ================= GRID ================= */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c) => {
            const Icon = c.icon;

            return (
              <article
                key={c.title}
                className="
                  group relative rounded-3xl border border-slate-200
                  bg-white/90 backdrop-blur-sm p-7
                  shadow-sm hover:shadow-2xl hover:-translate-y-1.5
                  transition-all duration-500
                "
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-inner">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {c.title}
                  </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-[14px] text-slate-600 leading-relaxed">
                  {c.description}
                </p>

                {/* Divider */}
                <div className="mt-5 h-px w-full bg-slate-200/60" />

                {/* DETAILS */}
                <div className="mt-5 space-y-3 text-[14px] text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold text-slate-900">
                      What we arranged:
                    </span>{" "}
                    {c.arranged}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900">
                      Outcome:
                    </span>{" "}
                    <span className="text-emerald-600 font-semibold">
                      {c.outcomeHighlight}
                    </span>{" "}
                    {c.outcomeRest}
                  </p>
                </div>
              </article>
            );
          })}
        </motion.section>

        {/* ================= DISCLAIMER ================= */}
        <p className="mt-16 text-xs text-slate-500 max-w-3xl leading-relaxed">
          These scenarios are anonymised for client privacy. Every case is unique —
          we assess your situation individually and explain the correct options
          before arranging anything.
        </p>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-600 px-10 py-12 text-white shadow-xl shadow-sky-900/20"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Need support after a recent accident?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/90 max-w-xl leading-relaxed">
            Our specialists can confirm eligibility, outline your next steps, and
            keep you mobile while your claim progresses — with no pressure and no
            upfront costs.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href="tel:+44 7440 138946"
              className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 px-7 py-3 font-semibold shadow-lg hover:bg-slate-100 transition"
            >
              Call +44 7440 138946
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Request a call-back
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ======================================================
   DATA (icons as references — NOT JSX)
====================================================== */

const cases = [
  {
    title: "Family car hit from behind at traffic lights",
    icon: Users,
    description:
      "A family hatchback was struck from behind with children onboard. The parents were unsure about safety and concerned about potential insurance impact.",
    arranged:
      "same-day recovery, safety assessment and a like-for-like family replacement vehicle.",
    outcomeHighlight: "No Claims Bonus protected",
    outcomeRest: "and repairs managed end-to-end with full updates.",
  },
  {
    title: "Tradesperson’s van damaged on a roundabout",
    icon: Wrench,
    description:
      "A self-employed electrician was side-swiped by a driver who failed to give way, leaving his van undriveable and work commitments at risk.",
    arranged:
      "scene recovery and a suitable replacement van to keep business operating without interruption.",
    outcomeHighlight: "Zero downtime",
    outcomeRest: "and repair stages handled with minimal disruption.",
  },
  {
    title: "Private hire driver taken off the road mid-job",
    icon: Car,
    description:
      "A licensed PCO driver was struck while transporting a passenger, creating an immediate loss of income without a compliant vehicle.",
    arranged:
      "a like-for-like licensed PCO replacement and support documenting lost revenue.",
    outcomeHighlight: "Back earning the same day",
    outcomeRest: ", preventing cancellations and income loss.",
  },
  {
    title: "Courier involved in multi-vehicle collision",
    icon: Briefcase,
    description:
      "A courier’s van was part of a multi-vehicle collision and likely a total loss. They needed clear guidance on valuation and continuity.",
    arranged:
      "full recovery, replacement hire, and guidance through the entire write-off and settlement process.",
    outcomeHighlight: "Fair valuation secured",
    outcomeRest: "with support sourcing a replacement vehicle.",
  },
  {
    title: "Hit by an uninsured or untraced driver",
    icon: Shield,
    description:
      "A driver was struck by a vehicle that fled the scene. They believed no claim was possible without third-party details.",
    arranged:
      "correct reporting steps and guided support through the MIB (Motor Insurers’ Bureau).",
    outcomeHighlight: "Correct claim route identified",
    outcomeRest: "with expectations set clearly at each stage.",
  },
  {
    title: "Low-speed car park collision causing high anxiety",
    icon: AlertTriangle,
    description:
      "A newly-qualified driver experienced a minor collision but felt overwhelmed dealing with insurers and next steps.",
    arranged:
      "assistance with evidence, insurer communication and coordinating approved repairs.",
    outcomeHighlight: "Policy impact avoided",
    outcomeRest: "and confidence restored.",
  },
];
