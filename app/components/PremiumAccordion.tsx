"use client";
import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface PremiumAccordionProps {
  items: FAQItem[];
}

export default function PremiumAccordion({ items }: PremiumAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <div
            key={i}
            className="border border-slate-200 rounded-2xl bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4"
            >
              <span className="text-sm sm:text-base font-semibold text-slate-900">
                {item.q}
              </span>

              <span className="text-slate-500 text-xl">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
