import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        scroll-mt-24
        border-t border-zinc-100
        py-24 md:py-32
        dark:border-zinc-900
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Heading */}
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
          Contact
        </p>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          {/* Main message */}
          <div>
            <h2
              className="
                max-w-3xl
                text-4xl font-semibold
                tracking-[-0.04em]
                text-zinc-950

                dark:text-zinc-50
                sm:text-5xl
                md:text-6xl
              "
            >
              have a problem
              <br />
              worth solving?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              I'm open to software engineering opportunities,
              collaborations, and interesting projects. Feel free to reach out.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:fathiya.azelya@gmail.com"
              className="
                group flex w-full items-center justify-between
                rounded-2xl
                border border-zinc-200
                px-5 py-4
                transition

                hover:border-zinc-300
                hover:bg-zinc-50

                dark:border-zinc-800
                dark:hover:border-zinc-700
                dark:hover:bg-zinc-900

                md:max-w-sm
              "
            >
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-zinc-500 dark:text-zinc-400"
                />

                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    Email
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    fathiya.azel@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className="
                  text-zinc-400
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            <a
              href="https://www.linkedin.com/in/fathiyaazelya/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex w-full items-center justify-between
                rounded-2xl
                border border-zinc-200
                px-5 py-4
                transition

                hover:border-zinc-300
                hover:bg-zinc-50

                dark:border-zinc-800
                dark:hover:border-zinc-700
                dark:hover:bg-zinc-900

                md:max-w-sm
              "
            >
              <div className="flex items-center gap-3">
                <img
                  src="/linkedin-color.svg"
                  alt=""
                  className="h-[18px] w-[18px]"
                />

                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    LinkedIn
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    fathiyaazelya
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className="
                  text-zinc-400
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="
            mt-24 flex flex-col gap-3
            border-t border-zinc-200
            pt-6
            text-xs text-zinc-400

            dark:border-zinc-800
            dark:text-zinc-600

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© {new Date().getFullYear()} Fathiya Azelya</p>

          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
}