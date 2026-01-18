import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MuiProvider from "../components/MuiProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SyB Growth Marketing - Estrategias Digitales para Crecer",
  description:
    "SyB Growth Marketing combina creatividad, datos y tecnología para ofrecer soluciones de marketing digital que impulsan el crecimiento de tu negocio.",
  keywords: [
    "growth marketing",
    "marketing digital",
    "agencia de marketing",
    "SEO",
    "SEM",
    "Google Ads",
    "Meta Ads",
    "email marketing",
    "analítica web",
    "automatización de marketing",
    "páginas web",
    "marketing de contenidos",
    "CRM",
    "estrategias digitales",
    "optimización de conversiones",
    "publicidad digital",
    "posicionamiento web"
  ],
  authors: [{ name: "SyB Growth Marketing" }],
  creator: "SyB Growth Marketing",
  publisher: "SyB Growth Marketing",
  metadataBase: new URL("https://sybgrowth.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sybgrowth.com",
    title: "SyB Growth Marketing - Estrategias Digitales para Crecer",
    description:
      "SyB Growth Marketing combina creatividad, datos y tecnología para ofrecer soluciones de marketing digital que impulsan el crecimiento de tu negocio.",
    siteName: "SyB Growth Marketing",
    images: [
      {
        url: "/images/Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "SyB Growth Marketing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyB Growth Marketing - Estrategias Digitales para Crecer",
    description:
      "SyB Growth Marketing combina creatividad, datos y tecnología para ofrecer soluciones de marketing digital que impulsan el crecimiento de tu negocio.",
    images: ["/images/Logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
