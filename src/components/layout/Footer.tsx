import Link from "next/link";
import Image from "next/image";
import { studio } from "@/content/studio";
import { media } from "@/content/media";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/60 glass text-ink !rounded-none">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src={media.logo}
              alt="Dreyz Interior"
              width={1420}
              height={514}
              className="mb-6 h-auto w-64 max-w-full object-contain mix-blend-multiply"
              unoptimized
            />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {studio.intro}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-orange">
              Quick Links
            </p>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink/70 transition hover:text-orange"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-orange">
              Get in touch
            </p>
            <ul className="space-y-3 text-sm text-ink/70">
              <li>{studio.contact.address}</li>
              <li>{studio.contact.headOffice}</li>
              <li>
                <a href={`tel:${studio.contact.phone.replace(/\s/g, "")}`}>
                  {studio.contact.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${studio.contact.phoneAlt.replace(/\s/g, "")}`}>
                  {studio.contact.phoneAlt}
                </a>
              </li>
              <li>
                <a href={`mailto:${studio.contact.email}`}>
                  {studio.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-stone md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}, All rights reserved Dreyz Interior
          </p>
          <p>
            Created by{" "}
            <a
              href="https://wa.me/256705161161"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/70 transition hover:text-orange"
            >
              FavorSphere
            </a>
          </p>
          <p className="tracking-[0.14em] uppercase text-orange">
            {studio.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
