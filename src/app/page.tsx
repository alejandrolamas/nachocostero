import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TimelineExperience } from "@/components/home/timeline-experience";
import { BrandsSection } from "@/components/home/brands-section";
import { MarqueeSection } from "@/components/home/marquee-section";
import { HomeGallery } from "@/components/home/home-gallery";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <div className="relative z-10 bg-zinc-950">
        <AboutSection />
        <TimelineExperience />
        <BrandsSection />
        <TestimonialsSection />
        <HomeGallery />
        <MarqueeSection />
      </div>
    </main>
  );
}
