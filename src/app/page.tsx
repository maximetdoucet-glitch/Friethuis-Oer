import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import About from '@/components/About';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <FeaturedMenu />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <Location />
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
