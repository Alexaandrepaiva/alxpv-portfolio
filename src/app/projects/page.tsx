"use client";

import { useLanguage } from "~/contexts/LanguageContext";

export default function ProjectsPage() {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-full md:max-w-5xl mx-auto">
        <section className="py-16 sm:py-24 mt-8 md:mt-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              {translations.sections.projects.title}
            </h1>
            <p className="text-muted-foreground">
              Projects section coming soon...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
