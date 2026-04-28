"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [5, -5]);
  const rotateY = useTransform(x, [-80, 80], [-5, 5]);
  const rotateXSpring = useSpring(rotateX, { stiffness: 350, damping: 30 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 350, damping: 30 });

  const glowX = useTransform(x, [-80, 80], [0, 100]);
  const glowY = useTransform(y, [-80, 80], [0, 100]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {/* Mouse-follow shimmer */}
      <motion.div
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(202,138,4,0.07) 0%, transparent 60%)`
          ),
        }}
        className="absolute inset-0 pointer-events-none rounded-none"
      />
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Media Relations",
    desc: "Strategic relationships with top-tier journalists and editors across print, digital, and broadcast to secure meaningful coverage that drives results.",
    tag: "Core Service",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Crisis Communications",
    desc: "Swift, strategic response frameworks that protect your reputation when it matters most — turning challenging moments into opportunities.",
    tag: "Critical",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
      </svg>
    ),
    title: "Brand Strategy",
    desc: "Defining your brand's voice, positioning, and story in a crowded marketplace — ensuring every message resonates with precision.",
    tag: "Strategic",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Digital PR",
    desc: "Commanding online presence through data-driven campaigns, SEO-focused editorial placements, and social amplification strategies.",
    tag: "Digital",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
        <path d="M16 3.5l1.5 1.5L21 1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Executive Visibility",
    desc: "Positioning your leadership as credible industry voices through speaking engagements, thought leadership, and media profiling.",
    tag: "Leadership",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Content & Storytelling",
    desc: "Compelling narratives — op-eds, white papers, keynote decks — that position your brand at the forefront of your industry conversation.",
    tag: "Creative",
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-block text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
            What We Do
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-bodoni text-5xl md:text-6xl text-white leading-tight max-w-lg">
              Services Built for{" "}
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Impact
              </em>
            </h2>
            <p className="text-stone-500 max-w-sm text-sm leading-relaxed">
              From launching startups to repositioning Fortune 500 companies,
              we deliver integrated PR strategies with measurable outcomes.
            </p>
          </div>
        </motion.div>

        {/* Service grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-xl overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
            <TiltCard className="relative group p-8 bg-[#0C0A09] cursor-default h-full hover:bg-amber-600/[0.04] transition-colors duration-300">
              {/* Gold corner accent on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-600/0 via-amber-500/60 to-amber-600/0 origin-left"
              />

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-amber-600/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-600/15 transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-[9px] text-stone-600 tracking-[0.3em] uppercase border border-stone-800 rounded-full px-2.5 py-1 group-hover:border-amber-900/40 group-hover:text-amber-700 transition-all duration-300">
                  {service.tag}
                </span>
              </div>

              <h3 className="font-bodoni text-xl text-white mb-3 group-hover:text-amber-50 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-400 transition-colors duration-300">
                {service.desc}
              </p>

              <div className="mt-6 flex items-center gap-2 text-amber-600/0 group-hover:text-amber-600 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                <span className="text-xs tracking-wide font-medium">Learn more</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
