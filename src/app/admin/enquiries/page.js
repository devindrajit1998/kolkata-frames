'use client';
import { useState, useEffect } from 'react';
import { isAuthenticated } from '@/lib/auth';
import AdminHeader from '@/components/admin/AdminHeader';
import Modal from '@/components/admin/Modal';
import { enquiries as eData } from '@/data/enquiries';

export default function AdminEnquiries() {
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [viewItem, setViewItem] = useState(null);

  useEffect(() => {
    if (!isAuthenticated()) { window.location.href = '/admin/login'; return; }
    setAuthed(true);
    setItems(eData.map(e => ({ ...e })));
  }, []);

  if (!authed) return null;

  const filtered = filter === 'all' ? items : items.filter(i => i.status === filter);
  const statusColors = { new: 'bg-green-100 text-green-700', responded: 'bg-blue-100 text-blue-700', closed: 'bg-gray-100 text-gray-600' };

  return (
    <div>
      <AdminHeader title="Enquiries" subtitle={`${items.length} total enquiries`} />
      
      <div className="flex gap-3 mb-6">
        {['all', 'new', 'responded', 'closed'].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={'text-sm font-medium px-4 py-2 rounded-full capitalize transition-all ' + (filter === s ? 'bg-kf-gold text-black' : 'bg-white text-kf-muted hover:bg-gray-100')}>{s} {s !== 'all' && '(' + items.filter(i => i.status === s).length + ')'}</button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(e => (
          <div key={e.id} className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-sm text-kf-text">{e.name}</h3>
                  <span className={'text-xs px-3 py-1 rounded-full font-medium ' + (statusColors[e.status] || 'bg-gray-100 text-gray-600')}>{e.status}</span>
                </div>
                <p className="text-xs text-kf-muted mb-2">{e.eventType} &middot; {e.location} &middot; Event Date: {e.eventDate}</p>
                <p className="text-sm text-kf-text line-clamp-2">{e.message}</p>
                <div className="flex gap-4 mt-2 text-xs text-kf-muted">
                  <span>{e.email}</span>
                  <span>{e.phone}</span>
                  <span>Received: {e.date}</span>
                </div>
              </div>
              <button onClick={() => setViewItem(e)} className="bg-gray-50 hover:bg-gray-100 text-kf-text font-medium text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={viewItem !== null} title="Enquiry Details" onClose={() => setViewItem(null)}>
        {viewItem && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><p className="text-xs text-kf-muted">Name</p><p className="text-sm font-medium text-kf-text">{viewItem.name}</p></div>
              <div><p className="text-xs text-kf-muted">Status</p><p className="text-sm font-medium text-kf-text capitalize">{viewItem.status}</p></div>
              <div><p className="text-xs text-kf-muted">Email</p><p className="text-sm font-medium text-kf-text">{viewItem.email}</p></div>
              <div><p className="text-xs text-kf-muted">Phone</p><p className="text-sm font-medium text-kf-text">{viewItem.phone}</p></div>
              <div><p className="text-xs text-kf-muted">Event Type</p><p className="text-sm font-medium text-kf-text">{viewItem.eventType}</p></div>
              <div><p className="text-xs text-kf-muted">Event Date</p><p className="text-sm font-medium text-kf-text">{viewItem.eventDate}</p></div>
              <div><p className="text-xs text-kf-muted">Location</p><p className="text-sm font-medium text-kf-text">{viewItem.location}</p></div>
              <div><p className="text-xs text-kf-muted">Date Received</p><p className="text-sm font-medium text-kf-text">{viewItem.date}</p></div>
            </div>
            <div><p className="text-xs text-kf-muted mb-1">Message</p><p className="text-sm text-kf-text bg-gray-50 rounded-xl p-4">{viewItem.message}</p></div>
            <div className="flex gap-3 pt-2">
              <a href={'mailto:' + viewItem.email} className="flex-1 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm py-3 rounded-full transition-all text-center">Reply via Email</a>
              <a href={'https://wa.me/' + viewItem.phone.replace(/[^0-9]/g, '')} target="_blank" rel="noopener" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 rounded-full transition-all text-center">WhatsApp</a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
