import { EducationSection } from "~/components/EducationSection";

export default function EducationPage() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full max-w-full md:max-w-5xl mx-auto h-full">
        <section className="flex justify-center items-center px-4 min-h-[calc(100vh-6.5rem)] md:h-full py-8 md:py-0 relative">
          <div className="w-full max-w-5xl mx-auto">
            <EducationSection />
          </div>
        </section>
      </div>
    </div>
  );
}
