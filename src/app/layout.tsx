import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMO India - Clinical Research Organization (CRO)",
  description:
    "CDSCO-registered Contract Research Organization specializing in Phase I-IV clinical trials, site management, and regulatory affairs across India.",
  icons: {
    icon: "https://i.ibb.co/MD5RQ6v6/index-06.jpg",
    shortcut: "https://i.ibb.co/MD5RQ6v6/index-06.jpg",
    apple: "https://i.ibb.co/MD5RQ6v6/index-06.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
