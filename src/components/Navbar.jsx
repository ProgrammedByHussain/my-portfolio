"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "projects"];
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop - 100;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold transition-transform hover:scale-105">
          <a href="#" className="flex items-center gap-2">
            <span className="text-blue-500">HA</span>
            <span className="text-gray-900 dark:text-white">
              Hussain Al-Shammari
            </span>
          </a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection("experience")}
            className={`transition-all hover:text-blue-500 relative ${
              activeSection === "experience"
                ? "text-blue-500 font-medium"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Experience
            {activeSection === "experience" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform transition-transform"></span>
            )}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`transition-all hover:text-blue-500 relative ${
              activeSection === "projects"
                ? "text-blue-500 font-medium"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform transition-transform"></span>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <button
            className="p-2 text-gray-800 dark:text-gray-200 transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("experience")}
              className={`py-2 px-4 rounded ${
                activeSection === "experience"
                  ? "bg-blue-500/10 text-blue-500 font-medium"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`py-2 px-4 rounded ${
                activeSection === "projects"
                  ? "bg-blue-500/10 text-blue-500 font-medium"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              Projects
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
