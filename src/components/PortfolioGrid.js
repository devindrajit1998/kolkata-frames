'use client';
import { useState } from 'react';
import Lightbox from './Lightbox';

export default function PortfolioGrid({ items, categories }) {
  const [filter, setFilter] = useState('all');
  const [lbIdx, setLbIdx] = useState(null);

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter);
  const lbImages = filtered.map(i => i.image);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-8 sm:mb-10">
        {categories.map(c => (
          <button key={c} onClick={() => setFilter(c)} className={'relative text-xs sm:text-sm font-medium capitalize transition-colors ' + (filter === c ? 'text-kf-gold' : 'text-kf-muted hover:text-kf-text')} style={filter === c ? { borderBottom: '2px solid #c5a059', paddingBottom: '6px' } : { paddingBottom: '6px' }}>
            {c === 'all' ? 'All' : c.replace('-', ' ')}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {filtered.map((item, i) => (
          <div key={item.id} className={'portfolio-item rounded-2xl overflow-hidden ' + (i === 0 ? 'row-span-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[520px]' : 'h-40 sm:h-52 lg:h-64') + (i === 3 ? ' col-span-2' : '')} onClick={() => setLbIdx(i)}>
            <img src={item.thumb} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
            <div className="portfolio-overlay">
              <div className="portfolio-zoom w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      {lbIdx !== null && <Lightbox images={lbImages} openIdx={lbIdx} onClose={() => setLbIdx(null)} />}
    </>
  );
}
