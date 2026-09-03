import { ChevronDown, Download } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="about"
            className="relative flex min-h-[90vh] items-center pt-20"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-14">

                {/* Text */}
                <div className="max-w-2xl">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                        Software Engineer
                    </p>

                    <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 md:text-[58px]">
                        hi, i'm Fathiya.
                        <span className="mt-2 block">
                            i build software that
                        </span>

                        <span
                            className="
                                mt-2 block
                                bg-gradient-to-r
                                from-blue-500 via-indigo-500 to-violet-500
                                bg-clip-text text-transparent

                                dark:from-blue-400
                                dark:via-indigo-400
                                dark:to-violet-400
                            "
                        >
                            solves real problems.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-[17px]">
                        i'm a Software Engineering graduate with experience
                        building web applications, business process automation,
                        and stakeholder-driven software systems.
                    </p>

                    {/* Social links */}
                    <div className="mt-8 flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/fathiyaazelya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 transition hover:border-zinc-300 hover:bg-zinc-50"
                        >
                            <img
                                src="/linkedin-color.svg"
                                alt=""
                                className="h-5 w-5"
                            />
                        </a>

                        <a
                        href="mailto:fathiya.azel@gmail.com"
                        aria-label="Email"
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-full
                            border border-zinc-200
                            transition
                            hover:border-zinc-300
                            hover:bg-zinc-50

                        "
                        >
                        {/* Light mode */}
                        <img
                            src="/email-2.svg"
                            alt=""
                            className="h-5 w-5 dark:hidden"
                        />

                        {/* Dark mode */}
                        <img
                            src="/email-3.svg"
                            alt=""
                            className="hidden h-5 w-5 dark:block"
                        />
                        </a>

                        {/* Resume */}
                        <a
                            href="/Fathiya-Azelya-Resume.pdf"
                            download
                            className="
                            ml-1 inline-flex h-10 items-center gap-2
                            rounded-full
                            bg-zinc-950
                            px-4
                            text-sm font-medium
                            text-white
                            transition
                            hover:bg-zinc-800

                            dark:bg-zinc-50
                            dark:text-zinc-950
                            dark:hover:bg-zinc-200
                            "
                        >
                            <Download size={14} />
                            Résumé
                        </a>

                    </div>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-full max-w-[350px] overflow-hidden rounded-[24px] bg-zinc-100">
                        <img
                            src="/img_1.JPG"
                            alt="Fathiya"
                            className="
                                aspect-[4/5]
                                w-full
                                object-cover
                                object-center

                                brightness-[0.86]
                                saturate-[0.82]
                                contrast-[0.96]

                                dark:brightness-[0.72]
                                dark:saturate-[0.75]
                                dark:contrast-[0.95]

                                transition-[filter]
                                duration-300
                            "
                        />

                        {/* Very subtle cool overlay */}
                        <div
                            className="
                                pointer-events-none absolute inset-0
                                bg-indigo-950/[0.04]
                                dark:bg-indigo-950/[0.12]
                            "
                        />
                    </div>
                </div>
            </div>

            <a
            href="#projects"
            className="
            absolute bottom-7 left-1/2
            flex -translate-x-1/2 flex-col items-center gap-1.5
            text-zinc-400
            transition-colors
            hover:text-zinc-700

            dark:text-zinc-400
            dark:hover:text-zinc-300
            "
            aria-label="Scroll to projects"
            >
            <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
                scroll
            </span>

            <ChevronDown size={16} />
            </a>
        </section>
    );
}