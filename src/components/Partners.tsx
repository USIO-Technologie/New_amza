import { BadgeCheck } from 'lucide-react';
import { commitments, productCategories } from '../data/content';

const Partners = () => (
  <section aria-label="Nos univers produits" className="border-y border-slate-200 bg-surface py-14">
    <div className="container-x">
      <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        Nos univers produits · Tout sous un même toit
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {productCategories
          .filter((category) => category.icon)
          .map((category) => {
            const Icon = category.icon!;
            return (
              <li key={category.id}>
                <a
                  href="#produits"
                  className="group flex h-full flex-col items-center gap-3 rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-900/5 transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-50 text-navy-800 transition-colors group-hover:bg-brand-500 group-hover:text-navy-900">
                    <Icon size={24} />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy-900">{category.label}</span>
                </a>
              </li>
            );
          })}
      </ul>

      <ul className="mt-10 flex flex-wrap justify-center gap-3 border-t border-slate-200 pt-10">
        {commitments.map((commitment) => (
          <li
            key={commitment}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy-800 shadow-sm ring-1 ring-slate-900/5"
          >
            <BadgeCheck size={18} className="text-brand-600" />
            {commitment}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Partners;
