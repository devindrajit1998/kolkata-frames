'use client';
import { useState, useEffect } from 'react';

export default function TestimonialSlider({ testimonials }) {
  const [idx, setIdx] = useState(0);
  const n = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  const go = (i) => setIdx((i + n) % n);

  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="testimonial-track" style={{ transform: 'translateX(-' + idx * 100 + '%)' }}>
          {testimonials.map((t, i) => (
            <div key={t.id} className="testimonial-slide">
              <span className="font-serif text-6xl sm:text-7xl text-kf-gold/30 leading-none block mb-2">&quot;</span>
              <p className="font-serif italic text-base sm:text-lg text-kf-text leading-relaxed">{t.text}</p>
              <p className="text-sm font-semibold text-kf-gold mt-4">&mdash; {t.name}, {t.location}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <button onClick={() => go(idx - 1)} className="w-12 h-12 rounded-full border-2 border-kf-text/20 flex items-center justify-center hover:bg-kf-gold hover:border-kf-gold hover:text-white transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <button onClick={() => go(idx + 1)} className="w-12 h-12 rounded-full border-2 border-kf-text/20 flex items-center justify-center hover:bg-kf-gold hover:border-kf-gold hover:text-white transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => go(i)} className={'rounded-full transition-all ' + (i === idx ? 'w-8 h-2.5 bg-kf-gold' : 'w-2.5 h-2.5 bg-kf-text/20')}></button>
          ))}
        </div>
        <div className="flex gap-1 ml-2">
          {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 text-kf-gold" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
        </div>
      </div>
    </div>
  );
}
