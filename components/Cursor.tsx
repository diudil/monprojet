"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const dotX = useSpring(mx, { stiffness: 900, damping: 35 });
  const dotY = useSpring(my, { stiffness: 900, damping: 35 });
  const ringX = useSpring(mx, { stiffness: 180, damping: 20 });
  const ringY = useSpring(my, { stiffness: 180, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const attachHover = () => {
      document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };
    const t = setTimeout(attachHover, 600);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      clearTimeout(t);
    };
  }, [mx, my, visible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Gold dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: clicking ? 0.5 : hovering ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.15 } }}
        className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400"
      />
      {/* Ring follower */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: clicking ? 0.8 : hovering ? 2.2 : 1,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering
            ? "rgba(202,138,4,0.07)"
            : "transparent",
          borderColor: hovering
            ? "rgba(202,138,4,0.5)"
            : "rgba(202,138,4,0.25)",
        }}
        transition={{ scale: { duration: 0.25 }, backgroundColor: { duration: 0.25 } }}
        className="absolute w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full border"
      />
    </div>
  );
}
