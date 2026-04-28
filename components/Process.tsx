"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We immerse ourselves in your brand, competitive landscape, and audience dynamics to build a precise communications baseline.",
    detail: "Brand audit · Competitive analysis · Stakeholder interviews · Media landscape mapping",
  },
  {
    num: "02",
    title: "Strategy Development",
    desc: "Crafting a bespoke narrative architecture and channel strategy aligned with your business objectives and media realities.",
    detail: "Messaging framework · Story angles · Editorial calendar · KPI definition",
  },
  {
    num: "03",
    title: "Execution & Placement",
    desc: "Activating our network of 2,000+ media relationships to secure meaningful, high-impact coverage across all target verticals.",
    detail: "Pitch development · Media outreach · Interview prep · Crisis monitoring",
  },
  {
    num: "04",
    title: "Measure & Optimize",
    desc: "Real-time analytics and transparent reporting that quantify earned media value and continuously refine campaign performance.",
    detail: "Coverage reports · Sentiment analysis · Reach metrics · ROI calculation",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 bg-[#0e0b09] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-amber-950/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20 max-w-xl"
        >
          <span className="text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
            How We Work
          </span>
          <h2 className="font-bodoni text-5xl md:text-6xl text-white leading-tight">
            Our{" "}
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Process
            </em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/[0.05] hidden md:block" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[28px] top-0 w-px bg-gradient-to-b from-amber-600 to-amber-900/40 hidden md:block origin-top"
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="group relative flex gap-8 md:gap-16 pb-16 last:pb-0"
              >
                {/* Step circle */}
                <div className="relative flex-shrink-0 w-14 h-14 hidden md:flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-full border border-amber-700/40 bg-[#0e0b09] flex items-center justify-center group-hover:border-amber-600/60 transition-colors duration-500"
                  >
                    <span className="font-bodoni text-amber-500/70 text-sm font-bold group-hover:text-amber-400 transition-colors duration-300">
                      {step.num}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-8 border-b border-white/[0.04] last:border-0 group-hover:border-amber-900/20 transition-colors duration-500">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <span className="md:hidden text-amber-500/50 font-bodoni text-sm font-bold">
                      {step.num}
                    </span>
                    <h3 className="font-bodoni text-2xl md:text-3xl text-white group-hover:text-amber-50 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-stone-500 text-base leading-relaxed mb-5 max-w-2xl group-hover:text-stone-400 transition-colors duration-300">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.detail.split(" · ").map((d) => (
                      <span
                        key={d}
                        className="text-[10px] text-stone-600 tracking-widest uppercase bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1.5 group-hover:border-amber-900/30 group-hover:text-stone-500 transition-all duration-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
