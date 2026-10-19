"use client";

import Image from "next/image";
import { media } from "@/content/media";
import { USAL_SPLIT_ITEMS } from "@/lib/usal";

const tiles = [
  { name: "Living Spaces", image: media.living[0] },
  { name: "Kitchen & Dining", image: media.kitchen[1] ?? media.kitchen[0] },
  { name: "Bedrooms", image: media.bedroom[1] ?? media.bedroom[0] },
  { name: "Bathrooms", image: media.bathroom[0] },
  { name: "Offices", image: media.office[5] ?? media.office[0] },
  { name: "Retail", image: media.shop[0] },
  { name: "School Studio", image: media.school[4] ?? media.school[0] },
  { name: "Our Team", image: media.staff.allStaff },
];

export function MaterialsSection() {
  return (
    <section className="paper-section py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            Our World
          </p>
          <h2
            data-usal="fade-u split-word split-delay-90"
            className="font-display text-4xl text-heading md:text-6xl"
          >
            Real spaces. Real craft.
          </h2>
          <p className="mt-5 text-muted">
            From living rooms to offices, school studios to award stages —
            this is the Dreyz Interior portfolio in motion.
          </p>
        </div>

        <div
          data-usal={USAL_SPLIT_ITEMS}
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {tiles.map((m) => (
            <article
              key={m.name}
              className="group relative aspect-square overflow-hidden rounded-3xl"
            >
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0F0F0]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-medium text-ink md:text-base">{m.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
