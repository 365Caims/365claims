"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";


import QuickClaimForm from "./components/QuickClaimForm";
import TestimonialSlider from "./components/TestimonialSlider";
import PremiumAccordion from "./components/PremiumAccordion";
import Logo from "./components/Logo";

/* ============================================================
   MAIN HOMEPAGE COMPONENT
============================================================ */
export default function Homepage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-slate-900 flex flex-col">
      <main className="flex-1">
        {/* ============================================ */}
        {/* STICKY MINI NAV */}
        {/* ============================================ */}
        <StickyMiniNav />

        {/* ============================================ */}
        {/* HERO SECTION WITH PARALLAX + ANIMATION */}
        {/* ============================================ */}
        <section className="relative overflow-hidden border-b border-slate-100">
          {/* Animated gradient overlay */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-br from-sky-400/10 via-blue-300/10 to-purple-300/10 
              animate-gradient pointer-events-none
            "
          />

          {/* Parallax background image */}
          <ParallaxBG />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid gap-12 lg:grid-cols-2 items-start">
            {/* LEFT — Brand + headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand row with logo */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-white/70 shadow-sm flex items-center justify-center">
                  <Logo size={34} />
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                    365Claims
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Premium Accident Support • UK-wide
                  </p>
                </div>
              </div>

              {/* Live-status pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[11px] text-slate-600 mb-4 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Non-fault accident? We handle everything.</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-semibold tracking-tight text-slate-900">
                Premium accident support,{" "}
                <span className="text-sky-600">365 days a year.</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                UK-wide recovery, like-for-like replacement vehicles and
                approved repairs. We deal with insurers so you can focus on
                getting back to normal.
              </p>

              {/* CTA Buttons */}
<div className="mt-6 flex flex-wrap gap-3">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
    <Link
      href="#claim-form"
      className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white"
    >
      Start your claim now
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
    <Link
      href="#how"
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm text-slate-800"
    >
      See how it works
    </Link>
  </motion.div>
</div>



              {/* Stats */}
              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                <Stat label="Client satisfaction" value="99.5%" />
                <Stat label="Recovery success" value="100%" />
                <Stat label="Avg callback" value="< 30 mins" />
                <Stat label="UK coverage" value="Nationwide" />
              </dl>
            </motion.div>

            {/* RIGHT — Claim Form */}
<motion.div
  id="claim-form"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/70 p-6 sm:p-7"
  layout="position"     // 🟢 Important: prevents re-mounts
>
  <QuickClaimForm variant="full" submitTo="/api/homepage-lead" />
</motion.div>


          </div>
        </section>

        {/* ============================================ */}
        {/* TRUST STRIP */}
        {/* ============================================ */}
        <section className="border-t border-b border-slate-200 bg-gradient-to-r from-[#0D1F33] to-[#0A1526] text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-yellow-400 text-lg sm:text-xl">
                ★★★★★
              </div>
              <div className="text-sm sm:text-base font-medium text-white/90">
                Rated <span className="font-semibold text-white">4.9/5</span>{" "}
                by UK drivers
              </div>

              <span className="ml-0 sm:ml-3 mt-2 sm:mt-0 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] backdrop-blur whitespace-nowrap">
                Verified claims support
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:gap-4 justify-center">
              <TrustPill icon="🛡️" text="Protect your No Claims Bonus" />
              <TrustPill icon="🚗" text="Like-for-like replacement vehicles" />
              <TrustPill icon="🔧" text="Approved UK-wide repair network" />
            </div>
          </div>
        </section>

{/* ============================================ */}
{/* HOW IT WORKS */}
{/* ============================================ */}
<section
  id="how"
  className="relative py-14 sm:py-16 scroll-mt-24 overflow-hidden"
>
   {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
      How it works
    </h2>

    <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
      A simple four-step process designed to remove stress from your accident.
    </p>

    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <Step
        number={1}
        title="Contact us"
        desc="Submit the form or call. We'll confirm the key details."
      />
      <Step
        number={2}
        title="Recover & replace"
        desc="We arrange recovery and a like-for-like replacement vehicle."
      />
      <Step
        number={3}
        title="Repair & manage"
        desc="Your vehicle goes to an approved repairer while we deal with insurers."
      />
      <Step
        number={4}
        title="Settle & close"
        desc="We support you until your case is fully resolved and closed."
      />
    </div>
  </div>
</section>



        {/* ============================================ */}
        {/* SERVICES */}
        {/* ============================================ */}
        <section
          id="services"
          className="bg-white border-t border-slate-200 py-14 sm:py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Services for UK drivers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Everything is built around keeping you mobile and minimising
              disruption after a non-fault accident.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="Non-fault accident management"
                desc="End-to-end support from first call to settlement, including liaison with insurers."
              />
              <ServiceCard
                title="Replacement vehicles"
                desc="Like-for-like replacement vehicles where eligible, including family, prestige and PCO."
              />
              <ServiceCard
                title="Recovery & approved repairs"
                desc="UK-wide recovery and repairs via approved garages, with updates at each key stage."
              />
              <ServiceCard
                title="Total loss assistance"
                desc="Support with valuations, settlement and getting you back into a suitable vehicle."
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* TESTIMONIALS — SLIDER + GRID */}
        {/* ============================================ */}
        <section
          id="testimonials"
          className="bg-[var(--section-muted)] border-y border-slate-200 py-14 sm:py-16 scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Success stories from UK drivers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              A snapshot of real claims where we kept people mobile and removed
              the stress of dealing with insurers.
            </p>

            {/* Premium Slider */}
            <div className="mt-8">
              <TestimonialSlider
                items={[
                  {
                    text:
                      "My car was undriveable after a side impact. They arranged recovery within an hour and I had a replacement car delivered the next morning.",
                    name: "Emily Roberts",
                    tag: "Family SUV • Non-fault side impact",
                    amount: "£7,400 repair + courtesy vehicle",
                    stars: 5,
                  },
                  {
                    text:
                      "Genuinely the smoothest accident process I’ve ever experienced. No stress, no chasing, they handled everything.",
                    name: "Michael Jones",
                    tag: "Motorway shunt • Company car",
                    amount: "£6,200 recovery",
                    stars: 5,
                  },
                  {
                    text:
                      "I rely on my car for work every day — they sorted a like-for-like replacement van instantly. Brilliant service.",
                    name: "K. Ahmed",
                    tag: "Self-employed • Work van",
                    amount: "Loss-of-use prevented",
                    stars: 4.5,
                  },
                  {
                    text:
                      "The team were incredibly reassuring and made the entire process feel simple. Updates were clear and constant.",
                    name: "Lauren Mitchell",
                    tag: "Rear-end collision",
                    amount: "£12,950 settlement",
                    stars: 4.5,
                  },
                  {
                    text:
                      "From the moment I called, everything was handled professionally. The replacement vehicle arrived spotless.",
                    name: "Harry Bennett",
                    tag: "Hit while parked",
                    amount: "£8,800 recovery",
                    stars: 5,
                  },
                  {
                    text:
                      "Protecting my No Claims Bonus was my biggest concern. They took care of everything and kept me mobile.",
                    name: "Sofia Patel",
                    tag: "Private car • Side impact",
                    amount: "No Claims Bonus preserved",
                    stars: 4.5,
                  },
                  {
                    text:
                      "Highly recommend. Fast, transparent and genuinely helpful. My car was repaired at an approved garage with no hassle.",
                    name: "Daniel Harris",
                    tag: "Local collision",
                    amount: "£4,650 repair",
                    stars: 5,
                  },
                  {
                    text:
                      "I was nervous after my first accident, but they explained every step and dealt with the insurer directly.",
                    name: "Ella Rose",
                    tag: "Roundabout crash",
                    amount: "£5,100 recovery",
                    stars: 5,
                  },
                  {
                    text:
                      "Excellent communication — I never had to chase anything. Replacement car was perfect.",
                    name: "Luke Graham",
                    tag: "PCO licensed vehicle • Taxi operator",
                    amount: "Like-for-like PCO vehicle",
                    stars: 5,
                  },
                  {
                    text:
                      "Fastest accident support service I've ever used. I was back on the road the same day.",
                    name: "Hannah Clarke",
                    tag: "Dual carriageway rear impact",
                    amount: "£4,050 claim value",
                    stars: 5,
                  },
                ]}
              />
            </div>

            {/* Static grid underneath */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Testimonial
                name="S. Patel"
                text="Rear-ended at traffic lights. Replacement arranged same day and the claim handled end-to-end."
                amount="£7,950"
              />
              <Testimonial
                name="J. Thompson"
                text="Clear guidance throughout repairs with regular updates until the vehicle was back on the road."
                amount="£5,800"
              />
              <Testimonial
                name="A. Green"
                text="Helped protect my No Claims Bonus and kept me mobile with a like-for-like replacement."
                amount="£5,150"
              />
            </div>
          </div>
        </section>

{/* ============================================ */}
{/* PREMIUM FAQ ACCORDION */}
{/* ============================================ */}
<section
  id="faq"
  className="relative border-t border-slate-200 py-14 sm:py-16 overflow-hidden"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-center bg-no-repeat pointer-events-none"
    style={{
      backgroundImage: "url('/images/faq.jpg')",
      backgroundSize: "70%",
      opacity: 0.14,
    }}
  />

  {/* Soft overlay for readability */}
  <div className="absolute inset-0 bg-white/50" />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
      Common questions, answered
    </h2>

    <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
      Clear, practical guidance on what happens after a non-fault
      accident and how we support you.
    </p>

    <div className="mt-8">
      <PremiumAccordion
        items={[
          {
            q: "What should I do immediately after an accident?",
            a:
              "First, make sure everyone is safe and, if needed, contact the emergency services. Exchange details with the other driver and take clear photos of the scene, vehicles and road layout. As soon as it is safe, contact us or submit the quick claim form — we will confirm eligibility, explain your options and guide you through the next steps.",
          },
          {
            q: "Do I need to call my insurer first?",
            a:
              "You do not have to speak to your insurer before speaking to us. Many drivers prefer to talk to a specialist accident management team first so they understand their options and can avoid decisions that might unnecessarily affect their policy. Once we know the details, we will advise you on the best way to involve your insurer.",
          },
          {
            q: "Will I get a replacement vehicle?",
            a:
              "In genuine non-fault cases where the circumstances and policy allow, we will arrange a like-for-like replacement vehicle while yours is off the road — for example a similar family car, prestige vehicle or licensed PCO vehicle. We match the vehicle as closely as possible to your needs so that day-to-day life is disrupted as little as possible.",
          },
          {
            q: "Will this affect my No Claims Bonus?",
            a:
              "Our aim is always to help protect your No Claims Bonus where the accident is not your fault. We do this by claiming costs from the at-fault insurer wherever possible and ensuring the claim is recorded correctly. We will explain any implications clearly before you decide how to proceed.",
          },
          {
            q: "What does this service cost me?",
            a:
              "In genuine non-fault cases, our costs are usually recovered from the at-fault insurer and you should not be out of pocket for the support we provide. We will always explain any potential charges in plain English before anything is agreed, so you can make an informed decision.",
          },
          {
            q: "How long does the process take?",
            a:
              "Timescales depend on vehicle damage, parts availability and how quickly insurers respond. Our focus is on getting you back on the road quickly with a suitable replacement vehicle, keeping repairs moving and giving you regular updates so you always know what to expect next.",
          },
          {
            q: "Who repairs my vehicle?",
            a:
              "We use a network of approved repairers across the UK who meet strict quality standards. If you have a preferred garage, we will discuss whether that is possible, but many drivers choose to use our trusted repairers because communication and progress are easier to manage.",
          },
          {
            q: "Can you help if the other driver was uninsured?",
            a:
              "Yes. If the other driver was uninsured, untraced or left the scene, we will guide you through the correct route, which may include a claim via the Motor Insurers’ Bureau (MIB). We will explain realistic expectations and the evidence needed so that you have a clear plan from the outset.",
          },
        ]}
      />
    </div>

    <div className="mt-6">
<Link href="/faq" className="text-sm text-sky-600 hover:text-sky-500">
  View all FAQs →
</Link>

    </div>
  </div>
</section>


        {/* ============================================ */}
        {/* FINAL CTA */}
        {/* ============================================ */}
        <section
          id="contact"
          className="bg-gradient-to-r from-sky-600 to-blue-600 text-slate-50 py-14 sm:py-16"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Need help after an accident?
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-100/90">
                Call our UK team 24/7 or send your details and we will contact
                you shortly to explain your options.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm">
                <a
                  href="tel:+44 7440 138946"
                  className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 px-6 py-3 font-semibold"
                >
                  Call +44 7440 138946
                </a>

<Link
  href="/contact"
  className="inline-flex items-center justify-center rounded-full border border-slate-100/70 px-6 py-3 font-medium text-slate-50"
>
  Request a call-back
</Link>


              </div>
            </div>
<div className="bg-white/95 text-slate-900 rounded-2xl p-6 sm:p-7 shadow-xl shadow-sky-900/20">
  <QuickClaimForm variant="simple" submitTo="/api/homepage-lead" />
</div>
          </div>
        </section>
      </main>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="bg-slate-950 text-slate-300 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center">
                <Logo size={26} />
              </div>
              <span className="text-slate-50 font-semibold text-base">
                365Claims
              </span>
            </div>
            <p className="mt-2 text-slate-400">
              UK-based accident management and claims support, available every
              day of the year.
            </p>
          </div>

          <div>
            <div className="text-slate-100 font-semibold">Company</div>
            <ul className="mt-2 space-y-1">
              <li>
<Link href="/about" className="hover:text-sky-400">
  About us
</Link>
              </li>
              <li className="text-slate-500">Careers</li>
              <li>
<Link href="/legal/privacy-policy" className="hover:text-sky-400">
  Privacy & Cookies
</Link>
              </li>
              <li>
<Link href="/legal/terms" className="hover:text-sky-400">
  Terms
</Link>
              </li>
            </ul>
          </div>

          <div>
<p className="mt-2">
  <span>Email: help@365claims.uk</span>
  <br />
  <span>Freephone:</span>{" "}
  <span>+44 7440 138946</span>
</p>

          </div>
        </div>

        <div className="border-t border-slate-800 py-4 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} 365Claims Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ============================================================
   SUPPORTING COMPONENTS — Sticky Nav, Parallax, Cards
============================================================ */

const StickyMiniNav = React.memo(function StickyMiniNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } bg-white/95 backdrop-blur-md shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
            <Logo size={26} />
          </div>
          <div className="leading-tight">
            <div className="text-xs sm:text-sm font-semibold text-slate-900">
              365Claims
            </div>
            <div className="hidden sm:block text-[11px] text-slate-500">
              Non-fault accident support
            </div>
          </div>
        </div>

<Link
  href="#claim-form"
  className="px-4 py-2 rounded-full bg-sky-600 text-white text-xs sm:text-sm font-medium shadow hover:bg-sky-500 transition whitespace-nowrap"
>
  Start claim
</Link>

      </div>
    </div>
  );
});

const ParallaxBG = React.memo(function ParallaxBG() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const offset = window.scrollY * 0.25;
            ref.current.style.transform = `translateY(${offset}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-cover bg-center opacity-[0.14] pointer-events-none select-none"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        willChange: "transform",
      }}
    />
  );
});

/* ============================================================
   CARDS + ELEMENTS
============================================================ */

const Stat = React.memo(function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{value}</div>
      <div className="mt-1 text-[11px] text-slate-500">{label}</div>
    </div>
  );
});

const Step = React.memo(function Step({
  number,
  title,
  desc,
}: {
  number: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm">
      <div className="absolute -top-3 left-4 h-7 w-7 rounded-full bg-sky-600 text-[11px] font-bold text-white flex items-center justify-center shadow-md shadow-sky-500/40">
        {number}
      </div>
      <h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-xs text-slate-600">{desc}</p>
    </div>
  );
});

const ServiceCard = React.memo(function ServiceCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
});

const Testimonial = React.memo(function Testimonial({
  name,
  text,
  amount,
}: {
  name: string;
  text: string;
  amount: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">“{text}”</p>
      <div className="mt-4">
        <div className="text-sm font-semibold text-slate-900">{name}</div>
        <div className="text-[11px] text-slate-500">Recovery: {amount}</div>
      </div>
    </div>
  );
});

const TrustPill = React.memo(function TrustPill({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[12px] text-white/90 backdrop-blur-sm shadow-sm">
      <span>{icon}</span>
      {text}
    </span>
  );
});

