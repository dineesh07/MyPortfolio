"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Include activity for detection even though it's not in navLinks
      const sections = [...navLinks.map(link => link.href.substring(1)), "activity"];
      
      let currentActive = "";
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);
          if (rect.top <= 200 && distance < minDistance) {
            minDistance = distance;
            currentActive = section;
          }
        }
      }
      // If we are in the activity section, highlight contact instead
      if (currentActive === "activity") {
        setActiveSection("contact");
      } else {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between w-full h-16 px-6 rounded-full border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-xl shadow-xl transition-all duration-500 pointer-events-auto ${
          scrolled ? "max-w-3xl" : "max-w-4xl"
        }`}
      >
        <Link 
          href="/" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <motion.div
            className="text-4xl font-extrabold font-rillosta relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute text-neutral-900 dark:text-white"
            >
              D
            </motion.span>
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="text-neutral-900 dark:text-white"
            >
              D
            </motion.span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="relative px-4 py-2 transition-colors"
              >
                <span className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-violet-500" 
                    : "text-neutral-500 dark:text-neutral-400 hover:text-violet-500"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="header-active-line"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-violet-500 shadow-[0_0_10px_2px_rgba(139,92,246,0.3)] rounded-full"
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex md:hidden">
          {/* Mobile menu placeholder */}
        </div>
        
        <div className="w-10 md:hidden" />
      </motion.div>
    </header>
  );
};

export default Header;
