"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../components/Logo";

export default function AboutPage() {
  return (
    <div className="bg-[var(--page-bg)] text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ====================================================== */}
        {/* HERO — Polished Luxury */}
        {/* ====================================================== */}
        <section className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Logo size={72} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900"
          >
            Redefining accident support for UK drivers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl leading-relaxed tracking-[0.01em] text-slate-600"
          >
            We built <span className="text-sky-600 font-semibold">365Claims</span> to remove confusion,
            stress and uncertainty after an accident — providing clear guidance, rapid support and
            a service designed around real people.
          </motion.p>
        </section>


{/* ====================================================== */}
{/* WHO WE ARE — Premium Two Column */}
{/* ====================================================== */}
<section className="mt-28 grid gap-14 sm:grid-cols-2">

  <PremiumCard>
    <h2 className="section-heading font-bold text-slate-900 relative pb-2">
      A dedicated support partner — not just another claims company
  <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-sky-600 rounded-full"></span>
</h2>

    <p className="section-paragraph">
      When an accident happens, most drivers are left stressed, confused and unsure who to trust.
      We built a service designed to feel different — calm, structured and genuinely supportive.
    </p>

    <p className="section-paragraph">
      Our specialists step in immediately to remove uncertainty. We explain your options clearly,
      manage every conversation with insurers and keep your claim moving without delays.
    </p>

    <p className="section-paragraph">
      From recovery to replacement vehicles, we ensure you stay mobile while we handle the
      complexity in the background. With 365Claims, you never feel abandoned, pressured or left
      chasing updates — you feel guided, protected and fully informed at every stage.
    </p>
  </PremiumCard>


  <PremiumCard>
<h2 className="section-heading font-bold text-slate-900 relative pb-2">
  Why thousands of drivers trust 365Claims
  <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-sky-600 rounded-full"></span>
</h2>


    <p className="section-paragraph">
      Drivers choose 365Claims because we remove the uncertainty that normally surrounds accident
      support. Everything we do is built around clarity, speed and genuine care — with a service
      that feels personal, not transactional.
    </p>

    <p className="section-paragraph">
      Our process is designed to keep you informed and in control, while our team handles the
      heavy lifting behind the scenes. Whether you're a family driver or rely on your vehicle for
      work, we work proactively to protect your time, mobility and peace of mind.
    </p>

    <ul className="mt-6 space-y-3 text-[15px] text-slate-700 leading-relaxed">
      <Benefit>24/7 UK-based accident support</Benefit>
      <Benefit>Fast nationwide recovery & approved repairs</Benefit>
      <Benefit>Like-for-like replacement vehicles where eligible</Benefit>
      <Benefit>Clear explanations before you commit to anything</Benefit>
      <Benefit>Proactive updates — no chasing insurers</Benefit>
      <Benefit>Dedicated teams for families, commuters & professional drivers</Benefit>
    </ul>
  </PremiumCard>

</section>   


        {/* ====================================================== */}
        {/* TRUST STATS */}
        {/* ====================================================== */}
        <section className="mt-28 grid gap-6 sm:grid-cols-3">
          <Stat value="24/7" label="Accident Helpline" />
          <Stat value="Nationwide" label="Recovery & Repair Network" />
          <Stat value="4.9/5" label="Driver Satisfaction Rating" />
        </section>


        {/* ====================================================== */}
        {/* WHO WE HELP */}
        {/* ====================================================== */}
        <section className="mt-28">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Support tailored to every type of driver
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Whether your vehicle is essential for work or family life, our service adapts to your needs.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <InfoCard
              title="Families & everyday motorists"
              desc="We keep you mobile with suitable replacement vehicles and manage all communication with insurers — minimising disruption to daily life."
            />
            <InfoCard
              title="Tradespeople, couriers & professional drivers"
              desc="If your vehicle is your livelihood, downtime matters. Our partners support loss-of-earnings claims where eligible, ensuring continuity and protection."
            />
          </div>
        </section>


{/* ====================================================== */}
{/* OUR MISSION — Enhanced Luxury Agency Version */}
{/* ====================================================== */}
<section className="mt-32">
  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 relative inline-block">
    Our Mission
    <span className="absolute left-0 -bottom-2 w-14 h-1 bg-sky-600/70 rounded-full"></span>
  </h2>

  <p className="mt-5 text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
    Clarity when it matters. Confidence when you need it most. Support that actually feels supportive.
  </p>

  {/* PREMIUM QUOTE BOX */}
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="relative mt-12 p-7 sm:p-10 rounded-2xl bg-white 
      border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] 
      overflow-hidden"
  >
    {/* Soft highlight glow (subtle) */}
    <div className="absolute inset-0 bg-sky-100/30 blur-xl opacity-60 pointer-events-none" />

    {/* Accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-600 to-blue-600 rounded-l-xl" />

    <div className="relative pl-6 space-y-4">
      <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
        In the moments after a collision, clarity isn’t a luxury — it’s essential.
      </p>

      <p className="text-sm sm:text-[1.05rem] font-medium leading-relaxed text-slate-800">
        <span className="text-sky-700 font-semibold">
          Our commitment is straightforward: no pressure, no uncertainty — only expert guidance and
          fast, decisive action.
        </span>
      </p>
    </div>
  </motion.div>

  {/* VALUES GRID */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.12, duration: 0.45 },
      },
    }}
    className="mt-14 grid gap-7 sm:grid-cols-3"
  >
    <ValueCard
      icon="✨"
      title="Clarity"
      desc="We simplify complex situations with transparent guidance and clear next steps."
    />
    <ValueCard
      icon="⚡"
      title="Speed"
      desc="Recovery, replacement vehicles and updates delivered with urgency."
    />
    <ValueCard
      icon="🤝"
      title="Integrity"
      desc="No hidden agendas — just honest support focused on your best outcome."
    />
  </motion.div>
</section>


        {/* ====================================================== */}
        {/* IMAGE BREAK — Full Width Premium */}
        {/* ====================================================== */}
        <section className="mt-28">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="relative w-full h-[360px] sm:h-[460px] md:h-[540px]">
              <Image
                src="/images/caronrecovery.jpg"
                alt="Vehicle being recovered after an accident"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* CTA */}
        {/* ====================================================== */}
        <section className="mt-32 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-600 text-white p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Speak to a real specialist today
          </h2>

          <p className="mt-4 text-slate-100/90 max-w-xl text-lg leading-relaxed">
            Unsure what to do after your accident? We’ll explain everything clearly and help you choose
            the right next step.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href="tel:+44 7440 138946"
              className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition"
            >
              Call +44 7440 138946
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 font-semibold hover:bg-white/10 transition"
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

function PremiumCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl border border-slate-200 bg-white/90 
        p-10 shadow-md hover:shadow-xl transition leading-relaxed
        space-y-4
      "
    >
      {children}
    </motion.div>
  );
}

function Benefit({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-sky-600 text-xl leading-none">✓</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm hover:shadow-md transition"
    >
      <div className="text-3xl font-bold text-sky-600">{value}</div>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </motion.div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ValueCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="rounded-2xl bg-white/90 border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mt-2">{desc}</p>
    </motion.div>
  );
}
