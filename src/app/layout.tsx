import type { Metadata } from "next";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { NavLinks } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Tracker",
  description: "Easily track your expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col items-center w-screen md:w-2/5 m-auto p-12">
          <NavLinks />
          {children}
        </div>
      </body>
    </html>
  );
}
