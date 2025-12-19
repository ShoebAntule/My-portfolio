import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Contact
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center text-neutral-300 mb-12 max-w-2xl mx-auto"
        >
          I'm open to internships and freelance opportunities. Feel free to reach out.
        </motion.p>

        <div className="flex flex-col items-center space-y-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <FaEnvelope className="text-purple-400 text-2xl" />
            <a
              href="mailto:shoebantule@gmail.com"
              className="text-lg hover:text-purple-400 transition-colors"
            >
              shoebantule@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/ShoebAntule"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shoeb-antule-422985284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="/My latest resume.pdf"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
