"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, Variants, PanInfo } from "framer-motion";

export interface TestimonialItem {
  text: string;
  name: string;
  tag: string;
  amount: string;
  stars: number;
}

interface SliderProps {
  items: TestimonialItem[];
  interval?: number;
}

export default function TestimonialSlider({
  items,
  interval = 4000,
}: SliderProps) {
  if (!items?.length) return null;

  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () =>
    setIndex(([i]) => [(i + 1) % items.length, 1]);

  const goPrev = () =>
    setIndex(([i]) => [(i - 1 + items.length) % items.length, -1]);

  /* ------------------------------------------------------------
     AUTOPLAY
  ------------------------------------------------------------ */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goNext, interval);
    return () => clearInterval(id);
  }, [isPaused, interval]);

  /* ------------------------------------------------------------
     MOTION
  ------------------------------------------------------------ */
  const transitionSettings = {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  };

  const variants = useMemo<Variants>(
    () => ({
      enter: (dir: number) => ({
        x: dir === 1 ? 60 : -60,
        opacity: 0,
        filter: "blur(8px)",
      }),
      center: {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: transitionSettings,
      },
      exit: (dir: number) => ({
        x: dir === 1 ? -60 : 60,
        opacity: 0,
        filter: "blur(8px)",
        transition: transitionSettings,
      }),
    }),
    []
  );

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = info.offset.x + info.velocity.x * 0.2;
    if (swipe < -80) goNext();
    else if (swipe > 80) goPrev();
  };

  /* ------------------------------------------------------------
     RENDER
  ------------------------------------------------------------ */
  return (
    <div
      className="
        relative w-full rounded-3xl
        bg-white/60 backdrop-blur-sm
        p-10 sm:p-14 overflow-hidden
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative min-h-[240px] flex items-center justify-center"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragElastic={0.12}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="
              absolute w-full max-w-2xl mx-auto text-center
              sm:cursor-grab sm:active:cursor-grabbing
            "
          >
            {/* STARS — GOLD & CLEAR */}
            <div className="text-yellow-400 text-lg tracking-widest mb-8">
              {"★★★★★".slice(0, items[index].stars)}
            </div>

            {/* QUOTE — HERO */}
            <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-8">
              “{items[index].text}”
            </p>

            {/* META — COLLAPSED */}
            <div className="text-sm text-slate-500">
              {items[index].name} • {items[index].tag} •{" "}
              <span className="text-slate-700 font-medium">
                {items[index].amount}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOT INDICATORS — SUBTLE + ALIVE */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 opacity-60">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index
                ? "bg-slate-900 scale-125 animate-pulse"
                : "bg-slate-400/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
