import { ArrowRight, Star } from 'lucide-react';

const heroImg = 'https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&fit=crop';
const heroImg2 = 'https://images.pexels.com/photos/1999895/pexels-photo-1999895.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory-100 pt-20">
      {/* decorative blooms */}
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-blush-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl" />

      <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Text */}
        <div className="relative z-10 max-w-xl animate-fade-up">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="h-px w-8 bg-gold-400" />
            Handwoven since 1998
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] text-wine-900 sm:text-5xl lg:text-6xl">
            Drape Yourself in
            <span className="block italic text-wine-600">Timeless Elegance</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
            Discover handpicked sarees from the looms of Banaras, Kanchipuram and
            beyond — each weave a story of craftsmanship, meant for the woman who
            carries tradition with grace.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#shop" className="btn-gold group">
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#bridal" className="btn-outline">
              Bridal Edit
            </a>
          </div>

          {/* trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Stat value="25k+" label="Happy Women" />
            <span className="hidden h-8 w-px bg-ivory-300 sm:block" />
            <Stat value="120+" label="Master Weavers" />
            <span className="hidden h-8 w-px bg-ivory-300 sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink/70">4.9 / 5</span>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="relative z-10 animate-scale-in">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="overflow-hidden rounded-[2rem] rounded-tl-[5rem] shadow-card ring-1 ring-ivory-300">
              <img
                src={heroImg}
                alt="Woman wearing an elegant silk saree"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-40 overflow-hidden rounded-2xl border-4 border-ivory-50 shadow-card sm:block lg:w-48">
              <img
                src={heroImg2}
                alt="Detail of a Banarasi saree"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* floating badge */}
            <div className="absolute -right-3 top-8 animate-float rounded-2xl bg-ivory-50/95 px-4 py-3 shadow-card backdrop-blur sm:-right-6">
              <p className="text-xs uppercase tracking-widest text-gold-600">New Drop</p>
              <p className="font-serif text-lg font-bold text-wine-800">Festive 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <Marquee />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-2xl font-bold text-wine-800">{value}</p>
      <p className="text-xs uppercase tracking-wider text-ink/60">{label}</p>
    </div>
  );
}

function Marquee() {
  const items = ['Banarasi Silk', 'Kanjivaram', 'Patola', 'Chanderi', 'Organza', 'Tussar', 'Chiffon', 'Mysore Silk'];
  const row = [...items, ...items];
  return (
    <div className="border-y border-ivory-300/70 bg-wine-800 py-4 text-ivory-100">
      <div className="flex w-max animate-marquee gap-12 pr-12">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap font-serif text-sm tracking-wide">
            <span className="text-gold-300">✦</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
