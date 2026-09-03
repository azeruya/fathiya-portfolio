export default function Hero() {
    return (
        <section className="flex min-h-screen items-center">
            <div className="mx-auto w-full max-w-6xl px-6 py-32">
                <div className="max-w-3xl">
                    <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Software Engineer
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-6xl md:text-6xl">
                        hi, i'm Fathiya.
                        <br />
                        I build software that
                        <br />
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            solves real problems.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
                        Software Engineering graduate with experience building web applications, business process
                        automation, and stakeholder-driven software systems.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#projects" 
                        className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
                            View my work
                        </a>

                        <a href="#contact"
                        className="rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}