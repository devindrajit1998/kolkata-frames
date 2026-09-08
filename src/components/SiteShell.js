'use client';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function SiteShell({ children }) {
  useEffect(() => {
    // Scroll progress
    const onScroll = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (st / dh) * 100;
      const bar = document.getElementById('scrollProgress');
      if (bar) bar.style.width = pct + '%';

      const btt = document.getElementById('backToTop');
      if (btt) { if (st > 400) btt.classList.add('show'); else btt.classList.remove('show'); }

      const sd = document.getElementById('sectionDots');
      if (sd) { if (st > 400) sd.classList.add('show'); else sd.classList.remove('show'); }

      const hdr = document.getElementById('siteHeader');
      if (hdr) { if (st > 60) hdr.classList.add('bg-kf-dark','shadow-2xl'); else hdr.classList.remove('bg-kf-dark','shadow-2xl'); }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Custom cursor
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; } };
    const animRing = () => { rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15; if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; } requestAnimationFrame(animRing); };
    animRing();
    document.addEventListener('mousemove', onMove);

    const attachHover = () => {
      document.querySelectorAll('a, button, .portfolio-item, .service-card, .magnetic, .polaroid, .section-dot, .back-to-top, .whatsapp-float, .admin-sidebar-link').forEach(el => {
        el.addEventListener('mouseenter', () => ring && ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring && ring.classList.remove('hover'));
      });
    };
    attachHover();

    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = 'translate(' + x * 0.15 + 'px,' + y * 0.15 + 'px)';
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });

    // Back to top
    const btt = document.getElementById('backToTop');
    if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Off-canvas
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeOffcanvas');
    const menu = document.getElementById('offcanvasMenu');
    const overlay = document.getElementById('offcanvasOverlay');
    const openMenu = () => { menu && menu.classList.add('open'); overlay && overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeMenu = () => { menu && menu.classList.remove('open'); overlay && overlay.classList.remove('open'); document.body.style.overflow = ''; };
    menuBtn && menuBtn.addEventListener('click', openMenu);
    closeBtn && closeBtn.addEventListener('click', closeMenu);
    overlay && overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.offcanvas-link').forEach(l => l.addEventListener('click', closeMenu));

    // Reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('stagger')) {
            Array.from(entry.target.children).forEach((c, i) => { c.style.transitionDelay = (i * 0.1) + 's'; });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale, .stagger').forEach(el => observer.observe(el));

    // Count-up stats
    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const start = performance.now();
            function update(now) {
              const p = Math.min((now - start) / duration, 1);
              const e2 = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.floor(e2 * target) + '+';
              if (p < 1) requestAnimationFrame(update);
              else el.textContent = target + '+';
            }
            requestAnimationFrame(update);
          });
          statsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    const sc = document.getElementById('statsContainer');
    if (sc) statsObs.observe(sc);

    // Section dots
    const allDots = document.querySelectorAll('.section-dot');
    const sectionIds = ['home', 'services', 'about', 'portfolio', 'testimonials', 'contact'];
    const onScrollDots = () => {
      let current = '';
      sectionIds.forEach(id => {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) current = id;
        }
      });
      allDots.forEach(d => d.classList.toggle('active', d.dataset.section === current));
    };
    window.addEventListener('scroll', onScrollDots);

    return () => { window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <>
      <div className="scroll-progress" id="scrollProgress"></div>
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <div id="offcanvasOverlay"></div>
      <aside id="offcanvasMenu">
        <OffCanvasContent />
      </aside>
      <Header />
      {children}
      <Footer />
      <FloatingElements />
    </>
  );
}

function OffCanvasContent() {
  const links = [
    { href: '/', label: 'Home' }, { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' }, { href: '/portfolio', label: 'Portfolio' },
    { href: '/packages', label: 'Packages' }, { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' }, { href: '/contact', label: 'Contact' },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="font-serif text-lg font-bold text-white">Kolkata Frames</span>
        <button id="closeOffcanvas" className="text-white/70 hover:text-kf-gold p-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <nav className="flex-1 px-6 py-6">
        <ul className="flex flex-col gap-1">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="offcanvas-link block text-white/80 hover:text-kf-gold hover:bg-white/5 rounded-xl px-4 py-3.5 transition-all text-sm font-medium">{l.label}</a></li>
          ))}
        </ul>
      </nav>
      <div className="px-6 py-6 border-t border-white/10">
        <a href="/contact" className="offcanvas-link inline-flex items-center justify-center gap-2 bg-kf-gold text-black font-semibold text-sm w-full px-6 py-3.5 rounded-full">Enquire Now</a>
      </div>
    </div>
  );
}

function FloatingElements() {
  const dots = [
    { section: 'home', label: 'Home' }, { section: 'services', label: 'Services' },
    { section: 'about', label: 'About' }, { section: 'portfolio', label: 'Portfolio' },
    { section: 'testimonials', label: 'Testimonials' }, { section: 'contact', label: 'Contact' },
  ];
  return (
    <>
      <div className="section-dots" id="sectionDots">
        {dots.map(d => (
          <a key={d.section} href={'#' + d.section} className={'section-dot'} data-section={d.section} data-label={d.label}></a>
        ))}
      </div>
      <a href="https://wa.me/919876543210" className="whatsapp-float" target="_blank" rel="noopener">
        <div className="whatsapp-pulse"></div>
        <div className="whatsapp-btn">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>
        <span className="whatsapp-tooltip">Chat with us!</span>
      </a>
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
      </button>
    </>
  );
}
