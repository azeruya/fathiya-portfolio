const experiences = [
  {
    period: "Mar 2026 — Present",
    role: "AI Coding Trainer",
    company: "DataAnnotation",
    type: "Freelance",
    description:
      "Evaluate AI-generated code and technical responses through programming, debugging, and software engineering tasks.",
    tags: [
      "Code Evaluation",
      "Debugging",
      "AI Training",
      "Quality Assurance",
    ],
  },
  {
    period: "Sep 2025 — Mar 2026",
    role: "Digitalization Intern",
    company: "Verdant Solar Sdn Bhd",
    type: "Internship",
    description:
      "Built workflow automations, dashboards, and system integrations to improve operational efficiency across multiple departments.",
    tags: [
      "Automation",
      "Zapier",
      "Dashboards",
      "SDLC",
    ],
  },
  {
    period: "Oct 2022 — Jul 2026",
    role: "Bachelor of Computer Science",
    company: "Universiti Teknologi Malaysia",
    type: "Education",
    description:
      "Software Engineering with Honours, with a focus on full-stack development, software design, systems analysis, and practical engineering projects.",
    tags: [
      "CGPA 3.99",
      "Dean’s List — All Semesters",
      "Software Engineering",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        scroll-mt-24
        border-t border-zinc-100
        py-20 md:py-28
        dark:border-zinc-900
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-14 md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Experience
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            where I've learned
            <br />
            by building.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Experience across software engineering, automation, AI evaluation,
            and academic development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div
            className="
              absolute bottom-3 left-[7px] top-3
              hidden w-px
              bg-zinc-200
              dark:bg-zinc-800
              md:block
            "
          />

          <div className="space-y-16">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="
                  relative
                  grid gap-6
                  md:grid-cols-[190px_1fr]
                  md:gap-12
                "
              >
                {/* Timeline dot */}
                <div
                  className="
                    absolute left-0 top-2
                    hidden
                    h-[15px] w-[15px]
                    rounded-full
                    border-[4px] border-white
                    bg-zinc-400

                    dark:border-zinc-950
                    dark:bg-zinc-600

                    md:block
                  "
                />

                {/* Date */}
                <div className="md:pl-8">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {experience.period}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
                    {experience.type}
                  </p>
                </div>

                {/* Content */}
                <div className="border-b border-zinc-200 pb-14 dark:border-zinc-800">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-base font-medium text-zinc-500 dark:text-zinc-400">
                    {experience.company}
                  </p>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border border-zinc-200
                          px-3 py-1.5
                          text-xs font-medium
                          text-zinc-600

                          dark:border-zinc-800
                          dark:text-zinc-400
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}