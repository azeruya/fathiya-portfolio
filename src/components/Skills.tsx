import {
  Code2,
  ServerCog,
  Database,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    description:
      "Building responsive, component-driven interfaces with modern JavaScript frameworks.",
    skills: [
      "React",
      "Vue 3",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    number: "02",
    title: "Backend",
    icon: ServerCog,
    description:
      "Developing APIs and application logic for full-stack systems and workflow automation.",
    skills: [
      "Laravel",
      "FastAPI",
      "PHP",
      "Python",
      "Slim",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Data & Infrastructure",
    icon: Database,
    description:
      "Working with relational databases, hosted services, and application deployment.",
    skills: [
      "PostgreSQL",
      "Supabase",
      "SQLite",
      "Docker",
      "Vercel",
      "Render",
    ],
  },
  {
    number: "04",
    title: "Tools & Practices",
    icon: Workflow,
    description:
      "Tools and practices I use to build, maintain, and collaborate on software projects.",
    skills: [
      "Git",
      "GitHub",
      "API Integration",
      "Agile",
      "Responsive Design",
      "Zapier",
      "Business Process Automation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-24
        border-t border-zinc-100
        py-20 md:py-28
        dark:border-zinc-900
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-14 md:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Skills
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            tools I use to bring
            <br />
            ideas to life.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Technologies and practices I&apos;ve used across full-stack
            applications, internal systems, and product development.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
                <article
                key={group.title}
                className="
                    rounded-[24px]
                    border border-zinc-200
                    p-6 md:p-7
                    transition-all
                    hover:-translate-y-0.5
                    hover:border-zinc-300

                    dark:border-zinc-800
                    dark:hover:border-zinc-700

                    md:p-8
                "
                >
                <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-3">
                    <div
                        className="
                        flex h-8 w-8 items-center justify-center
                        rounded-lg
                        bg-zinc-100
                        text-zinc-600

                        dark:bg-zinc-900
                        dark:text-zinc-400
                        "
                    >
                        <Icon size={17} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-xl md:text-[22px] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                        {group.title}
                    </h3>
                    </div>

                    <span className="text-sm text-zinc-400 dark:text-zinc-600">
                    {group.number}
                    </span>
                </div>

                <p className="mt-5 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                    <span
                        key={skill}
                        className="
                        rounded-full
                        border border-zinc-200
                        bg-zinc-50
                        px-3 py-1.5
                        text-xs font-medium
                        text-zinc-700

                        dark:border-zinc-800
                        dark:bg-zinc-900
                        dark:text-zinc-300
                        "
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </article>
            );
            })}
        </div>
      </div>
    </section>
  );
}