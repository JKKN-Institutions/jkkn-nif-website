import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./nif-styles.css";

export const metadata: Metadata = {
  title: "NIF — Nattraja Incubation Forum | India's First Bioconvergence Incubation Centre",
  description:
    "Nattraja Incubation Forum (NIF) is India's pioneering bioconvergence incubation centre in Tamil Nadu. We support healthcare startups with 10,000+ sq ft workspace, 100+ mentors, clinical trial facilities, and end-to-end incubation programmes.",
  keywords:
    "bioconvergence incubation centre India, healthcare startup incubator Tamil Nadu, NIF Nattraja Incubation Forum, medtech incubation, healthcare innovation lab, clinical trial facility incubator, IoT healthcare workspace, bioconvergence startup programme",
  authors: [{ name: "Nattraja Incubation Forum (NIF)" }],
  robots: "index, follow",
  openGraph: {
    title: "NIF — Nattraja Incubation Forum | India's First Bioconvergence Incubation Centre",
    description:
      "India's pioneering incubation centre dedicated to bioconvergence — where healthcare meets technology. 10,000+ sq ft workspace, 100+ mentors, and world-class facilities.",
    type: "website",
    url: "https://nifglobal.org/",
    siteName: "Nattraja Incubation Forum",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIF — India's First Bioconvergence Incubation Centre",
    description:
      "Supporting healthcare startups with world-class incubation, mentorship, and clinical trial facilities in Tamil Nadu.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FF6600" />
        <link rel="icon" type="image/png" href="/images/flogo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Archivo:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Sora:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
