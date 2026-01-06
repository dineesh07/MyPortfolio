"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiVideo } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  oneLiner: string;
  techStack: string[];
  challenge?: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  oneLiner,
  techStack,
  challenge,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl min-h-[300px] flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="opacity-80 mb-4 text-justify">{oneLiner}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span key={i} className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        {challenge && (
          <p className="text-sm opacity-60 italic">Challenge: {challenge}</p>
        )}
      </div>
      {link !== "#" && (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-between text-violet-500 hover:text-violet-400 transition-colors group">
          <span className="text-lg font-semibold">{title === "Video Archives" ? "Watch Videos" : "View Project"}</span>
          <motion.div
            className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 relative"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-violet-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {title === "Video Archives" ? <FiVideo className="relative z-10" /> : <FiArrowUpRight className="relative z-10" />}
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
};

const projectData = [
  {
    title: "GlobeTrotter",
    oneLiner: "Built a lightweight travel planning web application that enables users to create personalized multi-city itineraries, manage activities and budgets, visualize trip timelines, and share travel plans—making trip planning intuitive, efficient, and engaging.",
    techStack: ["Web App", "Travel"],
    challenge: "Making trip planning intuitive and efficient.",
    link: "#",
  },
  {
    title: "HR Management & Payroll Automation",
    oneLiner: "Created an integrated HR web application that automates leave-to-payroll synchronization, improving accuracy and efficiency while reducing manual effort.",
    techStack: ["HR Tech", "Automation"],
    challenge: "Ensuring 100% accuracy in payroll calculations.",
    link: "#",
  },
  {
    title: "College Event Management System",
    oneLiner: "Developed an event management system with dynamic group registration forms and automated fee calculation, generating custom payment QR codes to ensure accurate billing and eliminate manual errors.",
    techStack: ["Event Mgmt", "Payments"],
    challenge: " eliminating manual billing errors.",
    link: "#",
  },
  {
    title: "CamoClash – Quiz-Based Arcade Game",
    oneLiner: "Developed a Python-based arcade game using Pygame that blends fast-paced action with quiz-based challenges. The game features multiple levels with physics-driven movement, obstacle avoidance, interactive scoring, and knowledge-based gameplay to test both reflexes and problem-solving skills.",
    techStack: ["Game Dev", "Python"],
    challenge: "Blending fast-paced action with quiz mechanics.",
    link: "#",
  },
  {
    title: "Family Task Management App",
    oneLiner: "Developed a family-focused task management application that centralizes daily task assignment, shared responsibilities, expense tracking, and meal planning in one platform. The app enables real-time coordination through reminders, family-based access using unique codes, and smart meal suggestions based on past entries, simplifying everyday household management and collaboration.",
    techStack: ["Task Mgmt", "Real-time"],
    challenge: "Simplifying everyday household management.",
    link: "#",
  },
  {
    title: "Video Archives",
    oneLiner: "A curated collection of my video editing work, featuring visual storytelling, dynamic cuts, and motion graphics. Explore my Drive folder to see my edited projects.",
    techStack: ["Video Editing", "Visuals"],
    link: "https://drive.google.com/drive/folders/1QYhNLWdX5u45NvvGxzzTPbbAYBy9gBhu?usp=drive_link",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-24 pt-16">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-8">
        My Work
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
