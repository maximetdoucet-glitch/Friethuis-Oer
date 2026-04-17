import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import About from '@/components/About';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen relative" id="top">
      {/* Ambient drifting background light */}
      <div className="page-glow" />

      <Navbar />
      
      <section className="relative z-10 transition-colors duration-1000">
        <Hero />
      </section>

      <ScrollReveal variant="up" className="section-bleed" threshold={0.05}>
        <FeaturedMenu />
      </ScrollReveal>

      <ScrollReveal variant="left" className="section-bleed" threshold={0.1}>
        <About />
      </ScrollReveal>

      <ScrollReveal variant="right" className="section-bleed" threshold={0.1}>
        <Location />
      </ScrollReveal>

      <ScrollReveal variant="fade" threshold={0.2}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
