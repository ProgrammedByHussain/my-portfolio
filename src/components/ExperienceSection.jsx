"use client";

import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "BMO Financial Group",
      position: "Software Developer Intern",
      period: "September 2025 - Present",
      description: "APIs Platform Team (North American Retail Payments)",
      logo: "BMO.jpeg",
    },
    {
      company: "Health Espresso Inc.",
      position: "Software Developer Intern",
      period: "May 2025 - August 2025",
      description: "Backend Development & QA Automation",
      logo: "HE.jpeg",
    },
    {
      company: "The University of British Columbia",
      position: "Undergraduate Research Assistant",
      period: "January 2025 - August 2025",
      description: (
        <>
          Building{" "}
          <a
            href="https://distcompiler.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            PGo
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/DistCompiler/dcal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            DCal
          </a>
        </>
      ),
      logo: "UBC.jpg",
    },
    {
      company: "University of Guelph",
      position: "Software Engineer Intern",
      period: "June 2024 - December 2024",
      description: "Database Merging and Cleanup",
      logo: "UofG.png",
    },
    {
      company: "Yurmo",
      position: "Software Developer Intern",
      period: "May 2023 - August 2023",
      description: "Core Development",
      logo: "Yurmo.jpg",
    },
  ];

  return (
    <section id="experience" className="pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Work Experience
          </h2>

          <div className="flex flex-col space-y-4 w-full">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-sm">
                          {exp.company
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.position}
                        </p>
                      </div>
                      <p className="mt-1 md:mt-0 text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                      {typeof exp.description === "string"
                        ? exp.description
                        : exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
