"use client";

import * as React from "react";
import { Education } from "~/components/Education";
import { useLanguage } from "~/contexts/LanguageContext";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import type { CarouselOptions } from "embla-carousel-react";

export default function EducationCarousel() {
  const { translations } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>();

  // Set up options for the carousel
  const options: CarouselOptions = {
    align: "center",
    loop: true, // Enable infinite scroll
    skipSnaps: false,
    duration: 20, // Fast transition (in milliseconds)
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Carousel opts={options} setApi={setApi} className="w-full px-12"> {/* Added px-12 to create space for arrows */}
        <CarouselContent className="-ml-2">
          {translations.sections.education.items.map((education, index) => (
            <CarouselItem key={index} className="pl-2 basis-full"> {/* Show only one card at a time */}
              <div className="p-1 max-w-[90%] mx-auto"> {/* Added max-w-[90%] to make cards smaller */}
                <Education
                  degree={education.degree}
                  institution={education.institution}
                  period={education.period}
                  description={education.description}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" /> {/* Changed left-0 to left-2 */}
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" /> {/* Changed right-0 to right-2 */}
      </Carousel>
    </div>
  );
}