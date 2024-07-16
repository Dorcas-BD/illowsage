import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChakraProviders from "@/lib/providers/ChakraProvider";
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";
import { CartProvider } from "@/lib/providers/CartContext";

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
          <ChakraProviders>
            <CartProvider>{children}</CartProvider>
          </ChakraProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
