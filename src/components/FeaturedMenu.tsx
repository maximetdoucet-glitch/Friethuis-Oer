'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FEATURED = [
  {
    name: "'Oer'! Friet",
    tagline: 'Het Origineel',
    desc: 'Vers gesneden uit Nederlandse kleigrond aardappelen, dubbel gebakken voor de ultieme knapperigheid.',
    image: '/hero-fries.png',
    badge: 'Bestseller',
    tags: ['V', 'VG'],
  },
  {
    name: 'Vegan Stoofvlees',
    tagline: 'Huisspecialiteit',
    desc: 'Traag gekookt plantaardig stoofvlees over onze goudbruine friet. Een Nijmeegs icoon.',
    image: '/vegan-stoofvlees.png',
    badge: 'Signature',
    tags: ['VG'],
  },
  {
    name: 'Huisgemaakte Sauzen',
    tagline: 'Artisanaal',
    desc: 'Van truffel mayo tot samurai saus — allemaal gemaakt in ons eigen keukentje.',
    image: '/sauces.png',
    badge: 'Huisgemaakt',
    tags: ['V'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
} as const;

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 bg-[#060606] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-5 border border-accent/30 rounded-full px-4 py-1.5">
              De Smaakmakers
            </span>
            <h2 className="text-[clamp(2rem,9vw,6rem)] leading-[0.82] tracking-tight">
              EEN SMAAK VAN<br />
              <span className="text-stroke italic">VAKMANSCHAP</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:max-w-xs shrink-0"
          >
            <p className="text-white/45 font-medium leading-relaxed mb-8">
              Elke bereiding is het resultaat van jaren perfecteren.
              Geen compromissen. Alleen het beste.
            </p>
            <Link
              href="/menu"
              id="featured-full-menu-link"
              className="group inline-flex items-center gap-3 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] px-7 py-4 rounded-xl hover:bg-accent transition-all duration-200 shadow-lg"
            >
              Volledig Menu
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Cards grid — now static for zero-jump stability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2rem] overflow-hidden border border-white/6 hover:border-accent/25 transition-[border-color,background-color] duration-300 bg-card"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 33vw"
                />

                {/* Badge */}
                <span className="absolute top-5 left-5 glass-accent text-accent text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full">
                  {item.badge}
                </span>

                {/* Tags */}
                <div className="absolute top-5 right-5 flex gap-1.5">
                  {item.tags.map(tag => (
                    <span key={tag} className="w-7 h-7 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center text-[9px] font-black text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="block text-accent text-[9px] font-black uppercase tracking-[0.35em] mb-2">{item.tagline}</span>
                <h3 className="text-2xl font-black mb-3 group-hover:text-accent transition-colors duration-300">{item.name}</h3>
                <p className="text-white/50 font-medium leading-relaxed text-sm">{item.desc}</p>

                {/* Arrow link */}
                <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-accent transition-colors duration-300 text-[10px] font-black uppercase tracking-[0.2em]">
                  Meer Weten
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-black/40 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/6"
        >
          <div>
            <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em] block mb-2">Chef&apos;s Tip</span>
            <p className="text-xl font-black max-w-xl">
              Probeer de Grote &apos;Oer&apos;! Friet met Vegan Stoofvlees & Truffel Mayo — dé Nijmeegse ervaring.
            </p>
          </div>
          <Link
            href="/menu"
            id="featured-bottom-cta"
            className="shrink-0 bg-accent text-black text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:bg-accent-light active:scale-95 transition-all duration-200 whitespace-nowrap shadow-lg shadow-accent/20"
          >
            Bekijk Bestsellers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
