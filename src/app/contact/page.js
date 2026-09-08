'use client';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero title="Contact Us" subtitle="Let's create something beautiful together. Send us your details and we'll be in touch within 24 hours." image="https://images.pexels.com/photos/31678928/pexels-photo-31678928.jpeg?auto=compress&cs=tinysrgb&w=1920" breadcrumb="Home / Contact" />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="reveal-l">
              <p className="text-xs tracking-[0.3em] uppercase text-kf-gold font-semibold mb-4">Get in Touch</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-kf-text mb-6">Let's Capture Your Story</h2>
              <p className="text-kf-muted leading-relaxed mb-8 text-sm sm:text-base">Whether you are planning a grand Bengali wedding or an intimate pre-wedding shoot, we would love to hear from you. Fill out the form and our team will get back to you within 24 hours.</p>
              <div className="space-y-5">
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-kf-gold/15 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div><div><h4 className="font-semibold text-sm text-kf-text mb-1">Phone</h4><a href="tel:+919876543210" className="text-sm text-kf-muted hover:text-kf-gold transition-colors">+91 98765 43210</a></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-kf-gold/15 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><h4 className="font-semibold text-sm text-kf-text mb-1">Email</h4><a href="mailto:hello@kolkataframes.com" className="text-sm text-kf-muted hover:text-kf-gold transition-colors">hello@kolkataframes.com</a></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-kf-gold/15 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-kf-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><h4 className="font-semibold text-sm text-kf-text mb-1">Studio Address</h4><p className="text-sm text-kf-muted">Salt Lake, Kolkata, West Bengal 700091</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg></div><div><h4 className="font-semibold text-sm text-kf-text mb-1">WhatsApp</h4><a href="https://wa.me/919876543210" className="text-sm text-kf-muted hover:text-kf-gold transition-colors">+91 98765 43210</a></div></div>
              </div>
            </div>
            <div className="reveal-r">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="font-serif text-xl font-bold text-kf-text mb-6">Send Us an Enquiry</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
