'use client';
import { useState, useEffect } from 'react';

export default function Lightbox({ images, openIdx, onClose }) {
  const [idx, setIdx] = useState(openIdx);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (openIdx !== null && openIdx !== undefined) {
      setIdx(openIdx);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, [openIdx]);

  const close = () => { setIsOpen(false); document.body.style.overflow = ''; onClose(); };
  const next = () => setIdx(i => (i + 1) % images.length);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lightbox open" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-kf-gold transition-all" onClick={close}>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-kf-gold transition-all" onClick={prev}>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-kf-gold transition-all" onClick={next}>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
      <img className="lightbox-img" src={images[idx]} alt="" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wide">{idx + 1} / {images.length}</div>
    </div>
  );
}
