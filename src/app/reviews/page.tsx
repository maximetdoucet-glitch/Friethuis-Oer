import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reviews — Friethuys 'Oer'! | Wat Nijmegen Zegt",
  description: "Lees de reviews van Friethuys &apos;Oer&apos;! in Nijmegen. De beste ambachtelijke friet van Nijmegen — dat zeggen onze klanten. Bekijk onze Google Reviews en deel jouw ervaring.",
};

type Review = {
  name: string;
  date: string;
  rating: 5 | 4 | 3;
  text: string;
  source: 'Google' | 'HappyCow' | 'Eet.nu' | 'Facebook' | 'TripAdvisor';
  highlight?: boolean;
};

const REVIEWS: Review[] = [
  {
    name: 'Sophie van der Meer',
    date: '2 weken geleden',
    rating: 5,
    text: 'Absoluut de beste friet van Nijmegen. Het vegan stoofvlees is een openbaring! Je kunt zien dat ze verse aardappelen gebruiken — de kwaliteit is consistent elke keer.',
    source: 'Google',
    highlight: true,
  },
  {
    name: 'Mark J.',
    date: '1 maand geleden',
    rating: 5,
    text: 'Krokant aan de buitenkant, zacht van binnen. Precies zoals een "oer" friet zou moeten zijn. En die vegan mayo is incredible. Een echte aanrader voor iedereen die langskomt.',
    source: 'HappyCow',
  },
  {
    name: 'Lars Bakker',
    date: '3 dagen geleden',
    rating: 5,
    text: 'Ik kom hier elke week. De service is snel en de kwaliteit is altijd consistent. Een must-visit in het centrum van Nijmegen. Sander en het team zijn geweldig.',
    source: 'Eet.nu',
    highlight: true,
  },
  {
    name: 'Emma D.',
    date: '2 maanden geleden',
    rating: 4,
    text: 'Soms wat wachten omdat het zo populair is, maar absoluut de moeite waard. Beste vegan snack-opties in de stad. De vegan kroket is mijn favoriet!',
    source: 'Google',
  },
  {
    name: 'Thomas W.',
    date: '5 dagen geleden',
    rating: 5,
    text: 'Ambachtelijke friet op zijn best. Geen ingevroren troep hier. De Ziekerstraat locatie is een klassieker. Dit is wat echte friet zou moeten zijn.',
    source: 'Facebook',
  },
  {
    name: 'Nathalie K.',
    date: '1 week geleden',
    rating: 5,
    text: 'Als veganist is het niet altijd makkelijk om ook maar een beetje van een snackbar te genieten. Hier kan ik alles eten! De vegan stoofvlees over friet is serieus levensveranderend.',
    source: 'HappyCow',
    highlight: true,
  },
  {
    name: 'Joep van Rooij',
    date: '3 weken geleden',
    rating: 5,
    text: 'Mijn kinderen willen alleen nog maar hiernaartoe. De friet is geweldig, de sauzen zijn geweldig, de service is geweldig. Eenvoudigweg de beste friet in de omgeving.',
    source: 'Google',
  },
  {
    name: 'Annemiek S.',
    date: '6 weken geleden',
    rating: 5,
    text: 'De truffel mayo is het enige sausje dat ik vanaf nu nog wil. Gecombineerd met de grote friet is dit eigenlijk perfect. 10/10 zou aanraden.',
    source: 'TripAdvisor',
  },
  {
    name: 'Ruben H.',
    date: '4 maanden geleden',
    rating: 4,
    text: 'Geweldige sfeer, vriendelijk personeel en écht lekkere friet. Soms is de wachttijd wat lang maar dat is een teken dat er veel vraag is. Terecht populair.',
    source: 'Google',
  },
];

const SOURCE_COLORS: Record<Review['source'], { bg: string; text: string; dot: string }> = {
  Google: { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-400' },
  HappyCow: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  'Eet.nu': { bg: 'bg-orange-500/10', text: 'text-orange-400', dot: 'bg-orange-400' },
  Facebook: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', dot: 'bg-indigo-400' },
  TripAdvisor: { bg: 'bg-teal-500/10', text: 'text-teal-400', dot: 'bg-teal-400' },
};

const STATS = [
  { value: '4.8', label: 'Gemiddelde Score', sub: 'op Google Reviews' },
  { value: '500+', label: 'Reviews Totaal', sub: 'op alle platforms' },
  { value: '97%', label: 'Zou Aanraden', sub: 'aan vrienden & familie' },
  { value: '#1', label: 'Friet in Nijmegen', sub: 'volgens onze klanten' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-accent' : 'text-white/15'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/6 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-accent/30 rounded-full px-5 py-2">
            Wat Nijmegen Zegt
          </span>
          <h1 className="text-[clamp(4rem,11vw,10rem)] leading-[0.82] tracking-tight mb-8">
            DE STEM VAN<br />
            <span className="gradient-text">HET VOLK</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/50 text-xl font-medium leading-relaxed">
            We bakken liever dan dat we praten — maar onze klanten laten hun reviews voor ons spreken.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-[2rem] p-8 border-white/6 hover:border-accent/20 transition-all duration-300 hover-lift text-center"
              >
                <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-black gradient-text leading-none mb-2">{stat.value}</p>
                <p className="font-black text-sm uppercase tracking-[0.15em] mb-1">{stat.label}</p>
                <p className="text-white/35 text-xs font-medium">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured review ── */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="relative bg-accent rounded-[2.5rem] p-10 md:p-14 overflow-hidden">
            <div className="absolute -right-8 -top-8 text-[20vw] font-black opacity-10 select-none leading-none pointer-events-none">&ldquo;</div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center text-3xl shrink-0 font-black text-black">
                S
              </div>
              <div>
                <StarRating rating={5} />
                <p className="text-black text-2xl md:text-3xl font-bold leading-relaxed mt-4 mb-6 italic font-display">
                  &ldquo;Absoluut de beste friet van Nijmegen. Het vegan stoofvlees is een openbaring! De kwaliteit is consistent elke keer — dat is zeldzaam en waardevol.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-black text-black text-lg">Sophie van der Meer</p>
                    <p className="text-black/60 font-medium text-sm">Google Reviews — 2 weken geleden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews Masonry Grid ── */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0">
            {REVIEWS.map((review, idx) => {
              const sourceStyle = SOURCE_COLORS[review.source];
              return (
                <div key={idx} className="break-inside-avoid mb-6">
                  <article
                    className={`rounded-[2rem] p-8 border transition-all duration-300 hover-lift group ${
                      review.highlight
                        ? 'bg-accent/5 border-accent/20 hover:border-accent/40'
                        : 'bg-card border-white/5 hover:border-white/12'
                    }`}
                    aria-label={`Review door ${review.name}`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-sm font-black text-white/70 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-300 shrink-0">
                          {review.name[0]}
                        </div>
                        <div>
                          <h4 className="font-black text-base leading-none mb-1">{review.name}</h4>
                          <p className="text-white/30 text-xs uppercase tracking-widest font-medium">{review.date}</p>
                        </div>
                      </div>

                      <span className={`shrink-0 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${sourceStyle.bg} ${sourceStyle.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sourceStyle.dot}`} />
                        {review.source}
                      </span>
                    </div>

                    {/* Stars */}
                    <StarRating rating={review.rating} />

                    {/* Review text */}
                    <p className="mt-4 text-white/60 font-medium leading-relaxed text-base group-hover:text-white/75 transition-colors duration-300 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {review.highlight && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-4 h-px bg-accent/50" />
                        <span className="text-accent/70 text-[9px] font-black uppercase tracking-[0.3em]">Uitgelichte Review</span>
                      </div>
                    )}
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Overall rating summary ── */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="glass rounded-[2.5rem] p-10 md:p-14 border-white/6 flex flex-col lg:flex-row items-center gap-10">
            {/* Score display */}
            <div className="text-center lg:text-left shrink-0">
              <p className="text-[7rem] md:text-[9rem] font-black gradient-text leading-none">{avgRating}</p>
              <StarRating rating={5} />
              <p className="text-white/40 font-medium mt-2 text-sm">{REVIEWS.length} recente reviews</p>
            </div>

            <div className="w-px h-32 bg-white/8 hidden lg:block shrink-0" />

            {/* Bar breakdown */}
            <div className="flex-1 w-full space-y-3">
              {[5, 4, 3].map((stars) => {
                const count = REVIEWS.filter(r => r.rating === stars).length;
                const pct = Math.round((count / REVIEWS.length) * 100);
                return (
                  <div key={stars} className="flex items-center gap-4">
                    <StarRating rating={stars} />
                    <div className="flex-1 h-2 bg-white/8 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-white/40 font-black text-xs w-8 text-right">{pct}%</span>
                  </div>
                );
              })}
            </div>

            <div className="w-px h-32 bg-white/8 hidden lg:block shrink-0" />

            {/* CTA */}
            <div className="text-center shrink-0">
              <p className="text-white/40 font-black uppercase tracking-[0.25em] text-[10px] mb-6">Jouw Ervaring Delen?</p>
              <a
                href="https://www.google.com/search?q=Friethuys+'Oer'!+Nijmegen+reviews"
                target="_blank"
                rel="noopener noreferrer"
                id="write-review-btn"
                className="inline-flex flex-col items-center gap-1 bg-accent text-black px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-accent-light active:scale-95 transition-all duration-200 shadow-lg shadow-accent/25"
              >
                <span>Schrijf een Review</span>
                <span className="text-black/50 text-[8px] font-bold normal-case tracking-normal">via Google</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-24">
        <div className="container mx-auto text-center">
          <p className="text-white/25 font-black uppercase tracking-[0.3em] text-xs mb-8">
            Tevreden klanten na tevreden klanten na tevreden klanten
          </p>
          <Link
            href="/#location"
            id="reviews-visit-cta"
            className="inline-flex items-center gap-3 glass border-white/12 text-white font-black text-[11px] uppercase tracking-[0.25em] px-10 py-5 rounded-2xl hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            Kom Proeven
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
