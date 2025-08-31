"use client";

import { useLanguage } from "~/contexts/LanguageContext";
import { Analytics } from "~/lib/analytics";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

export function LanguageSelector() {
  const { translations, language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: "en" | "es" | "pt") => {
    Analytics.trackWithLabel('language selected', value);
    setLanguage(value);
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger 
        className="w-[140px]"
        onClick={() => Analytics.track('language button clicked')}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <span className="mr-2">🇺🇸</span>
          {translations.languages.en}
        </SelectItem>
        <SelectItem value="es">
          <span className="mr-2">🇪🇸</span>
          {translations.languages.es}
        </SelectItem>
        <SelectItem value="pt">
          <span className="mr-2">🇧🇷</span>
          {translations.languages.pt}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
