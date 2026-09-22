"use client";

import Image from "next/image";
import { studio } from "@/content/studio";
import { usalTiming } from "@/lib/usal";

export function BrandStatement() {
  return (
    <section className="paper-section relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-12 md:px-10 lg:px-14">
        <div className="md:col-span-6">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            Transform Your Space
          </p>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone">
            The Best At
          </p>
          <h2
            data-usal="fade-u split-letter text-shimmer duration-2000 split-delay-60"
            className="font-display max-w-xl text-4xl leading-[1.1] text-heading md:text-5xl lg:text-6xl"
          >
            DESIGN. COMFORT. BLISS.
          </h2>
          <p
            data-usal="fade-u split-word split-delay-40 delay-200"
            className="mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg"
          >
            {studio.airbnbFocus}
          </p>
          <p
            data-usal="fade-u delay-400 duration-1000"
            className="mt-5 max-w-lg text-base leading-relaxed text-muted"
          >
            {studio.consultation.slice(0, 240)}…
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:col-span-6 md:gap-4">
          <div
            data-usal={usalTiming(0)}
            className="relative aspect-[3/4] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/featured/retail-boutique.png"
              alt="Retail boutique interior with gold fixtures and display pedestals"
              fill
              sizes="(max-width:768px) 50vw, 30vw"
              className="object-cover"
              priority
            />
          </div>
          <div
            data-usal={usalTiming(1)}
            className="relative aspect-[3/4] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/featured/living-dining.png"
              alt="Open-plan living and dining space with stone feature wall"
              fill
              sizes="(max-width:768px) 50vw, 30vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
