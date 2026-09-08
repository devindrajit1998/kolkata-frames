'use client';
import { use } from 'react';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { services, getServiceBySlug } from '@/data/services';

export default function ServiceDetailPage({ params }) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <SiteShell>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-kf-text mb-4">Service Not Found</h1>
            <a href="/services" className="text-kf-gold hover:underline">Back to Services</a>
          </div>
        </div>
      </SiteShell>
    );
  }

  const others = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <PageHero title={service.title} subtitle={service.description} image={service.image} breadcrumb={'Home / Services / ' + service.title} />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="reveal-l">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
            <div className="reveal-r">
              <p className="text-xs tracking-[0.3em] uppercase text-kf-gold font-semibold mb-4">Service Details</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-kf-text mb-4">{service.title}</h2>
              <p className="text-kf-muted leading-relaxed mb-6 text-sm sm:text-base">{service.description}</p>
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="font-serif text-lg font-semibold text-kf-text mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-kf-text">
                      <svg className="w-5 h-5 text-kf-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs text-kf-muted uppercase tracking-wide mb-1">Starting Price</p>
                  <p className="font-serif text-2xl font-bold text-kf-gold">{service.price}</p>
                </div>
                <a href="/contact" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-6 py-3.5 rounded-full transition-all magnetic hover:-translate-y-1">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-kf-text mb-8 text-center">Other Services</h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 stagger">
            {others.map(s => (
              <a key={s.id} href={'/services/' + s.slug} className="service-card group relative rounded-2xl overflow-hidden h-64 cursor-pointer block">
                <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 card-gradient"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-white text-lg font-semibold">{s.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
