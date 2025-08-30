import { HeroSection } from "~/components/HeroSection";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full max-w-full md:max-w-5xl mx-auto h-full">
        <HeroSection />
      </div>
    </div>
  );
}
