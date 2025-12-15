"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Info,
  Car,
  FileText,
  Shield,
  Wrench,
  Briefcase,
  HelpCircle,
} from "lucide-react";

/* ========================= */
/* TYPES */
/* ========================= */
type FAQItem = { q: string; a: string };
type FAQSection = {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
  delay?: number;
};

/* ========================= */
/* PAGE COMPONENT */
/* ========================= */
export default function FAQPage() {
  const faqData: FAQSection[] = [
    {
      title: "General Accident Questions",
      icon: <Info className="h-5 w-5 text-sky-600" />,
      delay: 0.05,
      items: [
        {
          q: "What should I do immediately after an accident?",
          a: "Ensure everyone is safe, call emergency services if necessary, and move to a safe area. Capture photos, exchange details, and gather witness information — these steps significantly strengthen your claim.",
        },
        {
          q: "Do I need to call my insurer first?",
          a: "Not always. In many non-fault cases, contacting us first avoids unnecessary excess payments and ensures the claim progresses quickly with the correct support from day one.",
        },
        {
          q: "What information should I collect?",
          a: "Driver details, vehicle registrations, insurer information, photos, witness statements, dashcam footage and any relevant road markings or conditions.",
        },
        {
          q: "Should I take photos?",
          a: "Yes, photos are essential. Capture close-ups of the damage, wider angles of the scene, and anything else relevant to the incident.",
        },
      ],
    },

    {
      title: "Claims Process",
      icon: <FileText className="h-5 w-5 text-sky-600" />,
      delay: 0.1,
      items: [
        {
          q: "How do I start a non-fault claim?",
          a: "Call us or complete our form. We assess eligibility within minutes and explain every step clearly before progressing anything.",
        },
        {
          q: "How long does the process take?",
          a: "Timescales vary depending on liability decisions and repair duration. We proactively manage each stage to avoid delays.",
        },
        {
          q: "Who contacts the other party’s insurer?",
          a: "We do — managing all communication, evidence submission, and negotiation so you are never left chasing updates.",
        },
      ],
    },

    {
      title: "Replacement Vehicle",
      icon: <Car className="h-5 w-5 text-sky-600" />,
      delay: 0.15,
      items: [
        {
          q: "Will I get a replacement vehicle?",
          a: "Yes — a like-for-like vehicle is provided in valid non-fault cases, whether you drive a family car, prestige vehicle, EV, van or PCO taxi.",
        },
        {
          q: "How long can I keep it?",
          a: "For the full duration of repairs or until your settlement is finalised. You will not be left without mobility.",
        },
        {
          q: "Does it cost anything?",
          a: "No — costs are recovered from the at-fault insurer. No excess or upfront fees apply when using our service.",
        },
      ],
    },

    {
      title: "Repairs",
      icon: <Wrench className="h-5 w-5 text-sky-600" />,
      delay: 0.2,
      items: [
        {
          q: "Who repairs my vehicle?",
          a: "Approved repair centres that follow manufacturer and insurance standards. Your vehicle is restored with safety and quality in mind.",
        },
        {
          q: "Are repairs guaranteed?",
          a: "Yes — repairs typically include warranties for parts and workmanship.",
        },
        {
          q: "What if my vehicle is written off?",
          a: "You will receive a fair market valuation. We guide you through each step to ensure a transparent outcome.",
        },
      ],
    },

    {
      title: "Insurance & Costs",
      icon: <Shield className="h-5 w-5 text-sky-600" />,
      delay: 0.25,
      items: [
        {
          q: "Will this affect my No Claims Bonus?",
          a: "In correctly assessed non-fault cases, your No Claims Bonus should remain protected.",
        },
        {
          q: "Do I pay an excess?",
          a: "No — you do not pay an excess when the claim is processed through us in a valid non-fault scenario.",
        },
        {
          q: "Will my premium increase?",
          a: "Insurers vary, but non-fault incidents generally have minimal impact.",
        },
      ],
    },

    {
      title: "Personal Injury & Legal",
      icon: <Briefcase className="h-5 w-5 text-sky-600" />,
      delay: 0.3,
      items: [
        {
          q: "Can I claim for injuries?",
          a: "Yes — we can introduce you to regulated solicitors who assess injury claims and arrange appropriate treatment.",
        },
        {
          q: "Do I need to attend court?",
          a: "Almost never. Most claims settle long before court involvement.",
        },
      ],
    },

    {
      title: "Special Circumstances",
      icon: <HelpCircle className="h-5 w-5 text-sky-600" />,
      delay: 0.35,
      items: [
        {
          q: "Can you help with uninsured drivers?",
          a: "Yes — we support claims through the Motor Insurers’ Bureau (MIB) where appropriate.",
        },
        {
          q: "Can passengers claim?",
          a: "Yes — passengers may be entitled to compensation regardless of who was driving.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-5 py-20">
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[13px] text-sky-700 tracking-wide">
          Clear Answers for UK Drivers
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          Everything you need to know about accident support, insurance, replacement
          vehicles and the claims process — explained clearly and simply.
        </p>
      </motion.div>

      {/* ========================= */}
      {/* FAQ SECTIONS */}
      {/* ========================= */}
      <div className="space-y-10">
        {faqData.map((section, idx) => (
          <FAQSectionBlock key={idx} {...section} />
        ))}
      </div>

      {/* ========================= */}
      {/* CTA */}
      {/* ========================= */}
      <div className="mt-20 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-600 p-10 text-white shadow-2xl">
        <h2 className="text-2xl font-semibold">
          Still need help or have a specific question?
        </h2>
        <p className="mt-2 text-white/90 text-sm leading-relaxed max-w-xl">
          Our UK team is available to provide clear guidance and confirm your options —
          with no pressure or upfront costs.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm">
          <a
            href="tel:+44 7440 138946"
            className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 px-7 py-3 font-semibold shadow-lg hover:bg-slate-100 transition"
          >
            Call +44 7440 138946
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Request a call-back
          </a>
        </div>
      </div>
    </div>
  );
}

/* ========================= */
/* SECTION BLOCK */
/* ========================= */
function FAQSectionBlock({ title, icon, items, delay = 0 }: FAQSection) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="
        bg-white/95 backdrop-blur-sm 
        p-7 rounded-3xl shadow-md border border-slate-200
      "
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-inner">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item, i) => (
          <FAQItemBlock key={i} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

/* ========================= */
/* INDIVIDUAL FAQ ITEM */
/* ========================= */
function FAQItemBlock({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  const [helpful, setHelpful] = useState<null | boolean>(null);

  return (
    <div className="
      border border-slate-200 rounded-xl overflow-hidden bg-white 
      transition
    ">
      {/* Question Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between 
          p-4 text-left font-medium text-slate-800
          hover:bg-slate-50 transition
        "
      >
        {item.q}
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Answer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 pb-4 text-slate-600 text-sm leading-relaxed"
          >
            <p className="mb-4">{item.a}</p>

            {/* Feedback */}
            <div className="flex gap-3 text-xs">
              <button
                onClick={() => setHelpful(true)}
                className={`
                  flex items-center gap-1 px-3 py-1 rounded-full border 
                  ${
                    helpful === true
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "border-slate-300 text-slate-600"
                  }
                `}
              >
                <Check size={12} /> Helpful
              </button>

              <button
                onClick={() => setHelpful(false)}
                className={`
                  flex items-center gap-1 px-3 py-1 rounded-full border 
                  ${
                    helpful === false
                      ? "bg-red-500 text-white border-red-500"
                      : "border-slate-300 text-slate-600"
                  }
                `}
              >
                <X size={12} /> Not helpful
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
