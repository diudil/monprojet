"use client";

import { motion } from "framer-motion";

const publications = [
  "The New York Times",
  "Forbes",
  "Bloomberg",
  "TechCrunch",
  "The Wall Street Journal",
  "Fast Company",
  "Business Insider",
  "Inc. Magazine",
  "Wired",
  "Axios",
  "Reuters",
  "The Atlantic",
];

const doubled = [...publications, ...publications];

export default function LogoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative border-y border-white/[0.05] bg-white/[0.01] overflow-hidden py-7"
    >
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0C0A09] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0C0A09] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-3 mb-3 justify-center">
        <span className="w-6 h-px bg-amber-600/40" />
        <p className="text-[9px] text-stone-600 tracking-[0.4em] uppercase font-jost">
          As seen in
        </p>
        <span className="w-6 h-px bg-amber-600/40" />
      </div>

      <div className="flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((pub, i) => (
            <div
              key={`${pub}-${i}`}
              className="inline-flex items-center mx-10 gap-4"
            >
              <span className="w-1 h-1 rounded-full bg-amber-600/50" />
              <span className="font-bodoni text-sm text-stone-500 hover:text-stone-300 transition-colors duration-300 cursor-default tracking-wide">
                {pub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
