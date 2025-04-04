"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTheme } from "~/contexts/ThemeContext";
import { useLanguage } from "~/contexts/LanguageContext";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { translations } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button size="icon" variant="ghost" className="w-9 h-9" disabled />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-9 h-9 overflow-hidden flex items-center justify-center"
      title={theme === "dark" ? translations.theme.light : translations.theme.dark}
    >
      <Sun 
        className={`absolute transition-all duration-500 ${
          theme === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
        }`}
        size={18}
      />
      <Moon 
        className={`absolute transition-all duration-500 ${
          theme === "light" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
        }`}
        size={18}
      />
    </Button>
  );
} 