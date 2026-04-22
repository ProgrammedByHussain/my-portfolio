"use client";

const tagClass =
  "px-2 py-0.5 text-[11px] tracking-wide text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] rounded";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Land Locks",
      description:
        "Blockchain-based NFT property rights on the Internet Computer Protocol.",
      tags: ["Rust", "React", "ICP", "Web3"],
      award: "1st Place · Hack Canada 2025",
      demoLink: "https://youtu.be/0Kc4P3s-sdk",
      githubLink: "https://github.com/ProgrammedByHussain/LandLocks",
    },
    {
      title: "BitTorrent Client",
      description:
        "Peer-to-peer file sharing client built from scratch in Go against the original BitTorrent protocol. Each peer connection runs in its own goroutine for parallel message parsing and piece requests.",
      tags: ["Golang"],
      githubLink: "https://github.com/ProgrammedByHussain/bittorrent-go",
    },
    {
      title: "GoRedis",
      description:
        "Redis-compatible server built from scratch in Go, implementing the RESP protocol with goroutines for concurrent client handling.",
      tags: ["Golang"],
      githubLink: "https://github.com/ProgrammedByHussain/GoRedis",
    },
    {
      title: "CodeDucky.AI",
      description:
        "Chrome extension for LeetCode hints from your code, powered by OpenAI.",
      tags: ["React", "Flask", "OpenAI API", "Chrome Extension"],
      demoLink: "",
      githubLink: "https://github.com/ProgrammedByHussain/CodeDucky.AI",
    },
    {
      title: "Green Link",
      description:
        "Rewards transit use with points redeemable at local businesses.",
      tags: ["React Native", "TypeScript", "Node.js", "Supabase"],
      award: "Top 8 · BramHacks 2024",
      githubLink: "https://github.com/ProgrammedByHussain/GreenLink",
    },
    {
      title: "Switchify",
      description:
        "Transfers Spotify playlists to Apple Music via MusicKit and Spotify APIs.",
      tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/ProgrammedByHussain/Switchify",
    },
  ];

  const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <section
      id="projects"
      className="py-10 md:py-14 border-t border-[var(--border)]"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-12 md:mb-16">
          Projects
        </h2>

        <ul className="divide-y divide-[var(--border)]">
          {projects.map((project, index) => (
            <li key={index} className="py-10 first:pt-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => open(project.githubLink)}
                  className="text-left group"
                >
                  <span className="text-base font-medium text-[var(--foreground)] tracking-tight group-hover:text-[var(--muted)] transition-colors inline-flex items-center gap-2">
                    {project.title}
                    <span
                      className="text-[var(--muted)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm font-normal"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </button>
                {project.award && (
                  <span className="text-[11px] tracking-wide text-[var(--muted)] shrink-0">
                    {project.award}
                  </span>
                )}
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 max-w-xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((name) => (
                  <span key={name} className={tagClass}>
                    {name}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
                {project.demoLink && (
                  <button
                    type="button"
                    onClick={() => open(project.demoLink)}
                    className="text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--muted)] transition-[text-decoration-color] duration-200"
                  >
                    Demo
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => open(project.githubLink)}
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
                >
                  GitHub
                </button>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 pt-10 border-t border-[var(--border)]">
          <a
            href="https://github.com/ProgrammedByHussain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
          >
            More on GitHub →
          </a>
        </p>
      </div>
    </section>
  );
}
