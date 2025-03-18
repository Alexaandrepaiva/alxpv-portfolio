"use client";

import { useLanguage } from "~/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

export function LanguageSelector() {
  const { translations, language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value: "en" | "es" | "pt") => setLanguage(value)}>
      <SelectTrigger className="w-[140px]">
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
