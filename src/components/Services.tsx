import React from 'react';
import { Home, Package, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Construction",
      subtitle: "Bâtiment neuf et rénovation",
      description: "Maisons individuelles, bâtiments commerciaux, extensions et rénovations complètes. Nous gérons votre projet de A à Z avec expertise et professionnalisme.",
      features: ["Gros œuvre", "Second œuvre", "Finitions", "Coordination métiers"],
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Package,
      title: "Vente de matériaux",
      subtitle: "Fournitures de qualité",
      description: "Large gamme de matériaux de construction sélectionnés auprès des meilleurs fournisseurs. Conseil personnalisé et livraison sur chantier.",
      features: ["Béton et mortier", "Bois et charpente", "Isolation", "Outillage professionnel"],
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      subtitle: "Entretien et réparation",
      description: "Services de maintenance préventive et curative pour préserver vos investissements. Interventions rapides et efficaces.",
      features: ["Maintenance préventive", "Dépannage d'urgence", "Réparations", "Entretien régulier"],
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Trois pôles d'expertise pour répondre à tous vos besoins en construction, 
              matériaux et maintenance
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-accent">{service.title}</h3>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2">
                    <span>En savoir plus</span>
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full h-96 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;