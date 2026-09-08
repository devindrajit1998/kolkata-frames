'use client';
import { useEffect, useState } from 'react';

export default function HeroSlider({ slides }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (i) => setIdx((i + slides.length) % slides.length);

  return (
    <div className="absolute inset-0">
      {slides.map((s, i) => (
        <div key={i} className={'hero-slide ' + (i === idx ? 'active' : '')}>
          <img src={s.image} alt={s.alt} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="absolute bottom-10 left-4 sm:left-6 lg:left-10 z-10 flex items-center gap-3 sm:gap-4">
        <button onClick={() => go(idx - 1)} className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-kf-gold hover:border-kf-gold transition-all">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <button onClick={() => go(idx + 1)} className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-kf-gold hover:border-kf-gold transition-all">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <div className="flex gap-2 ml-1 sm:ml-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)} className={'rounded-full transition-all ' + (i === idx ? 'w-8 h-1 bg-kf-gold' : 'w-1 h-1 bg-white/40')}></button>
          ))}
        </div>
      </div>
    </div>
  );
}
