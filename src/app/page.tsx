import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import About from '@/components/About';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Fixed ambient page-glow — provides visual continuity across the whole page */}
      <div className="page-glow" aria-hidden="true" />

      <Navbar />
      <Hero />

      {/* FeaturedMenu — header reveals up, cards stagger in sequence */}
      <ScrollReveal propagate threshold={0.06}>
        <FeaturedMenu />
      </ScrollReveal>

      {/* About — image slides from left, text from right (propagate triggers inner reveal-* children) */}
      <ScrollReveal propagate threshold={0.06}>
        <About />
      </ScrollReveal>

      {/* Location — info cards stagger in, map scales up */}
      <ScrollReveal propagate threshold={0.06}>
        <Location />
      </ScrollReveal>

      {/* Footer fades up gently */}
      <ScrollReveal variant="up" delay={1} threshold={0.04}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
