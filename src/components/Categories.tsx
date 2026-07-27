import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

export default function Categories() {
  const { ref, visible } = useReveal();
  return (
    <section id="collections" className="hidden container-x py-20 sm:block lg:py-28">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center">
          <p className="eyebrow">Browse by weave</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-wine-900 sm:text-4xl lg:text-5xl">
            Shop by Category
          </h2>
          <OrnateDivider />
          <p className="mx-auto mt-4 max-w-xl text-ink/65">
            From everyday cottons to bridal silks — find the weave that speaks to your moment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <a
              key={c.id}
              href="#shop"
              className={`group relative block overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:shadow-card ${
                i === 0 ? 'col-span-2 md:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-wine-900/85 via-wine-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-ivory-50">
                <h3 className="font-serif text-lg font-semibold leading-tight">{c.name}</h3>
                <p className="mt-0.5 text-xs text-ivory-200/90">{c.tagline}</p>
                <span className="mt-2 inline-flex translate-y-2 items-center gap-1 text-xs font-medium text-gold-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Discover <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrnateDivider() {
  return (
    <div className="divider-ornate mt-5">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-300" />
      <span className="font-serif text-lg">❖</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-300" />
    </div>
  );
}
