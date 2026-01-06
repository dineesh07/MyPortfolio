"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
      className="fixed top-6 right-6 p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 z-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </motion.button>
  );
};

export default ThemeToggle;
