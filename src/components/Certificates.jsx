import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample certificate data (replace with actual paths)
const CERTIFICATES = [
  {
    title: "FlipkartGrid Certification",
    image: "/certificates/FlipkartGrid.png",
    link: "/certificates/FlipkartGrid.pdf",
  },
  {
    title: "Performance Appraisal Quiz Certification",
    image: "/certificates/Performance Appraisal Quiz.png",
    link: "/certificates/Performance Appraisal Quiz.pdf",
  },
  {
    title: "React Developer Certificate",
    image: "/certificates/react.png",
    link: "/certificates/react.pdf",
  },
  {
    title: "UI/UX Design Certificate",
    image: "/certificates/uiux.png",
    link: "/certificates/uiux.pdf",
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-10">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-neutral-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
              onClick={() => setSelectedImage(cert.image)}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <div className="mt-2 flex justify-between">
                <button
                  onClick={() => setSelectedImage(cert.image)}
                  className="text-blue-400 hover:underline"
                >
                  View
                </button>
                <a
                  href={cert.link}
                  download
                  className="text-green-400 hover:underline"
                >
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox for Viewing Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img src={selectedImage} alt="Certificate Preview" className="max-w-lg rounded-lg" />
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
