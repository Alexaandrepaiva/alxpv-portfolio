"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useLanguage } from "~/contexts/LanguageContext";
import { Analytics } from "~/lib/analytics";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { translations, language } = useLanguage();
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
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
  }, [displayText, currentSubtitleIndex, isDeleting, translations.hero.subtitles, mounted]);

  return (
    <section id="home" className="w-full">
      <div className="flex flex-col items-start text-left max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{translations.hero.title}</h1>
        <p className="text-xl md:text-2xl font-semibold text-primary relative mb-6">
          {mounted ? displayText : translations.hero.subtitles[0]}
          <span className="animate-blink ml-1">|</span>
        </p>
        <p className="text-muted-foreground mb-6">
          {translations.hero.description.split('TutorMundi').map((part, index) => {
            if (index === 0) return part;
            return (
              <span key={index}>
                <a 
                  href="https://tutormundi.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline decoration-1 cursor-pointer text-muted-foreground hover:text-muted-foreground"
                  onClick={() => Analytics.track('company button clicked')}
                >
                  TutorMundi
                </a>
                {part}
              </span>
            );
          })}
        </p>
        
        <Button size="lg" asChild>
          <a 
            href={`/cv-${language}.pdf`} 
            download={`cv-${language}.pdf`}
            onClick={() => Analytics.track('cv button clicked')}
          >
            {translations.hero.downloadCV}
          </a>
        </Button>
      </div>
    </section>
  );
}
