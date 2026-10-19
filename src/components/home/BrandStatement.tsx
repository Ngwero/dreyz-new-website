"use client";

import Image from "next/image";
import { studio } from "@/content/studio";
import { usalTiming } from "@/lib/usal";

export function BrandStatement() {
  return (
    <section className="paper-section relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-12 md:px-10 lg:px-14">
        <div className="md:col-span-6">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-orange">
            01 / The Dreyz approach
          </p>
          <h2
            data-usal="fade-u duration-1000"
            className="font-display max-w-xl text-5xl leading-[1.02] tracking-[-0.04em] text-heading md:text-6xl lg:text-7xl"
          >
            Design.<br />Construct.<br /><span className="font-normal text-burgundy">Furnish.</span>
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

        <div className="relative grid grid-cols-2 items-start gap-3 pb-12 md:col-span-6 md:gap-5">
          <div
            data-usal={usalTiming(0)}
            className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl"
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
            className="relative mt-16 aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl"
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
          <div className="glass-strong absolute bottom-0 left-5 right-5 rounded-2xl px-6 py-5 md:left-10 md:right-10">
            <p className="text-[9px] uppercase tracking-[0.24em] text-burgundy">One studio. Every detail.</p>
            <p className="mt-2 text-lg font-semibold text-heading">From first sketch to final furnishing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
