import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/content';
import SectionHeader from './ui/SectionHeader';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play slider, paused on hover / focus
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  // Three cards visible on desktop, starting at the current one
  const visible = [0, 1, 2].map((offset) => testimonials[(currentTestimonial + offset) % testimonials.length]);

  return (
    <section id="temoignages" className="section overflow-hidden bg-navy-900">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            light
            eyebrow="Témoignages clients"
            title="Ce que nos clients disent de nous"
            description="Particuliers, entreprises et architectes nous font confiance pour leurs projets."
          />
          <div className="reveal flex items-center gap-6">
            <div className="text-white">
              <div className="flex items-center gap-2">
                <span className="font-display text-4xl font-extrabold">4.9</span>
                <span className="text-slate-400">/ 5</span>
              </div>
              <div className="mt-1 flex gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} className="fill-brand-400 text-brand-400" />
                ))}
              </div>
              <div className="mt-1 text-xs text-slate-400">Plus de 200 avis clients</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Témoignage précédent"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-900"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Témoignage suivant"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-900"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          aria-live="polite"
        >
          {visible.map((testimonial, index) => (
            <figure
              key={`${testimonial.id}-${currentTestimonial}`}
              className={`flex flex-col rounded-xl bg-white p-8 ${
                index === 1 ? 'hidden md:flex' : index === 2 ? 'hidden lg:flex' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label={`Note : ${testimonial.rating} sur 5`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      className={starIndex < testimonial.rating ? 'fill-brand-500 text-brand-500' : 'text-slate-300'}
                    />
                  ))}
                </div>
                <Quote size={36} className="text-navy-100" />
              </div>

              <blockquote className="mt-6 flex-1 leading-relaxed text-slate-700">« {testimonial.content} »</blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 font-display font-bold text-brand-400"
                >
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <div className="font-display font-bold text-ink">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Afficher le témoignage de ${testimonial.name}`}
              aria-current={index === currentTestimonial}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'w-8 bg-brand-500' : 'w-4 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
