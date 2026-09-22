"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";
import { USAL_SPLIT_ITEMS, usalTiming } from "@/lib/usal";

const schoolImages = media.school.slice(0, 8);

export function SchoolSection() {
  return (
    <section className="glass-soft py-24 md:py-32 !rounded-none">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div data-usal={usalTiming(0)} className="md:col-span-5">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
              Design School
            </p>
            <h2
              data-usal="fade-u split-word split-delay-80"
              className="font-display text-4xl text-heading md:text-5xl"
            >
              Dreyz Interior Design School
            </h2>
            <p className="mt-5 text-muted">
              Training the next generation of interior designers through
              hands-on studio practice, exhibitions, and real project exposure.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="darkOutline" size="sm">
                Learn About Us
              </Button>
            </div>
          </div>

          <div
            data-usal={USAL_SPLIT_ITEMS}
            className="grid grid-cols-2 gap-3 md:col-span-7 md:grid-cols-3 md:gap-4"
          >
            {schoolImages.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl ${
                  i === 0 ? "col-span-2 aspect-[16/10] md:col-span-2" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`Dreyz Interior Design School ${i + 1}`}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
