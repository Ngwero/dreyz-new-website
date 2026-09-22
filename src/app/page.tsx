import { AwardsSection } from "@/components/home/AwardsSection";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { ImageStrip } from "@/components/home/ImageStrip";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { MaterialsSection } from "@/components/home/MaterialsSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { SchoolSection } from "@/components/home/SchoolSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ScrollStorySection } from "@/components/three/ScrollStorySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <BrandStatement />
      <ImageStrip />
      <FeaturedProjects />
      <AwardsSection />
      <ScrollStorySection />
      <ServicesPreview />
      <SchoolSection />
      <ProcessTimeline />
      <MaterialsSection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
