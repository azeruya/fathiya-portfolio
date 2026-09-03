"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "home", id: "about" },
  { label: "projects", id: "projects" },
  { label: "skills", id: "skills" },
  { label: "experience", id: "experience" },
  { label: "contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
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
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
        shadow-sm
        backdrop-blur-xl

        dark:border-zinc-800/70
        dark:bg-zinc-950/80
      "
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:px-7">

        {/* Brand */}
        <a
          href="#about"
          className="
            text-base font-semibold tracking-[-0.02em]
            text-zinc-950
            dark:text-zinc-50
            sm:text-lg
          "
        >
          fathiya's portfolio.
        </a>

        <div className="flex items-center gap-2">

          {/* Desktop links */}
          <div className="hidden items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    rounded-full px-4 py-2
                    transition-colors

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
          </div>

          {/* Always visible */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-zinc-200
              text-zinc-600
              transition

              hover:bg-zinc-100

              dark:border-zinc-800
              dark:text-zinc-400
              dark:hover:bg-zinc-800

              md:hidden
            "
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="
            mx-3 mb-3
            border-t border-zinc-200
            px-2 pt-3
            dark:border-zinc-800
            md:hidden
          "
        >
          <div className="flex flex-col gap-1 pb-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    rounded-xl px-4 py-3
                    text-sm
                    transition-colors

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
                          text-zinc-600
                          hover:bg-zinc-100

                          dark:text-zinc-400
                          dark:hover:bg-zinc-800
                        `
                    }
                  `}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}