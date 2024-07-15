import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChakraProviders from "@/lib/providers/ChakraProvider";
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Willowsage",
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
        <ReactQueryProvider>
          <ChakraProviders>{children}</ChakraProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
