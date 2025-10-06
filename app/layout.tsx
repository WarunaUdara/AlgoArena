import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // All available weights
});

export const metadata: Metadata = {
  title: "AlgoArena 2025",
  description: "Official landing page for AlgoArena 2025 - Mobile Application Development Competition Event in Collaboration with USJ Leo Clubs and Leo clubs of Sri Lanka and Maldives",
  keywords: ['app dev','usj','mobile app','competition','hackathon'],
  icons: {
    icon: '/logo only.png',
    
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}