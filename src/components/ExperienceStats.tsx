import { useLanguage } from "~/contexts/LanguageContext";

export function ExperienceStats() {
  const { translations } = useLanguage();
  
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start md:justify-start">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
        <span className="text-3xl md:text-4xl font-bold text-primary">+5</span>
        <span className="text-sm uppercase font-medium text-center md:text-left">{translations.stats.yearsOfExperience}</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
        <span className="text-3xl md:text-4xl font-bold text-primary">+20</span>
        <span className="text-sm uppercase font-medium text-center md:text-left">{translations.stats.projectsCompleted}</span>
      </div>
    </div>
  );
}
