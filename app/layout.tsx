import type { Metadata } from "next";
import { Jost, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMINA PR | Premium Public Relations Agency – USA",
  description:
    "Lumina PR is a full-service public relations agency crafting compelling stories and securing impactful media coverage for the world's most ambitious brands.",
  keywords: "PR agency, public relations, USA, media relations, brand strategy, crisis communications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${bodoniModa.variable}`}>
      <body className="font-jost bg-[#0C0A09] text-stone-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
