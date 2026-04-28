"use client";

import { motion } from "framer-motion";

const services = [
  "Media Relations",
  "Crisis Communications",
  "Brand Strategy",
  "Digital PR",
  "Executive Visibility",
  "Content & Storytelling",
];
const company = ["About Us", "Our Work", "Insights", "Careers", "Press Kit"];
const social = [
  {
    name: "LinkedIn",
    href: "#",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  },
  {
    name: "X / Twitter",
    href: "#",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-baseline gap-2 mb-5 cursor-pointer group">
              <span className="font-bodoni text-xl font-bold text-white tracking-widest uppercase group-hover:text-amber-50 transition-colors duration-300">
                LUMINA
              </span>
              <span className="font-jost text-[9px] font-bold text-amber-500 tracking-[0.45em] uppercase">
                PR
              </span>
            </a>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 max-w-xs">
              A full-service public relations agency shaping narratives for the
              world&apos;s most ambitious brands since 1999.
            </p>
            <div className="flex items-center gap-4">
              {social.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  whileHover={{ color: "#CA8A04", y: -2 }}
                  className="text-stone-700 transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={s.path} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 4, color: "#CA8A04" }}
                    className="text-stone-600 text-sm hover:text-stone-400 transition-all duration-200 cursor-pointer block"
                  >
                    {s}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: "#CA8A04" }}
                    className="text-stone-600 text-sm hover:text-stone-400 transition-all duration-200 cursor-pointer block"
                  >
                    {c}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Contact
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-stone-700 text-[10px] tracking-widest uppercase mb-1">
                  New York
                </p>
                <p className="text-stone-500 text-sm">
                  1270 Avenue of the Americas
                  <br />
                  New York, NY 10020
                </p>
              </div>
              <div>
                <p className="text-stone-700 text-[10px] tracking-widest uppercase mb-1">
                  Los Angeles
                </p>
                <p className="text-stone-500 text-sm">
                  9000 Sunset Boulevard
                  <br />
                  West Hollywood, CA 90069
                </p>
              </div>
              <div className="pt-2">
                <motion.a
                  href="mailto:hello@luminapr.com"
                  whileHover={{ color: "#F59E0B" }}
                  className="text-amber-600 text-sm transition-colors duration-200 cursor-pointer"
                >
                  hello@luminapr.com
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-700 text-xs tracking-wide">
            © 2025 Lumina PR Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: "#CA8A04" }}
                  className="text-stone-700 text-xs tracking-wide transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
