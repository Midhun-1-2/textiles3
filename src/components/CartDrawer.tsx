import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useEffect } from 'react';
import { useShop, removeFromCart, updateQty, cartTotal, closeCart } from '@/store/useShop';
import { formatINR } from '@/data/products';

export default function CartDrawer() {
  const shop = useShop();
  const total = cartTotal();

  useEffect(() => {
    document.body.style.overflow = shop.isCartOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [shop.isCartOpen]);

  return (
    <div className={`fixed inset-0 z-[70] ${shop.isCartOpen ? '' : 'pointer-events-none'}`} aria-hidden={!shop.isCartOpen}>
      <div
        className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${shop.isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeCart}
/>
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory-50 shadow-card transition-transform duration-400 ${
          shop.isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ivory-300 px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-wine-700" />
            <h2 className="font-serif text-lg font-bold text-wine-900">Your Bag</h2>
            <span className="rounded-full bg-wine-100 px-2 py-0.5 text-xs font-medium text-wine-700">
              {shop.cart.length}
            </span>
          </div>
          <button onClick={closeCart} aria-label="Close cart" className="grid h-9 w-9 place-items-center rounded-full text-ink/70 hover:bg-ivory-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        {shop.cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-ivory-200 text-wine-400">
              <ShoppingBag className="h-9 w-9" />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold text-wine-900">Your bag is empty</p>
              <p className="mt-1 text-sm text-ink/55">Discover weaves worth treasuring.</p>
            </div>
            <button onClick={closeCart} className="btn-gold">Start Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {shop.cart.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-2xl border border-ivory-300/60 bg-white p-3">
                  <img src={item.image} alt={item.name} className="h-24 w-20 flex-none rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-sm font-semibold text-wine-900 leading-tight">{item.name}</h3>
                        <p className="text-xs text-ink/50">{item.fabric}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} aria-label="Remove" className="grid h-7 w-7 place-items-center rounded-full text-ink/40 hover:bg-blush-100 hover:text-wine-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full border border-ivory-300">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease" className="grid h-7 w-7 place-items-center text-ink/70 hover:text-wine-700">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase" className="grid h-7 w-7 place-items-center text-ink/70 hover:text-wine-700">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-serif text-base font-bold text-wine-800">{formatINR(item.price * item.qty)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ivory-300 px-6 py-5">
              <div className="flex items-center justify-between text-sm text-ink/70">
                <span>Subtotal</span>
                <span className="font-serif text-lg font-bold text-wine-900">{formatINR(total)}</span>
              </div>
              <p className="mt-1 text-xs text-ink/50">Shipping & taxes calculated at checkout.</p>
              <button className="btn-gold mt-4 w-full">Proceed to Checkout</button>
              <button onClick={closeCart} className="mt-2 w-full text-center text-sm font-medium text-ink/60 hover:text-wine-700">
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
