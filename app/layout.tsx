import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";

import { BootToast } from "@/components/ui/BootToast";
import { InitialLoading } from "@/components/ui/InitialLoading";
import { PixelCursor } from "@/components/ui/PixelCursor";

import "./globals.css";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bruna Moreira Candido | Desenvolvedora de Software",
  description:
    "Portfólio de Bruna Moreira Candido. Desenvolvedora de Software com experiência em React, Next.js, Node.js, Python e IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${pixelify.variable} ${inter.variable}`}>
        <PixelCursor />
        <InitialLoading />
        <BootToast />

        {children}
      </body>
    </html>
  );
}