'use client';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { packages } from '@/data/packages';

export default function PackagesPage() {
  return (
    <SiteShell>
      <PageHero title="Packages" subtitle="Transparent pricing for every celebration. Choose a package or build your own." image="https://images.pexels.com/photos/36213028/pexels-photo-36213028.jpeg?auto=compress&cs=tinysrgb&w=1920" breadcrumb="Home / Packages" />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {packages.map(pkg => (
              <div key={pkg.id} className={'relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ' + (pkg.popular ? 'bg-kf-dark text-white shadow-2xl scale-105 border-2 border-kf-gold' : 'bg-gray-50 text-kf-text hover:shadow-xl')}>
                {pkg.badge && <span className={'absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1.5 rounded-full ' + (pkg.popular ? 'bg-kf-gold text-black' : 'bg-kf-text text-white')}>{pkg.badge}</span>}
                <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={'text-sm mb-4 ' + (pkg.popular ? 'text-gray-300' : 'text-kf-muted')}>{pkg.description}</p>
                <div className="mb-6">
                  <span className="font-serif text-3xl font-bold text-kf-gold">{pkg.price === 'On Request' ? pkg.price : '₹' + pkg.price}</span>
                  <span className={'text-sm ml-1 ' + (pkg.popular ? 'text-gray-400' : 'text-kf-muted')}>{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className={'flex items-start gap-2 text-sm ' + (pkg.popular ? 'text-gray-300' : 'text-kf-text')}>
                      <svg className="w-4 h-4 text-kf-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={'block text-center font-semibold text-sm py-3.5 rounded-full transition-all ' + (pkg.popular ? 'bg-kf-gold hover:bg-kf-gold-light text-black' : 'bg-kf-text hover:bg-kf-dark text-white')}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center reveal">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-kf-text mb-4">Have Questions About Our Packages?</h2>
          <p className="text-kf-muted mb-8 text-sm sm:text-base">All packages can be customised. Travel and accommodation costs are extra for destination weddings. Contact us for a detailed quote tailored to your event.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-8 py-4 rounded-full transition-all magnetic hover:-translate-y-1">Contact Us</a>
        </div>
      </section>
    </SiteShell>
  );
}
