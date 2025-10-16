// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Left Section */}
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/">
            <span className="text-blue-600">OSHADHI</span>
          </Link>
        </div>

        {/* Middle Section (Links) */}
        <div className="flex space-x-6 text-gray-700">
          {[
            { href: "/", label: "Home" },
            { href: "/clinics", label: "Clinics" },
            { href: "/stores", label: "Stores" },
            { href: "/therapies", label: "Therapies" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-600 transition ${
                pathname === href ? "font-semibold text-blue-600" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
