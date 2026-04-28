"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const headline = ["We", "Shape", "The", "Narrative."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-[#0C0A09] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 70, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full bg-amber-600/[0.08] blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 70, 0], scale: [1, 1.2, 1] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] rounded-full bg-amber-900/[0.1] blur-[110px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[60%] left-[40%] w-[300px] h-[300px] rounded-full bg-stone-700/[0.07] blur-[100px] pointer-events-none"
      />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-4 mb-10"
        >
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-amber-500/90 text-[10px] font-semibold tracking-[0.4em] uppercase font-jost">
            Premier PR Agency — USA
          </span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-amber-500" />
        </motion.div>

        {/* Headline */}
        <h1 className="font-bodoni font-bold leading-[0.9] mb-8 text-[clamp(3.5rem,10vw,9rem)]">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: 0.8 + i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block mr-[0.2em] ${
                word === "Narrative."
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-400"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-jost text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Full-service public relations crafting stories that move markets,
          change minds, and build lasting legacies for the world&apos;s most
          ambitious brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02, backgroundColor: "#D97706" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-[#0C0A09] text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm transition-colors duration-300 cursor-pointer"
          >
            View Our Work
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              borderColor: "#F59E0B",
              color: "#FDE68A",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-stone-700 text-stone-300 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 cursor-pointer"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <span className="text-[10px] text-stone-600 tracking-[0.3em] uppercase">
            Trusted by
          </span>
          {["Fortune 500", "Inc. 5000", "Fast Company", "Forbes"].map(
            (label) => (
              <span
                key={label}
                className="text-[11px] font-semibold text-stone-500 tracking-widest uppercase"
              >
                {label}
              </span>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-stone-600 tracking-[0.35em] uppercase font-jost">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-amber-600/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
