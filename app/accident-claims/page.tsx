"use client";

import { motion } from "framer-motion";
import { Check, Car, Wrench, Phone, Shield, ArrowRight } from "lucide-react";

export default function AccidentClaimsPage() {
  return (
    <div className="bg-[#F2F6FC] text-slate-900 pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====================================================== */}
        {/* HERO SECTION */}
        {/* ====================================================== */}
        <section className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 text-[13px] text-slate-600"
          >
            Expert UK Accident Support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight mt-8 leading-[1.15]"
          >
            Non-fault accident claims, handled with{" "}
            <span className="text-sky-600">precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Premium end-to-end accident management for UK drivers — from recovery and replacements 
            to repairs, evidence and settlement. One team coordinating everything, end-to-end.
          </motion.p>

          {/* BADGES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center gap-3 flex-wrap text-sm"
          >
            <Tag text="24/7 UK Support" />
            <Tag text="Nationwide Recovery" />
            <Tag text="Approved Repair Network" />
            <Tag text="Like-for-like Replacement" />
          </motion.div>
        </section>

        {/* ====================================================== */}
        {/* KEY BENEFITS — Animated Stagger */}
        {/* ====================================================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-20 grid gap-6 sm:grid-cols-3"
        >
          <BenefitCard
            icon={<Car className="h-6 w-6 text-sky-600" />}
            title="Like-for-like replacements"
            desc="Stay mobile with prestige, EV, family or work-essential vehicles arranged fast."
          />
          <BenefitCard
            icon={<Wrench className="h-6 w-6 text-sky-600" />}
            title="Recovery & approved repairs"
            desc="Immediate nationwide recovery and repairs via our vetted, trusted UK network."
          />
          <BenefitCard
            icon={<Phone className="h-6 w-6 text-sky-600" />}
            title="We deal with insurers"
            desc="We negotiate directly with insurers, protecting your time and your rights."
          />
        </motion.section>

        {/* ====================================================== */}
        {/* WHY CHOOSE US */}
        {/* ====================================================== */}
        <section className="mt-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 relative pb-2">
              Why drivers choose <span className="text-sky-600">365Claims</span>
              <span className="absolute left-0 bottom-0 w-12 h-[3px] bg-sky-600 rounded-full"></span>
            </h2>

            <p className="mt-5 text-slate-600 text-sm leading-relaxed max-w-xl">
              We combine premium accident support with a transparent, stress-free process.
              Everything is organised for you — quickly, clearly and with complete fairness.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-slate-700">
              <ListItem text="Immediate eligibility checks with specialist assessors" />
              <ListItem text="Prestige, EV and work-essential hire vehicles" />
              <ListItem text="Proactive updates at every stage — zero chasing required" />
              <ListItem text="Dedicated case handler from day one" />
              <ListItem text="Clear, insurer-independent guidance" />
            </ul>
          </div>

          {/* OUR PROMISE — Glow + Gradient Accent */}
          <div className="relative">
            {/* Soft glow */}
            <div className="absolute inset-0 bg-sky-200/40 blur-2xl rounded-3xl -z-10" />

            <div className="relative rounded-3xl bg-white p-10 shadow-xl border border-slate-200">
              {/* Gradient bar */}
              <div className="absolute -top-[1px] left-0 right-0 h-[4px] bg-gradient-to-r from-sky-500 to-blue-600 rounded-t-3xl" />

              <h3 className="text-xl font-semibold text-slate-900">
                Our commitment to clarity & fairness
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                We protect your mobility, your time and your right to a fair settlement —
                without insurer pressure or confusing jargon.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm">
                <PromiseCard label="Transparent guidance" icon={<Shield className="h-5 w-5" />} />
                <PromiseCard label="No upfront fees" icon={<span className="font-bold">£</span>} />
                <PromiseCard label="Specialist negotiation" icon={<ArrowRight className="h-5 w-5" />} />
                <PromiseCard label="Dedicated handler" icon={<Check className="h-5 w-5" />} />
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* 4-STEP PROCESS */}
        {/* ====================================================== */}
        <section className="mt-24">
          <h2 className="text-3xl font-semibold text-center relative pb-3">
            A simple, structured <span className="text-sky-600">4-step process</span>
            <span className="block mx-auto mt-2 w-12 h-[3px] bg-sky-600 rounded-full" />
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="1"
              title="Initial assessment"
              desc="We confirm what happened and verify liability within minutes."
            />
            <ProcessCard
              number="2"
              title="Recovery & replacement"
              desc="Your vehicle is collected and a suitable replacement is delivered promptly."
            />
            <ProcessCard
              number="3"
              title="Repairs & documentation"
              desc="Approved repairers restore your vehicle while we handle all evidence."
            />
            <ProcessCard
              number="4"
              title="Settlement & support"
              desc="We secure a fair settlement and support you beyond completion."
            />
          </div>
        </section>

        {/* ====================================================== */}
        {/* TESTIMONIALS — Your Updated Version Included */}
        {/* ====================================================== */}
        <section className="mt-24">
          <h2 className="text-3xl font-semibold text-center relative pb-2">
            Real UK drivers, real outcomes
            <span className="block mx-auto mt-2 w-12 h-[3px] bg-sky-600 rounded-full" />
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Testimonial
              name="N. Haider"
              text="Replacement car delivered the same day — seamless communication."
              amount="£7,880 recovery secured"
            />
            <Testimonial
              name="T. Beoch"
              text="Repairs arranged instantly and consistent updates throughout."
              amount="£12,400 compensation"
            />
            <Testimonial
              name="A. Bird"
              text="Handled everything with insurers and protected my No Claims Bonus."
              amount="£4,150 settlement"
            />
          </div>
        </section>

        {/* ====================================================== */}
        {/* FINAL CTA */}
        {/* ====================================================== */}
        <section className="mt-28 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-600 p-12 text-white shadow-xl">
          <h2 className="text-3xl font-semibold">
            Need expert help after a non-fault accident?
          </h2>

          <p className="mt-3 text-white/90 text-sm sm:text-base max-w-2xl">
            Speak to our UK claims team now. We'll confirm eligibility, explain your options 
            clearly and begin supporting you immediately — no upfront cost.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href="tel:+44 7440 138946"
              className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 px-6 py-3 font-semibold shadow-lg hover:bg-slate-100"
            >
              Call +44 7440 138946
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Request a call-back
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

/* ====================================================== */
/* COMPONENTS */
/* ====================================================== */

function Tag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[12px] shadow-sm">
      {text}
    </span>
  );
}

function BenefitCard({ icon, title, desc }: any) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition"
    >
      <div>{icon}</div>
      <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </motion.div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="h-4 w-4 text-sky-600 mt-[2px]" />
      <span>{text}</span>
    </li>
  );
}

function PromiseCard({ label, icon }: any) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm">
      <div className="flex justify-center text-sky-600">{icon}</div>
      <p className="mt-2 text-sm font-semibold text-slate-800">{label}</p>
    </div>
  );
}

function ProcessCard({ number, title, desc }: any) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm text-center hover:shadow-md transition">
      <div className="mx-auto h-12 w-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold shadow-md">
        {number}
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Testimonial({ name, text, amount }: any) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 hover:shadow-xl hover:-translate-y-[2px] transition">
      <p className="text-sm text-slate-700 leading-relaxed">“{text}”</p>
      <div className="mt-4">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-xs text-slate-500">{amount}</div>
      </div>
    </div>
  );
}
