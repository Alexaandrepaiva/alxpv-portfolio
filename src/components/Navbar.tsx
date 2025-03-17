"use client";

import { useLanguage } from "~/contexts/LanguageContext";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "~/components/ui/navigation-menu";
import { SocialMediaButtonsGroup } from "~/components/SocialMediaButtonsGroup";
import { LanguageSelector } from "~/components/LanguageSelector";
import Link from "next/link";

const sections = ["home", "experience", "education", "projects", "skills", "contact"];

export function Navbar() {
  const { translations } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-[90rem] px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">ALXPV</span>
            </Link>
            <div className="ml-4">
              <LanguageSelector />
            </div>
          </div>

          <NavigationMenu className="flex-1 flex justify-center">
            <NavigationMenuList>
              {sections.map((section) => (
                <NavigationMenuItem key={section}>
                  <NavigationMenuLink
                    className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    onClick={() => scrollToSection(section)}
                  >
                    {translations.navbar[section as keyof typeof translations.navbar]}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <SocialMediaButtonsGroup />
        </div>
      </div>
    </nav>
  );
}