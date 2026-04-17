import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import About from '@/components/About';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative" id="top">
      {/* Ambient drifting background light */}
      <div className="page-glow" />

      <Navbar />
      
      <section className="relative z-10 transition-colors duration-1000">
        <Hero />
      </section>

      <FeaturedMenu />
      <About />
      <Location />
      <Footer />
    </main>
  );
}
