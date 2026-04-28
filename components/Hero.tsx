"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const headline = ["We", "Shape", "The", "Narrative."];

const floatingBadges = [
  { value: "500+", label: "Brands", delay: 2.8, x: "-left-4 lg:left-[6%]", y: "top-[38%]", dx: [0, -8, 0], dy: [0, -12, 0] },
  { value: "$4.2B", label: "Coverage", delay: 3.0, x: "right-4 lg:right-[6%]", y: "top-[42%]", dx: [0, 8, 0], dy: [0, -10, 0] },
  { value: "98%", label: "Retention", delay: 3.2, x: "left-4 lg:left-[8%]", y: "bottom-[28%]", dx: [0, -6, 0], dy: [0, 10, 0] },
];

function MagneticCTA({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 22 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: xSpring, y: ySpring }}
      whileTap={{ scale: 0.96 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

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
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] rounded-full bg-amber-900/[0.1] blur-[110px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[60%] left-[40%] w-[300px] h-[300px] rounded-full bg-stone-700/[0.07] blur-[100px] pointer-events-none"
      />

      {/* Floating stat badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: badge.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute hidden lg:flex ${badge.x} ${badge.y} z-20 pointer-events-none`}
        >
          <motion.div
            animate={{ x: badge.dx, y: badge.dy }}
            transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <div>
              <p className="font-bodoni text-lg font-bold text-amber-400 leading-none">{badge.value}</p>
              <p className="text-[9px] text-stone-500 tracking-[0.25em] uppercase mt-0.5">{badge.label}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}

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
          <motion.span
            animate={{ scaleX: [0, 1] }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-10 h-px bg-gradient-to-r from-transparent to-amber-500 origin-right"
          />
          <span className="text-amber-500/90 text-[10px] font-semibold tracking-[0.4em] uppercase font-jost">
            Premier PR Agency — USA
          </span>
          <motion.span
            animate={{ scaleX: [0, 1] }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-10 h-px bg-gradient-to-l from-transparent to-amber-500 origin-left"
          />
        </motion.div>

        {/* Headline */}
        <h1 className="font-bodoni font-bold leading-[0.9] mb-8 text-[clamp(3.5rem,10vw,9rem)]">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticCTA
            href="#work"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-[#0C0A09] text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm overflow-hidden cursor-pointer"
          >
            <motion.span
              className="absolute inset-0 bg-amber-500 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">View Our Work</span>
            <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticCTA>

          <MagneticCTA
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-stone-700 text-stone-300 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm overflow-hidden cursor-pointer hover:border-amber-700/50 hover:text-amber-200 transition-colors duration-300"
          >
            <motion.span
              className="absolute inset-0 bg-amber-950/30 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">Get in Touch</span>
          </MagneticCTA>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <span className="text-[10px] text-stone-600 tracking-[0.3em] uppercase">Trusted by</span>
          {["Fortune 500", "Inc. 5000", "Fast Company", "Forbes"].map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 + i * 0.08 }}
              className="text-[11px] font-semibold text-stone-500 tracking-widest uppercase"
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-stone-600 tracking-[0.35em] uppercase font-jost">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-amber-600/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
