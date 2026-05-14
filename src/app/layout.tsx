import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunga Organisation — Changing Lives Through Compassion & Action",
  description:
    "Sunga Organisation is a registered NGO empowering communities across Africa through education, healthcare, women's empowerment, and sustainable development. Join us in creating lasting change.",
  keywords: [
    "NGO Africa",
    "Sunga Organisation",
    "donate Africa",
    "volunteer NGO",
    "education charity",
    "women empowerment",
    "community development",
    "humanitarian",
  ],
  authors: [{ name: "Sunga Organisation" }],
  creator: "Sunga Organisation",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sungaorganisation.org",
    siteName: "Sunga Organisation",
    title: "Sunga Organisation — Changing Lives Through Compassion & Action",
    description:
      "Empowering 50,000+ lives across Africa through education, healthcare, and opportunity. Join our mission.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunga Organisation",
    description: "Empowering communities across Africa. Donate. Volunteer. Change Lives.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full antialiased bg-[#FAF7F2] text-[#111111]">
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
