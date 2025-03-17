import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "~/contexts/LanguageContext";
import { SocialMediaButton } from "~/components/SocialMediaButton";

export function SocialMediaButtonsGroup() {
  const { translations } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <SocialMediaButton
        href="https://linkedin.com"
        icon={Linkedin}
        label={translations.social.linkedin}
      />
      <SocialMediaButton
        href="https://github.com"
        icon={Github}
        label={translations.social.github}
      />
      <SocialMediaButton
        href="https://twitter.com"
        icon={Twitter}
        label={translations.social.twitter}
      />
    </div>
  );
}