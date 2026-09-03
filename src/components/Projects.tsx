import { ExternalLink } from "lucide-react";

const projects = [
    {
      number: "01",
      title: "Vulcan Auto Service",
      subtitle: "Workshop Management System",
      description:
        "A full-stack workshop management system that centralizes customer records, vehicle servicing, transactions, inventory, expenses, and financial reporting into a single operational platform.",
      stack: [
        "Vue 3",
        "Laravel",
        "Supabase",
        "ApexCharts",
        "DomPDF",
      ],
      image: "/vulcan-project.png",
      link: "https://vulcan-auto.vercel.app/login",
      repos: [
        {
          label: "Frontend",
          url: "https://github.com/azeruya/cikgu-kereta-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/azeruya/cikgu-kereta-management",
        },
      ],
    },
    {
      number: "02",
      title: "Auto-Letter System",
      subtitle: "Administrative Automation Platform",
      description:
        "A full-stack administrative platform that automates student letter requests, from dynamic form generation and request review to document creation, file management, and delivery.",
      stack: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "SQLite",
        "Tailwind CSS",
        "Ant Design",
      ],
      image: "/autoletter-project.png",
      link: "#",
      repos: [
        {
          label: "GitHub",
          url: "https://github.com/azeruya/auto-letter-py",
        },
      ],
    },
    {
      number: "03",
      title: "Studily",
      subtitle: "Gamified Study & Productivity App",
      description:
        "A full-stack gamified productivity app combining Pomodoro study sessions, task management, study tracking, and a virtual pet system designed to reward consistent focus.",
      stack: [
        "Vue 3",
        "PHP/Slim",
        "Supabase",
        "Tailwind CSS",
        "Docker",
      ],
      image: "/studily-project.png",
      link: "https://studily-delta.vercel.app/",
      repos: [
        {
          label: "Frontend",
          url: "https://github.com/azeruya/studily-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/azeruya/studily-backend",
        },
      ],
    },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Section heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            projects that turned ideas
            <br />
            into working systems.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A selection of applications I&apos;ve built around real workflows,
            operational needs, and user problems.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                group
                grid gap-10
                overflow-hidden
                rounded-[28px]
                border border-zinc-200
                p-7
                transition
                hover:border-zinc-300
                dark:border-zinc-800
                dark:hover:border-zinc-700
                md:grid-cols-[0.9fr_1.1fr]
                md:p-10
              "
            >
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <p className="text-sm text-zinc-400 dark:text-zinc-600">
                      {project.number}
                    </p>

                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                      {project.subtitle}
                    </p>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50 md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-10">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border border-zinc-200
                          px-3 py-1.5
                          text-xs
                          text-zinc-600
                          dark:border-zinc-800
                          dark:text-zinc-400
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">

                    {/* Live demo */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          bg-zinc-950
                          px-4 py-2
                          text-sm font-medium
                          text-white
                          transition
                          hover:bg-zinc-800

                          dark:bg-zinc-50
                          dark:text-zinc-950
                          dark:hover:bg-zinc-200
                        "
                      >
                        Live demo
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {/* GitHub repos */}
                    {project.repos.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          border border-zinc-200
                          px-4 py-2
                          text-sm font-medium
                          text-zinc-700
                          transition
                          hover:border-zinc-300
                          hover:bg-zinc-50
                          hover:text-zinc-950

                          dark:border-zinc-800
                          dark:text-zinc-300
                          dark:hover:border-zinc-700
                          dark:hover:bg-zinc-900
                          dark:hover:text-zinc-50
                        "
                      >
                        <img
                          src="/github.svg"
                          alt=""
                          className="h-4 w-4 dark:invert"
                        />

                        {repo.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  bg-zinc-100
                  dark:bg-zinc-900
                "
              >
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="
                    h-full
                    min-h-[320px]
                    w-full
                    object-cover
                    object-top
                    transition
                    duration-500
                    group-hover:scale-[1.015]
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}