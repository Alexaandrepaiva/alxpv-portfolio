import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Alxpv | Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { LanguageProvider } from "~/contexts/LanguageContext";
import { ThemeProvider } from "~/contexts/ThemeContext";
import { Layout } from "~/components/Layout";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Layout>{children}</Layout>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <Script
          src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz"
          strategy="afterInteractive"
        />
        <Script id="amplitude-init" strategy="afterInteractive">
          {`
            window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
            window.amplitude.init('71c4276fdc59ce0affee428d2c977367', {
              autocapture: {
                elementInteractions: true
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
