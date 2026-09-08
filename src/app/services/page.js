'use client';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero title="Our Services" subtitle="From weddings to baby shoots, we capture every celebration with heart and artistry." image="https://images.pexels.com/photos/32213455/pexels-photo-32213455.jpeg?auto=compress&cs=tinysrgb&w=1920" breadcrumb="Home / Services" />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-kf-muted font-semibold mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-kf-text">Services Crafted With Love</h2>
            <div className="section-divider mt-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 stagger">
            {services.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center reveal">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-kf-text mb-4">Don't See What You're Looking For?</h2>
          <p className="text-kf-muted mb-8 text-sm sm:text-base">We offer custom packages tailored to your specific needs. Get in touch and let's create something unique for your celebration.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-sm px-8 py-4 rounded-full transition-all magnetic hover:-translate-y-1 hover:shadow-lg hover:shadow-kf-gold/30">Custom Enquiry</a>
        </div>
      </section>
    </SiteShell>
  );
}
