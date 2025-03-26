"use client";

export default function ProjectsSection() {
  const colorClasses = {
    red: {
      bg: "bg-red-100",
      text: "text-red-800",
      darkBg: "dark:bg-red-900",
      darkText: "dark:text-red-200",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      darkBg: "dark:bg-blue-900",
      darkText: "dark:text-blue-200",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-800",
      darkBg: "dark:bg-purple-900",
      darkText: "dark:text-purple-200",
    },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-800",
      darkBg: "dark:bg-indigo-900",
      darkText: "dark:text-indigo-200",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-800",
      darkBg: "dark:bg-green-900",
      darkText: "dark:text-green-200",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      darkBg: "dark:bg-yellow-900",
      darkText: "dark:text-yellow-200",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-800",
      darkBg: "dark:bg-pink-900",
      darkText: "dark:text-pink-200",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-800",
      darkBg: "dark:bg-teal-900",
      darkText: "dark:text-teal-200",
    },
    gray: {
      bg: "bg-gray-100",
      text: "text-gray-800",
      darkBg: "dark:bg-gray-900",
      darkText: "dark:text-gray-200",
    },
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

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center relative">
          <span className="relative z-10">Projects</span>
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-6xl text-blue-500/10 font-bold z-0">
            WORKS
          </span>
        </h2>

        <div className="flex flex-col space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.githubLink)}
            >
              <div
                className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-fade-in flex flex-col md:flex-row 
                transition-all duration-300 transform group-hover:shadow-2xl group-hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white p-8">
                  {project.icon}
                </div>
                <div className="p-6 w-full md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded text-xs font-medium">
                        {project.award}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`${colorClasses[tag.color].bg} ${
                          colorClasses[tag.color].text
                        } ${colorClasses[tag.color].darkBg} ${
                          colorClasses[tag.color].darkText
                        } px-2 py-1 rounded text-xs`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.demoLink && (
                      <button
                        onClick={(e) => handleDemoClick(e, project.demoLink)}
                        className="inline-block text-blue-500 hover:text-blue-700 font-medium"
                      >
                        <YouTubeIcon /> View Demo →
                      </button>
                    )}
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      View on GitHub →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ProgrammedByHussain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
