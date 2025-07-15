import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Résidence Les Jardins',
      category: 'Construction neuve',
      description: 'Ensemble résidentiel de 45 logements avec espaces verts et parkings',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '18 mois',
      year: '2023',
      surface: '3 500 m²'
    },
    {
      id: 2,
      title: 'Centre Commercial Horizon',
      category: 'Bâtiment commercial',
      description: 'Construction d\'un centre commercial moderne avec 25 boutiques',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '24 mois',
      year: '2022',
      surface: '5 200 m²'
    },
    {
      id: 3,
      title: 'Villa Contemporaine',
      category: 'Maison individuelle',
      description: 'Villa moderne avec piscine et aménagements paysagers',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '12 mois',
      year: '2023',
      surface: '250 m²'
    },
    {
      id: 4,
      title: 'Bureaux Tech Park',
      category: 'Bâtiment tertiaire',
      description: 'Immeuble de bureaux écologique avec certification HQE',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '20 mois',
      year: '2022',
      surface: '2 800 m²'
    },
    {
      id: 5,
      title: 'École Primaire Moderne',
      category: 'Bâtiment public',
      description: 'Construction d\'une école primaire avec équipements sportifs',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '15 mois',
      year: '2023',
      surface: '1 800 m²'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets les plus marquants, 
              témoins de notre expertise et de notre savoir-faire
            </p>
          </div>

          {/* Main Project Display */}
          <div className="relative mb-12 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold">
                  {projects[currentProject].category}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-accent mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-lg text-secondary mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-light rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {projects[currentProject].year}
                    </div>
                    <div className="text-sm text-secondary">Année</div>
                  </div>
                  <div className="text-center p-4 bg-light rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {projects[currentProject].duration}
                    </div>
                    <div className="text-sm text-secondary">Durée</div>
                  </div>
                  <div className="text-center p-4 bg-light rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {projects[currentProject].surface}
                    </div>
                    <div className="text-sm text-secondary">Surface</div>
                  </div>
                </div>

                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2">
                  <span>Voir le projet</span>
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-accent p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-accent p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project Thumbnails */}
          <div className="flex justify-center space-x-4 mb-12 animate-on-scroll">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToProject(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentProject
                    ? 'ring-4 ring-primary shadow-lg'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center animate-on-scroll">
            <div className="p-6 bg-light rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary">Projets réalisés</div>
            </div>
            <div className="p-6 bg-light rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-secondary">Projets livrés</div>
            </div>
            <div className="p-6 bg-light rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-secondary">Clients satisfaits</div>
            </div>
            <div className="p-6 bg-light rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-secondary">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;