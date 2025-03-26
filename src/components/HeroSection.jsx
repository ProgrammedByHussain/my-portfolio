"use client";

import { useTheme } from "./ThemeProvider";
import ThemeCard from "./ThemeCard";

export default function HeroSection() {
  const { theme } = useTheme();
  const introText = "Hi, I'm Hussain";

  const introLetters = introText.split("").map((letter, index) => {
    const letterClass =
      index === 0 || index === 1 || index === 2 ? "text-blue-500" : "";

    return (
      <span
        key={index}
        className={`inline-block transition-transform duration-200 hover:text-blue-500 hover:-translate-y-2 ${letterClass}`}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    );
  });

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center py-20"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 animate-fade-in text-center">
          {introLetters}
        </h1>

        <div className="flex justify-center items-center space-x-8 mb-12 animate-fade-in delay-100">
          <a
            href="https://github.com/ProgrammedByHussain"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            } hover:text-blue-500 transition-all hover:scale-125`}
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/hussain-al-shammari"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            } hover:text-blue-500 transition-all hover:scale-125`}
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a
            href="mailto:alshammh@uoguelph.ca"
            className={`${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            } hover:text-blue-500 transition-all hover:scale-125`}
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        <ThemeCard
          className="max-w-2xl mx-auto p-6 backdrop-blur-sm text-left"
          delay={200}
        >
          <p className="text-lg mb-4">
            Hello! I'm Hussain, a third-year computer science student at the
            University of Guelph. I enjoy learning new things and building cool
            projects. I'm passionate about software development and research.
          </p>

          <p className="text-lg">
            When I'm not coding, I enjoy going to the gym and meeting new
            people.
          </p>
        </ThemeCard>
      </div>
    </section>
  );
}
