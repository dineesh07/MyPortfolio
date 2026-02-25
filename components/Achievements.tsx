"use client";
import { motion } from "framer-motion";
import { FaCrown, FaTrophy, FaStar } from "react-icons/fa";

interface AchievementCardProps {
  title: string;
  description: string;
  mainBadge: string;
  subBadge: string;
  year: string;
  icon: React.ReactNode;
  colors: {
    iconBg: string;
    iconColor: string;
    mainBadgeBg: string; // Background for the main pill (e.g., "Leadership Role")
    subBadgeBg: string;  // Background for the secondary pill (e.g., "Leadership")
    subBadgeText: string;
    accentBorder: string; // The left border color if desired, or we can just use shadow/border
  };
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  mainBadge,
  subBadge,
  year,
  icon,
  colors,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-800 relative overflow-hidden`}
    >
      {/* Left Accent Border simulation */}
      <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${colors.accentBorder}`} />

      <div className="flex items-start justify-between mb-4 pl-6">
        <div className={`p-3 rounded-2xl ${colors.iconBg} ${colors.iconColor} text-xl`}>
          {icon}
        </div>

        <div className="flex gap-2 items-center">
          {/* Main Badge */}
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${colors.mainBadgeBg}`}>
            {mainBadge}
          </span>
          {/* Year */}
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            {year}
          </span>
        </div>
      </div>

      <div className="pl-6">
        {/* Sub Badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${colors.subBadgeBg} ${colors.subBadgeText}`}>
          {subBadge}
        </span>

        <h3 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100 leading-tight">
          {title}
        </h3>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const achievementsData: AchievementCardProps[] = [
  {
    title: "Department Coding Club – Joint Secretary",
    description: "Elected as Joint Secretary of the department coding club, coordinating technical events, supporting administrative planning, managing communications, and assisting in organizing coding activities and workshops in collaboration with the core team.",
    mainBadge: "Leadership Role",
    subBadge: "Leadership",
    year: "2025",
    icon: <FaCrown />,
    colors: {
      iconBg: "bg-violet-100 dark:bg-violet-900/30",
      iconColor: "text-violet-600 dark:text-violet-400",
      mainBadgeBg: "bg-violet-600",
      subBadgeBg: "bg-violet-100 dark:bg-violet-900/30",
      subBadgeText: "text-violet-700 dark:text-violet-300",
      accentBorder: "bg-violet-500",
    },
  },
  {
    title: "1st Prize – Hackwave 3.0.2",
    description: "1st prize winner in \"Hackwave 3.0.2\" 2026, an internal departmental hackathon focused on innovative software solutions.",
    mainBadge: "1st Prize",
    subBadge: "Hackathon",
    year: "2026",
    icon: <FaTrophy />,
    colors: {
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      mainBadgeBg: "bg-amber-500",
      subBadgeBg: "bg-amber-100 dark:bg-amber-900/30",
      subBadgeText: "text-amber-700 dark:text-amber-300",
      accentBorder: "bg-amber-500",
    },
  },
  {
    title: "3rd Prize – BIT Hackathon Season 2",
    description: "Won third place in the full-stack development domain at BIT Hackathon Season 2, a inter-college competition.",
    mainBadge: "3rd Prize",
    subBadge: "Hackathon",
    year: "2025",
    icon: <FaTrophy />,
    colors: {
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
      mainBadgeBg: "bg-orange-500",
      subBadgeBg: "bg-orange-100 dark:bg-orange-900/30",
      subBadgeText: "text-orange-700 dark:text-orange-300",
      accentBorder: "bg-orange-500",
    },
  },
  {
    title: "3rd Prize – HackWave 3.0",
    description: "Secured third place in HackWave 3.0, an internal departmental hackathon focused on innovative software solutions.",
    mainBadge: "3rd Prize",
    subBadge: "Hackathon",
    year: "2025",
    icon: <FaTrophy />,
    colors: {
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
      mainBadgeBg: "bg-orange-500",
      subBadgeBg: "bg-orange-100 dark:bg-orange-900/30",
      subBadgeText: "text-orange-700 dark:text-orange-300",
      accentBorder: "bg-orange-500",
    },
  },
  {
    title: "3rd Prize – Internal Ideathon",
    description: "Awarded third place in the departmental ideathon, generating creative solutions to real-world challenges.",
    mainBadge: "3rd Prize",
    subBadge: "Ideathon",
    year: "2025",
    icon: <FaStar />,
    colors: {
      iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      mainBadgeBg: "bg-indigo-500",
      subBadgeBg: "bg-indigo-100 dark:bg-indigo-900/30",
      subBadgeText: "text-indigo-700 dark:text-indigo-300",
      accentBorder: "bg-indigo-500",
    },
  },
  {
    title: "2nd Prize – UI/UX Design",
    description: "Achieved second place in the Department-Level UI/UX design competition at Techno Fest 2k25 in an intra-college event.",
    mainBadge: "2nd Prize",
    subBadge: "Design",
    year: "2025",
    icon: <FaStar />,
    colors: {
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      mainBadgeBg: "bg-blue-500",
      subBadgeBg: "bg-blue-100 dark:bg-blue-900/30",
      subBadgeText: "text-blue-700 dark:text-blue-300",
      accentBorder: "bg-blue-500",
    },
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="mb-24 pt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
