"use client";

import EducationCarousel from "~/components/EducationCarousel";
import { useLanguage } from "~/contexts/LanguageContext";

export function EducationSection() {
  const { translations } = useLanguage();

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        {translations.sections.education.title}
      </h2>
      <EducationCarousel />
    </div>
  );
}
