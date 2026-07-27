import { useState } from 'react';
import { products } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';
import ProductCard from '@/components/ProductCard';

const filters = ['All', 'Silk Sarees', 'Bridal', 'Banarasi', 'Kanjivaram', 'Chiffon & Georgette', 'Cotton & Handloom'];

export default function FeaturedProducts() {
  const [active, setActive] = useState('All');
  const { ref, visible } = useReveal();

  const list = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="shop" className="bg-ivory-100 py-20 lg:py-28">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-center text-center`}>
          <p className="eyebrow">Curated for you</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-wine-900 sm:text-4xl lg:text-5xl">
            Featured Sarees
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/65">
            Handpicked weaves from our master artisans — limited pieces, made to be treasured.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === f
                  ? 'bg-wine-700 text-ivory-50 shadow-soft'
                  : 'border border-ivory-300 bg-white/70 text-ink/70 hover:border-gold-300 hover:text-wine-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#new" className="btn-outline">View all sarees</a>
        </div>
      </div>
    </section>
  );
}
