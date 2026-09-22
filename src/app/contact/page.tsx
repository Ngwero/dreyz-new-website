"use client";

import { FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { studio } from "@/content/studio";

const MiniModel = dynamic(
  () => import("@/components/three/MiniModel").then((m) => m.MiniModel),
  { ssr: false }
);

const fieldClass =
  "w-full rounded-2xl glass-chip px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-orange";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-paper">
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-24 sm:pt-28 md:grid-cols-12 md:px-10 md:pt-36 lg:px-14">
        <div className="md:col-span-5">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
              Contact
            </p>
            <h1
              data-usal="fade-u split-word split-delay-80"
              className="font-display text-5xl text-heading md:text-6xl"
            >
              Let&apos;s start talking with us
            </h1>
            <p className="mt-6 text-muted">
              Send us a message. We will be in touch shortly.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-orange">
                  Head office
                </p>
                <p className="text-sm text-ink/80">{studio.contact.headOffice}</p>
                <p className="mt-1 text-sm text-muted">
                  Call: {studio.contact.phoneAlt}
                </p>
              </div>
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-orange">
                  Studio
                </p>
                <p className="text-sm text-ink/80">{studio.contact.address}</p>
                <p className="mt-1 text-sm text-muted">{studio.contact.phone}</p>
                <p className="mt-1 text-sm text-muted">{studio.contact.email}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-5">
              {studio.contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-[0.22em] text-stone-light hover:text-orange"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal
            className="mt-12 hidden aspect-square overflow-hidden rounded-3xl bg-paper-dim md:block"
            delay={0.1}
          >
            <MiniModel />
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            {sent ? (
              <div className="border border-line p-10 rounded-3xl">
                <h2 className="font-display text-3xl text-heading">
                  We will be in touch shortly.
                </h2>
                <p className="mt-4 text-muted">
                  Thank you for reaching out to Dreyz Interior. Our studio will
                  contact you soon to begin your consultation.
                </p>
                <Button
                  className="mt-8"
                  variant="secondary"
                  onClick={() => setSent(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-orange">
                  Send us a message
                </p>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone">
                      Full Name
                    </span>
                    <input
                      required
                      name="name"
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      className={fieldClass}
                      placeholder="you@email.com"
                    />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone">
                      Phone
                    </span>
                    <input
                      name="phone"
                      className={fieldClass}
                      placeholder="+256 ..."
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone">
                      Project Type
                    </span>
                    <select name="type" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select type
                      </option>
                      <option>Airbnb / Homestay</option>
                      <option>Residential Interior</option>
                      <option>Commercial / Office</option>
                      <option>Renovation</option>
                      <option>2D/3D Rendering</option>
                      <option>Furnishing</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone">
                    Budget Range
                  </span>
                  <select name="budget" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select range
                    </option>
                    <option>Under $25k</option>
                    <option>$25k – $75k</option>
                    <option>$75k – $150k</option>
                    <option>$150k – $400k</option>
                    <option>$400k+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className={fieldClass}
                    placeholder="Tell us about your space, timeline, and vision..."
                  />
                </label>
                <Button type="submit" variant="primary">
                  Send Inquiry
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal className="mt-12 overflow-hidden rounded-3xl border border-line" delay={0.1}>
            <iframe
              title="Studio location"
              src="https://maps.google.com/maps?q=Kabalagala%20Kings%20Tower%20Kampala&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
