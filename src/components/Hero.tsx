import { ArrowRight, ShieldCheck } from 'lucide-react';
import { images, services } from '../data/content';
import { useQuote } from '../context/QuoteContext';

const Hero = () => {
  const { requestQuote } = useQuote();

  return (
    <section id="accueil" className="relative flex min-h-[100svh] flex-col bg-navy-950 lg:min-h-[820px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images.hero}
          alt="Grues sur un chantier de construction"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex flex-1 items-center pb-16 pt-32 lg:pb-40 lg:pt-40">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-light animate-slide-up">Kinshasa · RD Congo</p>

          <h1
            className="mt-6 text-4xl font-extrabold leading-[1.05] text-white animate-slide-up sm:text-5xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Construisons l'avenir <span className="text-brand-400">ensemble.</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 animate-slide-up sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            L'une des plus grandes quincailleries de la RD Congo : matériaux de construction, sanitaire,
            électricité & solaire, groupes électrogènes, climatisation et anti-incendie.
          </p>

          <div className="mt-10 flex flex-col gap-4 animate-slide-up sm:flex-row" style={{ animationDelay: '0.3s' }}>
            <button onClick={() => requestQuote()} className="btn-primary px-8 py-4 text-base">
              Demander un devis gratuit
              <ArrowRight size={18} />
            </button>
            <a href="#realisations" className="btn-outline-light px-8 py-4 text-base">
              Voir nos réalisations
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            {['Gombe, Kinshasa', 'Large stock disponible', 'Devis sous 48 h'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-brand-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Business pillars */}
      <div className="container-x relative z-20 pb-12 lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-1/2 lg:pb-0">
        <div className="grid gap-px overflow-hidden rounded-xl bg-slate-200 shadow-lift sm:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#services"
              className="group flex items-start gap-4 bg-white p-6 transition-colors hover:bg-navy-800 lg:p-8"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-800 transition-colors group-hover:bg-brand-500 group-hover:text-navy-900">
                <service.icon size={24} />
              </span>
              <span>
                <span className="block text-xs font-bold text-brand-600 group-hover:text-brand-400">
                  0{index + 1}
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-ink group-hover:text-white">
                  {service.title}
                </span>
                <span className="mt-1 block text-sm text-slate-500 group-hover:text-slate-300">
                  {service.subtitle}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
