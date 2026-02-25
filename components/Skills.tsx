"use client";
import { motion } from "framer-motion";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiReact,
    SiFlutter, SiN8N, SiFigma,
    SiHtml5, SiCss3, SiJavascript, SiGit, SiFirebase, SiMysql, SiCanva,
    SiC, SiCplusplus, SiPython, SiPostgresql
} from "react-icons/si";
import Image from "next/image";

const skillCategories = [
    {
        title: "Web Development",
        className: "col-span-1 md:col-span-2",
        skills: [
            { name: "HTML", icon: <SiHtml5 size={32} />, color: "text-orange-500" },
            { name: "CSS", icon: <SiCss3 size={32} />, color: "text-blue-500" },
            { name: "Next.js", icon: <SiNextdotjs size={32} />, color: "text-white" },
            { name: "React", icon: <SiReact size={32} />, color: "text-cyan-400" },
            { name: "TypeScript", icon: <SiTypescript size={32} />, color: "text-blue-500" },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, color: "text-cyan-300" },
            { name: "Node.js", icon: <SiJavascript size={32} />, color: "text-yellow-400" },
        ]
    },
    {
        title: "Backend Technologies",
        className: "col-span-1",
        skills: [
            { name: "MySQL", icon: <SiMysql size={32} />, color: "text-blue-600" },
            { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "text-blue-400" },
            {
                name: "Neon (Postgres)",
                icon: <Image src="/neon.png" alt="Neon" width={32} height={32} className="w-8 h-8 rounded-md" />,
                color: "text-emerald-400"
            },
            { name: "Firebase", icon: <SiFirebase size={32} />, color: "text-yellow-500" },
        ]
    },
    {
        title: "Mobile & Automation",
        className: "col-span-1",
        skills: [
            { name: "Flutter", icon: <SiFlutter size={32} />, color: "text-blue-400" },
            { name: "n8n", icon: <SiN8N size={32} />, color: "text-red-500" },
        ]
    },
    {
        title: "Programming Languages",
        className: "col-span-1",
        skills: [
            { name: "C", icon: <SiC size={32} />, color: "text-blue-500" },
            { name: "C++", icon: <SiCplusplus size={32} />, color: "text-blue-600" },
            { name: "Python", icon: <SiPython size={32} />, color: "text-yellow-400" },
        ]
    },
    {
        title: "Design & Creative",
        className: "col-span-1",
        skills: [
            { name: "Figma", icon: <SiFigma size={32} />, color: "text-purple-400" },
            { name: "Canva", icon: <SiCanva size={32} />, color: "text-blue-500" },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="mb-24 pt-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-12"
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
                {skillCategories.map((category, catIndex) => (
                    <div key={category.title} className={category.className}>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="text-2xl font-bold mb-6 text-violet-400"
                        >
                            {category.title}
                        </motion.h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    transition={{ duration: 0.4, delay: (catIndex * 0.1) + (index * 0.05) }}
                                    className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-colors hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 aspect-square sm:aspect-auto sm:py-6"
                                >
                                    <div className={`${skill.color}`}>
                                        {skill.icon}
                                    </div>
                                    <span className="font-medium text-sm text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
