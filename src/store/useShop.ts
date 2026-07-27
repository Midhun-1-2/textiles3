import { useSyncExternalStore } from 'react';
import type { Product } from '@/data/products';

export type CartItem = Product & { qty: number; color: string };

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  quickView: Product | null;
};

let state: ShopState = {
  cart: [],
  wishlist: [],
  isCartOpen: false,
  isWishlistOpen: false,
  quickView: null,
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function set(partial: Partial<ShopState>) {
  state = { ...state, ...partial };
  emit();
}

export function addToCart(p: Product, color?: string) {
  const existing = state.cart.find((i) => i.id === p.id);
  if (existing) {
    set({
      cart: state.cart.map((i) =>
        i.id === p.id ? { ...i, qty: i.qty + 1, ...(color ? { color } : {}) } : i,
      ),
    });
  } else {
    set({ cart: [...state.cart, { ...p, qty: 1, color: color ?? p.colors[0] }] });
  }
}

export function removeFromCart(id: string) {
  set({ cart: state.cart.filter((i) => i.id !== id) });
}

export function updateQty(id: string, qty: number) {
  set({ cart: state.cart.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)) });
}

export function updateCartColor(id: string, color: string) {
  set({ cart: state.cart.map((i) => (i.id === id ? { ...i, color } : i)) });
}

export function toggleWishlist(id: string) {
  set({
    wishlist: state.wishlist.includes(id)
      ? state.wishlist.filter((w) => w !== id)
      : [...state.wishlist, id],
  });
}

export function openCart() {
  set({ isCartOpen: true });
}
export function closeCart() {
  set({ isCartOpen: false });
}
export function openWishlist() {
  set({ isWishlistOpen: true });
}
export function closeWishlist() {
  set({ isWishlistOpen: false });
}
export function setQuickView(p: Product | null) {
  set({ quickView: p });
}

export const getSnapshot = () => state;

// selectors
export const cartCount = () => state.cart.reduce((n, i) => n + i.qty, 0);
export const cartTotal = () => state.cart.reduce((n, i) => n + i.qty * i.price, 0);

export function useShop() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    getSnapshot,
    getSnapshot,
  );
}
