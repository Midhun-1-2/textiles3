import { LayoutGrid, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { categories } from '@/data/products';

export default function CategoryQuickNav() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!show && !open) return null;

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Browse categories"
        className="fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-wine-800 text-ivory-50 shadow-card transition-all hover:bg-wine-700 animate-scale-in"
      >
        <LayoutGrid className="h-5 w-5" />
      </button>

      <div className={`fixed inset-0 z-[65] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 rounded-t-3xl bg-ivory-50 p-5 pb-8 shadow-card transition-transform duration-400 ${
            open ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-ivory-300" />
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-serif text-lg font-semibold text-wine-900">Shop by Category</h3>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="grid h-8 w-8 place-items-center rounded-full hover:bg-ivory-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-x-3 gap-y-5">
            {categories.map((c) => (
              <a
                key={c.id}
                href="#shop"
                onClick={() => setOpen(false)}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold-300/70 shadow-soft">
                  <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
                </span>
                <span className="text-[11px] font-medium leading-tight text-ink/80">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
