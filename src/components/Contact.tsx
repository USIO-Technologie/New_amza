import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Avenue de la Construction\n75000 Paris, France'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89\n+33 6 12 34 56 78'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@newamza.fr\ndevis@newamza.fr'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 8h00 - 18h00\nSam: 8h00 - 12h00'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Un projet en tête ? Besoin d'un devis ? Notre équipe est là pour vous accompagner 
              et répondre à toutes vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-light rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-accent mb-6">
                  Demande de devis gratuit
                </h3>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                          placeholder="01 23 45 67 89"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                          Sujet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                        >
                          <option value="">Choisissez un sujet</option>
                          <option value="construction">Construction neuve</option>
                          <option value="renovation">Rénovation</option>
                          <option value="materiaux">Vente de matériaux</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                        placeholder="Décrivez votre projet..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                    <h4 className="text-xl font-semibold text-accent mb-2">
                      Message envoyé avec succès !
                    </h4>
                    <p className="text-secondary">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8 animate-on-scroll">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-light rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-2">{info.title}</h4>
                        <p className="text-secondary whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="bg-light rounded-lg p-6">
                <h4 className="font-semibold text-accent mb-4">Notre localisation</h4>
                <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-primary mx-auto mb-2" size={32} />
                    <p className="text-secondary">
                      Carte Google Maps
                    </p>
                    <p className="text-sm text-secondary mt-2">
                      123 Avenue de la Construction<br />
                      75000 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                <h4 className="font-semibold text-accent mb-2">
                  Urgence 24h/7j
                </h4>
                <p className="text-secondary mb-4">
                  Pour toute urgence en dehors des heures d'ouverture
                </p>
                <a
                  href="tel:+33612345678"
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                >
                  <Phone size={20} />
                  <span>+33 6 12 34 56 78</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;