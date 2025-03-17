import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexandre de Paiva Almeida | Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { LanguageProvider } from "~/contexts/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
