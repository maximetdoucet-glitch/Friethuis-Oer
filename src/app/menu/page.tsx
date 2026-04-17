import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: "Bekijk het volledige menu van Friethuys &apos;Oer&apos;!. Verse friet, vegan specials, ambachtelijke snacks en huisgemaakte sauzen. Ziekerstraat 1, Nijmegen.",
};

type MenuItem = {
  name: string;
  desc: string;
  price?: string;
  tags: string[];
  highlight?: boolean;
};

type MenuCategory = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  items: MenuItem[];
};

const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'friet',
    icon: '🍟',
    title: "'Oer'! Friet",
    subtitle: 'Het Origineel',
    description: 'Vers gesneden uit Nederlandse kleigrond aardappelen, dubbel gebakken voor de ultieme knapperigheid. Elke dag vers.',
    image: '/hero-fries.png',
    items: [
      { name: 'Klein', desc: 'Ideaal voor een snelle hap.', price: '€ 3,50', tags: ['V', 'VG'] },
      { name: 'Medium', desc: 'De populairste maat in Nijmegen.', price: '€ 4,50', tags: ['V', 'VG'], highlight: true },
      { name: 'Groot', desc: 'Voor de echte frietliefhebber.', price: '€ 5,50', tags: ['V', 'VG'] },
      { name: 'Familie Portie', desc: 'Genoeg voor iedereen (of niet).', price: '€ 8,50', tags: ['V', 'VG'] },
    ],
  },
  {
    id: 'vegan',
    icon: '🌱',
    title: 'Vegan Specials',
    subtitle: 'Plantaardig Goud',
    description: 'Artisanale plantaardige opties die nooit concessies doen aan smaak. Helemaal vegan, 100% lekker.',
    image: '/vegan-kroket.png',
    items: [
      { name: 'Vegan Stoofvlees', desc: 'Ons legendarisch traag gekookt plantaardig stoofvlees over friet.', price: '€ 7,50', tags: ['VG'], highlight: true },
      { name: 'Vegan Kroket', desc: 'Romige vulling in een knapperige artisanale korst.', price: '€ 3,00', tags: ['VG'] },
      { name: 'Vegan Frikandel', desc: 'Een klassieker, 100% plantaardig gemaakt.', price: '€ 2,80', tags: ['VG'] },
      { name: 'Vegan Bamischijf', desc: 'Gekruide noedels in een krokant jasje.', price: '€ 2,80', tags: ['VG'] },
      { name: 'Vegan Kaassouflé', desc: 'Smeltende kaasalternatief in een luchtig deeg.', price: '€ 2,80', tags: ['VG'] },
    ],
  },
  {
    id: 'snacks',
    icon: '🥘',
    title: 'Ambachtelijke Snacks',
    subtitle: 'Klassiekers Elevated',
    description: "Klassieke snacks, naar een hoger niveau gebracht met de 'Oer'!-kwaliteit. Gemaakt met vakmanschap.",
    items: [
      { name: 'Rundvleeskroket', desc: 'Rijke runderragout in een goudbruine korst.', price: '€ 2,80', tags: [] },
      { name: 'Kipcorn', desc: 'Krokante kipsnack, ideaal als bijgerecht.', price: '€ 2,60', tags: [] },
      { name: 'Kaassouflé', desc: 'Smeltende gesmolten kaas in een luchtig deeg.', price: '€ 2,60', tags: ['V'] },
      { name: 'Frikandel Speciaal', desc: 'Met mayo, curry en verse ui. De klassieker.', price: '€ 3,20', tags: [], highlight: true },
      { name: 'Mexicano', desc: 'Pittige vlesnack voor wie van een kick houdt.', price: '€ 2,60', tags: [] },
      { name: 'Bitterbal', desc: 'Krokant van buiten, zacht ragout van binnen.', price: '€ 1,80', tags: [] },
    ],
  },
  {
    id: 'sauces',
    icon: '🫙',
    title: 'Huisgemaakte Sauzen',
    subtitle: 'De Perfecte Partners',
    description: 'Alle sauzen worden dagelijks vers bereid in ons keukentje. Geen kant-en-klare rommel — echt gemaakt.',
    image: '/sauces.png',
    items: [
      { name: "'Oer'! Mayo", desc: 'Onze signature romige huismayo.', price: '€ 1,20', tags: ['V'], highlight: true },
      { name: 'Vegan Mayo', desc: 'Rijk en knoflookachtig, 100% plantaardig.', price: '€ 1,20', tags: ['VG'] },
      { name: 'Truffel Mayo', desc: 'Voor een vleugje luxe.', price: '€ 1,80', tags: ['V'] },
      { name: 'Satésaus', desc: 'Warme, pittige pindasaus.', price: '€ 1,50', tags: ['VG'] },
      { name: 'Joppiesaus', desc: 'Zoet-hartige ui-currysmaak.', price: '€ 1,20', tags: ['V'] },
      { name: 'Knoflooksaus', desc: 'Vers huisgemaakte knoflooksaus.', price: '€ 1,20', tags: ['V'] },
      { name: 'Samurai Saus', desc: 'Pittige mayo met een bite.', price: '€ 1,20', tags: ['V'] },
      { name: 'Curry Ketchup', desc: 'Klassieke Nederlandse pittige ketchup.', price: '€ 1,00', tags: ['VG'] },
    ],
  },
  {
    id: 'dranken',
    icon: '🥤',
    title: 'Dranken',
    subtitle: 'Frisse Dorstlessers',
    description: 'Koude verfrissingen om je friet mee weg te spoelen.',
    items: [
      { name: 'Cola / Cola Zero', desc: 'Koud & bruisend.', price: '€ 2,50', tags: [] },
      { name: 'Fanta / Sprite', desc: 'Verfrissend en fruitig.', price: '€ 2,50', tags: [] },
      { name: 'Water (Still/Sparkling)', desc: 'Helder Brands bronwater.', price: '€ 2,00', tags: ['VG'] },
      { name: 'Vers Geperst Jus', desc: 'Elke dag vers geperst sinaasappelsap.', price: '€ 3,50', tags: ['VG'], highlight: true },
    ],
  },
];

const TAG_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  V: { bg: 'bg-green-500/10', text: 'text-green-400', label: 'Vegetarisch' },
  VG: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', label: 'Vegan' },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/6 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/4 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-5 py-2">
            Vers & Ambachtelijk
          </span>
          <h1 className="text-[clamp(4rem,12vw,11rem)] leading-[0.82] tracking-tight mb-8">
            ONS<br />
            <span className="gradient-text">MENU</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/50 text-xl font-medium leading-relaxed mb-10">
            Elk item wordt bereid met ambachtelijke zorg — van onze lokaal gesourcede aardappelen
            tot onze signature plantaardige stoofvlees.
          </p>

          {/* Legend */}
          <div className="inline-flex items-center gap-5 glass rounded-full px-6 py-3.5 border-white/8">
            {Object.entries(TAG_COLORS).map(([tag, style]) => (
              <div key={tag} className="flex items-center gap-2">
                <span className={`text-[9px] font-black px-2 py-1 rounded-md ${style.bg} ${style.text}`}>{tag}</span>
                <span className="text-white/40 text-xs font-medium">{style.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Nav ── */}
      <div className="sticky top-[70px] z-40 bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6">
          <nav className="flex gap-1 overflow-x-auto py-4 scrollbar-hide" aria-label="Menu categorieën">
            {MENU_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/45 hover:text-white hover:bg-white/6 transition-all duration-200"
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Menu Sections ── */}
      <div className="container mx-auto px-6 py-20 space-y-32">
        {MENU_CATEGORIES.map((category, catIdx) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-28"
            aria-labelledby={`heading-${category.id}`}
          >
            {/* Category header */}
            <div className="flex flex-col lg:flex-row gap-12 mb-14 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center text-2xl">{category.icon}</span>
                  <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">{category.subtitle}</span>
                </div>
                <h2
                  id={`heading-${category.id}`}
                  className="text-[clamp(1.8rem,3vw,3rem)] leading-[0.9] tracking-tight mb-6 text-accent overflow-hidden break-words"
                >
                  {category.title}
                </h2>
                <p className="text-white/45 text-lg font-medium leading-relaxed">
                  {category.description}
                </p>

                {/* Category image (if available) */}
                {category.image && (
                  <div className="mt-8 relative h-48 rounded-2xl overflow-hidden border border-white/8">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
              </div>

              {/* Items grid */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-300 hover-lift min-h-[160px] sm:min-h-0 flex flex-col ${
                      item.highlight
                        ? 'bg-accent/6 border-accent/25 hover:border-accent/50'
                        : 'bg-white/3 border-white/6 hover:border-white/15 hover:bg-white/5'
                    }`}
                  >
                    {item.highlight && (
                      <span className="absolute -top-2.5 right-4 glass-accent text-accent text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-accent/30">
                        Favoriet
                      </span>
                    )}

                    <div className="flex items-start justify-between gap-3 mb-3 shrink-0">
                      <h3 className={`text-lg font-black leading-tight transition-colors duration-200 ${
                        item.highlight ? 'text-accent' : 'group-hover:text-accent'
                      }`}>
                        {item.name}
                      </h3>
                      {item.price && (
                        <span className="shrink-0 font-black text-white/70 text-sm">{item.price}</span>
                      )}
                    </div>

                    <p className="text-white/45 font-medium text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>

                    {item.tags.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap">
                        {item.tags.map(tag => {
                          const style = TAG_COLORS[tag];
                          return style ? (
                            <span
                              key={tag}
                              title={style.label}
                              className={`text-[8px] font-black px-2 py-1 rounded-md ${style.bg} ${style.text} uppercase tracking-widest`}
                            >
                              {tag}
                            </span>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {catIdx < MENU_CATEGORIES.length - 1 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            )}
          </section>
        ))}
      </div>

      {/* ── Chef's Note ── */}
      <section className="px-6 pb-32">
        <div className="container mx-auto">
          <div className="relative bg-accent rounded-[3rem] p-12 md:p-16 overflow-hidden text-black">
            {/* Big ghost text */}
            <div className="absolute -bottom-8 -right-8 text-[20vw] font-black italic opacity-10 select-none leading-none pointer-events-none">&apos;OER&apos;!</div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <span className="block font-black text-[10px] uppercase tracking-[0.35em] mb-4 opacity-60">Chef&apos;s Aanbeveling</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4">
                  DE ULTIEME NIJMEEGSE ERVARING
                </h3>
                <p className="text-xl font-bold opacity-75 leading-relaxed">
                  Grote &apos;Oer&apos;! Friet + Vegan Stoofvlees + Truffel Mayo — één hap en je bent verkocht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
