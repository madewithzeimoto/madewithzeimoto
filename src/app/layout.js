import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zeimoto",
  description: "A minimalist CMS built for clarity and focus.",
  openGraph: {
    title: "Zeimoto",
    description: "A minimalist CMS built for clarity and focus.",
    url: "https://www.zeimoto.com",
    siteName: "Zeimoto",
    images: [
      {
        url: "https://www.zeimoto.com/og.png",
        width: 2400,
        height: 1260,
      },
    ],
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script
          src="https://scripts.withcabin.com/hello.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
