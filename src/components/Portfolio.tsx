import { useState } from 'react';
import { Calendar, Clock, Ruler } from 'lucide-react';
import { projects } from '../data/content';
import SectionHeader from './ui/SectionHeader';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const categories = ['Tous', ...Array.from(new Set(projects.map((project) => project.category)))];
  const filteredProjects =
    activeFilter === 'Tous' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="realisations" className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Nos réalisations"
            title="Des projets qui parlent pour nous"
            description="Découvrez quelques-uns de nos projets les plus marquants, témoins de notre expertise et de notre savoir-faire."
          />
          <div className="reveal flex flex-wrap gap-2 lg:max-w-md lg:justify-end" role="group" aria-label="Filtrer les réalisations">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                aria-pressed={activeFilter === category}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === category
                    ? 'bg-navy-800 text-white'
                    : 'bg-surface text-slate-600 hover:bg-navy-50 hover:text-navy-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[300px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const featured = activeFilter === 'Tous' && index === 0;
            return (
              <article
                key={project.id}
                tabIndex={0}
                className={`group relative overflow-hidden rounded-xl bg-navy-900 animate-fade-in ${
                  featured ? 'sm:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-block rounded bg-brand-500 px-2.5 py-1 text-xs font-bold text-navy-900">
                    {project.category}
                  </span>
                  <h3 className={`mt-3 font-bold text-white ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-200">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-brand-400" />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-brand-400" />
                          {project.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Ruler size={14} className="text-brand-400" />
                          {project.surface}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
