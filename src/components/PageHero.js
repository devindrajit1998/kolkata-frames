export default function PageHero({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 pt-20">
        {breadcrumb && <p className="text-xs tracking-[0.2em] uppercase text-kf-gold mb-3">{breadcrumb}</p>}
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-3 clamp-h2">{title}</h1>
        {subtitle && <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
