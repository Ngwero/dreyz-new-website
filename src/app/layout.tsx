import type { Metadata, Viewport } from "next";
import { Aboreto } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { DomErrorBoundary } from "@/components/providers/DomErrorBoundary";
import { UsalProvider } from "@/components/providers/UsalProvider";
import { ScrollTriggerRefresh } from "@/components/shared/Reveal";
import "./globals.css";

/** Aboreto is single-weight (400) on Google Fonts; headings use font-weight 700. */
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aboreto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dreyz Interior – Interior Design Studio",
    template: "%s · Dreyz Interior",
  },
  description:
    "Welcome to Dreyz Interior, where creativity meets functionality. Interior design for homes, Airbnbs, offices, and commercial spaces in Uganda.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E0DDCF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aboreto.variable}>
      <body className="font-sans text-ink antialiased">
        <UsalProvider>
          <SmoothScroll>
            <DomErrorBoundary>
              <div className="site-content relative">
                <Header />
                <main className="relative z-[1]">{children}</main>
                <Footer />
                <ScrollTriggerRefresh />
              </div>
            </DomErrorBoundary>
          </SmoothScroll>
        </UsalProvider>
      </body>
    </html>
  );
}
