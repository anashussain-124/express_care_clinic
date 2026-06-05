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
  title: "Chiropractor in Hyderabad | Express Care Clinic",
  description: "Top-rated chiropractor in Hyderabad. Express Care Clinic provides expert treatments for back pain, sciatica, neck pain, and spine care.",
  keywords: "Chiropractor in Hyderabad, Back Pain Treatment Hyderabad, Sciatica Treatment Hyderabad, Neck Pain Treatment Hyderabad, Spine Care Hyderabad, Frozen Shoulder Treatment Hyderabad",
  alternates: {
    canonical: "https://expresscarechiropractic.in",
  },
  openGraph: {
    title: "Chiropractor in Hyderabad | Express Care Clinic",
    description: "Top-rated chiropractor in Hyderabad. Express Care Clinic provides expert treatments for back pain, sciatica, neck pain, and spine care.",
    url: "https://expresscarechiropractic.in",
    siteName: "Express Care Clinic",
    images: [
      {
        url: "/hero_premium_clinic.png",
        width: 1200,
        height: 630,
        alt: "Express Care Chiropractic Clinic Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractor in Hyderabad | Express Care Clinic",
    description: "Top-rated chiropractor in Hyderabad providing expert treatments for back pain, sciatica, and spine care.",
    images: ["/hero_premium_clinic.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "name": "Express Care Chiropractic Clinic",
    "image": "https://expresscarechiropractic.in/hero_premium_clinic.png",
    "@id": "https://expresscarechiropractic.in",
    "url": "https://expresscarechiropractic.in",
    "telephone": "+91-9999999999", // Placeholder, will update if user provides
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Toli Chowki",
      "addressLocality": "Hyderabad",
      "addressRegion": "TS",
      "postalCode": "500008",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3984,
      "longitude": 78.4136
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "medicalSpecialty": "Chiropractic",
    "availableService": [
      {
        "@type": "MedicalTest",
        "name": "Back Pain Treatment"
      },
      {
        "@type": "MedicalTest",
        "name": "Sciatica Treatment"
      },
      {
        "@type": "MedicalTest",
        "name": "Neck Pain Treatment"
      }
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 selection:bg-[#0D6E6E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
