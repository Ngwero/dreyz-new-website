"use client";

import Image from "next/image";
import { awards } from "@/content/media";
import { usalTiming } from "@/lib/usal";

export function AwardsSection() {
  return (
    <section className="paper-section py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            Recognition
          </p>
          <h2
            data-usal="fade-u split-word split-delay-90"
            className="font-display max-w-3xl text-4xl text-heading md:text-5xl"
          >
            Awards & Achievements
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            Celebrating excellence — Africa Golden Awards and Digitally Fit
            Awards recognizing Dreyz Interior’s impact.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, i) => (
            <figure
              key={`${award.title}-${i}`}
              data-usal={usalTiming(i)}
              className="group glass overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="rounded-b-3xl border border-t-0 border-line p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-orange">
                  {award.year}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{award.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
