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
import { ScrollColorAtmosphere } from "@/components/shared/ScrollColorAtmosphere";
import { ScrollStorySection } from "@/components/three/ScrollStorySection";

/**
 * Soft adjacent washes — closer neighbors = cleaner crossfades.
 * Includes mid-tones so blends never jump harshly.
 */
const HOME_SCROLL_COLORS = [
  "#F5F5F6",
  "#F0F0F2",
  "#E9EBEF",
  "#E5E9F0",
  "#E8EBF1",
  "#E8E9EC",
  "#EDE9EC",
  "#EFE7EC",
  "#EAE6EB",
  "#E7E8EE",
  "#ECEDEF",
  "#F2EFF1",
  "#EBE6EB",
  "#E6E7ED",
  "#ECECEF",
  "#E9E9EC",
  "#F0F0F0",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollColorAtmosphere colors={HOME_SCROLL_COLORS} />
      <div data-scroll-color-root>
        <MarqueeStrip />
        <div data-home-section="brand">
          <BrandStatement />
        </div>
        <ImageStrip />
        <div data-home-section="featured">
          <FeaturedProjects />
        </div>
        <div data-home-section="awards">
          <AwardsSection />
        </div>
        <div data-home-section="story">
          <ScrollStorySection />
        </div>
        <div data-home-section="services">
          <ServicesPreview />
        </div>
        <div data-home-section="school">
          <SchoolSection />
        </div>
        <div data-home-section="process">
          <ProcessTimeline />
        </div>
        <div data-home-section="materials">
          <MaterialsSection />
        </div>
        <div data-home-section="testimonials">
          <Testimonials />
        </div>
        <div data-home-section="cta">
          <FinalCTA />
        </div>
      </div>
    </>
  );
}
