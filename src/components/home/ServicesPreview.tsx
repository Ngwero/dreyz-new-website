"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { USAL_SPLIT_ITEMS } from "@/lib/usal";

export function ServicesPreview() {
  return (
    <section className="paper-section py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
              Services
            </p>
            <h2
              data-usal="fade-u split-word split-delay-80"
              className="font-display text-4xl text-heading md:text-5xl"
            >
              From concept to completion
            </h2>
          </div>
          <Button href="/services" variant="darkOutline" size="sm">
            Explore Services
          </Button>
        </div>

        <div
          data-usal={USAL_SPLIT_ITEMS}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.slice(0, 6).map((service, i) => (
            <Link
              key={service.slug}
              href="/services"
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0F0F0]/95 via-[#F0F0F0]/35 to-transparent" />
                <div className="text-on-image absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-orange">
                  0{i + 1}
                </p>
                <h3 className="font-display mt-2 text-2xl text-white md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-white/75">
                  {service.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
