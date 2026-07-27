import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-wine-800 text-ivory-50 shadow-card transition-all hover:bg-wine-700 hover:shadow-glow animate-scale-in"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
