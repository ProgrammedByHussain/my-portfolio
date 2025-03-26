"use client";

import { useTheme } from "./ThemeProvider";
import ThemeCard from "./ThemeCard";

export default function ProjectsSection() {
  const { theme } = useTheme();

  const getColorClasses = (colorName) => {
    const colorMap = {
      red: {
        light: { bg: "bg-red-100", text: "text-red-800" },
        dark: { bg: "bg-red-900/70", text: "text-red-200" },
      },
      blue: {
        light: { bg: "bg-blue-100", text: "text-blue-800" },
        dark: { bg: "bg-blue-900/70", text: "text-blue-200" },
      },
      purple: {
        light: { bg: "bg-purple-100", text: "text-purple-800" },
        dark: { bg: "bg-purple-900/70", text: "text-purple-200" },
      },
      indigo: {
        light: { bg: "bg-indigo-100", text: "text-indigo-800" },
        dark: { bg: "bg-indigo-900/70", text: "text-indigo-200" },
      },
      green: {
        light: { bg: "bg-green-100", text: "text-green-800" },
        dark: { bg: "bg-green-900/70", text: "text-green-200" },
      },
      yellow: {
        light: { bg: "bg-yellow-100", text: "text-yellow-800" },
        dark: { bg: "bg-yellow-900/70", text: "text-yellow-200" },
      },
      pink: {
        light: { bg: "bg-pink-100", text: "text-pink-800" },
        dark: { bg: "bg-pink-900/70", text: "text-pink-200" },
      },
      teal: {
        light: { bg: "bg-teal-100", text: "text-teal-800" },
        dark: { bg: "bg-teal-900/70", text: "text-teal-200" },
      },
      gray: {
        light: { bg: "bg-gray-100", text: "text-gray-800" },
        dark: { bg: "bg-gray-800/70", text: "text-gray-200" },
      },
    };

    return `${colorMap[colorName][theme].bg} ${colorMap[colorName][theme].text}`;
  };

  const projects = [
    {
      title: "Land Locks",
      description:
        "A blockchain-based NFT property rights platform built on the Internet Computer Protocol (ICP).",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      tags: [
        { name: "Rust", color: "red" },
        { name: "React", color: "blue" },
        { name: "ICP", color: "purple" },
        { name: "Web3", color: "indigo" },
      ],
      award: "1st Place at Hack Canada 2025",
      demoLink: "https://youtu.be/0Kc4P3s-sdk",
      githubLink: "https://github.com/ProgrammedByHussain/LandLocks",
    },
    {
      title: "Green Link",
      description:
        "An application that incentivizes transit use by rewarding users with points redeemable at local businesses.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      tags: [
        { name: "React Native", color: "blue" },
        { name: "TypeScript", color: "pink" },
        { name: "Node.js", color: "green" },
        { name: "Supabase", color: "teal" },
      ],
      award: "Top 8 and On Stage Award at BramHacks 2024",
      githubLink: "https://github.com/ProgrammedByHussain/GreenLink",
    },
    {
      title: "Switchify",
      description:
        "A program that transfers Spotify playlists to Apple Music using MusicKit.js and Spotify Web API.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      tags: [
        { name: "React", color: "blue" },
        { name: "TypeScript", color: "pink" },
        { name: "Node.js", color: "green" },
        { name: "Express", color: "gray" },
        { name: "Tailwind CSS", color: "teal" },
      ],
      githubLink: "https://github.com/ProgrammedByHussain/Switchify",
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDemoClick = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const YouTubeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 inline-block mr-1"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );

  const getGradientClasses = () => {
    return theme === "light"
      ? "from-blue-500 to-indigo-600"
      : "from-blue-600 to-indigo-700";
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="relative z-10">Projects</span>
            <span
              className={`absolute -top-1 left-1/2 -translate-x-1/2 text-6xl ${
                theme === "light" ? "text-blue-500/10" : "text-blue-400/10"
              } font-bold z-0`}
            >
              WORKS
            </span>
          </h2>

          <div className="flex flex-col space-y-6 w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project.githubLink)}
              >
                <ThemeCard
                  className="flex flex-col md:flex-row overflow-hidden project-card"
                  delay={index * 100}
                  hover={true}
                >
                  <div
                    className={`w-full md:w-1/3 bg-gradient-to-br ${getGradientClasses()} flex items-center justify-center text-white p-8`}
                  >
                    {project.icon}
                  </div>
                  <div className="p-6 w-full md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className={`text-xl font-bold group-hover:text-blue-500 transition-colors ${
                          theme === "light" ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {project.title}
                      </h3>
                      {project.award && (
                        <span
                          className={
                            theme === "light"
                              ? "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium"
                              : "bg-yellow-900/70 text-yellow-200 px-2 py-1 rounded text-xs font-medium"
                          }
                        >
                          {project.award}
                        </span>
                      )}
                    </div>
                    <p
                      className={
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`${getColorClasses(
                            tag.color
                          )} px-2 py-1 rounded text-xs`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.demoLink && (
                        <button
                          onClick={(e) => handleDemoClick(e, project.demoLink)}
                          className={`inline-block ${
                            theme === "light"
                              ? "text-blue-600"
                              : "text-blue-400"
                          } hover:text-blue-700 font-medium`}
                        >
                          <YouTubeIcon /> View Demo →
                        </button>
                      )}
                      <span
                        className={`${
                          theme === "light" ? "text-blue-600" : "text-blue-400"
                        } opacity-0 group-hover:opacity-100 transition-opacity`}
                      >
                        View on GitHub →
                      </span>
                    </div>
                  </div>
                </ThemeCard>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/ProgrammedByHussain"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-3 rounded-full transition-colors ${
                theme === "light"
                  ? "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  : "border border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white"
              }`}
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
