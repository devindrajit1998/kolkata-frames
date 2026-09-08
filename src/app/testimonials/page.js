'use client';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero title="Testimonials" subtitle="Love from our clients. Read what couples say about their experience with Kolkata Frames." image="https://images.pexels.com/photos/35963161/pexels-photo-35963161.jpeg?auto=compress&cs=tinysrgb&w=1920" breadcrumb="Home / Testimonials" />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {testimonials.map(t => (
              <div key={t.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <svg key={i} className="w-4 h-4 text-kf-gold" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                </div>
                <p className="font-serif italic text-kf-text leading-relaxed mb-6 text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <img src={t.image} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-kf-text">{t.name}</p>
                    <p className="text-xs text-kf-muted">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
