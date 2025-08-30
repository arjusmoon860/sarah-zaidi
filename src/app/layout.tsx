import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import { GlobalCursor } from "./hooks/useGlobalCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Sarah Zaidi Merchant | Fertility & IVF Specialist in Mumbai",
  description: "Dr. Sarah Zaidi Merchant, MBBS, MS (OBG), DNB (OG), F.ART (ICOG), is a leading gynecologist and fertility specialist in Dadar West, Mumbai, with 13+ years of experience in IVF, IUI, ICSI, and infertility treatments. Dedicated to compassionate care and advanced reproductive solutions.",
  keywords: "Dr Sarah Zaidi Merchant, IVF specialist Mumbai, fertility doctor Mumbai, best gynecologist in Dadar, infertility treatments Mumbai, ICSI specialist, IUI treatment, PCOS infertility care",
  openGraph: {
    title: 'Dr. Sarah Zaidi Merchant | Fertility & IVF Specialist in Mumbai',
    description: 'Dr. Sarah Zaidi Merchant, MBBS, MS (OBG), DNB (OG), F.ART (ICOG), is a leading gynecologist and fertility specialist in Dadar West, Mumbai, with 13+ years of experience in IVF, IUI, ICSI, and infertility treatments. Dedicated to compassionate care and advanced reproductive solutions.',
    url: 'https://www.sarahzaidi.in',
    siteName: 'Dr. Sarah Zaidi Merchant',
    images: [
      {
        url: 'https://www.sarahzaidi.in/og-image.png',
        width: 1366,
        height: 695,
        alt: 'Dr. Sarah Zaidi Merchant | Fertility & IVF Specialist in Mumbai',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sarah Zaidi Merchant | Fertility & IVF Specialist in Mumbai',
    description: 'Dr. Sarah Zaidi Merchant, MBBS, MS (OBG), DNB (OG), F.ART (ICOG), is a leading gynecologist and fertility specialist in Dadar West, Mumbai, with 13+ years of experience in IVF, IUI, ICSI, and infertility treatments. Dedicated to compassionate care and advanced reproductive solutions.',
    images: ['https://www.sarahzaidi.in/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        <LenisProvider>
          {children}
        </LenisProvider>
        <GlobalCursor />
      </body>
    </html>
  );
}
