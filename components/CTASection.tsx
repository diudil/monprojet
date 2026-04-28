"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-40 bg-[#0e0b09] overflow-hidden"
    >
      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-700/[0.07] blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-900/[0.08] blur-[130px] pointer-events-none"
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="inline-block text-amber-500/70 text-[10px] font-bold tracking-[0.45em] uppercase mb-6">
            Ready to Begin?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-bodoni text-5xl md:text-7xl text-white leading-[1.05] mb-6 text-balance"
        >
          Ready to Elevate{" "}
          <br className="hidden md:block" />
          <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            Your Brand?
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-stone-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Let&apos;s start a conversation about your communications goals.
          Our team is ready to build something remarkable together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:hello@luminapr.com"
            whileHover={{ scale: 1.03, backgroundColor: "#D97706" }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-amber-600 text-[#0C0A09] text-[11px] font-bold tracking-[0.25em] uppercase rounded-sm transition-colors duration-300 cursor-pointer"
          >
            Start a Conversation
            <motion.svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.a>

          <motion.a
            href="tel:+12125550100"
            whileHover={{ color: "#FDE68A", borderColor: "#CA8A04" }}
            className="inline-flex items-center gap-2 px-8 py-5 border border-stone-800 text-stone-400 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13 1.02.36 2.02.71 2.98a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.1 6.1l.92-.92a2 2 0 0 1 2.11-.45c.96.35 1.96.58 2.98.71A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            +1 (212) 555-0100
          </motion.a>
        </motion.div>

        {/* Awards / trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-stone-700"
        >
          {[
            "PRWeek Agency of the Year",
            "PRSA Silver Anvil Award",
            "Holmes Report Top 250",
          ].map((award) => (
            <span
              key={award}
              className="text-[10px] tracking-widest uppercase text-center"
            >
              {award}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
