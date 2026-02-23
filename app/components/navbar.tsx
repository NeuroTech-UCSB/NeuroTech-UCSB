"use client";

import Link from "next/link";
import { useState } from "react";

function DropdownMenu({ label, href, items }: { label: string; href: string; items: { name: string; href: string }[] }) {
  return (
    <div className="relative group">
      <Link href={href} className="text-white/90 hover:text-[var(--accent)] transition-colors duration-200 text-base font-medium tracking-wide">
        {label}
      </Link>
      <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
        <div className="bg-[var(--card-bg)] border border-white/10 rounded-lg min-w-[200px] py-1 shadow-xl shadow-black/30">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-white/80 hover:text-[var(--accent)] hover:bg-white/5 transition-colors duration-150"
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark-bg)]/10 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight hover:text-[var(--accent)] transition-colors">
          NeuroTech
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-[var(--accent)] transition-colors"
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
          <Link href="/about" className="text-white/90 hover:text-[var(--accent)] transition-colors duration-200 text-base font-medium tracking-wide">
            About
          </Link>
          <DropdownMenu
            label="Projects"
            href="/projects"
            items={[
              { name: "Project 1", href: "/projects/project-1" },
              { name: "Project 2", href: "/projects/project-2" },
              { name: "Project 3", href: "/projects/project-3" },
              { name: "Project 4", href: "/projects/project-4" },
              { name: "Project 5", href: "/projects/project-5" },
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
            className="bg-[var(--accent)] text-[var(--dark-bg)] px-5 py-2 rounded-full text-base font-semibold hover:brightness-110 transition-all duration-200"
          >
            Apply
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3 bg-[var(--dark-bg)]">
          <Link href="/about" className="block text-white/80 hover:text-[var(--accent)] transition-colors text-sm" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/projects" className="block text-white/80 hover:text-[var(--accent)] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Projects</Link>
          <Link href="/publications" className="block text-white/80 hover:text-[var(--accent)] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Publications</Link>
          <Link href="/conference" className="block text-white/80 hover:text-[var(--accent)] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Conference</Link>
          <Link
            href="/apply"
            className="inline-block bg-[var(--accent)] text-[var(--dark-bg)] px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Apply
          </Link>
        </div>
      )}
    </nav>
  );
}
