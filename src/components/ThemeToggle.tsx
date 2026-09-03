"use client";

import { use, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@teispace/next-themes";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return <div className="h-9 w-9" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button 
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
                flex h-9 w-9 items-center justify-center 
                rounded-full 
                border border-zinc-200 
                text-zinc-600
                transition 
                hover:text-zinc-950 
                hover:bg-zinc-100
                
                dark:border-zinc-800 
                dark:text-zinc-400 
                dark:hover:text-zinc-50
                dark:hover:bg-zinc-800
            "
        >
            {isDark ? (
                <Sun size={16} />
            ) : (
                <Moon size={16} />
            )}
        </button>
    );
}