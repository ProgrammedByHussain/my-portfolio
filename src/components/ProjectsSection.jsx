export default function ProjectsSection() {
  const projects = [
    {
      title: "Land Locks",
      description:
        "A blockchain-based NFT property rights platform built on the Internet Computer Protocol (ICP). Implemented NFT minting, search, and transfer features, leveraging Rust canister smart contracts to optimize storage and reduce query response times by 40%. Developed secure user authentication using Internet Identity, allowing seamless login and ownership verification. Deployed to the ICP Mainnet, ensuring permanent on-chain storage, and fast, low-cost transactions without gas fees.",
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
    },
    {
      title: "Green Link",
      description:
        "An application that incentivizes transit use by rewarding users with points redeemable at local businesses. Integrated Google Maps API with geofencing to dynamically track user location and verify transit use every 100 ms. Stored recent routes and user data in a Supabase database, with live updates to in-app eco-score progression.",
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
    },
    {
      title: "Mood Muse",
      description:
        "A program that analyzes songs and provides mood-curated playlists based on lyrics and audio features. Integrated Spotify and Genius APIs to fetch song data and lyric URLs, using web scraping to extract lyrics. Engineered a machine learning pipeline using TensorFlow to process song lyrics and predict a mood for each track.",
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
        { name: "MongoDB", color: "green" },
        { name: "Express", color: "gray" },
        { name: "React", color: "blue" },
        { name: "Node.js", color: "green" },
        { name: "Python", color: "yellow" },
      ],
    },
  ];

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
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-fade-in flex flex-col md:flex-row"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white p-8">
                {project.icon}
              </div>
              <div className="p-6 w-full md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
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
                      className={`bg-${tag.color}-100 text-${tag.color}-800 dark:bg-${tag.color}-900 dark:text-${tag.color}-200 px-2 py-1 rounded text-xs`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-500 hover:text-blue-700 font-medium"
                    >
                      View Demo →
                    </a>
                  )}
                  <a
                    href="#"
                    className="inline-block text-blue-500 hover:text-blue-700 font-medium"
                  >
                    View Details →
                  </a>
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
