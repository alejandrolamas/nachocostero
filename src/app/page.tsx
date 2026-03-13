import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { MarqueeSection } from "@/components/home/marquee-section";
import { HomeGallery } from "@/components/home/home-gallery";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <div className="relative z-10 bg-zinc-950">
        <StatsSection />
        <TestimonialsSection />
        <HomeGallery />
        <MarqueeSection />
      </div>
    </main>
  );
}
