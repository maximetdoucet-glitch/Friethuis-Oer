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

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/friethuysoer', icon: '◈' },
  { label: 'Facebook', href: 'https://facebook.com/friethuysoer', icon: '◈' },
  { label: 'TikTok', href: '#', icon: '◈' },
  { label: 'Google Maps', href: 'https://maps.google.com/?q=Friethuys+Oer+Nijmegen', icon: '◈', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden pt-16">
      {/* Yellow Top divider line — pushed down to sit right above the logo */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent/4 blur-[130px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Main footer content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 pt-12 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand block */}
          <div className="md:col-span-5">
            <Link href="#top" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/logo-mark.png"
                  alt="Friethuys Oer logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 leading-none mb-1">Ambachtelijk</span>
                <span className="text-xl font-black text-white tracking-tight leading-none group-hover:text-accent transition-colors duration-300">FRIETHUYS <span className="text-accent">&apos;OER&apos;!</span></span>
              </div>
            </Link>

            <p className="text-white/40 text-base font-medium max-w-sm leading-relaxed mb-8">
              Nijmegen&apos;s meest ambachtelijke friethuys. Verse friet uit Nederlandse kleigrond. &ldquo;In Friet We Trust&rdquo; — onze belofte aan jou.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+31242036258" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors duration-200 font-medium">
                <span className="text-accent text-xs">T</span>
                +31 24 203 6258
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Friethuys+Oer+Ziekerstraat+1+6511+LH+Nijmegen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/50 hover:text-accent transition-colors duration-200 font-medium group"
              >
                <span className="text-accent text-xs mt-0.5">A</span>
                <span className="group-hover:underline underline-offset-2">Ziekerstraat 1, 6511 LH Nijmegen</span>
              </a>
            </div>
          </div>

          {/* Links blocks */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h5 className="font-black text-[10px] uppercase tracking-[0.35em] text-accent mb-6">{title}</h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-white/40 hover:text-white font-medium text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social & hours */}
          <div className="md:col-span-3">
            <h5 className="font-black text-[10px] uppercase tracking-[0.35em] text-accent mb-6">Volg Ons</h5>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-200 text-center border border-white/5"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Google rating badge */}
            <div className="glass-accent rounded-2xl p-5 border-accent/15">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-accent text-sm">{'★★★★★'}</div>
              </div>
              <p className="font-black text-white text-lg">4.8 / 5</p>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">Google Reviews</p>
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
