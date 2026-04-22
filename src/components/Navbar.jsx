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

      setIsScrolled(scrollPosition > 8);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop - 120;
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

  const linkClass = (id) =>
    `text-[13px] tracking-[0.12em] uppercase transition-colors ${
      activeSection === id
        ? "text-[var(--foreground)]"
        : "text-[var(--muted)] hover:text-[var(--foreground)]"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-[padding,background-color,border-color] duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="text-sm font-medium text-[var(--foreground)] tracking-tight"
        >
          Hussain Al-Shammari
        </a>

        <div className="hidden md:flex gap-10 items-center">
          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className={linkClass("experience")}
          >
            Experience
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className={linkClass("projects")}
          >
            Projects
          </button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md px-6 py-5">
          <div className="flex flex-col gap-1 max-w-2xl mx-auto">
            <button
              type="button"
              onClick={() => scrollToSection("experience")}
              className={`text-left py-3 ${linkClass("experience")}`}
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className={`text-left py-3 ${linkClass("projects")}`}
            >
              Projects
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
