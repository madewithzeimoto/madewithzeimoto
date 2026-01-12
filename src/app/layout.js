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
  title: "zeimoto",
  description: "Built to give people a simple place to manage content.",
  alternates: {
    canonical: "https://www.zeimoto.com/",
  },
  openGraph: {
    title: "zeimoto",
    description: "Built to give people a simple place to manage content.",
    url: "https://www.zeimoto.com/",
    siteName: "zeimoto",
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
