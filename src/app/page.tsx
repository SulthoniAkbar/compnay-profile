import HeroSection from "@/components/ui/heroSection";
import FactsSection from "@/components/ui/factsSection";
import TestimonialsSection from "@/components/ui/testimonialSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <FactsSection />
      <TestimonialsSection />
    </div>
  );
}
