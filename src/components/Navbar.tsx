import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cartCount, openCart, useShop } from '@/store/useShop';
import logo from '@/assets/logo.png';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Shop', href: '#shop' },
  { label: 'New Arrivals', href: '#new' },
  { label: 'Bridal', href: '#bridal' },
  { label: 'Our Story', href: '#story' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shop = useShop();
  const count = cartCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory-50/90 shadow-soft backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex h-20 items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-2" aria-label="Niya Collections home">
            <Logo />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold tracking-wide text-wine-800">
                Niya
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600">
                Collections
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-ink/75 transition-colors hover:text-wine-700"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <button className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-ivory-200 hover:text-wine-700 sm:flex" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="relative hidden h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-ivory-200 hover:text-wine-700 sm:flex" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              {shop.wishlist.length > 0 && (
                <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-wine-600 text-[10px] font-bold text-ivory-50 grid place-items-center">
                  {shop.wishlist.length}
                </span>
              )}
            </button>
            <button
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink/80 transition hover:bg-ivory-200 hover:text-wine-700"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 grid h-4 w-4 place-items-center rounded-full bg-gold-400 text-[10px] font-bold text-wine-900">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink/80 transition hover:bg-ivory-200 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-ivory-50 shadow-card transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ivory-300 px-6 py-5">
            <span className="font-serif text-lg font-bold text-wine-800">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full hover:bg-ivory-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition hover:bg-ivory-200 hover:text-wine-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-ivory-300 p-4">
            <div className="flex items-center gap-2 px-4 py-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ivory-300 py-2.5 text-sm font-medium text-ink/70">
                <Search className="h-4 w-4" /> Search
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ivory-300 py-2.5 text-sm font-medium text-ink/70">
                <Heart className="h-4 w-4" /> Wishlist
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

function Logo() {
  return <img src={logo} alt="Niya Collections" className="h-11 w-11 shadow-soft" />;
}
