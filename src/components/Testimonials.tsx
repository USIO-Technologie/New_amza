import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Propriétaire',
      company: 'Résidence Les Jardins',
      content: 'ConstructPro a réalisé la construction de ma maison avec un professionnalisme remarquable. Respect des délais, qualité irréprochable et équipe très à l\'écoute. Je recommande vivement !',
      content: 'New Amza a réalisé la construction de ma maison avec un professionnalisme remarquable. Respect des délais, qualité irréprochable et équipe très à l\'écoute. Je recommande vivement !',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Pierre Martin',
      role: 'Directeur',
      company: 'Entreprise Martin & Fils',
      content: 'Partenaire fiable depuis 5 ans, New Amza nous fournit des matériaux de qualité et assure un service impeccable. Leur expertise technique est un véritable atout pour nos projets.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Sophie Lefebvre',
      role: 'Architecte',
      company: 'Cabinet d\'Architecture Moderne',
      content: 'La collaboration avec New Amza est toujours un plaisir. Leur compréhension des enjeux architecturaux et leur capacité d\'adaptation font d\'eux des partenaires de choix.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Jean-Luc Moreau',
      role: 'Gestionnaire',
      company: 'Copropriété Horizon',
      content: 'Pour la maintenance de notre copropriété, New Amza assure un service réactif et de qualité. Interventions rapides et tarifs compétitifs, que demander de plus ?',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Amélie Rousseau',
      role: 'Promoteur',
      company: 'Immobilier Développement',
      content: 'Un partenaire de confiance qui nous accompagne sur tous nos projets de promotion immobilière. Qualité, respect des délais et prix maîtrisés sont au rendez-vous.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Découvrez ce que nos clients pensent de nos services et de notre expertise
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative mb-12 animate-on-scroll">
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Quote className="text-primary" size={48} />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-secondary text-center mb-8 leading-relaxed font-light">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-center">
                  <div className="font-serif font-semibold text-accent text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-secondary">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary text-accent hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary text-accent hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mb-12 animate-on-scroll">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                  index === currentTestimonial ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="flex items-center space-x-2 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-secondary mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-serif font-semibold text-accent">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">4.9/5</div>
                  <div className="text-sm text-secondary">Note moyenne</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">200+</div>
                  <div className="text-sm text-secondary">Avis clients</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-secondary">Recommandations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;