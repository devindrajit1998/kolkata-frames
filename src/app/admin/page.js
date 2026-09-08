'use client';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/lib/auth';
import AdminHeader from '@/components/admin/AdminHeader';
import StatCard from '@/components/admin/StatCard';
import { enquiries } from '@/data/enquiries';
import { portfolioItems } from '@/data/portfolio';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';
import { testimonials } from '@/data/testimonials';
import { packages } from '@/data/packages';

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/admin/login';
    } else {
      setAuthed(true);
    }
  }, []);

  if (!authed) return null;

  const newEnquiries = enquiries.filter(e => e.status === 'new');
  const recentEnquiries = [...enquiries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <div>
      <AdminHeader title="Dashboard" subtitle="Welcome back! Here is what's happening at Kolkata Frames." />
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatCard label="Total Enquiries" value={enquiries.length} icon="&#9993;" color="bg-blue-50" />
        <StatCard label="New Enquiries" value={newEnquiries.length} icon="&#10022;" color="bg-green-50" />
        <StatCard label="Portfolio Items" value={portfolioItems.length} icon="&#128444;" color="bg-purple-50" />
        <StatCard label="Blog Posts" value={blogPosts.length} icon="&#9999;" color="bg-orange-50" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatCard label="Services" value={services.length} icon="&#128247;" color="bg-yellow-50" />
        <StatCard label="Testimonials" value={testimonials.length} icon="&#9733;" color="bg-pink-50" />
        <StatCard label="Packages" value={packages.length} icon="&#127873;" color="bg-indigo-50" />
        <StatCard label="Happy Clients" value="500+" icon="&#10084;" color="bg-red-50" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-serif text-lg font-bold text-kf-text mb-4">Recent Enquiries</h3>
          <div className="space-y-3">
            {recentEnquiries.map(e => (
              <div key={e.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-kf-text">{e.name}</p>
                  <p className="text-xs text-kf-muted">{e.eventType} &middot; {e.location}</p>
                </div>
                <span className={'text-xs px-3 py-1 rounded-full font-medium ' + (e.status === 'new' ? 'bg-green-100 text-green-700' : e.status === 'responded' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600')}>{e.status}</span>
              </div>
            ))}
          </div>
          <a href="/admin/enquiries" className="text-sm text-kf-gold hover:underline mt-4 inline-block">View all enquiries &rarr;</a>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-serif text-lg font-bold text-kf-text mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <a href="/admin/portfolio" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"><div className="text-2xl mb-2">&#128444;</div><p className="text-sm font-medium text-kf-text">Portfolio</p></a>
            <a href="/admin/blog" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"><div className="text-2xl mb-2">&#9999;</div><p className="text-sm font-medium text-kf-text">Blog</p></a>
            <a href="/admin/services" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"><div className="text-2xl mb-2">&#128247;</div><p className="text-sm font-medium text-kf-text">Services</p></a>
            <a href="/admin/packages" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"><div className="text-2xl mb-2">&#127873;</div><p className="text-sm font-medium text-kf-text">Packages</p></a>
            <a href="/admin/testimonials" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"><div className="text-2xl mb-2">&#9733;</div><p className="text-sm font-medium text-kf-text">Testimonials</p></a>
            <a href="/admin/settings" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"><div className="text-2xl mb-2">&#9881;</div><p className="text-sm font-medium text-kf-text">Settings</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
