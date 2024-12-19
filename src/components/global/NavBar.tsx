"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider hover:text-gray-400 transition"
        >
          SulAPP
        </Link>
        <ul className="hidden md:flex space-x-8 uppercase text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400 transition">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/service" className="hover:text-gray-400 transition">
              Services
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <ul className="space-y-4 py-4 px-4 text-center">
            <li>
              <Link
                href="/home"
                className="block hover:text-gray-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-gray-400 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block hover:text-gray-400 transition"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}