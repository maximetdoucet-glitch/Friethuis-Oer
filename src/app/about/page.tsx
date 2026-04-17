import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Over Ons — Friethuys 'Oer'! | Het Verhaal van Ambachtelijke Friet",
  description: "Ontdek het verhaal van Friethuys 'Oer'! in Nijmegen. Opgericht in 2014 met de missie authentieke ambachtelijke friet te serveren. Vers gesneden, dubbel gebakken, met passie gemaakt.",
};

const values = [
  {
    icon: '🥔',
    title: 'Pure Kwaliteit',
    desc: 'Wij sourcen uitsluitend aardappelen van Nederlandse kleiboeren. Geen concessies.',
  },
  {
    icon: '🔥',
    title: 'Dubbel Gebakken',
    desc: "Elke friet wordt twee keer gebakken: eerst zacht, dan knapperig. Het 'Oer'!-geheim.",
  },
  {
    icon: '🌱',
    title: 'Plantaardig Pionier',
    desc: 'Onze vegan stoofvlees is een icoon geworden. Goed eten hoeft niet van vlees te komen.',
  },
  {
    icon: '🫙',
    title: 'Huisgemaakte Sauzen',
    desc: 'Elk sausje wordt dagelijks vers bereid in ons keukentje. Nooit uit een pak.',
  },
];

const team = [
  {
    name: 'Sander den Boer',
    role: 'Oprichter & Hoofd Frietbakker',
    bio: "Sander droomde al als kind van de perfecte friet. In 2014 opende hij de deuren van Friethuys 'Oer'! en is sindsdien de spil van alles.",
    initial: 'S',
  },
  {
    name: 'Roos Janssen',
    role: 'Hoofd Sauzen & Vegan Recepten',
    bio: 'Roos creëerde onze beroemde vegan stoofvlees. Ze experimenterkt dagelijks met nieuwe smaken in het keukentje.',
    initial: 'R',
  },
  {
    name: 'Tim van Leeuwen',
    role: 'Inkoop & Aardappel Expert',
    bio: "Tim bezoekt elk seizoen de boerderijen persoonlijk om de beste aardappelen voor 'Oer'! te selecteren.",
    initial: 'T',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-accent/6 blur-[150px] rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-5 py-2">
              Sinds 2014
            </span>
            <h1 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.82] tracking-tight mb-8">
              HET VERHAAL<br />
              VAN <span className="gradient-text">ECHTE FRIET</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/50 text-xl font-medium leading-relaxed">
              Hoe één simpel idee — de mogelijkheid van perfecte friet voor iedereen — Nijmegen voor altijd veranderde.
            </p>
          </div>

          {/* Hero image banner */}
          <div className="relative aspect-[4/5] md:aspect-[21/8] rounded-[2.5rem] overflow-hidden border border-white/8 mb-20 md:mb-32">
            <Image
              src="/exterior.png"
              alt="Friethuys 'Oer'! – Ziekerstraat Nijmegen"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:from-black/60 md:via-transparent" />

            {/* Floating stats */}
            <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex flex-row flex-wrap gap-2 md:gap-4 justify-center">
              {[
                ['10+', 'Jaar Ervaring'],
                ['50K+', 'Blije Klanten'],
                ['4.8★', 'Google Rating'],
                ['9', 'Huisgemaakte Sauzen'],
              ].map(([num, label]) => (
                <div key={label} className="glass rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 text-center flex-1 min-w-[calc(50%-0.5rem)] md:min-w-[120px]">
                  <p className="text-accent font-black text-xl md:text-2xl leading-none mb-1">{num}</p>
                  <p className="text-white/60 font-medium text-[9px] md:text-xs uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="py-32 px-6 bg-[#060606] border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-4 py-1.5">
                Onze Roots
              </span>
              <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[0.84] tracking-tight mb-10">
                WAAROM <span className="text-stroke">&apos;OER&apos;!</span>?
              </h2>
              <div className="space-y-6 text-xl text-white/55 font-medium leading-relaxed">
                <p>
                  <em className="text-white/80 not-italic font-bold">&ldquo;Oer&rdquo;</em> — het Nederlandse woord voor origineel, puur en echt.
                  Dat is precies wat Sander den Boer voor ogen had toen hij in 2014 zijn deuren opende op de Ziekerstraat.
                </p>
                <p>
                  Nijmegen verdiende een friet die niet zomaar een snack was, maar een viering van de aardappel.
                  Vers gesneden, dubbel gebakken, met trots geserveerd door mensen die écht geven om hun ambacht.
                </p>
                <p>
                  Tien jaar later is Friethuys &apos;Oer&apos;! meer dan een frietkraam — het is een Nijmeegs instituut.
                  Van studenten tot families, van vegans tot carnivoren: iedereen is welkom bij ons.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-accent/8 rounded-full blur-[80px] group-hover:bg-accent/14 transition-all duration-1000" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/8 aspect-[4/5]">
                <Image
                  src="/interior.png"
                  alt="Interieur Friethuys 'Oer'!"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-32 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-4 py-1.5">
              Onze Filosofie
            </span>
            <h2 className="text-[clamp(3rem,7vw,6rem)] leading-[0.84] tracking-tight">
              WAAR WE<br /><span className="text-accent">IN GELOVEN</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group glass rounded-[2rem] p-10 border-white/6 hover:border-accent/25 transition-all duration-300 hover-lift"
              >
                <div className="w-16 h-16 bg-accent/12 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors duration-300">{v.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Process ── */}
      <section className="py-32 px-6 bg-[#060606] border-y border-white/5 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-4 py-1.5">
                Het Proces
              </span>
              <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[0.84] tracking-tight mb-10">
                VAN <span className="text-stroke">KLEIGROND</span><br />
                TOT <span className="text-accent italic" style={{ fontFamily: 'var(--font-playfair)' }}>Jouw Bord</span>
              </h2>

              <div className="space-y-8">
                {[
                  { step: '01', title: 'Selectie', desc: "Tim bezoekt persoonlijk de Nederlandse kleiboerderijen om de perfecte aardappelen voor 'Oer'! te selecteren." },
                  { step: '02', title: 'Vers Snijden', desc: 'Elke ochtend worden de aardappelen gewassen, geschild en met de hand gesneden in onze zaak.' },
                  { step: '03', title: 'Eerste Bak', desc: "Op lagere temperatuur worden de frietjes zacht en gaar van binnen — het fundament van de 'Oer'!-friet." },
                  { step: '04', title: 'Tweede Bak', desc: 'Op hoge hitte krijgen ze de legendarische knapperigheid. Goudbruin, luchtig, perfect.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-6 group">
                    <span className="text-accent font-black text-4xl leading-none opacity-30 group-hover:opacity-100 transition-opacity w-10 shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-black text-lg mb-1 group-hover:text-accent transition-colors">{s.title}</h4>
                      <p className="text-white/50 font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-6 bg-accent/6 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all duration-1000" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/8 aspect-square">
                <Image
                  src="/vegan-stoofvlees.png"
                  alt="Het ambachtelijke kookproces bij Friethuys 'Oer'!"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-32 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-4 py-1.5">
              Ons Team
            </span>
            <h2 className="text-[clamp(3rem,7vw,6rem)] leading-[0.84] tracking-tight">
              DE MENSEN<br /><span className="text-accent">ACHTER &apos;OER&apos;!</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="group glass rounded-[2rem] p-8 border-white/6 hover:border-accent/25 transition-all duration-300 hover-lift text-center"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-black text-3xl leading-none">{member.initial}</span>
                </div>
                <h3 className="text-xl font-black mb-1 group-hover:text-accent transition-colors duration-300">{member.name}</h3>
                <span className="block text-accent/70 font-black text-[10px] uppercase tracking-[0.25em] mb-4">{member.role}</span>
                <p className="text-white/45 font-medium leading-relaxed text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto Banner ── */}
      <section className="py-32 px-6 bg-[#060606] border-y border-white/5 text-center relative overflow-hidden">
        <h2 className="text-[clamp(5rem,18vw,16rem)] opacity-[0.04] font-black italic select-none leading-none absolute inset-0 flex items-center justify-center pointer-events-none whitespace-nowrap">
          MANIFESTO
        </h2>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-12 border border-accent/30 rounded-full px-5 py-2">
            Onze Belofte
          </span>
          <h3 className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.88] mb-12 font-display italic" style={{ fontFamily: 'var(--font-playfair)' }}>
            &ldquo;In Friet We Trust&rdquo;
          </h3>
          <p className="text-2xl text-white/45 font-bold uppercase tracking-widest leading-loose">
            Wij geloven in de crunch.<br />
            Wij geloven in de lokale oogst.<br />
            Wij geloven in huisgemaakte saus.<br />
            Wij geloven in de mensen die het verschil kennen<br />
            tussen een snack en een meesterwerk.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="glass rounded-[2.5rem] p-12 md:p-16 border-white/6 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-[clamp(2rem,5vw,4rem)] leading-tight font-black uppercase tracking-tight mb-4">
                Kom Het Zelf <span className="text-accent">Proeven</span>
              </h3>
              <p className="text-white/45 font-medium text-xl max-w-lg leading-relaxed">
                Woorden doen het niet. Kom naar de Ziekerstraat en proef wat ambacht echt betekent.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 flex-wrap justify-center">
              <Link
                href="/#location"
                id="about-visit-us-cta"
                className="bg-accent text-black font-black text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:bg-accent-light active:scale-95 transition-all shadow-lg shadow-accent/20"
              >
                Bezoek Ons
              </Link>
              <Link
                href="/menu"
                id="about-menu-cta"
                className="glass border-white/15 text-white font-black text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:border-accent/30 hover:text-accent transition-all"
              >
                Bekijk Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
