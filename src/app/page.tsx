import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Clients from '@/components/Clients';
import Studio from '@/components/Studio';
import Manifesto from '@/components/Manifesto';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Clients />
        <Studio />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
