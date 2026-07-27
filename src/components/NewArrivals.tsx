import { ArrowRight, ShoppingBag, Heart, Eye, Minus, Plus } from 'lucide-react';
import { useRef } from 'react';
import { newArrivals, formatINR } from '@/data/products';
import { addToCart, removeFromCart, updateQty, toggleWishlist, setQuickView, openCart, useShop } from '@/store/useShop';
import { useReveal } from '@/hooks/useReveal';

export default function NewArrivals() {
  const trackRef = useRef<HTMLDivElement>(null);
  const shop = useShop();
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
        {newArrivals.map((p) => {
          const liked = shop.wishlist.includes(p.id);
          const qty = shop.cart.find((i) => i.id === p.id)?.qty ?? 0;
          return (
            <article
              key={p.id}
              className="group relative w-72 flex-none snap-start overflow-hidden rounded-2xl border border-ivory-300/60 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card sm:w-80"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-wine-900">New</span>
                <div className="absolute right-3 top-3 flex flex-col gap-2">
                  <button onClick={() => toggleWishlist(p.id)} aria-label="Wishlist" className={`grid h-9 w-9 place-items-center rounded-full backdrop-blur transition ${liked ? 'bg-wine-600 text-ivory-50' : 'bg-white/80 text-ink/70 hover:text-wine-600'}`}>
                    <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                  </button>
                  <button onClick={() => setQuickView(p)} aria-label="Quick view" className="grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink/70 backdrop-blur transition hover:text-wine-600">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
                {qty === 0 ? (
                  <button onClick={() => addToCart(p)} className="absolute inset-x-3 bottom-3 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-wine-800/90 py-2.5 text-sm font-semibold text-ivory-50 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ShoppingBag className="h-4 w-4" /> Add to Bag
                  </button>
                ) : (
                  <div className="absolute inset-x-3 bottom-3 flex translate-y-4 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex flex-1 items-center justify-between rounded-full bg-wine-800/90 py-1.5 pl-1.5 pr-1.5 backdrop-blur">
                      <button
                        onClick={() => (qty <= 1 ? removeFromCart(p.id) : updateQty(p.id, qty - 1))}
                        aria-label="Decrease quantity"
                        className="grid h-8 w-8 place-items-center rounded-full text-ivory-50 transition hover:bg-wine-700"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="text-sm font-semibold text-ivory-50">{qty}</span>
                      <button
                        onClick={() => addToCart(p)}
                        aria-label="Increase quantity"
                        className="grid h-8 w-8 place-items-center rounded-full text-ivory-50 transition hover:bg-wine-700"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={openCart}
                      aria-label="View cart"
                      className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white/90 text-wine-800 backdrop-blur transition hover:bg-white"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-[11px] uppercase tracking-wider text-gold-600">{p.category}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-wine-900">{p.name}</h3>
                <p className="text-xs text-ink/55">{p.fabric}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  {p.colors.map((c, i) => (
                    <span key={i} className="h-3.5 w-3.5 rounded-full ring-1 ring-ivory-300" style={{ backgroundColor: c }} />
                  ))}
                  <span className="ml-auto font-serif text-lg font-bold text-wine-800">{formatINR(p.price)}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
