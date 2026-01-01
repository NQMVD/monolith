import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monolith - Structural Evolution Systems",
  description: "Forging software that respects your gravity. Everything is documented. Everything is permanent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
