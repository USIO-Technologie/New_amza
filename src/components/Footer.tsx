import { Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { company, navItems, services } from '../data/content';
import Logo from './ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Conditions générales', href: '#' },
    { name: 'Plan du site', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: company.facebook, name: 'Facebook' },
    { icon: MessageCircle, href: company.whatsappHref, name: 'WhatsApp' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        {/* Company Info */}
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm leading-relaxed">
            L'une des plus grandes quincailleries de la RD Congo : matériaux de construction, sanitaire, électricité
            &amp; solaire, groupes électrogènes, climatisation et anti-incendie.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-slate-300 transition-colors hover:bg-brand-500 hover:text-navy-900"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
          <ul className="mt-6 space-y-3">
            {navItems.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-brand-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Nos services</h4>
          <ul className="mt-6 space-y-3">
            {services.map((service) => (
              <li key={service.title}>
                <a href="#services" className="transition-colors hover:text-brand-400">
                  {service.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#produits" className="transition-colors hover:text-brand-400">
                Catalogue produits
              </a>
            </li>
            <li>
              <a href="#contact" className="font-semibold text-brand-400 transition-colors hover:text-brand-300">
                Devis gratuit →
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-400" />
              <span>
                {company.address}
                <br />
                {company.city}
                <br />
                RD Congo
              </span>
            </li>
            <li>
              <a href={company.phoneHref} className="flex gap-3 transition-colors hover:text-brand-400">
                <Phone size={18} className="shrink-0 text-brand-400" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-3 transition-colors hover:text-brand-400">
                <Mail size={18} className="shrink-0 text-brand-400" />
                {company.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 rounded-lg bg-white/5 p-4 text-sm">
            <div className="font-semibold text-white">Horaires d'ouverture</div>
            <div className="mt-2 space-y-1">
              {company.hoursLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <div>
            © {currentYear} {company.legalName}. Tous droits réservés.
          </div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="transition-colors hover:text-brand-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
