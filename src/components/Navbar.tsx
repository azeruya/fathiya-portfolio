export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="/" className="text-lg font-semibold tracking-tight">
                    fathiya's portfolio.
                </a>

                <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
                    <a href="#about" className="transition-colors hover:text-black">
                        About
                    </a>

                    <a href="#projects" className="transition-colors hover:text-black">
                        Projects
                    </a>

                    <a href="#experience" className="transition-colors hover:text-black">
                        Experience
                    </a>

                    <a href="#contact" className="transition-colors hover:text-black">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}