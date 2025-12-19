import profilePic from "../assets/shoeb.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-8 pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm Shoeb. I build clean and reliable web applications.
            </motion.h1>

            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-neutral-300 mb-6 max-w-2xl"
            >
              I'm a Computer Engineering student and web developer who enjoys building real-world full-stack projects using React and Node.js. I'm currently looking for internships and junior roles.
            </motion.p>

            {/* Inline Info */}
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-sm text-neutral-400 mb-8 space-y-1"
            >
              <p>3rd year B.E. Computer Engineering (Mumbai University)</p>
              <p>Web Development Intern experience</p>
              <p>Open to internships & freelance work</p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
              <a
                href="/My latest resume.pdf"
                className="border border-purple-600 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <img
              src={profilePic}
              alt="Shoeb Antule - Full Stack Developer"
              className="rounded-2xl max-w-xs sm:max-w-sm lg:max-w-md shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
