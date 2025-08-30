"use client";

import { Experience } from "~/components/Experience";
import { useLanguage } from "~/contexts/LanguageContext";

export function ExperienceSection() {
  const { translations } = useLanguage();

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
        {translations.sections.experience.title}
      </h2>

      <Experience />
    </div>
  );
}
