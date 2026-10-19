import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { DomErrorBoundary } from "@/components/providers/DomErrorBoundary";
import { UsalProvider } from "@/components/providers/UsalProvider";
import { ScrollTriggerRefresh } from "@/components/shared/Reveal";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const aileron = localFont({
  src: [
    { path: "./fonts/Aileron-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Aileron-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/Aileron-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-aileron",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dreyz Interior – Design | Construct | Furnish",
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
  themeColor: "#45102e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aileron.variable} ${cormorant.variable}`}>
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
