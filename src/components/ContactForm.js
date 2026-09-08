'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', eventDate: '', location: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setForm({ name: '', email: '', phone: '', eventType: '', eventDate: '', location: '', message: '' }); setTimeout(() => setSent(false), 4000); };

  const inputCls = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-kf-text focus:outline-none focus:border-kf-gold focus:ring-2 focus:ring-kf-gold/15 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Full Name *</label><input required name="name" value={form.name} onChange={handleChange} className={inputCls} placeholder="Your name" /></div>
        <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Phone *</label><input required name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder="+91 98765 43210" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Email *</label><input required type="email" name="email" value={form.email} onChange={handleChange} className={inputCls} placeholder="you@email.com" /></div>
        <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Event Type</label><select name="eventType" value={form.eventType} onChange={handleChange} className={inputCls}><option value="">Select type</option><option>Wedding</option><option>Pre-Wedding</option><option>Engagement</option><option>Haldi & Mehendi</option><option>Baby Shoot</option><option>Destination Wedding</option><option>Other</option></select></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Event Date</label><input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} className={inputCls} /></div>
        <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Location</label><input name="location" value={form.location} onChange={handleChange} className={inputCls} placeholder="City / Venue" /></div>
      </div>
      <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Message</label><textarea name="message" value={form.message} onChange={handleChange} rows="4" className={inputCls} placeholder="Tell us about your event..."></textarea></div>
      <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-8 py-4 rounded-full transition-all magnetic hover:-translate-y-1 hover:shadow-lg hover:shadow-kf-gold/30">Send Enquiry <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
      {sent && <p className="text-kf-gold text-sm font-medium">Thank you! We will get back to you within 24 hours. &#9829;</p>}
    </form>
  );
}
