export default function ServiceCard({ service }) {
  return (
    <a href={'/services/' + service.slug} className="service-card group relative rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-96 cursor-pointer reveal-scale block">
      <img src={service.image} alt={service.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 card-gradient"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
        <h3 className="font-serif text-white text-sm sm:text-lg font-semibold leading-tight">{service.title}</h3>
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-kf-gold transition-colors">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </a>
  );
}
