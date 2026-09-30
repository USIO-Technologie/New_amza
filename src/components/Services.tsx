import { ArrowRight, Check } from 'lucide-react';
import { services } from '../data/content';
import { useQuote } from '../context/QuoteContext';
import SectionHeader from './ui/SectionHeader';

const Services = () => {
  const { requestQuote } = useQuote();

  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Nos services"
            title="Trois pôles d'expertise, un seul interlocuteur"
            description="Pour répondre à tous vos besoins en construction, matériaux et maintenance."
          />
          <button onClick={() => requestQuote()} className="btn-outline reveal shrink-0 self-start lg:self-auto">
            Parler de votre projet
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card reveal group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lift"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                </div>
                <span className="absolute bottom-0 left-6 flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-md bg-brand-500 text-navy-900 shadow-lg">
                  <service.icon size={26} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-10">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{service.subtitle}</p>
                <h3 className="mt-2 text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="shrink-0 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => requestQuote(service.subject)}
                  className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-navy-800 transition-colors hover:text-brand-600"
                >
                  Demander un devis
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
