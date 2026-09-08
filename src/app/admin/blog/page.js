'use client';
import { useState, useEffect } from 'react';
import { isAuthenticated } from '@/lib/auth';
import AdminHeader from '@/components/admin/AdminHeader';
import DataTable from '@/components/admin/DataTable';
import Modal from '@/components/admin/Modal';
import { blogPosts as bData } from '@/data/blog';

export default function AdminBlog() {
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (!isAuthenticated()) { window.location.href = '/admin/login'; return; }
    setAuthed(true);
    setItems(bData.map(b => ({ ...b })));
  }, []);

  if (!authed) return null;

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'date', label: 'Date' },
    { key: 'readTime', label: 'Read Time' },
  ];

  const handleAdd = () => { setEditItem({ id: Date.now(), title: '', slug: '', excerpt: '', content: '', image: '', author: 'Kolkata Frames Team', date: new Date().toISOString().split('T')[0], readTime: '5 min', category: 'Tips' }); setModalOpen(true); };
  const handleEdit = (item) => { setEditItem({ ...item }); setModalOpen(true); };
  const handleSave = () => {
    if (items.find(i => i.id === editItem.id)) { setItems(items.map(i => i.id === editItem.id ? editItem : i)); }
    else { setItems([...items, editItem]); }
    setModalOpen(false);
  };
  const confirmDelete = () => { setItems(items.filter(i => i.id !== deleteId)); setDeleteId(null); };

  const inputCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kf-gold transition-all';

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <AdminHeader title="Blog Posts" subtitle={`Manage ${items.length} articles`} />
        <button onClick={handleAdd} className="bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Post
        </button>
      </div>
      <DataTable columns={columns} data={items} onEdit={handleEdit} onDelete={(item) => setDeleteId(item.id)} />
      <Modal open={modalOpen} title={editItem && items.find(i => i.id === editItem.id) ? 'Edit Blog Post' : 'New Blog Post'} onClose={() => setModalOpen(false)}>
        {editItem && (
          <div className="space-y-4">
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Title</label><input value={editItem.title} onChange={(e) => setEditItem({ ...editItem, title: e.target.value })} className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Slug</label><input value={editItem.slug} onChange={(e) => setEditItem({ ...editItem, slug: e.target.value })} className={inputCls} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Category</label><input value={editItem.category} onChange={(e) => setEditItem({ ...editItem, category: e.target.value })} className={inputCls} /></div>
              <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Read Time</label><input value={editItem.readTime} onChange={(e) => setEditItem({ ...editItem, readTime: e.target.value })} className={inputCls} /></div>
            </div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Excerpt</label><textarea value={editItem.excerpt} onChange={(e) => setEditItem({ ...editItem, excerpt: e.target.value })} rows="2" className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Content</label><textarea value={editItem.content} onChange={(e) => setEditItem({ ...editItem, content: e.target.value })} rows="6" className={inputCls} /></div>
            <div><label className="text-xs font-medium text-kf-muted mb-1.5 block">Cover Image URL</label><input value={editItem.image} onChange={(e) => setEditItem({ ...editItem, image: e.target.value })} className={inputCls} /></div>
            {editItem.image && <img src={editItem.image} alt="Preview" className="w-full h-40 object-cover rounded-xl" />}
            <div className="flex gap-3 pt-2">
              <button onClick={handleSave} className="flex-1 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm py-3 rounded-full transition-all">Save</button>
              <button onClick={() => setModalOpen(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-kf-text font-semibold text-sm py-3 rounded-full transition-all">Cancel</button>
            </div>
          </div>
        )}
      </Modal>
      <Modal open={deleteId !== null} title="Confirm Delete" onClose={() => setDeleteId(null)}>
        <p className="text-sm text-kf-text mb-6">Are you sure you want to delete this blog post?</p>
        <div className="flex gap-3">
          <button onClick={confirmDelete} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm py-3 rounded-full transition-all">Delete</button>
          <button onClick={() => setDeleteId(null)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-kf-text font-semibold text-sm py-3 rounded-full transition-all">Cancel</button>
        </div>
      </Modal>
    </div>
  );
}
