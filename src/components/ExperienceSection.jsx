"use client";

const accentLinkClass =
  "text-sky-600 dark:text-sky-400 underline decoration-sky-500/45 dark:decoration-sky-400/40 underline-offset-4 hover:text-sky-700 dark:hover:text-sky-300 hover:decoration-sky-600/70 dark:hover:decoration-sky-300/60 transition-[color,text-decoration-color] duration-200";

const tagClass =
  "px-2 py-0.5 text-[11px] tracking-wide text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] rounded";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Tesla",
      position: "Software Engineer Intern",
      period: "May 2026 — Aug 2026",
      description: "Charging, Distributed Systems",
      technologies: ["Scala", "Akka", "Kubernetes", "Apache Kafka"],
      logo: "/tesla.jpeg",
    },
    {
      company: "BMO Capital Markets",
      position: "Software Engineer Intern",
      period: "Jan 2026 — Apr 2026",
      description: "Trading Platform",
      technologies: [
        "Python",
        "Scala",
        "Java",
        "Akka",
        "Kubernetes",
        "Apache Kafka",
      ],
      logo: "/BMO.jpeg",
    },
    {
      company: "The University of British Columbia",
      position: "Undergraduate Research Assistant",
      period: "Jan 2025 — Dec 2025",
      description: (
        <>
          Building{" "}
          <a
            href="https://distcompiler.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={accentLinkClass}
          >
            PGo
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/DistCompiler/dcal"
            target="_blank"
            rel="noopener noreferrer"
            className={accentLinkClass}
          >
            DCal
          </a>
        </>
      ),
      technologies: ["Golang", "Scala"],
      logo: "/UBC.jpg",
    },
    {
      company: "BMO Financial Group",
      position: "Software Developer Intern",
      period: "Sep 2025 — Dec 2025",
      description: "APIs Platform Team (North American Retail Payments)",
      technologies: ["TypeScript", "Node.js", "AWS"],
      logo: "/BMO.jpeg",
    },
    {
      company: "Health Espresso Inc.",
      position: "Software Developer Intern",
      period: "May 2025 — Aug 2025",
      description: "Backend Development & QA Automation",
      technologies: ["TypeScript", "Node.js", "AWS", "Python", "PostgreSQL"],
      logo: "/HE.jpeg",
    },
    {
      company: "University of Guelph",
      position: "Software Engineer Intern",
      period: "Jun 2024 — Dec 2024",
      description: "Database Merging and Cleanup",
      technologies: ["Python", "Java", "MSSQL"],
      logo: "/UofG.png",
    },
  ];

  return (
    <section
      id="experience"
      className="py-10 md:py-14 border-t border-[var(--border)]"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-12 md:mb-16">
          Experience
        </h2>

        <ul className="divide-y divide-[var(--border)]">
          {experiences.map((exp, index) => (
            <li key={index} className="flex gap-5 sm:gap-6 py-10 first:pt-0">
              <div className="shrink-0 w-11 h-11 rounded-md overflow-hidden bg-[var(--surface)] ring-1 ring-[var(--border)]">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] font-medium text-[var(--muted)]">
                    {exp.company
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="text-base font-medium text-[var(--foreground)] tracking-tight">
                    {exp.company}
                  </h3>
                  <time className="shrink-0 font-mono text-[12px] text-[var(--muted)] tabular-nums">
                    {exp.period}
                  </time>
                </div>
                <p className="text-sm text-[var(--muted)] mb-2">
                  {exp.position}
                </p>
                <p className="text-sm text-[var(--foreground)]/90 leading-relaxed">
                  {typeof exp.description === "string"
                    ? exp.description
                    : exp.description}
                </p>
                {exp.technologies?.length > 0 && (
                  <ul
                    className="mt-3 flex flex-wrap gap-1.5 list-none p-0"
                    aria-label="Technologies"
                  >
                    {exp.technologies.map((tech) => (
                      <li key={tech}>
                        <span className={tagClass}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
