"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/clinics", label: "Clinics" },
    { href: "/therapies", label: "Therapies" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-emerald-50/80 backdrop-blur-lg border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-emerald-700">
          OSHADHI
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 font-medium text-emerald-700">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition-all duration-150
                ${
                  pathname === href
                    ? "font-semibold text-emerald-800 underline underline-offset-8 decoration-2"
                    : "hover:text-emerald-600"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-emerald-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-emerald-50 border-t border-emerald-100 px-6 pb-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-2 px-2 rounded transition-all duration-150 ${
                pathname === href
                  ? "font-semibold text-emerald-800 bg-emerald-100"
                  : "hover:bg-emerald-100 hover:text-emerald-700"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
