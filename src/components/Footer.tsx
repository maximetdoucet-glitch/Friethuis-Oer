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
  { label: 'Instagram', href: 'https://instagram.com/friethuysoer' },
  { label: 'Facebook', href: 'https://facebook.com/friethuysoer' },
  { label: 'TikTok', href: '#' },
  { label: 'Google Maps', href: 'https://maps.google.com/?q=Friethuys+Oer+Nijmegen', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/6 relative overflow-hidden">
      {/* Yellow Top divider line — The user's requested 'yellow line' */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent/4 blur-[130px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Main footer content — reveal for text fluidity */}
      <div className="container mx-auto px-6 pt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand block — Static for zero-effect photo requirement */}
          <div className="md:col-span-5">
            <Link href="#top" className="inline-flex items-center gap-3 mb-8 group">
              <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center shrink-0 overflow-hidden shadow-lg shadow-accent/20">
                <Image
                  src="/logo-mark.png"
                  alt="Friethuys Oer logo"
                  width={34}
                  height={34}
                  className="object-contain brightness-0"
                />
              </div>
              <div className="leading-none">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/35 group-hover:text-accent transition-colors">Ambachtelijk</span>
                <span className="block text-2xl font-black tracking-tight group-hover:text-accent transition-all">
                  FRIETHUYS <span className="text-accent">&apos;OER&apos;!</span>
                </span>
              </div>
            </Link>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white/40 text-sm font-medium max-w-sm leading-relaxed mb-10">
                Nijmegen&apos;s meest ambachtelijke friethuys. Verse friet uit Nederlandse kleigrond. &ldquo;In Friet We Trust&rdquo; — onze belofte aan jou.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/50 text-sm font-medium group">
                  <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-md text-accent text-[10px] font-black">T</span>
                  <a href="tel:+31242036258" className="hover:text-white transition-colors duration-200">+31 24 203 6258</a>
                </div>
                <div className="flex items-center gap-4 text-white/50 text-sm font-medium group">
                  <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-md text-accent text-[10px] font-black">A</span>
                  <span className="group-hover:text-white transition-colors">Ziekerstraat 1, 6511 LH Nijmegen</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links blocks */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div 
             key={title} 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.1 * (idx + 1) }}
             className="md:col-span-2"
            >
              <h5 className="font-black text-[10px] uppercase tracking-[0.35em] text-accent mb-6">{title}</h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white font-medium text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3"
          >
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
                <div className="flex text-accent text-sm">★★★★★</div>
              </div>
              <p className="font-black text-white text-lg">4.8 / 5</p>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">Google Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
            © 2026 Friethuys &apos;Oer&apos;! Nijmegen. Alle Rechten Voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
