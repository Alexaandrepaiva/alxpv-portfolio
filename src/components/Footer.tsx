"use client";

import { useLanguage } from "~/contexts/LanguageContext";

export function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="flex justify-center py-6">
      <div className="flex items-center gap-1">
        <span className="text-sm">©</span>
        <span className="text-sm">{translations.footer.rights}</span>
      </div>
    </footer>
  );
}
