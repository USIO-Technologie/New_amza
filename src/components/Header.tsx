import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { company, navItems } from '../data/content';
import { useQuote } from '../context/QuoteContext';
import Logo from './ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#accueil');
  const { requestQuote } = useQuote();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav item of the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const solid = isScrolled || isMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div
        className={`hidden overflow-hidden bg-navy-950 text-slate-300 transition-all duration-300 md:block ${
          isScrolled ? 'max-h-0' : 'max-h-12'
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={company.phoneHref} className="flex items-center gap-2 transition-colors hover:text-brand-400">
              <Phone size={14} className="text-brand-400" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 transition-colors hover:text-brand-400">
              <Mail size={14} className="text-brand-400" />
              {company.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-400" />
            {company.hours}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          solid ? 'bg-white shadow-[0_1px_0_rgba(15,23,42,0.08)]' : 'bg-transparent'
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <a href="#accueil" onClick={() => setIsMenuOpen(false)} aria-label={`${company.name} - Accueil`}>
            <Logo light={!solid} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    solid
                      ? isActive ? 'text-navy-800' : 'text-slate-600 hover:text-navy-800'
                      : isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 xl:inset-x-4 h-0.5 origin-left bg-brand-500 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={company.phoneHref}
              className={`hidden items-center gap-2 whitespace-nowrap text-sm font-semibold 2xl:flex ${solid ? 'text-navy-800' : 'text-white'}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
                <Phone size={16} />
              </span>
              {company.phone}
            </a>
            <button onClick={() => requestQuote()} className="btn-primary hidden whitespace-nowrap py-2.5 md:inline-flex">
              Devis gratuit
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`rounded-md p-2 lg:hidden ${solid ? 'text-navy-800' : 'text-white'}`}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto bg-white lg:hidden">
          <nav className="container-x flex flex-col py-6" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between border-b border-slate-100 py-4 font-display text-lg font-semibold ${
                  activeSection === item.href ? 'text-navy-800' : 'text-slate-600'
                }`}
              >
                {item.label}
                <ArrowRight size={18} className="text-brand-500" />
              </a>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                requestQuote();
              }}
              className="btn-primary mt-8"
            >
              Demander un devis gratuit
            </button>
            <a href={company.phoneHref} className="btn-outline mt-3">
              <Phone size={16} />
              {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
