import { Navbar } from "~/components/Navbar";
import { HeroSection } from "~/components/HeroSection";
import { Footer } from "~/components/Footer";
import { ExperienceSection } from "~/components/ExperienceSection";
import { EducationSection } from "~/components/EducationSection";
import { ContactSection } from "~/components/ContactSection";

export default function HomePage() {

  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <Navbar />
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-full md:max-w-5xl mx-auto">
        <HeroSection />
        <section id="experience" className="py-16 sm:py-24 mt-8 md:mt-0">
          <ExperienceSection />
        </section>
        <section id="education" className="py-16 sm:py-24 mt-8 md:mt-0">
          <EducationSection />
        </section>
        {/* Projects section - To be implemented */}
        {/* <section id="projects" className="py-16 sm:py-24 mt-8 md:mt-0">
          Projects section content will be added later
        </section> */}

        {/* Skills section - To be implemented */}
        {/* <section id="skills" className="py-16 sm:py-24 mt-8 md:mt-0">
          Skills section content will be added later
        </section> */}
        <section id="contact" className="py-16 sm:py-24 mt-8 md:mt-0">
          <ContactSection />
        </section>
      </div>
      <div className="w-full h-px bg-border" />
      <Footer />
    </main>
  );
}
