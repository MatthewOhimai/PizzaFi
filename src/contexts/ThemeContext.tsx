"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialTheme(): Theme {
  // Always return the same value for SSR and initial hydration to avoid mismatches
  return "dark";
}

function getClientTheme(): Theme {
  // For client-side after hydration, check localStorage and system preference
  const stored = localStorage.getItem("pizza-theme");
  if (stored === "light" || stored === "dark") return stored as Theme;
  
  // Check system preference
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [isHydrated, setIsHydrated] = useState(false);

  const applyThemeClass = useCallback((t: Theme) => {
    const root = document.documentElement;
    
    // Apply theme class
    if (t === "dark") {
      root.classList.add("dark");
      // For browsers that don't fully support CSS variables in all contexts
      document.body.style.backgroundColor = "#0a0a0a";
      document.body.style.color = "#e8e8e8";
    } else {
      root.classList.remove("dark");
      // For browsers that don't fully support CSS variables in all contexts
      document.body.style.backgroundColor = "#FFF8F0";
      document.body.style.color = "#2C2C2C";
    }
  }, []);

  useEffect(() => {
    // Mark as hydrated and apply the correct theme
    setIsHydrated(true);
    const clientTheme = getClientTheme();
    setThemeState(clientTheme);
    applyThemeClass(clientTheme);
  }, [applyThemeClass]);

  useEffect(() => {
    applyThemeClass(theme);
    window.localStorage.setItem("pizza-theme", theme);
  }, [theme, applyThemeClass]);

  useEffect(() => {
    if (!isHydrated) return;
    
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const stored = window.localStorage.getItem("pizza-theme");
      if (!stored) {
        setThemeState(mql.matches ? "dark" : "light");
      }
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [isHydrated]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((prev) => (prev === "dark" ? "light" : "dark")), []);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}


