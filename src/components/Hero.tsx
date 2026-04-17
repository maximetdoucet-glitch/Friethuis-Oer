'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '10+', label: 'Jaar Ervaring' },
  { number: '50K+', label: 'Blije Klanten' },
  { number: '4.8★', label: 'Google Rating' },
  { number: '100%', label: 'Vers Gesneden' },
];

export default function Hero() {
  const targetRef = useRef(null);

  return (
    <section ref={targetRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* Giant background word — now static and stable */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[22vw] font-black leading-none whitespace-nowrap opacity-[0.035] tracking-tighter translate-x-[-5%]">
          FRIET FRIET FRIET
        </h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left column — copy */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-xl rounded-full px-4 py-2 mb-8 border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              #1 Friet van Nijmegen
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.84] tracking-tight mb-8">
            IN FRIET<br />
            <span className="gradient-text font-display">We Trust</span>
          </h1>

          <p className="text-lg md:text-xl text-white/55 max-w-lg mb-10 leading-relaxed font-medium">
            Verse friet, geboren uit Nijmeegse kleigrond. Elke dag vers gesneden,
            dubbel gebakken voor de <em className="text-white/80 not-italic font-bold">perfecte crunch</em>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/menu"
              id="hero-cta-menu"
              className="group flex items-center gap-3 bg-accent text-black text-[11px] font-black px-8 py-4 rounded-xl hover:bg-accent-light active:scale-95 transition-all duration-200 shadow-xl shadow-accent/25"
            >
              Bekijk Ons Menu
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              id="hero-cta-story"
              className="flex items-center gap-3 glass border-white/10 text-white text-[11px] font-black px-8 py-4 rounded-xl hover:border-accent/30 hover:text-accent transition-all duration-200"
            >
              Ons Verhaal
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-4 gap-4 border-t border-white/8 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <span className="block text-2xl md:text-3xl font-black text-accent leading-none mb-1">{s.number}</span>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/35">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column — image container now static */}
        <div className="relative order-1 lg:order-2 group">
          {/* Rotating ring */}
          <div className="absolute inset-[-24px] rounded-[3rem] border border-accent/10 animate-spin-slow" style={{ animationDuration: '30s' }} />

          {/* Glow */}
          <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-3xl scale-90 group-hover:scale-100 transition-transform duration-1000 opacity-60" />

          {/* Main image */}
          <div className="relative h-[55vh] lg:h-[75vh] w-full rounded-[2.5rem] overflow-hidden border border-white/8 shadow-2xl">
            <Image
              src="/hero-fries.png"
              alt="Verse ambachtelijke friet van Friethuys 'Oer'! Nijmegen"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Floating card */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="block text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-1">Vers Geplukt</span>
                  <p className="text-white font-bold text-lg leading-tight">Nederlandse Kleigrond</p>
                  <p className="text-white/50 text-sm font-medium">Elke ochtend vers geleverd</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating badge — now static and stable */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-8 -right-6 z-10 glass-accent rounded-2xl px-5 py-3.5 shadow-xl border-accent/25"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80 mb-0.5">Dubbel Gebakken</p>
            <p className="text-white font-black text-lg">Perfecte Crunch</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint — now simple and stable */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
