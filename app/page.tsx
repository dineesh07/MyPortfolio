"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import MagneticButton from "../components/MagneticButton";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const socialLinks = [
  { icon: <FiGithub />, href: "https://github.com/dineesh07", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/dineesh30052007/", label: "LinkedIn" },
  { icon: <FiInstagram />, href: "https://www.instagram.com/dineesh._.07/", label: "Instagram" },
  { icon: <FiMail />, href: "mailto:dineeshmkalai@gmail.com", label: "Email" },
];

const roles = [
  "Creative Web Developer",
  "UI/UX Designer",
  "AI Tools Enthusiast",
  "Video Editor"
];

const RotatingRoles = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayedText === currentRole) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50); // Faster when deleting
      }, 2000); // Wait 2 seconds before deleting
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      // Finished deleting, move to next role
      setIsDeleting(false);
      setTypingSpeed(100); // Normal speed when typing
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="mt-4 text-4xl md:text-6xl font-bold text-violet-500 min-h-[60px] md:min-h-[90px]"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
};

const SocialMediaLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      <div className="flex items-center gap-3 md:gap-4 bg-neutral-100/80 backdrop-blur-md border border-neutral-200 rounded-full px-4 md:px-6 py-3 md:py-4">
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
            className="text-xl md:text-2xl text-neutral-700 hover:text-violet-500 transition-colors relative"
            aria-label={link.label}
          >
            {link.icon}
            {hoveredIndex === index && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-neutral-900 text-white px-2 py-1 rounded whitespace-nowrap"
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

export default function Home() {
  useEffect(() => {
    // Scroll to top on page refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen p-8 pt-32 max-w-7xl mx-auto">
      <section id="home" className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center mt-16">
          {/* Left Side - Text Content */}
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 font-bold leading-tight text-5xl md:text-6xl lg:text-7xl">
              Hi! I'm <span className="text-violet-500 font-bold whitespace-nowrap">Dineesh M</span>
            </motion.p>
            <RotatingRoles />
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-2 text-lg md:text-xl lg:text-2xl opacity-80 italic max-w-lg">
              I design and build visually refined web experiences with great UX. Enthusiastic about AI tools and creative visuals.
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} className="mt-8 flex items-center gap-4 flex-wrap">
              <MagneticButton>
                <button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-violet-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-violet-600 transition-colors cursor-pointer"
                >
                  View My Work
                </button>
              </MagneticButton>
              <SocialMediaLinks />
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end lg:translate-x-12"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-200/30 to-violet-300/20 rounded-3xl blur-2xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
                <img
                  src="/profile-updated.jpg"
                  alt="Dineesh M"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutMe />

      <Skills />

      <Projects />

      <Achievements />

      <Contact />
      <Footer />
    </main>
  );
}