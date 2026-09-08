export default function StatsBar({ stats }) {
  return (
    <section className="bg-kf-dark relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center" id="statsContainer">
          {stats.map((s, i) => (
            <div key={i} className={'text-center ' + (i < 3 ? 'border-r-0 sm:border-r border-b sm:border-b-0 border-white/10 sm:pr-8 pb-4 sm:pb-0' : '')}>
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-kf-gold mb-1" data-count={s.value}>0</div>
              <div className="text-xs sm:text-sm text-gray-300 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
