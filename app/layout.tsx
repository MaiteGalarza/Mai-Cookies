import type { Metadata } from "next";
import { Jua, Varela_Round } from "next/font/google";
import "./globals.css";

// Main font (headings, buttons, logo style)
const jua = Jua({ subsets: ["latin"], weight: "400", variable: "--font-jua" });
// Complementary font (long text)
const varela = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-varela",
});

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
    <html lang="en">
      <body className={`${jua.variable} ${varela.variable}`}>{children}</body>
    </html>
  );
}
