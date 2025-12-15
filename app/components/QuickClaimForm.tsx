"use client";

import { useRef, useState } from "react";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

type Variant = "full" | "simple" | "compact";

export default function QuickClaimForm({
  variant = "full",
  submitTo = "/api/claim",
  className = "",
}: {
  variant?: Variant;
  submitTo?: string;
  className?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ------------------------------------------------------------
     UNCONTROLLED INPUT REFS (NO RERENDERS)
  ------------------------------------------------------------ */
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  const getValues = () => ({
    name: nameRef.current?.value.trim() || "",
    phone: phoneRef.current?.value.trim() || "",
    email: emailRef.current?.value.trim() || "",
    details: detailsRef.current?.value.trim() || "",
  });


  /* ------------------------------------------------------------
     SUBMIT HANDLER
  ------------------------------------------------------------ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const data = getValues();

    if (!data.name || !data.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(submitTo, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        window.location.href = "/success";
      } else {
        alert("Something went wrong.");
      }
    } catch {
      alert("Network error — please try again.");
    }

    setIsSubmitting(false);
  };

  /* ------------------------------------------------------------
     STYLES
  ------------------------------------------------------------ */
  const baseInput =
    "peer w-full px-4 py-3 rounded-xl bg-white border border-slate-300 shadow-sm " +
    "placeholder-transparent focus:ring-2 focus:ring-sky-600 focus:border-sky-600 " +
    "outline-none transition-all";

  const InputWrapper = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="relative">
      {children}

      {/* Green success tick — CSS only */}
      <CheckCircle2
        aria-hidden
        className="
          absolute right-3 top-3 h-5 w-5 text-emerald-600
          opacity-0 scale-90
          transition-all duration-300 ease-out
          peer-[:not(:placeholder-shown)]:opacity-100
          peer-[:not(:placeholder-shown)]:scale-100
        "
      />

      {/* Floating label */}
      <label
        className="
          pointer-events-none absolute left-4 top-3 text-slate-500 text-sm
          transition-all duration-300
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-sm
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

  const { name, phone } = getValues();

  /* ------------------------------------------------------------
     RENDER
  ------------------------------------------------------------ */
  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 text-sm ${className}`}>
      {/* PREMIUM BADGE */}
      {variant === "full" && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-[13px]">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          <span>
            <strong>No upfront fees.</strong> Costs recovered from the at-fault
            insurer.
          </span>
        </div>
      )}

      {/* NAME */}
      <InputWrapper label="Full name">
        <input
          ref={nameRef}
          defaultValue=""
          placeholder=" "
          className={baseInput}
          autoComplete="name"
        />
      </InputWrapper>

      {/* PHONE */}
      <InputWrapper label="Mobile / contact number">
        <input
          ref={phoneRef}
          defaultValue=""
          placeholder=" "
          className={baseInput}
          autoComplete="tel"
        />
      </InputWrapper>

      {/* EMAIL */}
      {variant === "full" && (
        <InputWrapper label="Email address (optional)">
          <input
            ref={emailRef}
            defaultValue=""
            placeholder=" "
            className={baseInput}
            autoComplete="email"
          />
        </InputWrapper>
      )}

      {/* DETAILS */}
      {variant === "full" && (
        <InputWrapper label="Briefly describe what happened">
          <textarea
            ref={detailsRef}
            rows={4}
            defaultValue=""
            placeholder=" "
            className={`${baseInput} resize-none`}
          />
        </InputWrapper>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-full bg-sky-600 py-3 font-semibold text-white hover:bg-sky-500 shadow-md disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Submit claim"}
        {!isSubmitting && <ArrowRight className="inline h-4 w-4 ml-2" />}
      </button>

      {variant === "full" && (
        <p className="text-[11px] text-slate-500 leading-relaxed">
          By submitting, you agree we may contact you about your accident.
        </p>
      )}
    </form>
  );
}
