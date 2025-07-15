import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous les produits' },
    { id: 'beton', label: 'Béton & Mortier' },
    { id: 'bois', label: 'Bois & Charpente' },
    { id: 'isolation', label: 'Isolation' },
    { id: 'outillage', label: 'Outillage' },
    { id: 'finition', label: 'Finition' }
  ];

  const products = [
    {
      id: 1,
      name: 'Béton prêt à l\'emploi',
      category: 'beton',
      description: 'Béton haute qualité pour tous vos projets',
      price: 'À partir de 85€/m³',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Mortier de façade',
      category: 'beton',
      description: 'Mortier résistant aux intempéries',
      price: 'À partir de 12€/sac',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Poutrelles en bois',
      category: 'bois',
      description: 'Bois massif traité pour charpentes',
      price: 'À partir de 35€/m',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Panneaux OSB',
      category: 'bois',
      description: 'Panneaux structurels multi-usage',
      price: 'À partir de 22€/m²',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Laine de roche',
      category: 'isolation',
      description: 'Isolation thermique et acoustique',
      price: 'À partir de 8€/m²',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Polystyrène expansé',
      category: 'isolation',
      description: 'Isolation thermique performante',
      price: 'À partir de 6€/m²',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Perceuse à percussion',
      category: 'outillage',
      description: 'Outillage professionnel haute performance',
      price: 'À partir de 185€',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Scie circulaire',
      category: 'outillage',
      description: 'Coupe précise pour tous matériaux',
      price: 'À partir de 125€',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 9,
      name: 'Peinture façade',
      category: 'finition',
      description: 'Peinture haute résistance',
      price: 'À partir de 28€/L',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const filteredProducts = activeFilter === 'tous' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="produits" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              Nos Produits
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Découvrez notre large gamme de matériaux et outils de construction 
              sélectionnés pour leur qualité et leur durabilité
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
            <div className="flex items-center space-x-2 text-secondary mb-4">
              <Filter size={20} />
              <span className="font-medium">Filtrer par catégorie:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-secondary hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === product.category)?.label}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-accent mb-2">
                    {product.name}
                  </h3>
                  <p className="text-secondary mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">
                Besoin d'un produit spécifique ?
              </h3>
              <p className="text-secondary mb-6">
                Notre équipe est là pour vous conseiller et vous accompagner dans le choix 
                des matériaux les plus adaptés à votre projet.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                Contactez nos experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;