import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Chantier de construction"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-slide-up">
            Construisons l'avenir
            <span className="text-primary block">ensemble</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Votre partenaire de confiance pour la construction, la vente de matériaux 
            et la maintenance depuis plus de 20 ans
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <span>Nous contacter</span>
              <ArrowRight size={20} />
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#apropos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent transition-all duration-200 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              En savoir plus
            </button>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: CheckCircle, text: "Plus de 500 projets réalisés" },
              { icon: CheckCircle, text: "20 ans d'expérience" },
              { icon: CheckCircle, text: "Équipe certifiée" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-3 text-lg animate-slide-up"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <item.icon className="text-primary" size={24} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-sm">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;