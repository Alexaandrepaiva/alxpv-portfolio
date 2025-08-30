"use client";

import Image from "next/image";
import { useLanguage } from "~/contexts/LanguageContext";
import { ExperienceStats } from "~/components/ExperienceStats";

export function AboutSection() {
  const { translations } = useLanguage();

  return (
    <section className="w-full">
      <div className="w-full max-w-5xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{translations.about.title}</h1>
          <h2 className="text-xl md:text-2xl text-foreground/70 font-medium tracking-wider">{translations.about.subtitle}</h2>
        </div>
        
        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Picture */}
          <div className="flex-shrink-0">
            <div className="relative h-[280px] w-[280px] md:h-[400px] md:w-[400px] rounded-full bg-gradient-to-b from-primary/50 to-primary overflow-hidden">
              <Image
                src="https://xudeeen93p.ufs.sh/f/2Dz3NNXn6l0slhqsVwismona3bLFcUqM76ZeEQOCSI12hvYd"
                alt="Profile picture"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          
          {/* Text */}
          <div className="flex flex-col gap-6 text-center md:text-left md:justify-center">
            {translations.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            {/* Experience Stats */}
            <div className="mt-4 flex justify-center md:justify-start">
              <ExperienceStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
