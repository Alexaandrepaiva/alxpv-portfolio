import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Alxpv | Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { LanguageProvider } from "~/contexts/LanguageContext";
import { ThemeProvider } from "~/contexts/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} light`}>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
