import { useLanguage } from "~/contexts/LanguageContext";

export function HeroStats() {
  const { translations } = useLanguage();
  
  return (
    <div className="flex flex-col sm:flex-row gap-6 mt-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl md:text-4xl font-bold text-primary">+5</span>
        <span className="text-sm uppercase font-medium">{translations.stats.yearsOfExperience}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-3xl md:text-4xl font-bold text-primary">+20</span>
        <span className="text-sm uppercase font-medium">{translations.stats.projectsCompleted}</span>
      </div>
    </div>
  );
} 