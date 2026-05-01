"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Using a unique key for Dineesh's portfolio
        const response = await fetch("https://api.counterapi.dev/v1/dineesh-portfolio-final/total/up");
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setCount(0);
      }
    };

    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      className="text-[11px] font-medium tracking-widest uppercase mt-2 text-neutral-500"
    >
      Total Visits: <span className="text-violet-500 font-bold">{count.toLocaleString()}</span>
    </motion.p>
  );
};

export default VisitorCounter;
