import { ArrowRight, Phone } from 'lucide-react';
import { company } from '../data/content';
import { useQuote } from '../context/QuoteContext';

const CtaBanner = () => {
  const { requestQuote } = useQuote();

  return (
    <section aria-label="Demande de devis" className="bg-brand-500">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Un projet ? Obtenez votre devis sous 48&nbsp;h.</h2>
          <p className="mt-3 text-lg text-navy-900/75">
            Construction, matériaux ou maintenance : un expert vous répond rapidement, sans engagement.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button onClick={() => requestQuote()} className="btn-dark px-8 py-4 text-base">
            Demander un devis
            <ArrowRight size={18} />
          </button>
          <a
            href={company.phoneHref}
            className="btn border border-navy-900/25 px-8 py-4 text-base text-navy-900 hover:bg-navy-900/5"
          >
            <Phone size={18} />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
