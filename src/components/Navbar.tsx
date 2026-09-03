import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav
            className="
                fixed left-1/2 top-4 z-50
                w-[calc(100%-2rem)] max-w-6xl
                -translate-x-1/2
                rounded-3xl

                border border-zinc-200/70
                bg-white/80
                shadow-sm shadow-zinc-950/[0.02]
                backdrop-blur-xl

                dark:border-zinc-800/70
                dark:bg-zinc-950/80
                dark:shadow-black/10
            "
        >
            <div className="flex h-16 items-center justify-between px-7">
                <a
                    href="#about"
                    className="text-lg font-semibold tracking-[-0.02em] 
                    text-zinc-950 dark:text-zinc-50"
                >
                    fathiya's portfolio.
                </a>

                <div className="
                    hidden items-center gap-1
                    text-sm text-zinc-600
                    dark:text-zinc-400
                    md:flex"
                >
                    <a
                        href="#about"
                        className="rounded-full bg-zinc-100 px-4 py-2 font-medium text-zinc-950 
                        dark:bg-zinc-800 dark:text-zinc-50"
                    >
                        home
                    </a>

                    {[
                        ["projects", "#projects"],
                        ["skills", "#skills"],
                        ["experience", "#experience"],
                        ["contact", "#contact"],
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="
                                rounded-full px-4 py-2
                                transition-colors

                                hover:bg-zinc-100
                                hover:text-zinc-950

                                dark:hover:bg-zinc-800
                                dark:hover:text-zinc-50
                            "
                        >
                            {label}
                        </a>
                    ))}

                    <div className="ml-2">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}