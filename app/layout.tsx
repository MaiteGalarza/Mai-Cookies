import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

// Cambiá la fuente acá si usás otra
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });

export const metadata: Metadata = {
  title: "Mai Cookies",
  description: "Mai cookies could be your cookies too",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${fredoka.variable} font-display`}>{children}</body>
    </html>
  );
}
