import { Heart, Eye, Star, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/data/products';
import { formatINR } from '@/data/products';
import { addToCart, removeFromCart, updateQty, toggleWishlist, setQuickView, openCart, useShop } from '@/store/useShop';

const badgeStyles: Record<string, string> = {
  New: 'bg-gold-400 text-wine-900',
  Bestseller: 'bg-wine-600 text-ivory-50',
  Limited: 'bg-ink text-gold-300',
  Bridal: 'bg-blush-500 text-white',
};

type ProductCardProps = {
  product: Product;
  className?: string;
  showRating?: boolean;
};

export default function ProductCard({ product: p, className = '', showRating = true }: ProductCardProps) {
  const shop = useShop();
  const liked = shop.wishlist.includes(p.id);
  const cartItem = shop.cart.find((i) => i.id === p.id);
  const qty = cartItem?.qty ?? 0;
  const [color, setColor] = useState(p.colors[0]);

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-ivory-300/60 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card ${className}`}
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
        {qty === 0 ? (
          <button
            onClick={() => addToCart(p, color)}
            className="absolute inset-x-3 bottom-3 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-wine-800/90 py-2.5 text-sm font-semibold text-ivory-50 opacity-0 backdrop-blur transition-all duration-300 hover:bg-wine-700 group-hover:translate-y-0 group-hover:opacity-100"
          >
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
                onClick={() => addToCart(p, color)}
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

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] uppercase tracking-wider text-gold-600">{p.category}</p>
        <h3 className="mt-1 font-serif text-lg font-semibold text-wine-900">{p.name}</h3>
        <p className="text-xs text-ink/55">{p.fabric}</p>

        {showRating && (
          <div className="mt-2 flex items-center gap-1 text-gold-400">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-medium text-ink/70">{p.rating}</span>
            <span className="text-xs text-ink/40">({p.reviews})</span>
          </div>
        )}

        <div className="mt-3 flex items-end justify-between gap-2">
          <div>
            <span className="font-serif text-lg font-bold text-wine-800">{formatINR(p.price)}</span>
            {p.originalPrice && (
              <span className="ml-2 text-sm text-ink/40 line-through">{formatINR(p.originalPrice)}</span>
            )}
          </div>
          <div className="flex gap-1.5">
            {p.colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                aria-label={`Select colour`}
                aria-pressed={color === c}
                className={`h-5 w-5 flex-none rounded-full ring-2 ring-offset-2 ring-offset-white transition ${
                  color === c ? 'ring-wine-700 scale-110' : 'ring-ivory-300 hover:ring-gold-300'
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
