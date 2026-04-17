'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: '2014', label: 'Opgericht op Ziekerstraat' },
  { year: '2017', label: 'Eerste vegan menu gelanceerd' },
  { year: '2020', label: 'Bekroond als beste friet Nijmegen' },
  { year: '2024', label: '10 jaar ambachtelijk vakmanschap' },
];

export default function About() {
  const containerRef = useRef(null);

  return (
    <section id="about" ref={containerRef} className="py-20 bg-black relative">
      {/* Ambient light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/6 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image column */}
          <div className="relative group">
            {/* Glow blob */}
            <div className="absolute -inset-8 bg-accent/8 rounded-full blur-[80px] group-hover:bg-accent/14 transition-all duration-1000" />

            {/* Main image container */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/8 aspect-[4/5] shadow-2xl">
              <Image
                src="/exterior.png"
                alt="Friethuys 'Oer'! – Het Nijmeegse Friethuys aan de Ziekerstraat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Bottom overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                <p className="text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-1">Locatie</p>
                <p className="text-white font-black text-lg">Ziekerstraat 1</p>
                <p className="text-white/50 text-sm font-medium">6511 LH Nijmegen</p>
              </div>
            </div>

            {/* Floating badge — now safely INSIDE and FIXED (no rotation) */}
            <div 
              className="absolute bottom-6 right-6 w-24 h-24 bg-accent rounded-full flex flex-col items-center justify-center p-4 shadow-2xl shadow-accent/40 z-30"
            >
              <span className="text-black font-black text-[9px] uppercase tracking-wider">EST.</span>
              <span className="text-black font-black text-2xl leading-none">2014</span>
            </div>
          </div>

          {/* Text column */}
          <div className="relative pb-8">
            <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-4 py-1.5">
              Ons Ambacht
            </span>

            <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[0.84] tracking-tight mb-8">
              HET <span className="text-stroke">ORIGINELE</span><br />
              <span className="text-accent">Verhaal</span>
            </h2>

            <div className="space-y-5 text-lg text-white/55 font-medium leading-relaxed mb-10">
              <p>
                In 2014 bracht Friethuys &apos;Oer&apos;! de originele frietcultuur terug naar het hart van Nijmegen. &ldquo;Oer&rdquo; — het Nederlandse woord voor <em className="text-white/80 not-italic font-bold">origineel</em> en <em className="text-white/80 not-italic font-bold">puur</em>.
              </p>
              <p>
                Wij geloven in de kracht van de aardappel. Elke dag vers geleverd, zelf gesneden, dubbel gebakken. Geen compromissen, alleen het beste.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4 mb-12">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-5 group/m">
                  <span className="text-accent font-black text-sm w-10 shrink-0">{m.year}</span>
                  <div className="flex-1 h-px bg-white/8 group-hover/m:bg-accent/30 transition-colors duration-300" />
                  <span className="text-white/50 font-medium text-sm group-hover/m:text-white/80 transition-colors duration-300">{m.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              id="about-learn-more"
              className="group inline-flex items-center gap-4 text-white font-black text-[11px] uppercase tracking-[0.3em]"
            >
              Meer Over Ons
              <span className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300 border border-white/10">
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
