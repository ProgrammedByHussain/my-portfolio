import React from "react";

export default function ExperienceSection() {
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

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center relative">
          <span className="relative z-10">Work Experience</span>
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-6xl text-blue-500/10 font-bold z-0">
            CAREER
          </span>
        </h2>

        <div className="flex flex-col space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
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
                      <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                    <p className="mt-1 md:mt-0 text-blue-500 font-medium">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
