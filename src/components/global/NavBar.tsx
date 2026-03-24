"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="glass-panel mx-4 mt-4 rounded-2xl px-6 py-3 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center transition"
        >
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wide text-ink transition group-hover:text-[#0f766e]">
              Sulthoni
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.45em] text-ink/60">
              Digital Studio
            </span>
          </span>
        </Link>
        <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest text-ink">
          <li>
            <Link href="/" className="transition hover:text-[#0f766e]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-[#0f766e]">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/service" className="transition hover:text-[#0f766e]">
              Services
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block rounded-full border border-black/10 bg-white/70 p-2 text-ink shadow-sm transition hover:border-black/20"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-ink"
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
      </div>

      {isOpen && (
        <div className="md:hidden mx-4 mt-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-4 text-center shadow-lg backdrop-blur">
          <ul className="space-y-4 py-2 text-sm font-semibold uppercase tracking-widest text-ink">
            <li>
              <Link
                href="/"
                className="block transition hover:text-[#0f766e]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block transition hover:text-[#0f766e]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block transition hover:text-[#0f766e]"
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
