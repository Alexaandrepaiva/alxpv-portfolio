"use client";

import { useLanguage } from "~/contexts/LanguageContext";

export default function ProjectsPage() {
  const { translations } = useLanguage();

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="w-full max-w-full md:max-w-5xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            {translations.sections.projects.title}
          </h1>
          <p className="text-muted-foreground">
            Projects section coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
