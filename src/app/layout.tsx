import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import PageFrame from "@/components/PageFrame";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ali Khoramshad",
  description: "Designer working across motion, brand, and interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Nav />
        <main className="flex-1 flex flex-col">{children}</main>
        <PageFrame />
      </body>
    </html>
  );
}
