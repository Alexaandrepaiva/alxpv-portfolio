"use client";

import { useLanguage } from "~/contexts/LanguageContext";

export function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="flex justify-center py-6">
      <div className="flex items-center gap-8">
        <a 
          href="https://www.linkedin.com/in/paiva240/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Alexaandrepaiva" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
        >
          Github
        </a>
        <a 
          href="https://x.com/Alexaandrepaiva" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
