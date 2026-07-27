import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const cols = [
  {
    title: 'Shop',
    links: ['Silk Sarees', 'Bridal Collection', 'Banarasi', 'Kanjivaram', 'New Arrivals'],
  },
  {
    title: 'Help',
    links: ['Track Order', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQs'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Master Weavers', 'Sustainability', 'Press', 'Careers'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory-200">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-5">
        {/* brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Niya Collections" className="h-11 w-11" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold text-ivory-50">Niya</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400">Collections</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-ivory-300/70">
            Handwoven sarees crafted by India&apos;s finest artisans. Bringing heritage
            weaves to the modern woman, since 1998.
          </p>
          <div className="mt-6 space-y-2 text-sm text-ivory-300/70">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold-400" /> 24 Weaver&apos;s Lane, Banaras, UP 221001</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold-400" /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold-400" /> hello@niyacollections.in</p>
          </div>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full border border-ivory-300/20 text-ivory-200 transition hover:border-gold-400 hover:bg-gold-400 hover:text-wine-900">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-serif text-base font-semibold text-gold-300">{c.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="group inline-flex items-center gap-1 text-sm text-ivory-300/70 transition hover:text-gold-300">
                    <span>{l}</span>
                    <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ivory-300/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory-300/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Niya Collections. Crafted with love in India.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="hover:text-gold-300">Privacy</a>
            <a href="#" className="hover:text-gold-300">Terms</a>
            <a href="#" className="hover:text-gold-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
