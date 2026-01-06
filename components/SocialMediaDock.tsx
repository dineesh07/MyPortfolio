"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: <FiGithub />, href: "https://github.com/dineesh07", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/dineesh30052007/", label: "LinkedIn" },
  { icon: <FiInstagram />, href: "https://www.instagram.com/dineesh._.07/", label: "Instagram" },
  { icon: <FiMail />, href: "mailto:dineeshmkalai@gmail.com", label: "Email" },
];

const SocialMediaDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 6, duration: 0.6 }}
      className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-3 md:gap-4 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full px-4 md:px-6 py-3 md:py-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 hover:text-violet-500 transition-colors relative"
            aria-label={link.label}
          >
            {link.icon}
            {hoveredIndex === index && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black px-2 py-1 rounded whitespace-nowrap"
              >
                {link.label}
              </motion.span>
            )}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialMediaDock;

