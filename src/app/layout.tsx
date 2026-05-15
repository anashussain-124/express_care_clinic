import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://expresscarechiropractic.in"),
  title: "Express Care Chiropractic & Wellness Support | Toli Chowki, Hyderabad",
  description: "Top-rated chiropractic and wellness clinic in Hyderabad offering non-surgical treatments for back pain, sciatica, and holistic spine health.",
  keywords: "Chiropractor in Hyderabad, Best Chiropractor in Toli Chowki, Sciatica Treatment Hyderabad, Back Pain Specialist Hyderabad, Non Surgical Spine Treatment Hyderabad",
  openGraph: {
    title: "Express Care Chiropractic & Wellness Support | Toli Chowki, Hyderabad",
    description: "Top-rated chiropractic and wellness clinic in Hyderabad offering non-surgical treatments for back pain, sciatica, and holistic spine health.",
    url: "https://expresscarechiropractic.in",
    siteName: "Express Care Chiropractic & Wellness Support",
    images: [
      {
        url: "/hero_premium_clinic.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 selection:bg-[#0D6E6E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
