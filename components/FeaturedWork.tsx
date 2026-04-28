"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function ParallaxCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(ySpring, [-80, 80], [4, -4]);
  const rotateY = useTransform(xSpring, [-80, 80], [-4, 4]);
  const bgX = useTransform(xSpring, [-80, 80], ["-4%", "4%"]);
  const bgY = useTransform(ySpring, [-80, 80], ["-4%", "4%"]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {/* Parallax background layer */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.08 }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      />
      {children}
    </motion.div>
  );
}

const cases = [
  {
    client: "Vertex Capital",
    type: "IPO Communications",
    industry: "Finance",
    result: "620M media impressions",
    desc: "Led strategic media campaign surrounding a landmark $2.4B IPO, coordinating simultaneous coverage across 80+ tier-one outlets.",
    gradient: "from-blue-950 via-indigo-950 to-slate-900",
    accent: "from-blue-500/20 to-indigo-600/10",
    tag: "Media Relations",
  },
  {
    client: "Nova Health",
    type: "Reputation Management",
    industry: "Healthcare",
    result: "Crisis resolved in 72h",
    desc: "Navigated a high-stakes reputational crisis for a national healthcare provider, restoring public trust through transparent communications.",
    gradient: "from-emerald-950 via-teal-950 to-stone-900",
    accent: "from-emerald-500/20 to-teal-600/10",
    tag: "Crisis Comms",
  },
  {
    client: "Luxe Collective",
    type: "Brand Launch",
    industry: "Luxury Retail",
    result: "Sold out in 48 hours",
    desc: "Orchestrated a global brand launch campaign that generated immediate sellout demand through exclusive editorial placements and influencer partnerships.",
    gradient: "from-rose-950 via-fuchsia-950 to-stone-900",
    accent: "from-rose-500/20 to-fuchsia-600/10",
    tag: "Brand Strategy",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
              Our Work
            </span>
            <h2 className="font-bodoni text-5xl md:text-6xl text-white leading-tight">
              Case{" "}
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Studies
              </em>
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ color: "#F59E0B", gap: "0.75rem" }}
            className="flex items-center gap-2 text-stone-500 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 cursor-pointer self-start md:self-auto"
          >
            View All Work
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ perspective: "1400px" }}>
          {cases.map((item, i) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
            <ParallaxCard
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className={`absolute inset-0 bg-gradient-to-tl ${item.accent}`} />

              {/* Animated mesh overlay */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)`,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="text-[9px] text-white/40 tracking-[0.35em] uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    {item.tag}
                  </span>
                  <span className="text-[9px] text-white/30 tracking-wide">
                    {item.industry}
                  </span>
                </div>

                {/* Bottom */}
                <div>
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs text-white/40 tracking-widest uppercase mb-2">
                      {item.type}
                    </p>
                    <h3 className="font-bodoni text-3xl text-white mb-3">
                      {item.client}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-4 h-px bg-amber-500" />
                      <span className="text-amber-400 text-xs font-semibold tracking-wide">
                        {item.result}
                      </span>
                    </div>

                    {/* Reveal on hover */}
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.35 }}
                      className="text-white/60 text-sm leading-relaxed overflow-hidden"
                    >
                      {item.desc}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="mt-5 flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase"
                  >
                    Read Case Study
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
