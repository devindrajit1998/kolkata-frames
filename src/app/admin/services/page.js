'use client';
import { useState, useEffect } from 'react';
import { isAuthenticated } from '@/lib/auth';
import AdminHeader from '@/components/admin/AdminHeader';
import DataTable from '@/components/admin/DataTable';
import Modal from '@/components/admin/Modal';
import { services as serviceData } from '@/data/services';

export default function AdminServices() {
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (!isAuthenticated()) { window.location.href = '/admin/login'; return; }
    setAuthed(true);
    setItems(serviceData.map(s => ({ ...s })));
  }, []);

  if (!authed) return null;

  const columns = [
    { key: 'title', label: 'Service Name' },
    { key: 'price', label: 'Price' },
    { key: 'slug', label: 'Slug' },
  ];

  const handleAdd = () => { setEditItem({ id: Date.now(), title: '', slug: '', price: '', description: '', image: '', features: [] }); setModalOpen(true); };
  const handleEdit = (item) => { setEditItem({ ...item }); setModalOpen(true); };
  const handleSave = () => {
    if (items.find(i => i.id === editItem.id)) { setItems(items.map(i => i.id === editItem.id ? editItem : i)); }
    else { setItems([...items, editItem]); }
    setModalOpen(false);
  };
  const handleDelete = (item) => setDeleteId(item.id);
  const confirmDelete = () => { setItems(items.filter(i => i.id !== deleteId)); setDeleteId(null); };

  const inputCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kf-gold transition-all';

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <AdminHeader title="Services" subtitle={`Manage ${items.length} services`} />
        <button onClick={handleAdd} className="bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add New
        </button>
      </div>
      <DataTable columns={columns} data={items} onEdit={handleEdit} onDelete={handleDelete} />
      <Modal open={modalOpen} title={editItem && items.find(i => i.id === editItem.id) ? 'Edit Service' : 'Add Service'} onClose={() => setModalOpen(false)}>
        {editItem && (
          <div className="space-y-4">
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Title</label><input value={editItem.title} onChange={(e) => setEditItem({ ...editItem, title: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Slug</label><input value={editItem.slug} onChange={(e) => setEditItem({ ...editItem, slug: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Price</label><input value={editItem.price} onChange={(e) => setEditItem({ ...editItem, price: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Description</label><textarea value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} rows="3" className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Image URL</label><input value={editItem.image} onChange={(e) => setEditItem({ ...editItem, image: e.target.value })} className={inputCls} /></div>
            <div className="flex gap-3 pt-2">
              <button onClick={handleSave} className="flex-1 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm py-3 rounded-full transition-all">Save</button>
              <button onClick={() => setModalOpen(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-kf-text font-semibold text-sm py-3 rounded-full transition-all">Cancel</button>
            </div>
          </div>
        )}
      </Modal>
      <Modal open={deleteId !== null} title="Confirm Delete" onClose={() => setDeleteId(null)}>
        <p className="text-sm text-kf-text mb-6">Are you sure you want to delete this service?</p>
        <div className="flex gap-3">
          <button onClick={confirmDelete} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm py-3 rounded-full transition-all">Delete</button>
          <button onClick={() => setDeleteId(null)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-kf-text font-semibold text-sm py-3 rounded-full transition-all">Cancel</button>
        </div>
      </Modal>
    </div>
  );
}
