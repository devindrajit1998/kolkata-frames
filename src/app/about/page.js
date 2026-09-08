'use client';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import StatsBar from '@/components/StatsBar';
import { stats } from '@/data/stats';

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero title="About Kolkata Frames" subtitle="Capturing love stories with heart, artistry, and timeless storytelling since 2021." image="https://images.pexels.com/photos/35820390/pexels-photo-35820390.jpeg?auto=compress&cs=tinysrgb&w=1920" breadcrumb="Home / About" />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative reveal-l">
              <div className="rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[560px] shadow-2xl">
                <img src="https://images.pexels.com/photos/33088097/pexels-photo-33088097.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bengali wedding couple" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-2 lg:right-8 w-36 h-48 sm:w-44 sm:h-56 lg:w-52 lg:h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.pexels.com/photos/35820382/pexels-photo-35820382.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Bengali bride portrait" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="reveal-r">
              <p className="text-xs tracking-[0.3em] uppercase text-kf-gold font-semibold mb-4">Our Story</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-kf-text leading-tight mb-6">A Journey of Love &amp; Lens</h2>
              <div className="space-y-4 text-kf-muted text-sm sm:text-base leading-relaxed">
                <p>Kolkata Frames was born in 2021 from a simple belief: every love story deserves to be told beautifully. What started as a passion project by a small team of photographers in Kolkata has grown into one of the city's most trusted wedding photography studios.</p>
                <p>Over the past 5 years, we have had the privilege of documenting over 500 weddings and 1000+ events across India. From intimate home ceremonies in the lanes of North Kolkata to grand destination weddings in Goa and Rajasthan, we have been there with our cameras, capturing tears, laughter, and everything in between.</p>
                <p>Our approach is simple: we blend in, we observe, and we capture. We do not stage moments; we find them. The stolen glance during the Saat Paak, the father's tear during Bidaai, the uncontainable joy of Haldi &mdash; these are the moments that matter, and these are the moments we preserve.</p>
                <p>We are proud Bengalis, and we bring that cultural depth to every shoot. We know the rituals, we know the rhythms, and we know how to make them look timeless.</p>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 magnetic hover:-translate-y-1 mt-6">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      <StatsBar stats={stats} />

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-kf-muted font-semibold mb-4">Our Values</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-kf-text">What We Believe In</h2>
            <div className="section-divider mt-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {[
              { icon: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z', title: 'Authentic Storytelling', desc: 'We capture real emotions, not staged poses. Every frame tells a genuine story.' },
              { icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z', title: 'Heart Over Hype', desc: 'We are not about flashy trends. We are about capturing what makes your heart skip.' },
              { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', title: 'Professional Excellence', desc: 'Punctual, prepared, and polished. We deliver quality that lasts generations.' },
              { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', title: 'Cultural Roots', desc: 'Deeply rooted in Bengali culture, we understand the rituals that make your wedding unique.' },
              { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', title: 'Team Spirit', desc: 'A dedicated team of photographers, videographers, and editors working in harmony.' },
              { icon: 'M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z', title: 'Client Love', desc: 'Our couples become our family. Your joy is our greatest reward.' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-kf-gold/15 flex items-center justify-center mb-4"><svg className="w-6 h-6 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={v.icon} /></svg></div>
                <h3 className="font-serif text-lg font-semibold text-kf-text mb-2">{v.title}</h3>
                <p className="text-sm text-kf-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
