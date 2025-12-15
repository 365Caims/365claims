"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Clock,
} from "lucide-react";

/* ============================================================
   CONTACT PAGE — PREMIUM HYBRID (FINAL)
============================================================ */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;

  const updateField =
    (field: "name" | "phone" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const openWhatsApp = () => {
    const text = `Hello, my name is ${form.name || "N/A"}.
My phone number is ${form.phone || "N/A"}.
Message:
${form.message || "No message provided."}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.phone || loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        window.location.href = "/success";
      } else {
        alert("Something went wrong — please try again.");
      }
    } catch {
      alert("Server error — please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-[var(--page-bg)] text-slate-900 overflow-hidden">
      {/* Ambient background — matches homepage */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(90,140,255,0.22),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <Pill>UK Accident Support • Always Here When You Need Us</Pill>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Speak to an accident specialist today
          </h1>

          <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            Clear advice, no pressure, and support from people who handle
            non-fault accidents every day.
          </p>
        </motion.div>

        {/* TRUST STRIP */}
        <div className="flex justify-center gap-8 mb-20 text-[13px] text-slate-600">
          <Trust icon={<ShieldCheck />} text="FCA-compliant support" />
          <Trust icon={<Clock />} text="Typical response within 30–60 mins" />
        </div>

        {/* GRID */}
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* LEFT — CONTACT OPTIONS */}
          <div className="space-y-12">
            <ContactCard
              icon={<Phone className="h-6 w-6 text-sky-600" />}
              title="Call us directly"
            >
              <p className="mt-2 text-slate-700 text-sm">
                Free UK helpline, available 24/7.
              </p>
              <CallButton number="+44 7440 138946" />
            </ContactCard>

            <ContactCard
              icon={<Mail className="h-6 w-6 text-emerald-600" />}
              title="Email support"
            >
              <p className="mt-2 text-slate-700 text-sm">
                General enquiries and documentation.
              </p>
              <a
                href="mailto:help@365claims.uk"
                className="inline-block mt-3 text-sm font-medium text-emerald-700 underline"
              >
                help@365claims.uk
              </a>
            </ContactCard>

            <ContactCard
              icon={<MessageCircle className="h-6 w-6 text-emerald-600" />}
              title="WhatsApp"
            >
              <p className="mt-2 text-slate-700 text-sm">
                Quick questions, updates and guidance.
              </p>
              <button
                onClick={openWhatsApp}
                className="mt-3 text-sm font-semibold text-emerald-700 hover:text-emerald-500"
              >
                Chat on WhatsApp →
              </button>
            </ContactCard>

            <ContactCard
              icon={<HelpCircle className="h-6 w-6 text-slate-600" />}
              title="We’re here to help"
            >
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li>• Unsure if you’re eligible?</li>
                <li>• Need a replacement vehicle?</li>
                <li>• Questions about liability or repairs?</li>
              </ul>
            </ContactCard>
          </div>

          {/* RIGHT — HERO FORM */}
          <div className="relative">
            {/* Glow layer — homepage language */}
            <div className="absolute -inset-8 bg-gradient-to-br from-sky-400/30 via-blue-400/20 to-purple-400/10 blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                relative rounded-3xl bg-white/85 backdrop-blur-xl
                border border-white/60 shadow-2xl
                p-10 sm:p-12
              "
            >
              {/* Live status */}
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[11px] text-slate-600 mb-5 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Specialists currently available
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Request a call-back
              </h2>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900">No upfront fees.</strong>{" "}
                In eligible non-fault cases, costs are recovered from the
                at-fault insurer.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
                <FloatingInput
                  label="Full name"
                  value={form.name}
                  onChange={updateField("name")}
                  required
                />

                <FloatingInput
                  label="Phone number"
                  value={form.phone}
                  onChange={updateField("phone")}
                  required
                />

                <FloatingTextarea
                  label="Briefly tell us what happened"
                  value={form.message}
                  onChange={updateField("message")}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full rounded-full bg-sky-600 py-4
                    font-semibold text-white shadow-lg
                    hover:bg-sky-500 transition
                    disabled:opacity-60
                  "
                >
                  {loading ? "Sending…" : "Request call-back"}
                  {!loading && <ArrowRight className="inline h-4 w-4 ml-2" />}
                </button>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  By submitting, you consent to being contacted about your
                  enquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SHARED COMPONENTS
============================================================ */

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-sm text-[13px] text-sky-700">
    {children}
  </div>
);

const Trust = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <span className="flex items-center gap-2">
    <span className="h-4 w-4 text-sky-600">{icon}</span>
    {text}
  </span>
);

const ContactCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="
      p-8 rounded-3xl bg-white/90 backdrop-blur
      border border-slate-200 shadow-md hover:shadow-xl
    "
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const CallButton = ({ number }: { number: string }) => (
  <a
    href={`tel:${number.replace(/\s+/g, "")}`}
    className="
      inline-flex items-center justify-center mt-5
      rounded-full bg-sky-600 px-8 py-3
      text-sm font-semibold text-white
      shadow-md shadow-sky-400/40
      hover:bg-sky-500 transition
      whitespace-nowrap
    "
  >
    {number}
  </a>
);

/* ============================================================
   FLOATING INPUTS
============================================================ */

const FloatingInput = ({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div className="relative">
    <input
      value={value}
      required={required}
      onChange={onChange}
      placeholder=" "
      className="
        peer w-full px-4 py-4 rounded-xl bg-white
        border border-slate-300 placeholder-transparent
        focus:ring-2 focus:ring-sky-600 outline-none transition
      "
    />
    <label
      className="
        pointer-events-none absolute left-4 top-4 text-slate-500 text-sm
        transition-all duration-200
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-600
        peer-[:not(:placeholder-shown)]:-top-2
        peer-[:not(:placeholder-shown)]:text-xs
        peer-[:not(:placeholder-shown)]:text-sky-600
      "
    >
      {label}
    </label>
  </div>
);

const FloatingTextarea = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div className="relative">
    <textarea
      rows={4}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="
        peer w-full px-4 py-4 rounded-xl bg-white
        border border-slate-300 placeholder-transparent
        focus:ring-2 focus:ring-sky-600 outline-none transition resize-none
      "
    />
    <label
      className="
        pointer-events-none absolute left-4 top-4 text-slate-500 text-sm
        transition-all duration-200
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-600
        peer-[:not(:placeholder-shown)]:-top-2
        peer-[:not(:placeholder-shown)]:text-xs
        peer-[:not(:placeholder-shown)]:text-sky-600
      "
    >
      {label}
    </label>
  </div>
);
