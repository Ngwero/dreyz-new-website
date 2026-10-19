import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ParallaxImage } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import {
  engagementPath,
  serviceCategories,
  serviceScopes,
  services,
} from "@/content/services";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture design, interiors, 3D visualization, space planning, renovation, and project advisory by Dreyz Interior.",
};

function categoryLabel(id: (typeof serviceCategories)[number]["id"]) {
  return serviceCategories.find((c) => c.id === id)?.label ?? id;
}

export default function ServicesPage() {
  return (
    <div className="bg-transparent">
      {/* Hero — brand-led + photography */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(69,16,46,0.1),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-[1440px] items-end gap-10 px-5 pb-14 pt-28 sm:pt-32 md:grid-cols-12 md:gap-12 md:px-10 md:pb-20 md:pt-40 lg:px-14">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-orange">
              Dreyz Interior · Services
            </p>
            <h1
              data-usal="fade-u duration-1000"
              className="font-display text-[clamp(1.85rem,4vw,2.85rem)] leading-[1.1] text-heading"
            >
              From concept to
              <span className="mt-0.5 block text-orange">completion</span>
            </h1>
            <p
              data-usal="fade-u delay-150 duration-1000"
              className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-[15px]"
            >
              {studio.servicesIntro.slice(0, 210).trim()}…
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="sm">
                Start a consultation
              </Button>
              <Button href="/projects" variant="darkOutline" size="sm">
                See the work
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:col-span-6 md:gap-4 lg:col-span-7 lg:pl-4">
            <div
              data-usal="fade-u delay-100 duration-1000"
              className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]"
            >
              <Image
                src="/images/featured/kitchen-island.png"
                alt="Dreyz Interior kitchen design"
                fill
                priority
                sizes="(max-width:768px) 50vw, 35vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <div
                data-usal="fade-u delay-250 duration-1000"
                className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]"
              >
                <Image
                  src="/images/featured/bedroom-mirror.png"
                  alt="Dreyz Interior bedroom with mirror light"
                  fill
                  sizes="(max-width:768px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div
                data-usal="fade-u delay-400 duration-1000"
                className="relative min-h-[140px] flex-1 overflow-hidden rounded-[1.75rem] md:min-h-0"
              >
                <Image
                  src="/images/featured/living-dining.png"
                  alt="Dreyz Interior living and dining space"
                  fill
                  sizes="(max-width:768px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="border-y border-ink/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-12 lg:px-14">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-orange">
                Where we work
              </p>
              <h2 className="font-display text-xl text-heading md:text-2xl">
                Homes, workplaces, hospitality
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              One studio language across every commission — tailored to how the
              space is used.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {serviceScopes.map((scope, i) => (
              <article
                key={scope.title}
                data-usal={
                  i === 0
                    ? "fade-u delay-0 duration-900"
                    : i === 1
                      ? "fade-u delay-150 duration-900"
                      : "fade-u delay-300 duration-900"
                }
                className="group relative min-h-[220px] overflow-hidden rounded-[1.5rem] md:min-h-[280px]"
              >
                <Image
                  src={scope.image}
                  alt={scope.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/75 via-[#141414]/25 to-transparent" />
                <div className="text-on-image absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-display text-xl text-white md:text-2xl">
                    {scope.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
                    {scope.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capability map + jump index */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-orange">
                Capabilities
              </p>
              <h2
                data-usal="fade-u duration-900"
                className="font-display text-2xl leading-tight text-heading md:text-3xl"
              >
                Nine services.
                <span className="text-orange"> One continuous studio.</span>
              </h2>
            </div>
            <p
              data-usal="fade-u delay-150 duration-1000"
              className="max-w-md text-sm leading-relaxed text-muted md:col-span-6 md:text-right"
            >
              Jump to any discipline — or scroll the full sequence from first
              plan to final material delivery.
            </p>
          </div>

          <div className="mb-14 grid gap-0 border-t border-ink/10 md:grid-cols-4">
            {serviceCategories.map((cat, i) => (
              <div
                key={cat.id}
                data-usal={
                  i === 0
                    ? "fade-u delay-0 duration-800"
                    : i === 1
                      ? "fade-u delay-100 duration-800"
                      : i === 2
                        ? "fade-u delay-200 duration-800"
                        : "fade-u delay-300 duration-800"
                }
                className="border-b border-ink/10 py-7 md:border-b-0 md:border-r md:px-6 md:py-9 md:last:border-r-0 first:md:pl-0 last:md:pr-0"
              >
                <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-orange">
                  0{i + 1}
                </p>
                <h3 className="font-display text-lg text-heading">{cat.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cat.blurb}
                </p>
              </div>
            ))}
          </div>

          <nav
            aria-label="Services index"
            className="flex gap-x-6 gap-y-3 overflow-x-auto border-y border-ink/10 py-5 md:flex-wrap md:overflow-visible"
          >
            {services.map((service, i) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-ink/45 transition hover:text-orange"
              >
                <span className="mr-2 font-mono text-orange/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service detail list — editorial, not pill-card heavy */}
      <section className="pb-10 md:pb-16">
        <div className="mx-auto max-w-[1440px] space-y-16 px-5 md:space-y-24 md:px-10 lg:px-14">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                data-usal="fade-u duration-900"
                className="scroll-mt-28"
              >
                <div className="grid items-stretch gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
                  <div
                    className={`relative min-h-[280px] overflow-hidden rounded-[1.75rem] md:col-span-5 md:min-h-[420px] ${
                      flip ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width:768px) 100vw, 42vw"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center md:col-span-7 ${
                      flip ? "md:order-1 md:pr-4" : "md:pl-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-orange">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-stone">
                        {categoryLabel(service.category)}
                      </span>
                    </div>

                    <h2 className="font-display mt-4 text-2xl text-heading md:text-3xl lg:text-[2.1rem]">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-stone md:text-[15px]">
                      {service.short}
                    </p>
                    <p className="mt-5 max-w-xl border-l-2 border-orange/40 pl-4 font-display text-sm leading-snug text-heading md:text-base">
                      {service.outcome}
                    </p>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <div className="mt-8 border-t border-ink/10 pt-6">
                      <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-ink/40">
                        What you receive
                      </p>
                      <ul className="grid gap-2.5 sm:grid-cols-2">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-sm text-ink/70"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/50 transition hover:text-orange"
                      >
                        Inquire about {service.title}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="mt-16 h-px bg-ink/10 md:mt-24" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Engagement path */}
      <section className="paper-section py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-orange">
                How we engage
              </p>
              <h2
                data-usal="fade-u duration-900"
                className="font-display text-2xl text-heading md:text-3xl"
              >
                Consult, design,
                <span className="text-orange"> deliver</span>
              </h2>
            </div>
            <Link
              href="/process"
              className="text-[11px] uppercase tracking-[0.2em] text-ink/50 transition hover:text-orange"
            >
              Full process →
            </Link>
          </div>

          <div className="grid gap-0 border-t border-ink/10 md:grid-cols-3">
            {engagementPath.map((item, i) => (
              <div
                key={item.step}
                data-usal={
                  i === 0
                    ? "fade-u delay-0 duration-800"
                    : i === 1
                      ? "fade-u delay-150 duration-900"
                      : "fade-u delay-300 duration-1000"
                }
                className="border-b border-ink/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:last:border-r-0 first:md:pl-0 last:md:pr-0"
              >
                <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-orange">
                  {item.step}
                </p>
                <h3 className="font-display text-lg text-heading md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide close band — parallax background */}
      <section className="mx-4 mb-4 md:mx-10 lg:mx-14">
        <div className="relative h-[180px] overflow-hidden rounded-[1.75rem] sm:h-[200px] md:h-[240px]">
          <ParallaxImage className="absolute inset-0 h-full w-full" speed={28}>
            <div className="relative h-full w-full">
              <Image
                src="/images/services/ready-when-you-are.png"
                alt="Dreyz Interior living room with fireplace and lighting"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </ParallaxImage>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#141414]/70 via-[#141414]/30 to-transparent" />
          <div className="text-on-image absolute inset-y-0 left-0 z-10 flex max-w-lg flex-col justify-center p-5 md:p-8 lg:p-10">
            <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
              Ready when you are
            </p>
            <p
              data-usal="fade-u duration-900"
              className="font-display text-lg leading-snug text-white md:text-xl lg:text-2xl"
            >
              Tell us the space. We’ll shape the plan.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-fit text-[11px] uppercase tracking-[0.2em] text-white/75 transition hover:text-orange"
            >
              Book a consultation →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
