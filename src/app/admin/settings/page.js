'use client';
import { useState, useEffect } from 'react';
import { isAuthenticated } from '@/lib/auth';
import AdminHeader from '@/components/admin/AdminHeader';

export default function AdminSettings() {
  const [authed, setAuthed] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) { window.location.href = '/admin/login'; return; }
    setAuthed(true);
  }, []);

  if (!authed) return null;

  const [settings, setSettings] = useState({
    siteName: 'Kolkata Frames',
    tagline: 'Capturing Love & Emotions',
    phone: '+91 98765 43210',
    whatsapp: '919876543210',
    email: 'hello@kolkataframes.com',
    address: 'Salt Lake, Kolkata, West Bengal 700091',
    instagram: '@kolkataframes',
    facebook: '/kolkataframes',
    youtube: '@kolkataframes',
  });

  const inputCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kf-gold transition-all';
  const handleSave = (e) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 3000); };

  return (
    <div>
      <AdminHeader title="Settings" subtitle="Manage your website configuration" />
      <form onSubmit={handleSave} className="max-w-2xl space-y-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-serif text-lg font-bold text-kf-text mb-4">Site Information</h3>
          <div className="space-y-4">
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Site Name</label><input value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Tagline</label><input value={settings.tagline} onChange={(e) => setSettings({ ...settings, tagline: e.target.value })} className={inputCls} /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-serif text-lg font-bold text-kf-text mb-4">Contact Information</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Phone</label><input value={settings.phone} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">WhatsApp Number</label><input value={settings.whatsapp} onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Email</label><input value={settings.email} onChange={(e) => setSettings({ ...settings, email: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Address</label><input value={settings.address} onChange={(e) => setSettings({ ...settings, address: e.target.value })} className={inputCls} /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-serif text-lg font-bold text-kf-text mb-4">Social Media</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Instagram</label><input value={settings.instagram} onChange={(e) => setSettings({ ...settings, instagram: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Facebook</label><input value={settings.facebook} onChange={(e) => setSettings({ ...settings, facebook: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">YouTube</label><input value={settings.youtube} onChange={(e) => setSettings({ ...settings, youtube: e.target.value })} className={inputCls} /></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button type="submit" className="bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-8 py-3 rounded-full transition-all">Save Settings</button>
          {saved && <span className="text-sm text-green-600 font-medium">Settings saved successfully!</span>}
        </div>
      </form>
    </div>
  );
}
