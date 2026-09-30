import { useState } from 'react';
import { ArrowRight, MessageSquareText, Package, Truck, type LucideIcon } from 'lucide-react';
import { productCategories, products } from '../data/content';
import { useQuote } from '../context/QuoteContext';
import SectionHeader from './ui/SectionHeader';

// Shown when a product has no photo yet
const ProductIconTile = ({ icon: Icon = Package }: { icon?: LucideIcon }) => (
  <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/10" />
    <div className="absolute -bottom-16 -left-8 h-48 w-48 rounded-full bg-white/5" />
    <Icon size={72} strokeWidth={1.25} className="relative text-brand-400 transition-transform duration-500 group-hover:scale-110" />
  </div>
);

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const { requestQuote } = useQuote();

  const filteredProducts =
    activeFilter === 'tous' ? products : products.filter((product) => product.category === activeFilter);

  const categoryOf = (id: string) => productCategories.find((cat) => cat.id === id);

  return (
    <section id="produits" className="section bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="Nos produits"
          title="Tout pour construire, équiper et sécuriser"
          description="Matériaux de construction, sanitaire, électricité & solaire, groupes électrogènes, climatisation, anti-incendie et outillage : l'une des plus grandes quincailleries de la RD Congo."
        />

        {/* Filters */}
        <div className="reveal mt-12 flex flex-col gap-4 border-b border-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="no-scrollbar -mx-4 flex min-w-0 gap-1 overflow-x-auto px-4 sm:mx-0 sm:px-0"
            role="tablist"
            aria-label="Catégories de produits"
          >
            {productCategories.map((category) => {
              const isActive = activeFilter === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(category.id)}
                  className={`relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive ? 'text-navy-800' : 'text-slate-500 hover:text-navy-800'
                  }`}
                >
                  {category.label}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-0.5 bg-brand-500 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <p className="hidden shrink-0 whitespace-nowrap pb-3 text-sm text-slate-500 xl:block" aria-live="polite">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="card group flex flex-col overflow-hidden animate-fade-in transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <ProductIconTile icon={categoryOf(product.category)?.icon} />
                )}
                <span className="absolute left-4 top-4 rounded bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy-800 shadow-sm">
                  {categoryOf(product.category)?.label}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{product.description}</p>

                <div className="mt-auto flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
                  <div>
                    <div className="text-xs text-slate-500">Tarif</div>
                    <div className="font-display text-base font-bold text-navy-800">Sur demande</div>
                  </div>
                  <button
                    onClick={() =>
                      requestQuote(
                        'materiaux',
                        `Bonjour, je souhaite un devis pour : ${product.name}.\nQuantité : \nLieu de livraison : `
                      )
                    }
                    className="btn-dark px-4 py-2.5"
                    aria-label={`Demander un devis pour ${product.name}`}
                  >
                    Devis
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="reveal mt-16 overflow-hidden rounded-xl bg-navy-800 text-white">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div className="flex gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-md bg-brand-500 text-navy-900 sm:flex">
                <MessageSquareText size={26} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">Besoin d'un produit spécifique ?</h3>
                <p className="mt-2 max-w-2xl text-slate-300">
                  Nos experts vous conseillent sur les matériaux les plus adaptés à votre projet.
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <Truck size={16} className="text-brand-400" />
                  Livraison sur chantier disponible
                </p>
              </div>
            </div>
            <button onClick={() => requestQuote('materiaux')} className="btn-primary">
              Contactez nos experts
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
