import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import { SiMongodb, SiFigma, SiTailwindcss, SiJavascript, SiGit, SiPostman, SiVercel, SiWordpress } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3, FaCode, FaObjectGroup, FaUsers, FaCogs, FaCloud, FaShareAlt, FaJava, FaNetworkWired } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technologies = () => {
  const frontendSkills = [
    { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
    { icon: SiJavascript, color: "text-yellow-400", name: "JavaScript" },
    { icon: FaHtml5, color: "text-orange-500", name: "HTML" },
    { icon: FaCss3, color: "text-blue-500", name: "CSS / Tailwind" },
    { icon: TbBrandNextjs, color: "text-white", name: "Next.js" },
    { icon: SiWordpress, color: "text-blue-600", name: "WordPress" },
  ];

  const backendSkills = [
    { icon: FaNodeJs, color: "text-green-500", name: "Node.js (Express)" },
    { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
  ];

  const programmingSkills = [
    { icon: FaJava, color: "text-red-500", name: "Java" },
    { icon: FaCode, color: "text-blue-500", name: "DSA" },
    { icon: FaObjectGroup, color: "text-purple-500", name: "OOP" },
    { icon: FaUsers, color: "text-green-500", name: "Agile" },
    { icon: FaCogs, color: "text-gray-500", name: "SDLC" },
  ];

  const toolsSkills = [
    { icon: SiGit, color: "text-orange-600", name: "Git" },
    { icon: SiFigma, color: "text-pink-500", name: "Figma" },
    { icon: SiPostman, color: "text-orange-500", name: "Postman" },
    { icon: SiVercel, color: "text-white", name: "Vercel" },
    { icon: FaCloud, color: "text-gray-500", name: "VPS Hosting" },
    { icon: FaShareAlt, color: "text-green-500", name: "Shared Hosting" },
    { icon: FaNetworkWired, color: "text-cyan-500", name: "Railwire (ISP)" },
  ];

  return (
    <div id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h1>

        <div className="space-y-16">
          {/* Frontend */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-8">Frontend</h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants(2 + index * 0.2)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
                >
                  <skill.icon className={`text-6xl ${skill.color}`} />
                  <span className="text-sm mt-2 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-8">Backend</h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants(2 + index * 0.2)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
                >
                  <skill.icon className={`text-6xl ${skill.color}`} />
                  <span className="text-sm mt-2 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Programming & Core Concepts */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-8">Programming & Core Concepts</h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {programmingSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants(2 + index * 0.2)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
                >
                  <skill.icon className={`text-6xl ${skill.color}`} />
                  <span className="text-sm mt-2 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools & Deployment */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-8">Tools & Deployment</h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants(2 + index * 0.2)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
                >
                  <skill.icon className={`text-6xl ${skill.color}`} />
                  <span className="text-sm mt-2 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
