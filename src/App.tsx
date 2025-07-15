import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { observeIntersection } from './utils/animations';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    observeIntersection();
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;