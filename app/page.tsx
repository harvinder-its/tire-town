import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
