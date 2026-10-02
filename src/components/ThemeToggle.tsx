import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleProps {
  variant?: "icon" | "pill" | "compact";
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  variant = "pill", 
  className = "" 
}) => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "icon") {
    return (
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
        className={`relative p-2 rounded-lg transition-all duration-300 focus:outline-none ${
          isDark 
            ? "bg-slate-900 text-amber-400 border border-gold-500/30 hover:border-gold-400" 
            : "bg-slate-100 text-slate-800 border border-slate-300 hover:border-slate-400"
        } ${className}`}
      >
        <span className="relative z-10 flex items-center justify-center">
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </span>
      </button>
    );
  }

  // Dual-option segmented toggle pill (Clear, intuitive, zero ambiguity)
  return (
    <div 
      className={`inline-flex items-center p-1 rounded-full bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-gold-500/30 shadow-inner ${className}`}
    >
      <button
        onClick={() => setTheme("light")}
        aria-label="Activate Light Theme"
        title="Light Theme"
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
          !isDark
            ? "bg-white text-slate-900 shadow-md border border-slate-200 font-bold"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
        }`}
      >
        <Sun className={`w-3.5 h-3.5 ${!isDark ? "text-amber-500" : "text-slate-400"}`} />
        <span>Light</span>
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-label="Activate Dark Theme"
        title="Dark Theme"
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
          isDark
            ? "bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 shadow-md font-bold"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
        }`}
      >
        <Moon className={`w-3.5 h-3.5 ${isDark ? "text-slate-950" : "text-slate-400"}`} />
        <span>Dark</span>
      </button>
    </div>
  );
};
