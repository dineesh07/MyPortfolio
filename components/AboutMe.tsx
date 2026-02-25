"use client";
import { motion } from "framer-motion";

import { MapPin, Layers, Zap, Brain } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="mb-24 pt-16">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-8">
        About Me
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-none mb-12 text-justify">
        I’m <span className="text-violet-500 font-bold">Dineesh M</span>, a Full-Stack Developer & UI/UX Designer currently pursuing my Master’s in Software Systems with a <span className="text-violet-500 font-bold">9.47 CGPA</span>. I focus on building visually clean, user-friendly digital experiences that feel smooth, intuitive, and well thought out, while constantly exploring AI tools to enhance both creativity and efficiency.
        <br /><br />
        I love building things that just make sense from refined UI details to seamless user flows. I adapt quickly to new technologies, experiment with AI, and use video editing as another creative outlet to bring ideas to life. <span className="text-violet-500 font-bold">Learning, evolving, and raising the bar with every project.</span>
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }}
          whileHover={{
            y: -10,
            borderColor: "rgba(139, 92, 246, 0.8)",
            boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.6)",
            transition: { duration: 0.2 }
          }}
          className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl transition-colors group"
        >
          <div className="bg-white dark:bg-neutral-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            <MapPin size={24} />
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-1">Location</h3>
          <p className="text-xl font-normal opacity-80">Erode</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }}
          whileHover={{
            y: -10,
            borderColor: "rgba(139, 92, 246, 0.8)",
            boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.6)",
            transition: { duration: 0.2 }
          }}
          className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl transition-colors group"
        >
          <div className="bg-white dark:bg-neutral-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            <Layers size={24} />
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-1">Projects Built</h3>
          <p className="text-xl font-normal opacity-80">9+</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }}
          whileHover={{
            y: -10,
            borderColor: "rgba(139, 92, 246, 0.8)",
            boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.6)",
            transition: { duration: 0.2 }
          }}
          className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl transition-colors group"
        >
          <div className="bg-white dark:bg-neutral-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-1">Current Focus</h3>
          <p className="text-xl font-normal opacity-80">Next.js & Tailwind CSS</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } }}
          whileHover={{
            y: -10,
            borderColor: "rgba(139, 92, 246, 0.8)",
            boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.6)",
            transition: { duration: 0.2 }
          }}
          className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl transition-colors group"
        >
          <div className="bg-white dark:bg-neutral-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            <Brain size={24} />
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-1">Learning</h3>
          <p className="text-xl font-normal opacity-80">Flutter & n8n</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

