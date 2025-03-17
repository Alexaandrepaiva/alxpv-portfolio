import { Navbar } from "~/components/Navbar";
import { HeroSection } from "~/components/HeroSection";
import { Footer } from "~/components/Footer";
import { ExperienceSection } from "~/components/ExperienceSection";

export default function HomePage() {

  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <Navbar />
      <div className="max-w-6xl">
        <HeroSection />
        <section id="experience" className="container py-24 sm:py-32">
          <ExperienceSection />
        </section>
        <section id="education" className="container py-24 sm:py-32">
          {/* Education section content will be added later */}
        </section>
        <section id="projects" className="container py-24 sm:py-32">
          {/* Projects section content will be added later */}
        </section>
        <section id="skills" className="container py-24 sm:py-32">
          {/* Skills section content will be added later */}
        </section>
        <section id="contact" className="container py-24 sm:py-32">
          {/* Contact section content will be added later */}
        </section>
      </div>
      <div className="w-full h-px bg-border" />
      <Footer />
    </main>
  );
}
