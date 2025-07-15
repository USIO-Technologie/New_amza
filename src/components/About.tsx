import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous nous engageons à livrer des projets de la plus haute qualité"
    },
    {
      icon: Users,
      title: "Équipe experte",
      description: "Notre équipe qualifiée maîtrise tous les aspects du métier"
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Respect des délais et engagement sur les planning établis"
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Conformité aux normes et sécurité sur tous nos chantiers"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              À propos de New Amza
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Depuis 2003, nous accompagnons particuliers et professionnels dans leurs projets 
              de construction, renovation et maintenance avec expertise et passion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-serif font-semibold text-accent mb-6">
                Notre histoire, votre réussite
              </h3>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                Fondée par une équipe de professionnels passionnés, New Amza s'est imposée 
                comme un acteur majeur du secteur de la construction dans la région. Notre approche 
                combine savoir-faire traditionnel et innovations technologiques.
              </p>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                Nous proposons une gamme complète de services : construction neuve, rénovation, 
                vente de matériaux de qualité et maintenance préventive. Chaque projet est unique 
                et mérite une attention particulière.
              </p>
              <div className="flex items-center space-x-6 text-primary font-semibold">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-secondary">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm text-secondary">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-secondary">Clients satisfaits</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Équipe New Amza"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-serif font-semibold text-accent mb-2">
                  {value.title}
                </h4>
                <p className="text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;