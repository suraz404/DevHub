"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/constants/ThemeToggle";
import { navLinks } from "@/data/navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="container  mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          DevHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {nav.title}
            </Link>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 hover:bg-accent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            {navLinks.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium hover:bg-accent"
              >
                {nav.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
