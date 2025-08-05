import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "FitFlex AI - Get Jacked",
  description: "A modern fitness AI platform to get jacked for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <div className="fixed inset-0 -z-1">
            {/* Dark overlay to match the navbar */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90"></div>
            {/* Red-accent cyber grid */}
            <div
              className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"
              style={{ "--grid-color": "rgba(255, 66, 66, 0.1)" } as React.CSSProperties}
            ></div>
          </div>
          <main className="pt-24 flex-grow">
            {children}
          </main>

          
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}