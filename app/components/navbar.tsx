"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const linkClass = "text-primary/80 hover:text-primary transition-colors duration-200 text-base font-medium tracking-wide";

function DropdownMenu({ label, href, items }: { label: string; href: string; items: { name: string; href: string }[] }) {
  return (
    <div className="relative group">
      <Link href={href} className={linkClass}>
        {label}
      </Link>
      <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
        <div className="bg-white border border-primary/10 rounded-lg min-w-[200px] py-1 shadow-xl shadow-primary/10">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-primary/70 hover:text-primary hover:bg-primary/5 transition-colors duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-primary/10"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image src="/neurotech-ucsb-logo.png" alt="NeuroTech @ UCSB" width={60} height={60} className="h-12 md:h-16 w-auto object-contain" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary/70 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <DropdownMenu
            label="Projects"
            href="/projects"
            items={[
              { name: "BCI Robotic Arm", href: "/projects/neuroarm" },
              { name: "NeuroColor", href: "/projects/neurocolor" },
              { name: "Music Genre Detection", href: "/projects/music-genre" },
              { name: "PsyCopter", href: "/projects/project-4" },
              { name: "Mini fNIRS", href: "/projects/project-5" },
            ]}
          />
          <DropdownMenu
            label="Publications"
            href="/publications"
            items={[
              { name: "Medium Blog", href: "/publications/medium-blog" },
              { name: "Weekly Newsletter", href: "/publications/weekly-newsletter" },
              { name: "Podcast", href: "/publications/podcast" },
            ]}
          />
          <DropdownMenu
            label="Conference"
            href="/conference"
            items={[{ name: "CNTC", href: "/conference/CNTC" }]}
          />
          <Link
            href="/apply"
            className="bg-primary text-white px-5 py-2 rounded-full text-base font-semibold hover:bg-primary-dark transition-all duration-200"
          >
            Apply
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-primary/10 px-6 py-4 space-y-3 bg-white">
          <Link href="/about" className={`block text-sm ${linkClass}`} onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/projects" className={`block text-sm ${linkClass}`} onClick={() => setMobileOpen(false)}>Projects</Link>
          <Link href="/publications" className={`block text-sm ${linkClass}`} onClick={() => setMobileOpen(false)}>Publications</Link>
          <Link href="/conference" className={`block text-sm ${linkClass}`} onClick={() => setMobileOpen(false)}>Conference</Link>
          <Link
            href="/apply"
            className="inline-block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Apply
          </Link>
        </div>
      )}
    </nav>
  );
}
