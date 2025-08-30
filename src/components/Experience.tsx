"use client";

import { useLanguage } from "~/contexts/LanguageContext";

export function Experience() {
  const { translations } = useLanguage();
  const experiences = translations.sections.experience.items;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="text-left space-y-3">
            {/* Role Title */}
            <h3 className="text-2xl font-bold text-foreground leading-tight">
              {experience.role}
            </h3>
            
            {/* Company Name */}
            <h4 className="text-xl font-semibold text-muted-foreground">
              {experience.company}
            </h4>
            
            {/* Date and Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-muted-foreground">
              <span className="font-medium">
                {experience.startDate} - {experience.endDate}
              </span>
              <span className="italic">
                {experience.duration}
              </span>
            </div>
            
            {/* Summary */}
            <p className="text-base text-foreground leading-relaxed mt-4">
              {experience.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}