"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Lumina PR didn't just get us coverage — they crafted a story that defined our market category. Our Series B closed at 3x the valuation we expected, in no small part due to their media strategy.",
    name: "Marcus Webb",
    title: "CEO & Co-Founder",
    company: "Vertex Capital",
    initial: "MW",
    color: "from-blue-800 to-indigo-900",
  },
  {
    quote:
      "When our reputation was on the line, Lumina was the only call we made. Their crisis team contained a potentially devastating situation within hours. Their calm expertise and media relationships are unmatched.",
    name: "Dr. Priya Sharma",
    title: "Chief Medical Officer",
    company: "Nova Health Systems",
    initial: "PS",
    color: "from-emerald-800 to-teal-900",
  },
  {
    quote:
      "We entered the US luxury market as an unknown. Lumina's brand positioning and editorial placements in Vogue, WSJ, and Architectural Digest made us aspirational overnight. Our launch sold out in 48 hours.",
    name: "Isabelle Fontaine",
    title: "Founder & Creative Director",
    company: "Luxe Collective",
    initial: "IF",
    color: "from-rose-900 to-fuchsia-950",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-[#0C0A09] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/[0.05] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
            Client Voices
          </span>
          <h2 className="font-bodoni text-5xl md:text-6xl text-white">
            What They{" "}
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Say
            </em>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative min-h-[280px] mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/[0.025] border border-white/[0.06] rounded-2xl p-10 md:p-14 relative overflow-hidden"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-8 font-bodoni text-[120px] leading-none text-amber-500/[0.04] select-none pointer-events-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <blockquote className="font-jost text-xl md:text-2xl text-stone-200 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="font-bodoni text-white text-sm font-bold">
                      {testimonials[active].initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold tracking-wide">
                      {testimonials[active].name}
                    </p>
                    <p className="text-stone-500 text-sm">
                      {testimonials[active].title} ·{" "}
                      <span className="text-amber-600/80">
                        {testimonials[active].company}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots + thumbnails */}
          <div className="flex items-center justify-center gap-4">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                  active === i
                    ? "border-amber-600/50 bg-amber-600/10 text-amber-400"
                    : "border-white/[0.05] bg-white/[0.02] text-stone-600 hover:border-white/10 hover:text-stone-400"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center`}
                >
                  <span className="text-[8px] text-white font-bold">{t.initial}</span>
                </div>
                <span className="text-xs tracking-wide hidden sm:block">
                  {t.name.split(" ")[0]}
                </span>
                {active === i && (
                  <motion.div
                    layoutId="activeDot"
                    className="w-1 h-1 rounded-full bg-amber-500"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
