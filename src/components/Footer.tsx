"use client";

import { useLanguage } from "~/contexts/LanguageContext";
import { Analytics } from "~/lib/analytics";

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
          onClick={() => Analytics.trackWithLabel('footer button clicked', 'linkedin')}
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Alexaandrepaiva" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          onClick={() => Analytics.trackWithLabel('footer button clicked', 'github')}
        >
          GitHub
        </a>
        <a 
          href="https://x.com/Alexaandrepaiva" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          onClick={() => Analytics.trackWithLabel('footer button clicked', 'twitter')}
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
