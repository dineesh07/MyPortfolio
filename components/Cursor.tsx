"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        x: mousePosition.x - 100,
        y: mousePosition.y - 100,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <div 
        className="w-[200px] h-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
};

export default Cursor;