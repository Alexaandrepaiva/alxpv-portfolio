"use client";

import Image from "next/image";
import { useLanguage } from "~/contexts/LanguageContext";

export function AboutSection() {
  const { translations } = useLanguage();

  return (
    <section className="flex justify-center items-center px-4 min-h-[calc(100vh-6.5rem)] md:h-full py-8 md:py-0 relative">
      <div className="w-full max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{translations.about.title}</h1>
        </div>
        
                {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Picture */}
          <div className="flex-shrink-0">
            <div className="relative h-[280px] w-[280px] md:h-[400px] md:w-[400px] rounded-full bg-gradient-to-b from-primary/50 to-primary overflow-hidden">
              <Image
                src="https://xudeeen93p.ufs.sh/f/2Dz3NNXn6l0sgaYY4S1aBv7YtyQxjW59bJrEdwpKqhRTgSGA"
                alt="Profile picture"
                fill
                                  className="object-cover object-center"
                priority
              />
            </div>
          </div>
          
          {/* Text */}
          <div className="flex flex-col gap-4 text-center md:text-left md:justify-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {translations.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
