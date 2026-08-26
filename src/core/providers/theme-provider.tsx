"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const themeListeners = new Set<() => void>();

function getTheme(): Theme {
  const stored = localStorage.getItem("ymcl-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const notify = () => listener();
  const notifySystemTheme = () => {
    if (!localStorage.getItem("ymcl-theme")) listener();
  };

  window.addEventListener("storage", notify);
  media.addEventListener("change", notifySystemTheme);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", notify);
    media.removeEventListener("change", notifySystemTheme);
  };
}

function storeTheme(theme: Theme) {
  localStorage.setItem("ymcl-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  themeListeners.forEach((listener) => listener());
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = (nextTheme: Theme) => storeTheme(nextTheme);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
