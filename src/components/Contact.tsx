import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { company, quoteSubjects } from '../data/content';
import { useQuote } from '../context/QuoteContext';
import SectionHeader from './ui/SectionHeader';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { prefill } = useQuote();

  // Apply subject / message sent from a "Demander un devis" button elsewhere on the page
  useEffect(() => {
    if (prefill.nonce === 0) return;
    setIsSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      subject: prefill.subject || prev.subject,
      message: prefill.message || prev.message,
    }));
  }, [prefill]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(emptyForm);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      lines: [company.address, company.city, company.country],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      lines: [company.phone],
      href: company.phoneHref,
    },
    {
      icon: Mail,
      title: 'Email',
      lines: [company.email],
      href: `mailto:${company.email}`,
    },
    {
      icon: Clock,
      title: 'Horaires',
      lines: company.hoursLines,
    },
  ];

  return (
    <section id="contact" className="section bg-surface">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Un projet en tête ? Besoin d'un devis ? Notre équipe est là pour vous accompagner et répondre à toutes vos questions."
        />

        <div className="reveal mt-14 grid overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-slate-900/5 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="p-6 sm:p-10 lg:col-span-3">
            <h3 className="text-2xl font-bold">Demande de devis gratuit</h3>
            <p className="mt-2 text-sm text-slate-500">Réponse sous 48 h ouvrées. Les champs marqués * sont obligatoires.</p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="field"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="field-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="field"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="field-label">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="field"
                      placeholder="+243 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="field-label">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="field"
                    >
                      <option value="">Choisissez un sujet</option>
                      {quoteSubjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field resize-y"
                    placeholder="Décrivez votre projet : nature des travaux, surface, délais, lieu..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-4 text-base sm:w-auto sm:px-10">
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-navy-900/30 border-t-navy-900" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="mt-8 flex flex-col items-center rounded-xl bg-surface px-6 py-14 text-center" role="status">
                <CheckCircle2 className="text-green-600" size={56} />
                <h4 className="mt-4 text-xl font-bold">Message envoyé avec succès !</h4>
                <p className="mt-2 text-slate-600">Nous vous répondrons dans les plus brefs délais.</p>
                <button onClick={() => setIsSubmitted(false)} className="btn-outline mt-6">
                  Envoyer une autre demande
                </button>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col bg-navy-900 p-6 text-white sm:p-10 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white">Nos coordonnées</h3>
            <ul className="mt-8 space-y-6">
              {contactInfo.map((info) => (
                <li key={info.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-400">
                    <info.icon size={20} />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{info.title}</div>
                    {info.lines.map((line) =>
                      info.href ? (
                        <a key={line} href={info.href} className="block text-slate-100 transition-colors hover:text-brand-400">
                          {line}
                        </a>
                      ) : (
                        <div key={line} className="text-slate-100">
                          {line}
                        </div>
                      )
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp */}
            <div className="mt-8 rounded-xl border border-brand-500/30 bg-brand-500/10 p-5">
              <div className="flex items-center gap-2 font-display font-bold text-white">
                <MessageCircle size={18} className="text-brand-400" />
                Réponse rapide sur WhatsApp
              </div>
              <p className="mt-1 text-sm text-slate-300">
                Envoyez-nous votre liste de matériaux ou une photo de votre besoin.
              </p>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-brand-400 transition-colors hover:text-brand-300"
              >
                <MessageCircle size={18} />
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="reveal mt-8 overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-900/5">
          <iframe
            title="Localisation New Amza"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
            className="h-80 w-full border-0 grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
