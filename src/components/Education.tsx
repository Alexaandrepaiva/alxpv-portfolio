"use client";

import { useLanguage } from "~/contexts/LanguageContext";

export function Education() {
  const { translations } = useLanguage();
  const educationItems = translations.sections.education.items;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-12">
        {educationItems.map((education, index) => (
          <div key={index} className="text-left space-y-3">
            {/* Degree Title */}
            <h3 className="text-2xl font-bold text-foreground leading-tight">
              {education.degree}
            </h3>
            
            {/* Institution Name */}
            <h4 className="text-xl font-semibold text-muted-foreground">
              {education.institution}
            </h4>
            
            {/* Date and Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-muted-foreground">
              <span className="font-medium">
                {education.startDate} - {education.endDate}
              </span>
              <span className="italic">
                {education.duration}
              </span>
            </div>
            
            {/* Summary */}
            <p className="text-base text-foreground leading-relaxed mt-4">
              {education.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}