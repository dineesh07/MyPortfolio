"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const postIds = [
  "7455258530170736640",
  "7440744883382030336",
  "7439559024854859776"
];

const LinkedInActivity = () => {
  return (
    <section id="activity" className="mb-24 pt-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Latest Activity</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postIds.map((id, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 h-[600px]"
          >
            <iframe
              src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
              height="100%"
              width="100%"
              frameBorder="0"
              allowFullScreen={true}
              title={`LinkedIn Post ${index + 1}`}
              className="w-full h-full"
            ></iframe>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-8 text-center"
      >
        <a
          href="https://www.linkedin.com/in/dineesh30052007/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#0A66C2] hover:underline flex items-center justify-center gap-2"
        >
          View more on LinkedIn <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default LinkedInActivity;
