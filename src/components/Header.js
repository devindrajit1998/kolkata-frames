'use client';

export default function Header() {
  const links = [
    { label: 'Home', href: '/' }, { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' }, { label: 'Portfolio', href: '/portfolio' },
    { label: 'Packages', href: '/packages' }, { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' },
  ];
  return (
    <header id="siteHeader" className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 sm:gap-3 text-white magnetic">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-kf-gold/20 backdrop-blur-sm flex items-center justify-center border border-kf-gold/40">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-base sm:text-xl font-bold tracking-wide">Kolkata Frames</div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-gray-300 hidden sm:block">Capturing Love & Emotions</div>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-white">
          {links.map(l => <li key={l.href}><a href={l.href} className="nav-link hover:text-kf-gold transition-colors">{l.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="/contact" className="hidden sm:inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg shadow-kf-gold/20 magnetic hover:-translate-y-0.5">Enquire Now</a>
          <button id="menuBtn" className="lg:hidden text-white p-2 relative z-[60]">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
