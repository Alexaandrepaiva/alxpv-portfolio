"use client";

import { createContext, useState, useEffect, useContext } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  // Initialize theme from localStorage and set mounted state
  useEffect(() => {
    setMounted(true);
    
    // Get theme from localStorage or default to dark
    let initialTheme: Theme = "dark";
    try {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
        initialTheme = savedTheme;
      }
    } catch (error) {
      // Fallback to dark theme if localStorage is not available
      console.warn("Could not access localStorage for theme preference");
    }
    
    setTheme(initialTheme);
    
    // Apply initial theme to avoid flash
    const root = window.document.documentElement;
    if (initialTheme !== "dark") {
      root.classList.remove("dark");
      root.classList.add(initialTheme);
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Could not save theme preference to localStorage");
    }
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme,
    toggleTheme
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 