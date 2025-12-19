import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-white">
            Shoeb Antule
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-neutral-300 hover:text-purple-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-neutral-300 hover:text-purple-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-neutral-300 hover:text-purple-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-neutral-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-neutral-300 hover:text-purple-400 transition-colors"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-neutral-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
            <a
              href="/My latest resume.pdf"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Resume
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/ShoebAntule"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-purple-400 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/shoeb-antule-422985284/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-300 hover:text-white"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-purple-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-purple-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-purple-400 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-purple-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-purple-400 transition-colors"
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
              <a
                href="/My latest resume.pdf"
                className="block w-full text-left px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                Resume
              </a>
              <div className="flex justify-center space-x-4 pt-2">
                <a
                  href="https://github.com/ShoebAntule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-purple-400 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shoeb-antule-422985284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-purple-400 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
