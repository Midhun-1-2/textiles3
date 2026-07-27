import { Heart, Eye, Star, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { products, formatINR } from '@/data/products';
import { addToCart, toggleWishlist, setQuickView, useShop } from '@/store/useShop';
import { useReveal } from '@/hooks/useReveal';

const filters = ['All', 'Silk Sarees', 'Bridal', 'Banarasi', 'Kanjivaram', 'Chiffon & Georgette', 'Cotton & Handloom'];

const badgeStyles: Record<string, string> = {
  New: 'bg-gold-400 text-wine-900',
  Bestseller: 'bg-wine-600 text-ivory-50',
  Limited: 'bg-ink text-gold-300',
  Bridal: 'bg-blush-500 text-white',
};

export default function FeaturedProducts() {
  const [active, setActive] = useState('All');
  const shop = useShop();
  const { ref, visible } = useReveal();

  const list = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="shop" className="bg-ivory-100 py-20 lg:py-28">
      <div className="container-x" ref={ref}>
        <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-center text-center`}>
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
          {list.map((p) => {
            const liked = shop.wishlist.includes(p.id);
            return (
              <article
                key={p.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-ivory-300/60 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {p.badge && (
                    <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow-soft ${badgeStyles[p.badge]}`}>
                      {p.badge}
                    </span>
                  )}
                  {/* hover actions */}
                  <div className="absolute right-3 top-3 flex flex-col gap-2">
                    <button
                      onClick={() => toggleWishlist(p.id)}
                      aria-label="Add to wishlist"
                      className={`grid h-9 w-9 place-items-center rounded-full backdrop-blur transition-all duration-300 ${
                        liked ? 'bg-wine-600 text-ivory-50' : 'bg-white/80 text-ink/70 hover:bg-white hover:text-wine-600'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => setQuickView(p)}
                      aria-label="Quick view"
                      className="grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white/80 text-ink/70 opacity-0 backdrop-blur transition-all duration-300 hover:bg-white hover:text-wine-600 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(p)}
                    className="absolute inset-x-3 bottom-3 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-wine-800/90 py-2.5 text-sm font-semibold text-ivory-50 opacity-0 backdrop-blur transition-all duration-300 hover:bg-wine-700 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ShoppingBag className="h-4 w-4" /> Add to Bag
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] uppercase tracking-wider text-gold-600">{p.category}</p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-wine-900">{p.name}</h3>
                  <p className="text-xs text-ink/55">{p.fabric}</p>

                  <div className="mt-2 flex items-center gap-1 text-gold-400">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="text-xs font-medium text-ink/70">{p.rating}</span>
                    <span className="text-xs text-ink/40">({p.reviews})</span>
                  </div>

                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <span className="font-serif text-lg font-bold text-wine-800">{formatINR(p.price)}</span>
                      {p.originalPrice && (
                        <span className="ml-2 text-sm text-ink/40 line-through">{formatINR(p.originalPrice)}</span>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {p.colors.map((c, i) => (
                        <span key={i} className="h-3.5 w-3.5 rounded-full ring-1 ring-ivory-300" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#new" className="btn-outline">View all sarees</a>
        </div>
      </div>
    </section>
  );
}
