import type { Metadata } from "next";
import { AirbnbGallery } from "@/components/airbnb/AirbnbGallery";
import { airbnbIntro } from "@/content/airbnbs";

export const metadata: Metadata = {
  title: "Airbnb & Homestays",
  description:
    "Airbnb and homestay interiors by Dreyz Interior — Trendy Stays Najeera, Trendy Stays Jinja, The Croft Homes Jinja, The Croft Homes Buwaate, and The Brook Homes.",
};

export default function AirbnbPage() {
  return (
    <div className="bg-white pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="mb-14 max-w-3xl md:mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            {airbnbIntro.eyebrow}
          </p>
          <h1
            data-usal="fade-u split-letter text-shimmer duration-1800 split-delay-80"
            className="font-display text-5xl text-heading md:text-7xl"
          >
            {airbnbIntro.title}
          </h1>
          <p className="mt-6 max-w-2xl text-muted">{airbnbIntro.lead}</p>
          <p className="mt-4 max-w-2xl text-muted">{airbnbIntro.body}</p>
        </div>
        <AirbnbGallery />
      </div>
    </div>
  );
}
