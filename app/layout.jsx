import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZivaQ Pharmaceuticals",
  description: "Trusted dietary supplement manufacturing partner",
  icons: {
    icon: "/ZIVAQFINAL.png",
    shortcut: "/ZIVAQFINAL.png",
    apple: "/ZIVAQFINAL.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
