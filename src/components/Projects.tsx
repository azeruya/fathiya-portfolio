const projects = [
    {
        number: "01",
        title: "Workshop Management System",
        subtitle: "developed for Vulcan Auto Service",
        description: "A full-stack web management system built to streamline day-to-day automotive workshop operations, from customer and job tracking to transactions, inventory, expenses, and financial reporting.",
        stack: ["Vue", "Laravel", "PostgreSQL", "Supabase"],
        image: "/vulcan-project-2.png",
        link: "#",
    },
    {
        number: "02",
        title: "Auto-Letter System",
        subtitle: "an university administrative platform",
        description: "An internal web application that automates student letter requests, allowing students to submit structured information while administrators manage templates, review applications, and issue documents efficiently.",
        stack: ["React", "TypeScript", "FastAPI", "Tailwind"],
        image: "/autoletter-project.png",
        link: "#",
    },
    {
        number: "03",
        title: "Studily",
        subtitle: "Student Learning Platform",
        description:
        "A digital product designed to make studying more organized and accessible through a focused, student-friendly experience.",
        stack: ["React", "TypeScript"],
        image: "/studily-project.png",
        link: "#",
    },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Section heading */}
        <div className="mb-16 md:mb-20">
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

                  <a
                    href={project.link}
                    className="
                      mt-8 inline-flex items-center gap-2
                      text-sm font-medium
                      text-zinc-950
                      transition
                      hover:gap-3
                      dark:text-zinc-50
                    "
                  >
                    view project
                    <span aria-hidden="true">↗</span>
                  </a>
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