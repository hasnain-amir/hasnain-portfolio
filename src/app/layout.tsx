import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Noto_Naskh_Arabic } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hasnainamir.com";

const description =
  "Portfolio of Hasnain Amir, a Computer Science student at Aston University who builds focused, design-led software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hasnain Amir - Developer",
    template: "%s - Hasnain Amir",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hasnain Amir",
    title: "Hasnain Amir - Developer",
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Hasnain Amir - Developer",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171714",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hasnain Amir",
  url: siteUrl,
  jobTitle: "Software developer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Aston University",
  },
  sameAs: [
    "https://github.com/hasnain-amir",
    "https://www.linkedin.com/in/hasnain-amir/",
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${mono.variable} ${arabic.variable}`}
    >
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
