"use client";

import { Experience } from "~/components/Experience";
import { useLanguage } from "~/contexts/LanguageContext";

export function ExperienceSection() {
  const { translations } = useLanguage();

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        {translations.sections.experience.title}
      </h2>

      <div className="relative space-y-20">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-0 w-px h-full bg-black"></div>
        {translations.sections.experience.items.map((job, index) => (
          <Experience
            key={index}
            jobTitle={job.title}
            companyName={job.company}
            startDate={job.startDate}
            endDate={job.endDate}
            skills={job.skills}
            description={job.description}
            avatar={job.avatar}
          />
        ))}
      </div>
    </div>
  );
}
