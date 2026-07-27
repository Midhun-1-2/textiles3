import { X, Star, ShoppingBag, Heart, Check, Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useShop, setQuickView, addToCart, toggleWishlist } from '@/store/useShop';
import { formatINR } from '@/data/products';

export default function QuickView() {
  const shop = useShop();
  const p = shop.quickView;
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState('');

  useEffect(() => {
    if (p) {
      setQty(1);
      setColor(p.colors[0]);
    }
  }, [p]);

  useEffect(() => {
    document.body.style.overflow = p ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [p]);

  if (!p) return null;
  const liked = shop.wishlist.includes(p.id);

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto" aria-modal="true" role="dialog">
      <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm animate-fade-in" onClick={() => setQuickView(null)} />
      <div className="relative flex min-h-dvh items-center justify-center sm:p-4">
        <div className="relative grid w-full overflow-hidden bg-ivory-50 shadow-card animate-scale-in sm:max-w-4xl sm:rounded-3xl md:grid-cols-2">
          <button
            onClick={() => setQuickView(null)}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-ivory-50/80 text-ink/70 backdrop-blur hover:bg-ivory-200 hover:text-wine-700"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative h-80 sm:aspect-[3/4] sm:h-auto md:aspect-auto md:h-full">
            <img src={p.image} alt={p.name} className="h-full w-full object-cover object-top" />
          </div>

          <div className="flex flex-col p-4 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gold-600">{p.category}</p>
            <h2 className="mt-1 font-serif text-xl font-bold text-wine-900 sm:text-2xl md:text-3xl">{p.name}</h2>
            <p className="mt-1 text-sm text-ink/55">{p.fabric}</p>

            <div className="mt-2 flex items-center gap-2 sm:mt-3">
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? 'fill-current' : 'text-ivory-300'}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-ink/70">{p.rating}</span>
              <span className="text-sm text-ink/40">· {p.reviews} reviews</span>
            </div>

            <div className="mt-3 flex items-end gap-3 sm:mt-4">
              <span className="font-serif text-2xl font-bold text-wine-800 sm:text-3xl">{formatINR(p.price)}</span>
              {p.originalPrice && (
                <>
                  <span className="text-base text-ink/40 line-through">{formatINR(p.originalPrice)}</span>
                  <span className="rounded-full bg-blush-100 px-2.5 py-0.5 text-xs font-semibold text-blush-600">
                    {Math.round((1 - p.price / p.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>

            <p className="mt-5 hidden text-sm leading-relaxed text-ink/70 sm:block">
              A meticulously handwoven {p.fabric.toLowerCase()} saree featuring traditional motifs
              and fine zari detailing. Includes an unstitched blouse piece. Dry clean only.
            </p>

            {/* color */}
            <div className="mt-4 sm:mt-5">
              <p className="text-xs font-medium uppercase tracking-wider text-ink/60">Colour</p>
              <div className="mt-2 flex gap-2">
                {p.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    aria-label="Select colour"
                    aria-pressed={color === c}
                    className={`h-7 w-7 rounded-full ring-2 transition sm:h-8 sm:w-8 ${color === c ? 'ring-gold-400 ring-offset-2 ring-offset-ivory-50' : 'ring-ivory-300'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* qty */}
            <div className="mt-4 sm:mt-5">
              <p className="text-xs font-medium uppercase tracking-wider text-ink/60">Quantity</p>
              <div className="mt-2 flex items-center gap-1 rounded-full border border-ivory-300 bg-white w-fit">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease" className="grid h-8 w-8 place-items-center text-ink/70 hover:text-wine-700 sm:h-9 sm:w-9">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase" className="grid h-8 w-8 place-items-center text-ink/70 hover:text-wine-700 sm:h-9 sm:w-9">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <ul className="mt-5 hidden space-y-1.5 text-sm text-ink/65 sm:block">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold-600" /> Free shipping across India</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold-600" /> 7-day easy returns</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold-600" /> Silk-mark certified</li>
            </ul>

            <div className="mt-5 flex gap-3 pb-1 sm:mt-7">
              <button
                onClick={() => {
                  for (let i = 0; i < qty; i++) addToCart(p, color);
                  setQuickView(null);
                }}
                className="btn-gold flex-1"
              >
                <ShoppingBag className="h-4 w-4" /> Add to Bag
              </button>
              <button
                onClick={() => toggleWishlist(p.id)}
                aria-label="Wishlist"
                className={`grid h-12 w-12 flex-none place-items-center rounded-full border transition ${liked ? 'border-wine-600 bg-wine-600 text-ivory-50' : 'border-ivory-300 text-ink/70 hover:border-wine-400 hover:text-wine-600'}`}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
