import { ContactSection } from "~/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-full md:max-w-5xl mx-auto">
        <section className="py-16 sm:py-24 mt-8 md:mt-16">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
