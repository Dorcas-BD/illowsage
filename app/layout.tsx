import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChakraProviders from "@/lib/providers/ChakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Illowsage",
  description: "Glow with confidence!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
