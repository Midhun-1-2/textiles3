import { Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const spotlightImg = 'https://images.pexels.com/photos/1345352/pexels-photo-1345352.jpeg?auto=compress&cs=tinysrgb&w=1100&h=1400&fit=crop';

const features = [
  'Hand-embroidered zardozi & zari work',
  'Pure Katan silk, loomed in Banaras',
  'Includes matching unstitched blouse',
  'Complimentary gift packaging',
];

export default function CollectionSpotlight() {
  const { ref, visible } = useReveal();
  return (
    <section id="bridal" className="relative overflow-hidden bg-wine-900 py-20 text-ivory-100 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blush-500/10 blur-3xl" />

      <div ref={ref} className={`container-x grid items-center gap-12 lg:grid-cols-2 ${visible ? 'is-visible' : ''} reveal`}>
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] rounded-br-[5rem] shadow-card ring-1 ring-gold-500/20">
            <img src={spotlightImg} alt="Bridal saree collection" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -right-4 bottom-8 rounded-2xl bg-ivory-50 px-5 py-4 text-ink shadow-card sm:-right-8">
            <p className="font-serif text-3xl font-bold text-wine-800">₹52k</p>
            <p className="text-xs uppercase tracking-wider text-ink/60">Starting at</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow text-gold-300">The Bridal Edit</p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            For the day you&apos;ll remember forever
          </h2>
          <p className="mt-5 max-w-lg text-ivory-200/80">
            Our bridal sarees are woven over weeks by master artisans, finished with
            real zari and intricate zardozi. Each piece is a heirloom in the making —
            crafted to be passed down, just like your love story.
          </p>

          <ul className="mt-7 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-ivory-100/90">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gold-400 text-wine-900">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#shop" className="btn-gold">Shop Bridal Collection</a>
            <a href="#story" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300/40 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-gold-200 transition hover:bg-gold-400/10">
              Book a fitting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
