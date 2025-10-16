import { Navbar } from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oshadhi",
  description: "Homeopathic Clinic Management Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black antialiased">
        {/* ✅ Navbar visible on all pages */}
        <Navbar />
        {/* Padding to offset fixed navbar height */}
        <main className="pt-0.5">{children}</main>
      </body>
    </html>
  );
}
