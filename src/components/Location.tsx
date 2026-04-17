export default function Location() {
  const MAPS_EMBED =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.7623!2d5.8607!3d51.8417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c70804d6fbd701%3A0x82ade85e5a23f00f!2sZiekerstraat%201%2C%206511%20LH%20Nijmegen!5e0!3m2!1snl!2snl!4v1680000000000!5m2!1snl!2snl';

  const hours = [
    { days: 'Maandag — Woensdag', time: '12:00 – 19:00' },
    { days: 'Donderdag — Zaterdag', time: '12:00 – 21:00' },
    { days: 'Zondag', time: '12:00 – 20:00' },
  ];

  return (
    <section id="location" className="py-20 bg-[#060606] border-t border-white/5 relative md:overflow-visible">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/6 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-5 border border-accent/30 rounded-full px-4 py-1.5">
            Vind Ons
          </span>
          <h2 className="text-[clamp(3rem,7vw,6rem)] leading-[0.84] tracking-tight">
            BEZOEK<br />
            <span className="text-accent">Friethuys &apos;Oer&apos;!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address card */}
            <div className="glass rounded-[2rem] p-8 border-white/8 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center shrink-0">
                  {/* Location pin SVG */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M11 1C7.686 1 5 3.686 5 7C5 11.5 11 21 11 21C11 21 17 11.5 17 7C17 3.686 14.314 1 11 1Z" stroke="#F5C842" strokeWidth="1.6" strokeLinejoin="round"/>
                    <circle cx="11" cy="7" r="2.5" fill="#F5C842"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Adres</h4>
                  <p className="text-2xl font-black leading-tight">Ziekerstraat 1</p>
                  <p className="text-white/50 font-medium mt-1">6511 LH Nijmegen</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Friethuys+Oer+Ziekerstraat+1+Nijmegen"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="group w-full flex items-center justify-center gap-3 bg-accent text-black py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-accent-light active:scale-95 transition-all duration-200 shadow-lg shadow-accent/20"
              >
                Routebeschrijving
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Hours card */}
            <div className="glass rounded-[2rem] p-8 border-white/8 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center shrink-0">
                  {/* Clock SVG */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="11" cy="11" r="9" stroke="#F5C842" strokeWidth="1.6"/>
                    <path d="M11 6V11L14.5 13.5" stroke="#F5C842" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-accent">Openingstijden</h4>
              </div>
              <div className="space-y-4">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-white/50 font-medium text-sm">{h.days}</span>
                    <span className="font-black text-white text-sm shrink-0">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="glass rounded-[2rem] p-8 pb-14 border-white/8 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center shrink-0">
                  {/* Phone SVG */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6.5 2H9L10.5 6L8.5 7.5C9.5 9.5 12 12 14 13L15.5 11L19.5 12.5V15C19.5 17 17.5 19 15.5 19C8 19 2.5 12.5 2.5 6.5C2.5 4.5 4.5 2 6.5 2Z" stroke="#F5C842" strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-accent">Contact</h4>
              </div>
              <a
                href="tel:+31242036258"
                className="text-2xl font-black hover:text-accent transition-colors duration-200"
              >
                +31 24 203 6258
              </a>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="lg:col-span-3 relative rounded-[2.5rem] overflow-hidden border border-white/8 min-h-[380px] shadow-2xl hover:border-accent/20 transition-all duration-300 group">
            <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/3 transition-colors duration-500" />
            <iframe
              title="Friethuys Oer op Google Maps"
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '380px',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay label */}
            <div className="absolute top-5 left-5 bg-black/95 border border-white/15 rounded-xl px-4 py-2.5 pointer-events-none z-10 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Live Kaart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
