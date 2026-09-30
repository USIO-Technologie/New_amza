import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { QuoteProvider } from './context/QuoteContext';
import { observeIntersection } from './utils/animations';

function App() {
  useEffect(() => observeIntersection(), []);

  return (
    <QuoteProvider>
      <div className="min-h-screen animate-fade-in">
        <Header />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Products />
          <Portfolio />
          <Partners />
          <Testimonials />
          <CtaBanner />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </QuoteProvider>
  );
}

export default App;
