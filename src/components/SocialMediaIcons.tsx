import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "~/contexts/LanguageContext";
import { useTheme } from "~/contexts/ThemeContext";

export function SocialMediaIcons() {
  const { translations } = useLanguage();
  const { theme } = useTheme();
  
  const iconSize = 32;
  const iconColor = theme === "dark" ? "#ffffff" : "#000000";
  
  return (
    <div className="flex items-center space-x-6 mt-4">
      <a 
        href="https://www.linkedin.com/in/paiva240/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={translations.social.linkedin}
        className="hover:opacity-80 transition-opacity"
      >
        <Linkedin size={iconSize} color={iconColor} />
      </a>
      <a 
        href="https://github.com/Alexaandrepaiva" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={translations.social.github}
        className="hover:opacity-80 transition-opacity"
      >
        <Github size={iconSize} color={iconColor} />
      </a>
      <a 
        href="https://x.com/Alexaandrepaiva" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={translations.social.twitter}
        className="hover:opacity-80 transition-opacity"
      >
        <Twitter size={iconSize} color={iconColor} />
      </a>
    </div>
  );
} 