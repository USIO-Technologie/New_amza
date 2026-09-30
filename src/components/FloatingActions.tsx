import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { company } from '../data/content';

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href="#accueil"
        aria-label="Retour en haut de page"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-800 shadow-lift ring-1 ring-slate-900/10 transition-all duration-300 hover:bg-navy-800 hover:text-white ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp size={20} />
      </a>
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous écrire sur WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={company.phoneHref}
        aria-label={`Appeler le ${company.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-navy-900 shadow-lift transition-transform hover:scale-105 md:hidden"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingActions;
