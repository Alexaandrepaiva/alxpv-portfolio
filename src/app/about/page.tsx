import { AboutSection } from "~/components/AboutSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full max-w-full md:max-w-5xl mx-auto h-full">
        <AboutSection />
      </div>
    </div>
  );
}
