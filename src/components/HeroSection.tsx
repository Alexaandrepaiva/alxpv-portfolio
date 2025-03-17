"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useLanguage } from "~/contexts/LanguageContext";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { translations } = useLanguage();
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSubtitle = translations.hero.subtitles[currentSubtitleIndex];
    const typingSpeed = 100;
    const deletingSpeed = 50;
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
    <section id="home" className="flex justify-center container px-4 h-screen">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex justify-center md:order-last">
          <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-b from-primary/50 to-primary overflow-hidden">
            <Image
              src="/profile-picture.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{translations.hero.title}</h1>
          <p className="text-2xl font-semibold text-primary relative">
            {displayText}
            <span className="animate-blink ml-1">|</span>
          </p>
          <p className="text-muted-foreground">{translations.hero.description}</p>
          <div>
            <Button size="lg" asChild>
              <a href="/cv.pdf" download>{translations.hero.downloadCV}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}