"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  { prefix: "", value: 500, suffix: "+", label: "Brands Represented", sublabel: "across 40+ industries" },
  { prefix: "$", value: 4.2, suffix: "B+", label: "Media Value Generated", sublabel: "in earned coverage" },
  { prefix: "", value: 98, suffix: "%", label: "Client Retention Rate", sublabel: "year over year" },
  { prefix: "", value: 25, suffix: "+", label: "Years of Excellence", sublabel: "shaping narratives" },
];

function AnimatedCounter({ value, prefix, suffix, sublabel, label }: StatItem) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, value);
      setDisplay(Number(current.toFixed(value % 1 !== 0 ? 1 : 0)));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="font-bodoni text-5xl md:text-6xl font-bold mb-3">
          <span className="text-stone-500 text-3xl">{prefix}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600">
            {display}
          </span>
          <span className="text-amber-500/70 text-3xl">{suffix}</span>
        </div>
        <p className="text-white font-medium tracking-wide mb-1">{label}</p>
        <p className="text-stone-600 text-xs tracking-wide">{sublabel}</p>
      </motion.div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0e0b09]" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/[0.07] to-transparent pointer-events-none" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-900/[0.08] pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-amber-800/[0.06] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase">
            By The Numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 relative">
          {/* Dividers */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute hidden lg:block top-4 bottom-4 border-r border-white/[0.05]"
              style={{ left: `${i * 25}%` }}
            />
          ))}
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
