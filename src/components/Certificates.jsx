import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample certificate data (replace with actual paths)
const CERTIFICATES = [
  {
    title: "FlipkartGrid Certification",
    image: "/certificates/FlipkartGrid.png",
    link: "/FlipkartGrid.pdf",
  },
  {
    title: "Performance Appraisal Quiz Certification",
    image: "/certificates/Performance Appraisal Quiz.png",
    link: "/Performance Appraisal Quiz.pdf",
  },
  {
    title: "Second Prize (The Tech Chase)",
    image: "/certificates/TECH%20CHASE.jpg",
    link: "/react.pdf",
  },
  {
    title: "Nexathon Project Competition",
    image: "/certificates/NEXATHON.jpg",
    link: "/uiux.pdf",
  },
  {
    title: "QueryCraft (SQL Querying)",
    image: "/certificates/RCOE%20cert.jpg",
    link: "/rcoe.pdf",
  },
  {
    title: "HackWithMumbai – National Level Hackathon (Certificate of Recognition)",
    image: "/certificates/HWI.jpg",
    link: "/rcoe.pdf",
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id="certificates" className="py-20">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Certificates
        </motion.h1>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-neutral-900 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
                onClick={() => setSelectedImage(cert.image)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{cert.title}</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedImage(cert.image)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View
                  </button>
                  <a
                    href={cert.link}
                    download
                    className="border border-purple-600 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full p-4">
              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-w-full max-h-full rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-xl font-bold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
