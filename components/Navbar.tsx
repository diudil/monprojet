"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const navLinks = ["Work", "Services", "About", "Insights", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0C0A09]/85 backdrop-blur-2xl border-b border-white/[0.06]"
            : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-baseline gap-2 cursor-pointer group">
            <span className="font-bodoni text-xl font-bold text-white tracking-widest uppercase group-hover:text-amber-50 transition-colors duration-300">
              LUMINA
            </span>
            <span className="font-jost text-[9px] font-bold text-amber-500 tracking-[0.45em] uppercase">
              PR
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: "#fff" }}
                className="text-[13px] text-stone-500 tracking-wider font-medium transition-colors duration-200 cursor-pointer relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-5">
            <motion.a
              href="#contact"
              whileHover={{
                backgroundColor: "#CA8A04",
                color: "#0C0A09",
                borderColor: "#CA8A04",
              }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center px-5 py-2.5 border border-amber-700/50 text-amber-500 text-[11px] font-bold tracking-[0.18em] uppercase rounded-sm transition-all duration-300 cursor-pointer"
            >
              Start a Project
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] cursor-pointer w-8 h-8 relative"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-[1.5px] bg-white origin-center"
              />
              <motion.span
                animate={
                  menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
                className="block w-6 h-[1.5px] bg-white"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className="block w-6 h-[1.5px] bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0C0A09] flex flex-col items-center justify-center gap-7"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setMenuOpen(false)}
                className="font-bodoni text-5xl text-white hover:text-amber-400 transition-colors duration-300 cursor-pointer"
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3.5 bg-amber-600 text-stone-950 text-xs font-bold tracking-[0.2em] uppercase rounded-sm cursor-pointer"
            >
              Start a Project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
