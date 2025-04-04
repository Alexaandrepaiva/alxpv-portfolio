"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useLanguage } from "~/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { ScrollChevron } from "~/components/ScrollChevron";
import { SocialMediaIcons } from "~/components/SocialMediaIcons";
import { HeroStats } from "~/components/HeroStats";

export function HeroSection() {
  const { translations, language } = useLanguage();
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSubtitle = translations.hero.subtitles[currentSubtitleIndex];
    const typingSpeed = 100;
    const deletingSpeed = 20;
    const pauseTime = 3000;

    if (!isDeleting && displayText === currentSubtitle) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentSubtitleIndex((prev) => (prev + 1) % translations.hero.subtitles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
      } else {
        setDisplayText(currentSubtitle?.slice(0, displayText.length + 1) ?? "");
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentSubtitleIndex, isDeleting, translations.hero.subtitles]);

  return (
    <section id="home" className="flex justify-center px-4 min-h-screen py-8 md:py-0 relative">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-8 md:mt-0">
        <div className="flex flex-col items-center lg:order-first">
          <div className="relative h-[280px] w-[280px] md:h-[400px] md:w-[400px] rounded-full bg-gradient-to-b from-primary/50 to-primary overflow-hidden">
            <Image
              src="https://xudeeen93p.ufs.sh/f/2Dz3NNXn6l0saLwAL4H2rOcYxT5KERhf7DSjJdAngwm0eWpl"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <SocialMediaIcons />
        </div>

        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">{translations.hero.title}</h1>
          <p className="text-xl md:text-2xl font-semibold text-primary relative">
            {displayText}
            <span className="animate-blink ml-1">|</span>
          </p>
          <p className="text-muted-foreground mt-4">{translations.hero.description}</p>
          
          <HeroStats />
          
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href={`/cv-${language}.pdf`} download={`cv-${language}.pdf`}>{translations.hero.downloadCV}</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bouncing chevron to encourage scrolling */}
      <ScrollChevron />
    </section>
  );
}
