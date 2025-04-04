"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "~/lib/utils";

export function ScrollChevron() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if we're on desktop and handle scroll events
  useEffect(() => {
    // Check if we're on desktop (min-width: 768px)
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Handle scroll events
    const handleScroll = () => {
      // Hide chevron when scrolled more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Initial checks
    checkIfDesktop();
    handleScroll();

    // Add event listeners
    window.addEventListener("resize", checkIfDesktop);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners
    return () => {
      window.removeEventListener("resize", checkIfDesktop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Don't render anything if not on desktop
  if (!isDesktop) return null;

  return (
    <div
      className={cn(
        "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="animate-bounce p-2 cursor-pointer">
        <ChevronDown
          size={32}
          className="text-primary"
          onClick={() => {
            // Scroll to the experience section when clicked
            const experienceSection = document.getElementById("experience");
            if (experienceSection) {
              experienceSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>
    </div>
  );
}