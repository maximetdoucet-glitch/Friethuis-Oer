'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
  Navigatie: [
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'Over Ons' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/#location', label: 'Vind Ons' },
  ],
  Info: [
    { href: '/#menu', label: 'Actie Menu' },
    { href: '/reviews', label: 'Schrijf een Review' },
    { href: 'https://www.google.com/maps/dir/?api=1&destination=Friethuys+Oer+Ziekerstraat+1+Nijmegen', label: 'Routebeschrijving', external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black relative pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-accent/4 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent/4 blur-[130px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Main footer content — hardware accelerated reveal */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 pt-10 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand block */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="#top" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent rounded-full scale-90 group-hover:scale-100 transition-transform duration-300" />
                <Image
                  src="/logo-mark.png"
                  alt="Oer Logo"
                  width={32}
                  height={32}
                  className="relative z-10 brightness-0"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 leading-none mb-1">Ambachtelijk</span>
                <span className="text-xl font-black text-white tracking-tight leading-none group-hover:text-accent transition-colors duration-300">FRIETHUYS <span className="text-accent">&apos;OER&apos;!</span></span>
              </div>
            </Link>

            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-sm mb-10">
              Nijmegen&apos;s meest ambachtelijke friethuys. Verse friet uit Nederlandse kleigrond. &ldquo;In Friet We Trust&rdquo; — onze belofte aan jou.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/50 text-sm font-medium group">
                <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-md text-accent text-[10px] font-black">T</span>
                <a href="tel:+31242036258" className="hover:text-white transition-colors duration-200">+31 24 203 6258</a>
              </div>
              <div className="flex items-center gap-4 text-white/50 text-sm font-medium">
                <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-md text-accent text-[10px] font-black">A</span>
                <span className="group-hover:underline underline-offset-2">Ziekerstraat 1, 6511 LH Nijmegen</span>
              </div>
            </div>
          </div>

          {/* Quick links grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h5 className="font-black text-[10px] uppercase tracking-[0.35em] text-accent mb-6">Navigatie</h5>
              <ul className="space-y-3">
                {[
                  { name: 'Menu', href: '/menu' },
                  { name: 'Over Ons', href: '/about' },
                  { name: 'Reviews', href: '/reviews' },
                  { name: 'Vind Ons', href: '/#location' }
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/40 hover:text-white font-medium text-sm transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h5 className="font-black text-[10px] uppercase tracking-[0.35em] text-accent mb-6">Info</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/#menu" className="text-white/40 hover:text-white font-medium text-sm transition-colors duration-200">
                    Actie Menu
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-white/40 hover:text-white font-medium text-sm transition-colors duration-200">
                    Schrijf een Review
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Friethuys+Oer+Ziekerstraat+1+Nijmegen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/40 hover:text-white font-medium text-sm transition-colors duration-200"
                  >
                    Routebeschrijving
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1 flex flex-col">
              <h5 className="font-black text-[10px] uppercase tracking-[0.35em] text-accent mb-6">Volg Ons</h5>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {[
                  { name: 'Instagram', href: 'https://instagram.com/friethuysoer' },
                  { name: 'Facebook', href: 'https://facebook.com/friethuysoer' },
                  { name: 'TikTok', href: '#' },
                  { name: 'Google Maps', href: 'https://maps.google.com/?q=Friethuys+Oer+Nijmegen' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-200 text-center border border-white/5"
                  >
                    {social.name}
                  </a>
                ))}
              </div>

              {/* Rating badge */}
              <div className="glass-accent rounded-2xl p-5 border-accent/15">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-accent text-sm">★★★★★</div>
                </div>
                <p className="font-black text-white text-lg">4.8 / 5</p>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">Google Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
            © 2026 Friethuys &apos;Oer&apos;! Nijmegen. Alle Rechten Voorbehouden.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
