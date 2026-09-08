'use client';

export default function AdminHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-kf-text">{title}</h1>
      {subtitle && <p className="text-sm text-kf-muted mt-1">{subtitle}</p>}
    </div>
  );
}
