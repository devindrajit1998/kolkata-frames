'use client';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { label: 'Home', href: '/' }, { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' }, { label: 'Portfolio', href: '/portfolio' },
    { label: 'Packages', href: '/packages' }, { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];
  const serviceLinks = [
    'Wedding Photography', 'Pre Wedding Shoots', 'Haldi & Mehendi',
    'Engagement', 'Rice Ceremony', 'Baby Shoots', 'Cinematic Films',
  ];

  return (
    <footer className="bg-kf-dark text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-kf-gold/20 flex items-center justify-center border border-kf-gold/40">
                <svg className="w-6 h-6 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
              <div className="leading-tight">
                <div className="font-serif text-xl font-bold">Kolkata Frames</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Capturing Love & Emotions</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">A premier wedding photography studio based in Kolkata, capturing Bengali weddings and life's beautiful moments with heart, artistry, and timeless storytelling.</p>
            <div className="flex gap-3">
              {['instagram', 'facebook', 'youtube', 'pinterest'].map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-kf-gold flex items-center justify-center transition-colors">
                  <span className="text-xs uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map(l => <li key={l.href}><a href={l.href} className="hover:text-kf-gold transition-colors">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-white">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {serviceLinks.map(s => <li key={s}><a href="/services" className="hover:text-kf-gold transition-colors">{s}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-6">
              <li className="flex items-start gap-3"><svg className="w-5 h-5 text-kf-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+919876543210" className="hover:text-kf-gold transition-colors">+91 98765 43210</a></li>
              <li className="flex items-start gap-3"><svg className="w-5 h-5 text-kf-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:hello@kolkataframes.com" className="hover:text-kf-gold transition-colors">hello@kolkataframes.com</a></li>
              <li className="flex items-start gap-3"><svg className="w-5 h-5 text-kf-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Salt Lake, Kolkata,<br />West Bengal 700091</span></li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-3 tracking-wide">Subscribe to our newsletter</p>
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); setEmail(''); setTimeout(() => setSubscribed(false), 3000); }} className="flex gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kf-gold" />
                <button type="submit" className="bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-colors flex-shrink-0">Subscribe</button>
              </form>
              {subscribed && <p className="text-xs text-kf-gold mt-2">Thank you for subscribing! &#9829;</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; 2026 Kolkata Frames. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Made with <span className="text-kf-gold">&#9829;</span> in Kolkata</p>
        </div>
      </div>
    </footer>
  );
}
