import { Truck, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On all orders above ₹2,000, across India' },
  { icon: ShieldCheck, title: 'Authentic Weaves', desc: 'Silk-mark & handloom-certified guarantee' },
  { icon: RefreshCw, title: 'Easy 7-Day Returns', desc: 'No-questions-asked return policy' },
  { icon: Sparkles, title: 'Gift Wrapping', desc: 'Complimentary premium packaging' },
];

export default function Features() {
  const { ref, visible } = useReveal();
  return (
    <section className="border-y border-ivory-300/70 bg-ivory-100">
      <div ref={ref} className={`container-x grid grid-cols-1 gap-4 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-4 lg:gap-6 lg:py-20 ${visible ? 'is-visible' : ''} reveal`}>
        {features.map((f, i) => (
          <div
            key={f.title}
            className="card-surface flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-card"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-wine-100 text-wine-700">
              <f.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-serif text-base font-semibold text-wine-900">{f.title}</h3>
              <p className="mt-0.5 text-sm text-ink/60">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
