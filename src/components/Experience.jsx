import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience
        </motion.h1>

        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
            >
              {/* Left Side: Year */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="lg:w-1/4"
              >
                <p className="text-lg font-semibold text-purple-400">{experience.year}</p>
              </motion.div>

              {/* Right Side: Role, Description, Technologies, Download Button */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="lg:w-3/4"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {experience.role}
                  <span className="text-purple-400 ml-2">@ {experience.company}</span>
                </h3>
                <p className="text-neutral-300 mb-4 leading-relaxed">{experience.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Download Offer Letter Button */}
                {experience.offerLetter && (
                  <a
                    href={experience.offerLetter}
                    download
                    className="inline-block bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Download Offer Letter
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
