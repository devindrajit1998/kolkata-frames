export default function StatCard({ label, value, icon, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={'w-12 h-12 rounded-xl flex items-center justify-center ' + (color || 'bg-kf-gold/15')}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <p className="font-serif text-3xl font-bold text-kf-text">{value}</p>
      <p className="text-sm text-kf-muted mt-1">{label}</p>
    </div>
  );
}
