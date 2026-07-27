import { X, Heart, ShoppingBag, Check, Trash2 } from 'lucide-react';
import { useEffect } from 'react';
import { useShop, toggleWishlist, addToCart, closeWishlist } from '@/store/useShop';
import { products, newArrivals, formatINR, type Product } from '@/data/products';

const allProducts: Product[] = [...products, ...newArrivals];

export default function WishlistDrawer() {
  const shop = useShop();
  const items = shop.wishlist
    .map((id) => allProducts.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  useEffect(() => {
    document.body.style.overflow = shop.isWishlistOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [shop.isWishlistOpen]);

  return (
    <div className={`fixed inset-0 z-[70] ${shop.isWishlistOpen ? '' : 'pointer-events-none'}`} aria-hidden={!shop.isWishlistOpen}>
      <div
        className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          shop.isWishlistOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeWishlist}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory-50 shadow-card transition-transform duration-400 ${
          shop.isWishlistOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ivory-300 px-6 py-5">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-wine-700" />
            <h2 className="font-serif text-lg font-bold text-wine-900">Your Wishlist</h2>
            <span className="rounded-full bg-wine-100 px-2 py-0.5 text-xs font-medium text-wine-700">
              {items.length}
            </span>
          </div>
          <button onClick={closeWishlist} aria-label="Close wishlist" className="grid h-9 w-9 place-items-center rounded-full text-ink/70 hover:bg-ivory-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-ivory-200 text-wine-400">
              <Heart className="h-9 w-9" />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold text-wine-900">Your wishlist is empty</p>
              <p className="mt-1 text-sm text-ink/55">Save weaves you love for later.</p>
            </div>
            <button onClick={closeWishlist} className="btn-gold">Start Shopping</button>
          </div>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
            {items.map((item) => {
              const inCart = shop.cart.some((c) => c.id === item.id);
              return (
                <div key={item.id} className="flex gap-4 rounded-2xl border border-ivory-300/60 bg-white p-3">
                  <img src={item.image} alt={item.name} className="h-24 w-20 flex-none rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-sm font-semibold text-wine-900 leading-tight">{item.name}</h3>
                        <p className="text-xs text-ink/50">{item.fabric}</p>
                      </div>
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        aria-label="Remove from wishlist"
                        className="grid h-7 w-7 place-items-center rounded-full text-ink/40 hover:bg-blush-100 hover:text-wine-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-serif text-base font-bold text-wine-800">{formatINR(item.price)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          inCart
                            ? 'bg-ivory-200 text-wine-700 hover:bg-ivory-300'
                            : 'bg-wine-800 text-ivory-50 hover:bg-wine-700'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="h-3.5 w-3.5" /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="h-3.5 w-3.5" /> Add to Bag
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </aside>
    </div>
  );
}
