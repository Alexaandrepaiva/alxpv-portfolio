import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "~/contexts/LanguageContext";
import { SocialMediaButton } from "~/components/SocialMediaButton";

export function SocialMediaButtonsGroup() {
  const { translations } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <SocialMediaButton
        href="https://www.linkedin.com/in/paiva240/"
        icon={Linkedin}
        label={translations.social.linkedin}
      />
      <SocialMediaButton
        href="https://github.com/Alexaandrepaiva"
        icon={Github}
        label={translations.social.github}
      />
      <SocialMediaButton
        href="https://x.com/Alexaandrepaiva"
        icon={Twitter}
        label={translations.social.twitter}
      />
    </div>
  );
}