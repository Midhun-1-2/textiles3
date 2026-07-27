import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const { ref, visible } = useReveal();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail('');
  };

  return (
    <section className="container-x py-20 lg:py-28">
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-wine-800 to-wine-900 px-6 py-14 text-center text-ivory-100 shadow-card sm:px-12 lg:px-20 ${
          visible ? 'is-visible' : ''
        } reveal`}
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blush-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-xl">
          <span className="grid h-14 w-14 mx-auto place-items-center rounded-full bg-gold-400 text-wine-900">
            <Mail className="h-7 w-7" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold sm:text-4xl">
            Join the Niya circle
          </h2>
          <p className="mt-3 text-ivory-200/80">
            Be the first to know about new collections, private sales and styling notes.
            Enjoy <span className="text-gold-300 font-medium">10% off</span> your first saree.
          </p>

          {done ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400/20 px-5 py-3 text-gold-200 animate-scale-in">
              <Check className="h-5 w-5" />
              You&apos;re in! Check your inbox for the code.
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full flex-1 rounded-full border border-ivory-300/30 bg-ivory-50/10 px-5 py-3 text-sm text-ivory-50 placeholder:text-ivory-200/60 transition focus:border-gold-300 focus:outline-none focus:ring-2 focus:ring-gold-300/40"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-ivory-200/50">
            No spam, only beauty. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
