"use client";

export default function ProjectsSection() {
  const getColorClasses = (colorName) => {
    const colorMap = {
      red: "bg-red-100 dark:bg-red-900/70 text-red-800 dark:text-red-200",
      blue: "bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-200",
      purple:
        "bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200",
      indigo:
        "bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200",
      green:
        "bg-green-100 dark:bg-green-900/70 text-green-800 dark:text-green-200",
      yellow:
        "bg-yellow-100 dark:bg-yellow-900/70 text-yellow-800 dark:text-yellow-200",
      pink: "bg-pink-100 dark:bg-pink-900/70 text-pink-800 dark:text-pink-200",
      teal: "bg-teal-100 dark:bg-teal-900/70 text-teal-800 dark:text-teal-200",
      gray: "bg-gray-100 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200",
    };

    return colorMap[colorName] || colorMap.gray;
  };

  const projects = [
    {
      title: "Land Locks",
      description:
        "A blockchain-based NFT property rights platform built on the Internet Computer Protocol (ICP).",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
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
      title: "CodeDucky.AI",
      description:
        "A Chrome extension that provides intelligent hints for LeetCode problems based on your current code, using OpenAI's API.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      tags: [
        { name: "React", color: "blue" },
        { name: "Flask", color: "green" },
        { name: "OpenAI API", color: "purple" },
        { name: "Chrome Extension", color: "yellow" },
      ],
      demoLink: "",
      githubLink: "https://github.com/ProgrammedByHussain/CodeDucky.AI",
    },
    {
      title: "Green Link",
      description:
        "An application that incentivizes transit use by rewarding users with points redeemable at local businesses.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
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
          className="h-12 w-12"
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

  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

          <div className="flex flex-col space-y-4 w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project.githubLink)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 flex items-center justify-center text-white p-6">
                      {project.icon}
                    </div>
                    <div className="p-6 w-full md:w-3/4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        {project.award && (
                          <span className="bg-yellow-100 dark:bg-yellow-900/70 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            {project.award}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
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
                            onClick={(e) =>
                              handleDemoClick(e, project.demoLink)
                            }
                            className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
                          >
                            <YouTubeIcon /> View Demo →
                          </button>
                        )}
                        <span className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          View on GitHub →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://github.com/ProgrammedByHussain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full transition-colors border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
