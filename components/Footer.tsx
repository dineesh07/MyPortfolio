"use client";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 pb-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm opacity-60"
        >
          © 2026 Dineesh. All Rights Reserved.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 text-sm font-medium opacity-80"
        >
          Made with <FaHeart className="text-red-500 animate-pulse" /> by Dineesh
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

