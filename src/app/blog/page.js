'use client';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero title="Blog" subtitle="Wedding tips, photography guides, and stories from behind the lens." image="https://images.pexels.com/photos/37625318/pexels-photo-37625318.jpeg?auto=compress&cs=tinysrgb&w=1920" breadcrumb="Home / Blog" />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {blogPosts.map(post => (
              <a key={post.id} href={'/blog/' + post.slug} className="group rounded-2xl overflow-hidden bg-gray-50 hover:shadow-2xl transition-all duration-300">
                <div className="overflow-hidden h-52">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-kf-gold uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-serif text-lg font-bold text-kf-text mt-2 mb-3 group-hover:text-kf-gold transition-colors">{post.title}</h3>
                  <p className="text-sm text-kf-muted leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-kf-muted">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
