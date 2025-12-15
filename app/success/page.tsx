"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Home,
  Clock,
  ClipboardCheck,
  Car,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";


/* =======================================================
   UTIL: Staggered item animation
======================================================= */
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.45 },
  }),
};

/* =======================================================
   PAGE COMPONENT
======================================================= */
export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-slate-900 flex items-center justify-center px-6 py-24 relative">

      {/* Soft top glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(90,140,255,0.22),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative max-w-2xl mx-auto text-center"
      >

        {/* =======================================================
           PREMIUM SUCCESS ICON
        ======================================================= */}
        <motion.div
          initial={{ scale: 0.82, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55 }}
          className="relative inline-flex items-center justify-center mb-8"
        >
          <div className="absolute inset-0 h-28 w-28 rounded-full bg-emerald-300/20 blur-2xl" />
          <div className="absolute inset-0 h-24 w-24 rounded-full border-2 border-emerald-400/40" />

          <div className="relative h-24 w-24 rounded-full bg-emerald-500/15 border border-emerald-400 shadow-lg flex items-center justify-center">
            <CheckCircle2 className="h-14 w-14 text-emerald-600" />
          </div>

          {/* Ambient bottom shadow */}
          <div className="absolute -bottom-4 h-5 w-24 bg-emerald-500/20 blur-xl rounded-full" />
        </motion.div>

        {/* =======================================================
           TITLE
        ======================================================= */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-snug">
          Thank you — your details have been received.
        </h1>


        {/* =======================================================
           PROGRESS DOTS
        ======================================================= */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <ProgressDot delay={0} />
          <ProgressDot delay={0.2} />
          <ProgressDot delay={0.4} />
        </div>

        <p className="mt-3 text-sky-600 text-xs tracking-wide font-medium">
          Our team is reviewing your details
        </p>

        {/* =======================================================
           INTRO TEXT
        ======================================================= */}
        <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          A member of the 365Claims team will contact you shortly to confirm what happened  
          and guide you through your next steps with complete clarity and zero pressure.
        </p>

        {/* =======================================================
           NEXT STEPS — PREMIUM CARD
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="
            mt-12 bg-white/90 backdrop-blur 
            border border-slate-200 rounded-3xl
            shadow-md shadow-slate-200/50 p-8 text-left relative
          "
        >
          {/* Accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-500 to-blue-600 rounded-l-3xl" />

          <h2 className="text-lg font-semibold text-slate-900 mb-6">
            What happens next?
          </h2>

          <ul className="space-y-6 text-sm text-slate-700 leading-relaxed">

            {/* Step 1 */}
            <motion.li
              custom={0}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-3"
            >
              <Clock className="h-5 w-5 text-sky-600 mt-0.5" />
              <p>
                <strong className="text-slate-900">We call you back promptly.</strong>{" "}
                Our team aims to respond within{" "}
                <span className="text-emerald-600 font-medium">30–60 minutes</span>{" "}
                during operating hours.
              </p>
            </motion.li>

            {/* Divider */}
            <div className="h-px w-full bg-slate-200/60" />

            {/* Step 2 */}
            <motion.li
              custom={1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-3"
            >
              <ClipboardCheck className="h-5 w-5 text-sky-600 mt-0.5" />
              <p>
                <strong className="text-slate-900">We confirm key details.</strong>{" "}
                We review what happened, check eligibility and answer any questions  
                about insurers, liability or your No Claims Bonus.
              </p>
            </motion.li>

            {/* Divider */}
            <div className="h-px w-full bg-slate-200/60" />

            {/* Step 3 */}
            <motion.li
              custom={2}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-3"
            >
              <Car className="h-5 w-5 text-sky-600 mt-0.5" />
              <p>
                <strong className="text-slate-900">We outline your options clearly.</strong>{" "}
                If eligible, we explain recovery, repairs, replacement vehicles and  
                the process — before you agree to anything.
              </p>
            </motion.li>

          </ul>
        </motion.div>

        {/* =======================================================
           URGENT NOTE
        ======================================================= */}
        <p className="mt-8 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
          If your situation is urgent and you haven’t heard from us shortly,  
          please call our helpline so we can prioritise your case.
        </p>

        {/* =======================================================
           CTA BUTTONS
        ======================================================= */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm">

          <a
            href="tel:+44 7440 138946"
            className="
              inline-flex items-center justify-center gap-2
              rounded-full bg-sky-600 hover:bg-sky-500 
              text-white px-7 py-3 font-semibold shadow-md shadow-sky-600/30 
              transition
            "
          >
            <Phone className="h-4 w-4" /> Call +44 7440 138946
          </a>

          <a
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              rounded-full border border-slate-300 
              text-slate-700 hover:border-sky-500 hover:text-sky-600
              px-7 py-3 font-semibold transition
            "
          >
            <Home className="h-4 w-4" /> Back to homepage
          </a>
        </div>

        {/* =======================================================
           WHATSAPP CTA
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
          className="
            mt-10 mx-auto bg-white/95 backdrop-blur 
            border border-slate-200 rounded-2xl shadow-sm p-5 
            max-w-sm flex items-center gap-4
          "
        >
          <div className="h-12 w-12 rounded-full bg-emerald-500/15 border border-emerald-400 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-emerald-600" />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">Prefer WhatsApp?</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Message our team instantly for quick updates or questions.
            </p>
          </div>

          <a
            href="https://wa.me/447440138946"
            target="_blank"
            className="ml-auto text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition inline-flex items-center gap-1"
          >
            Chat <ArrowRight className="h-3 w-3" />
          </a>
        </motion.div>

        {/* =======================================================
           FOOTNOTE
        ======================================================= */}
        <p className="mt-10 text-[11px] text-slate-500 leading-relaxed max-w-sm mx-auto">
          If you need to update your information, mention it when we call or email{" "}
          <a href="mailto:help@365claims.uk" className="text-sky-600 hover:text-sky-500">
            help@365claims.uk
          </a>.
        </p>
      </motion.div>
    </div>
  );
}

/* =======================================================
   PROGRESS DOT COMPONENT
======================================================= */
function ProgressDot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="h-2.5 w-2.5 rounded-full bg-sky-500"
      animate={{ opacity: [0.35, 1, 0.35] }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}
