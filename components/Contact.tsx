"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "dineeshmkalai@gmail.com",
      description: "Best for detailed discussions",
      href: "mailto:dineeshmkalai@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9363730057",
      description: "Available 9 AM - 8 PM IST",
      href: "tel:+919363730057",
      color: "bg-green-500",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/dineesh07",
      description: "Check out my code",
      href: "https://github.com/dineesh07",
      color: "bg-gray-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/dineesh...", // Shortened for display
      description: "Professional networking",
      href: "https://www.linkedin.com/in/dineesh30052007/",
      color: "bg-blue-700",
    },
  ];

  return (
    <section id="contact" className="pt-24 pb-10 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-violet-500 dark:text-violet-400">Have a Vision?</span>{" "}
          <span className="text-black dark:text-white">Let&apos;s build</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
        >
          Looking to collaborate, build something, or just say hi? I&apos;m open to freelance work and internship opportunities.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.title}
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <ExternalLink className="w-5 h-5 text-neutral-400" />
            </div>

            <div className="flex flex-col h-full">
              <div className={`${info.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                {info.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-violet-500 transition-colors">
                {info.title}
              </h3>

              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1 truncate">
                {info.value}
              </p>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-auto">
                {info.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
