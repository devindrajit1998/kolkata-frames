'use client';
import { useState, useEffect } from 'react';
import { login, isAuthenticated } from '@/lib/auth';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated()) window.location.href = '/admin';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      window.location.href = '/admin';
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-kf-dark px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-kf-gold/20 flex items-center justify-center border border-kf-gold/40 mx-auto mb-4">
            <svg className="w-8 h-8 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
          <h1 className="font-serif text-2xl font-bold text-white">Kolkata Frames</h1>
          <p className="text-sm text-gray-400 mt-1">Admin Panel Login</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-5">
          <div>
            <label className="text-xs font-medium text-gray-300 mb-1.5 block">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kf-gold transition-all" placeholder="admin" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-300 mb-1.5 block">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kf-gold transition-all" placeholder="********" />
          </div>
          {error && <p className="text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-2">{error}</p>}
          <button type="submit" className="w-full bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm py-3.5 rounded-full transition-all">Login</button>
          <p className="text-center text-xs text-gray-500">Demo credentials: admin / kolkata2026</p>
        </form>
        <div className="text-center mt-6">
          <a href="/" className="text-sm text-gray-400 hover:text-kf-gold transition-colors">&larr; Back to website</a>
        </div>
      </div>
    </div>
  );
}
