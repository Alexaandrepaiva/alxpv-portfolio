import { EducationSection } from "~/components/EducationSection";

export default function EducationPage() {
  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="w-full max-w-full md:max-w-5xl mx-auto px-4 py-8">
        <EducationSection />
      </div>
    </div>
  );
}
