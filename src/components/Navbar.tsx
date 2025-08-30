"use client";

import { useLanguage } from "~/contexts/LanguageContext";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "~/components/ui/navigation-menu";
import { LanguageSelector } from "~/components/LanguageSelector";
import { ThemeToggle } from "~/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "home" },
  { href: "/experience", label: "experience" },
  { href: "/education", label: "education" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/contact", label: "contact" },
];

export function Navbar() {
  const { translations } = useLanguage();

  return (
    <nav className="md:fixed relative top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-[90rem] px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/alxpv-black.png" alt="ALXPV Logo" width={80} height={30} className="h-auto dark:hidden" priority />
              <Image src="/alxpv-white.png" alt="ALXPV Logo" width={80} height={30} className="h-auto hidden dark:block" priority />
            </Link>
          </div>

          <NavigationMenu className="hidden md:flex md:flex-1 md:justify-center">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      {translations.navbar[item.label as keyof typeof translations.navbar]}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
