'use client';
import SiteShell from '@/components/SiteShell';
import HeroSlider from '@/components/HeroSlider';
import StatsBar from '@/components/StatsBar';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';
import { stats, heroSlides } from '@/data/stats';

export default function Home() {
  const homePortfolio = portfolioItems.slice(0, 5);
  const lbImages = homePortfolio.map(i => i.image);

  return (
    <SiteShell>
      {/* HERO */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden">
        <HeroSlider slides={heroSlides} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 min-h-screen flex items-center pt-28 pb-24">
          <div className="max-w-2xl text-white">
            <p className="text-[10px] sm:text-[12px] tracking-[0.25sm sm:tracking-[0.35em] uppercase text-gray-200 mb-4 sm:mb-5 font-medium reveal">Weddings <span className="text-kf-gold mx-1">&middot;</span> Pre Weddings <span className="text-kf-gold mx-1">&middot;</span> More</p>
            <h1 className="font-serif font-bold leading-[1.05] mb-4 sm:mb-6 clamp-h1 reveal" style={{ transitionDelay: '.1s' }}>Moments Beyond<br />Time</h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl mb-7 sm:mb-9 font-light reveal" style={{ transitionDelay: '.2s' }}>Candid. Creative. Timeless. Bengali weddings and life's special moments, captured with heart and artistry.</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 reveal" style={{ transitionDelay: '.3s' }}>
              <a href="/contact" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-xl shadow-kf-gold/20 magnetic hover:-translate-y-1">Book Your Date</a>
              <button className="inline-flex items-center gap-3 text-white group magnetic">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"><svg className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></span>
                <span className="text-xs sm:text-sm font-medium">Watch Our Film</span>
              </button>
            </div>
          </div>
          <div className="hidden md:block absolute right-[6%] top-1/2 -translate-y-1/2">
            <p className="font-script text-white/80 text-4xl lg:text-6xl float-anim drop-shadow-2xl" style={{ transform: 'rotate(-8deg)' }}>Real Emotions<br /><span className="text-kf-gold">Real Stories</span></p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* STATS */}
      <StatsBar stats={stats} />

      {/* SERVICES */}
      <section id="services" className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-end mb-10 sm:mb-14">
            <div className="reveal-l">
              <p className="text-xs tracking-[0.3em] uppercase text-kf-muted font-semibold mb-4">Our Services</p>
              <h2 className="font-serif font-bold text-kf-text leading-tight clamp-h2">Every Celebration<br />Has a Story</h2>
            </div>
            <div className="md:text-right reveal-r">
              <p className="text-kf-muted leading-relaxed mb-6 max-w-md md:ml-auto text-sm sm:text-base">From the vibrant rituals of Bengali weddings to dreamy pre-wedding shoots, we craft visual stories that are as unique as your love.</p>
              <a href="/services" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 magnetic hover:-translate-y-1 hover:shadow-lg hover:shadow-kf-gold/30">View All Services</a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 stagger">
            {services.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative reveal-l">
              <div className="rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[560px] shadow-2xl">
                <img src="https://images.pexels.com/photos/36125546/pexels-photo-36125546.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bengali bride" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-2 sm:-right-4 lg:right-8 w-36 h-48 sm:w-44 sm:h-56 lg:w-52 lg:h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.pexels.com/photos/32970759/pexels-photo-32970759.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Bengali groom" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                <p className="font-script text-2xl sm:text-3xl lg:text-4xl text-white drop-shadow-lg" style={{ transform: 'rotate(-4deg)' }}>More Than Photos<br /><span className="text-kf-gold">&mdash; Emotions &#9829;</span></p>
              </div>
              <div className="absolute -top-5 -left-5 w-20 sm:w-24 h-20 sm:h-24 border-t-4 border-l-4 border-kf-gold rounded-tl-2xl"></div>
            </div>
            <div className="reveal-r">
              <p className="text-xs tracking-[0.3em] uppercase text-kf-gold font-semibold mb-4">About Kolkata Frames</p>
              <h2 className="font-serif font-bold text-kf-text leading-tight mb-6 clamp-h2">We Capture What<br />Truly Matters</h2>
              <p className="text-kf-muted leading-relaxed mb-8 text-sm sm:text-base">Based in the heart of Kolkata, our team of passionate photographers and cinematographers believes that every love story deserves to be told beautifully. We blend the richness of Bengali culture with a modern, candid approach to create memories you will cherish for a lifetime.</p>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-9 stagger">
                <div className="flex items-start gap-3"><div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-kf-gold/15 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 sm:w-5 sm:h-5 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></div><div><h4 className="font-semibold text-xs sm:text-sm text-kf-text mb-1">Candid & Natural</h4><p className="text-xs text-kf-muted">Real moments, as they unfold</p></div></div>
                <div className="flex items-start gap-3"><div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-kf-gold/15 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 sm:w-5 sm:h-5 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><div><h4 className="font-semibold text-xs sm:text-sm text-kf-text mb-1">Creative Approach</h4><p className="text-xs text-kf-muted">Artistic vision in every frame</p></div></div>
                <div className="flex items-start gap-3"><div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-kf-gold/15 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 sm:w-5 sm:h-5 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div><h4 className="font-semibold text-xs sm:text-sm text-kf-text mb-1">Experienced Team</h4><p className="text-xs text-kf-muted">5+ years of storytelling</p></div></div>
                <div className="flex items-start gap-3"><div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-kf-gold/15 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 sm:w-5 sm:h-5 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><h4 className="font-semibold text-xs sm:text-sm text-kf-text mb-1">Pan India & Destination</h4><p className="text-xs text-kf-muted">We travel wherever love takes us</p></div></div>
              </div>
              <a href="/about" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 magnetic hover:-translate-y-1 hover:shadow-lg hover:shadow-kf-gold/30">Know Our Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section id="portfolio" className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-kf-muted font-semibold mb-4">Our Work</p>
            <h2 className="font-serif font-bold text-kf-text clamp-h2">Real People. Real Stories.</h2>
            <div className="section-divider mt-6"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 stagger">
            {homePortfolio.map((item, i) => (
              <div key={item.id} className={'portfolio-item rounded-2xl overflow-hidden ' + (i === 0 ? 'row-span-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[520px]' : 'h-40 sm:h-52 lg:h-64') + (i === 3 ? ' col-span-2' : '')}>
                <img src={item.thumb} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="portfolio-overlay"><div className="portfolio-zoom w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12 reveal">
            <a href="/portfolio" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-lg shadow-kf-gold/20 magnetic hover:-translate-y-1">View Full Portfolio</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative flex flex-col items-center lg:items-start reveal-l">
              <div className="polaroid w-56 sm:w-64 mb-6 sm:mb-8 relative z-10">
                <img src={testimonials[0].image} alt="Happy couple" loading="lazy" className="w-full h-56 sm:h-64 object-cover" />
                <p className="font-script text-center text-xl sm:text-2xl text-kf-text mt-3">Happy Stories &#9829;</p>
              </div>
              <div className="lg:pl-4">
                <p className="text-xs tracking-[0.3em] uppercase text-kf-gold font-semibold mb-3">Testimonials</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-kf-text mb-4 sm:mb-6">Love From Our Clients</h2>
              </div>
            </div>
            <div className="reveal-r">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/31678928/pexels-photo-31678928.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Indian wedding couple at sunset" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(26,26,26,.9) 0%, rgba(26,26,26,.55) 60%, rgba(26,26,26,.2) 100%)' }}></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-white reveal-l">
              <p className="text-xs tracking-[0.3em] uppercase text-kf-gold font-semibold mb-4 sm:mb-5">Let's Capture Your Story</p>
              <h2 className="font-serif font-bold leading-tight mb-4 sm:mb-6 clamp-cta">Ready to Create Beautiful Memories Together?</h2>
              <p className="text-gray-200 leading-relaxed mb-7 sm:mb-8 max-w-lg text-sm sm:text-base">Get in touch with us and let's turn your special moments into timeless stories.</p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 bg-kf-gold hover:bg-kf-gold-light text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 magnetic hover:-translate-y-1">Enquire Now</a>
                <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 border-2 border-white/70 hover:bg-white hover:text-black text-white font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 magnetic">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5 lg:pl-10 reveal-r">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-kf-gold/20 flex items-center justify-center flex-shrink-0 border border-kf-gold/30"><svg className="w-6 h-6 sm:w-7 sm:h-7 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                <div className="text-white"><h4 className="font-serif text-lg sm:text-xl font-semibold mb-1">Available Across India</h4><p className="text-xs sm:text-sm text-gray-300">Kolkata, Mumbai, Delhi, Bangalore, Goa & beyond</p></div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-kf-gold/20 flex items-center justify-center flex-shrink-0 border border-kf-gold/30"><svg className="w-6 h-6 sm:w-7 sm:h-7 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                <div className="text-white"><h4 className="font-serif text-lg sm:text-xl font-semibold mb-1">Custom Packages</h4><p className="text-xs sm:text-sm text-gray-300">Tailored to your events, budget & vision</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
