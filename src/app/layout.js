import { Inter } from "next/font/google";

import localFont from "next/font/local";
export const meQuran = localFont({ src: [{path: "../assets/me_quran Regular/me_quran Regular.ttf", weight: "400"}], variable: "--font-me_quran" });


import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "All islamic dua and hadith with transliteration, translation and reference",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
