import { CheckCircle2 } from 'lucide-react';
import { company, images, values } from '../data/content';
import SectionHeader from './ui/SectionHeader';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - company.since;

  return (
    <section id="apropos" className="section bg-surface">
      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}
          <div className="reveal relative mx-auto w-full max-w-lg lg:max-w-none">
            <img
              src={images.about}
              alt="Équipe New Amza sur un chantier"
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-lift sm:aspect-[5/5] lg:aspect-[4/5]"
              loading="lazy"
            />
            <img
              src={images.aboutSecondary}
              alt="Entrepôt de matériaux"
              className="absolute -bottom-10 -right-4 hidden w-56 rounded-xl border-8 border-surface object-cover shadow-lift sm:block lg:-right-10"
              loading="lazy"
            />
            <div className="absolute -left-4 top-8 rounded-xl bg-navy-800 p-6 text-white shadow-lift lg:-left-8">
              <div className="font-display text-5xl font-extrabold text-brand-400">{yearsOfExperience}</div>
              <div className="mt-1 text-sm font-medium leading-snug text-slate-300">
                années
                <br />
                d'expérience
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="À propos de New Amza"
              title="Notre histoire, votre réussite"
              description={`Depuis ${company.since}, nous accompagnons particuliers et professionnels dans leurs projets de construction, rénovation et maintenance avec expertise et passion.`}
            />

            <div className="reveal mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
                Fondée par une équipe de professionnels passionnés, New Amza s'est imposée comme un acteur majeur
                de la quincaillerie et de la construction en RD Congo. Notre approche combine savoir-faire traditionnel et
                innovations technologiques.
              </p>
              <p>
                Depuis notre magasin de la Gombe, nous fournissons matériaux, sanitaire, électricité, énergie solaire,
                groupes électrogènes, climatisation et matériel anti-incendie, et nous accompagnons vos chantiers de
                construction et de maintenance.
              </p>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="reveal flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-800 text-brand-400">
                    <value.icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-8">
              <a href="#services" className="btn-dark">
                Découvrir nos services
              </a>
              <span className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckCircle2 size={18} className="text-brand-600" />
                Accompagnement de A à Z
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
