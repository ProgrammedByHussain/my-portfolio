"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import ThemeCard from "./ThemeCard";

export default function ExperienceSection() {
  const { theme } = useTheme();

  const experiences = [
    {
      position: "Undergraduate Research Assistant",
      company: "The University of British Columbia",
      period: "January 2025 - Present",
      description: "Working on PGo and Dcal.",
      logo: "UBC.jpg",
    },
    {
      position: "Systems Analyst Co-op",
      company: "University of Guelph",
      period: "June 2024 - December 2024",
      description: "Database merging and cleanup.",
      logo: "UofG.png",
    },
  ];

  const getCompanyLogoStyle = () => {
    return theme === "light" ? "bg-gray-100" : "bg-gray-700";
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center relative">
          <span className="relative z-10">Work Experience</span>
          <span
            className={`absolute -top-1 left-1/2 -translate-x-1/2 text-6xl ${
              theme === "light" ? "text-blue-500/10" : "text-blue-400/10"
            } font-bold z-0`}
          >
            CAREER
          </span>
        </h2>

        <div className="flex flex-col space-y-6">
          {experiences.map((exp, index) => (
            <ThemeCard key={index} delay={index * 100}>
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center ${getCompanyLogoStyle()}`}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          theme === "light" ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {exp.position}
                      </h3>
                      <p
                        className={
                          theme === "light" ? "text-gray-600" : "text-gray-300"
                        }
                      >
                        {exp.company}
                      </p>
                    </div>
                    <p
                      className={`mt-1 md:mt-0 ${
                        theme === "light" ? "text-blue-600" : "text-blue-400"
                      } font-medium`}
                    >
                      {exp.period}
                    </p>
                  </div>

                  <p
                    className={
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            </ThemeCard>
          ))}
        </div>
      </div>
    </section>
  );
}
