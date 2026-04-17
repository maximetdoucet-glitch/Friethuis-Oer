'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'Over Ons' },
  { href: '/reviews', label: 'Reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'w-[96%] max-w-7xl bg-black/85 border-white/15 shadow-2xl shadow-black/50'
            : 'w-[94%] max-w-7xl bg-black/30 border-white/8'
        } backdrop-blur-2xl border rounded-2xl px-8 py-3.5`}
      >
        {/* Three-column layout: logo | nav center | CTA */}
        <div className="flex items-center justify-between">

          {/* LEFT — Logo (no subtitle) */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Friethuys Oer — Home"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300 shrink-0 overflow-hidden bg-black">
              <Image
                src="/logo-mark.png"
                alt="Friethuys Oer logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="block text-xl font-black tracking-tight">
              FRIETHUYS <span className="text-accent italic">&apos;OER&apos;!</span>
            </span>
          </Link>

          {/* CENTER — Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* RIGHT — CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/#location"
              className="hidden md:block px-5 py-2.5 bg-accent text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-accent-light active:scale-95 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Bezoek Ons
            </Link>

            {/* Mobile toggle */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 hover:border-accent/40 transition-colors"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64 mt-4 pt-4 border-t border-white/8' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#location"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-accent text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-xl text-center"
            >
              Bezoek Ons
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
