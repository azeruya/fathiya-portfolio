"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "home", id: "about" },
  { label: "projects", id: "projects" },
  { label: "skills", id: "skills" },
  { label: "experience", id: "experience" },
  { label: "contact", id: "contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() => {
        const sections = navItems.map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null);
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { 
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0 
            }
        );

        sections.forEach((section) => observer.observe(section));
        
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

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
                {/* Logo */}
                <a
                href="#about"
                className="
                    text-lg font-semibold tracking-[-0.02em]
                    text-zinc-950
                    dark:text-zinc-50
                "
                >
                fathiya's portfolio.
                </a>

                {/* Navigation */}
                <div
                className="
                    hidden items-center gap-1
                    text-sm text-zinc-600
                    dark:text-zinc-400
                    md:flex
                "
                >
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`
                        rounded-full px-4 py-2
                        transition-all duration-200

                        ${
                            isActive
                            ? `
                                bg-zinc-100
                                font-medium
                                text-zinc-950

                                dark:bg-zinc-800
                                dark:text-zinc-50
                            `
                            : `
                                hover:bg-zinc-100
                                hover:text-zinc-950

                                dark:hover:bg-zinc-800
                                dark:hover:text-zinc-50
                            `
                        }
                        `}
                    >
                        {item.label}
                    </a>
                    );
                })}

                <div className="ml-2">
                    <ThemeToggle />
                </div>
                </div>
            </div>
        </nav>
    );
}