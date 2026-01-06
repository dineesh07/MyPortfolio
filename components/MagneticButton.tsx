"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const move = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    setPos({ x: (clientX - (left + width / 2)) * 0.4, y: (clientY - (top + height / 2)) * 0.4 });
  };
  return (
    <motion.div ref={ref} onMouseMove={move} onMouseLeave={() => setPos({ x: 0, y: 0 })} animate={{ x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
      {children}
    </motion.div>
  );
}