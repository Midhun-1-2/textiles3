import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-ivory-100 py-20 lg:py-28">
      <div ref={ref} className={`container-x ${visible ? 'is-visible' : ''} reveal`}>
        <div className="text-center">
          <p className="eyebrow">Loved by thousands</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-wine-900 sm:text-4xl lg:text-5xl">
            Words from our patrons
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="relative flex flex-col rounded-2xl border border-ivory-300/60 bg-white p-6 shadow-soft transition hover:shadow-card"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Quote className="h-8 w-8 text-gold-300" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-300" loading="lazy" />
                <div>
                  <figcaption className="font-serif text-base font-semibold text-wine-900">{t.name}</figcaption>
                  <p className="text-xs text-ink/55">{t.location}</p>
                </div>
                <div className="ml-auto flex text-gold-400">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
