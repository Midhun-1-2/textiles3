import { useSyncExternalStore } from 'react';
import type { Product } from '@/data/products';

export type CartItem = Product & { qty: number };

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  quickView: Product | null;
};

const state: ShopState = {
  cart: [],
  wishlist: [],
  isCartOpen: false,
  quickView: null,
};

const listeners = new Set<() => void>();
let version = 0;

function emit() {
  version += 1;
  listeners.forEach((l) => l());
}

function set(partial: Partial<ShopState>) {
  Object.assign(state, partial);
  emit();
}

export function addToCart(p: Product) {
  const existing = state.cart.find((i) => i.id === p.id);
  if (existing) {
    set({ cart: state.cart.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)) });
  } else {
    set({ cart: [...state.cart, { ...p, qty: 1 }] });
  }
  set({ isCartOpen: true });
}

export function removeFromCart(id: string) {
  set({ cart: state.cart.filter((i) => i.id !== id) });
}

export function updateQty(id: string, qty: number) {
  set({ cart: state.cart.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)) });
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
