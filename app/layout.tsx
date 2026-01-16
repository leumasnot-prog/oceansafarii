import type { Metadata } from "next";
import { Lexend, DM_Serif_Display, Nunito, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";

// Lexend: Modern, highly readable - for UI, navigation, and body text
// Variable font with weights 100-900 for maximum flexibility
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

// DM Serif Display: Elegant italic - for hero headlines
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// Nunito: Rounded and friendly - for animated hero
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ocean Safari",
  description: "Expedições de mergulho guiadas por biólogo em Ilhabela-SP. Viva a aventura, entenda a ciência e proteja o ecossistema marinho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${lexend.variable} ${dmSerifDisplay.variable} ${nunito.variable} ${inter.variable} antialiased`} style={{ fontFamily: 'var(--font-lexend), system-ui, sans-serif' }}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
