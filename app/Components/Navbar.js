"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "MEN", href: "/men" },
    { name: "WOMEN", href: "/women" },
    { name: "ACCESSORIES", href: "/accessories" },
    { name: "SALE", href: "/sale" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wide">A BAD GOAT</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
      key={link.name}
      href={link.href}
      className={`font-medium ${
        link.name === "SALE"
          ? "text-red-600 hover:text-red-800"
          : "text-gray-800 hover:text-black"
      }`}
    >
      {link.name}
    </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
          key={link.name}
          href={link.href}
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            link.name === "SALE"
              ? "text-red-600 hover:bg-gray-100"
              : "text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
