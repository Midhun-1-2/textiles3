import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { newArrivals } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';
import ProductCard from '@/components/ProductCard';

export default function NewArrivals() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { ref, visible } = useReveal();

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="new" className="container-x py-20 lg:py-28">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Just landed</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-wine-900 sm:text-4xl lg:text-5xl">
              New Arrivals
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button onClick={() => scrollBy(-1)} aria-label="Scroll left" className="grid h-11 w-11 place-items-center rounded-full border border-ivory-300 text-ink/70 transition hover:border-gold-300 hover:text-wine-700">
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Scroll right" className="grid h-11 w-11 place-items-center rounded-full border border-ivory-300 text-ink/70 transition hover:border-gold-300 hover:text-wine-700">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide"
      >
        {newArrivals.map((p) => (
          <ProductCard key={p.id} product={p} className="w-72 flex-none snap-start sm:w-80" showRating={false} />
        ))}
      </div>
    </section>
  );
}
