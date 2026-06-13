import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://zivaqpharma.com"),
  title: {
    template: "%s | ZivaQ Pharmaceuticals",
    default:
      "ZivaQ Pharmaceuticals | Dietary Supplement Manufacturer in New Jersey",
  },
  description:
    "ZivaQ Pharmaceuticals is a cGMP nutraceutical and dietary supplement contract manufacturer at 15 Cotters Lane, East Brunswick, NJ 08816. We produce capsules, tablets, and powder blends for supplement brands across the USA.",
  keywords: [
    "nutraceutical contract manufacturer",
    "dietary supplement contract manufacturing",
    "supplement manufacturer USA",
    "private label supplement manufacturer",
    "cGMP supplement manufacturing",
    "vitamin manufacturer USA",
    "nutraceutical manufacturer NJ",
    "supplement manufacturer New Jersey",
    "contract manufacturing East Brunswick NJ",
    "capsule manufacturer NJ",
    "tablet manufacturing contract",
    "powder supplement manufacturer",
    "private label vitamins",
    "custom supplement formulation",
    "15 Cotters Lane East Brunswick",
    "Middlesex County NJ supplement manufacturer",
  ],
  authors: [{ name: "ZivaQ Pharmaceuticals" }],
  creator: "ZivaQ Pharmaceuticals",
  publisher: "ZivaQ Pharmaceuticals",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zivaqpharma.com",
    siteName: "ZivaQ Pharmaceuticals",
    title:
      "ZivaQ Pharmaceuticals | Nutraceutical Contract Manufacturer in New Jersey, USA",
    description:
      "Trusted cGMP nutraceutical & dietary supplement contract manufacturer in East Brunswick, NJ. Capsules, tablets, powders & private label. Get a free quote.",
    images: [
      {
        url: "/ZIVAQFINAL.png",
        width: 1200,
        height: 630,
        alt: "ZivaQ Pharmaceuticals – Dietary Supplement Manufacturer, East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZivaQ Pharmaceuticals | Nutraceutical Contract Manufacturer NJ",
    description:
      "Trusted cGMP nutraceutical & supplement contract manufacturer in East Brunswick, New Jersey. Capsules, tablets, powders & private label.",
    images: ["/ZIVAQFINAL.png"],
  },
  icons: {
    icon: "/ZIVAQFINAL.png",
    shortcut: "/ZIVAQFINAL.png",
    apple: "/ZIVAQFINAL.png",
  },
  alternates: {
    canonical: "https://zivaqpharma.com",
  },
  other: {
    "geo.region": "US-NJ",
    "geo.placename": "East Brunswick, New Jersey",
    "geo.position": "40.4279;-74.4157",
    ICBM: "40.4279, -74.4157",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "Manufacturer"],
                  "@id": "https://zivaqpharma.com/#business",
                  name: "ZivaQ Pharmaceuticals",
                  legalName: "ZivaQ Pharmaceuticals Inc.",
                  description:
                    "cGMP-oriented dietary supplement contract manufacturer specializing in capsules, tablets, and powder blends for supplement brands across the USA.",
                  url: "https://zivaqpharma.com",
                  logo: "https://zivaqpharma.com/ZIVAQFINAL.png",
                  image: "https://zivaqpharma.com/ZIVAQFINAL.png",
                  telephone: "+17322089240",
                  email: "info@zivaqpharma.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "15 Cotters Lane",
                    addressLocality: "East Brunswick",
                    addressRegion: "NJ",
                    postalCode: "08816",
                    addressCountry: "US",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 40.4279,
                    longitude: -74.4157,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "09:00",
                      closes: "17:00",
                    },
                  ],
                  areaServed: [
                    { "@type": "State", "name": "New Jersey" },
                    { "@type": "Country", "name": "United States" },
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Dietary Supplement Manufacturing Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Capsule Manufacturing",
                          description:
                            "Hard-shell gelatin and HPMC capsule filling for dietary supplements.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Tablet Manufacturing",
                          description:
                            "Coated, uncoated, chewable, and specialty tablet production.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Powder Blend Manufacturing",
                          description:
                            "Custom powder blending for sports nutrition and wellness supplements.",
                        },
                      },
                    ],
                  },
                  priceRange: "$$",
                  foundingLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "East Brunswick",
                      addressRegion: "NJ",
                      addressCountry: "US",
                    },
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://zivaqpharma.com/#website",
                  url: "https://zivaqpharma.com",
                  name: "ZivaQ Pharmaceuticals",
                  publisher: { "@id": "https://zivaqpharma.com/#business" },
                },
              ],
            }),
          }}
        />
        <Preloader />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script id="tawk-to-chat" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            var originalConsoleError = console.error;
            console.error = function() {
              var firstArg = arguments[0];
              var isTawkLoggerNoise =
                firstArg === true ||
                (typeof firstArg === "string" && firstArg.indexOf("[Tawk/Logger]") !== -1);

              if (isTawkLoggerNoise) return;
              return originalConsoleError.apply(console, arguments);
            };

            (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/6a2dbdd0defa641d48ed5595/1jr1aqttc";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
