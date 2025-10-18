import { Navbar } from "./components/Navbar";
import Footer4Col from "./components/footer"; // matches src/app/components/footer.tsx
import { InfiniteMovingCardsDemo } from "./components/testimonials";
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
        <Navbar />
        <main className="pt-0.5">{children}</main>
        <InfiniteMovingCardsDemo />
        <Footer4Col />
      </body>
    </html>
  );
}
