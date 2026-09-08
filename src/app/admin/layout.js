'use client';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }) {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = isAuthenticated();
    setAuthed(auth);
    setLoading(false);
    // Only redirect if we're NOT on the login page
    if (!auth && typeof window !== 'undefined' && !window.location.pathname.includes('/admin/login')) {
      window.location.href = '/admin/login';
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-kf-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm text-kf-muted">Loading...</p>
        </div>
      </div>
    );
  }

  // If on login page, render without sidebar
  if (typeof window !== 'undefined' && window.location.pathname.includes('/admin/login')) {
    return <>{children}</>;
  }

  if (!authed) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="md:ml-64 p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
