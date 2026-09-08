'use client';
import { use } from 'react';
import SiteShell from '@/components/SiteShell';
import { blogPosts, getBlogBySlug } from '@/data/blog';

export default function BlogDetailPage({ params }) {
  const { slug } = use(params);
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <SiteShell>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-kf-text mb-4">Article Not Found</h1>
            <a href="/blog" className="text-kf-gold hover:underline">Back to Blog</a>
          </div>
        </div>
      </SiteShell>
    );
  }

  const others = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 pt-20 max-w-3xl">
          <span className="text-xs font-semibold text-kf-gold uppercase tracking-wide">{post.category}</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <p className="font-serif text-xl text-kf-text leading-relaxed mb-6">{post.excerpt}</p>
          <p className="text-kf-muted leading-relaxed text-base">{post.content}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-kf-text mb-8 text-center">More Articles</h2>
          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {others.map(p => (
              <a key={p.id} href={'/blog/' + p.slug} className="group rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden h-44"><img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-kf-gold uppercase">{p.category}</span>
                  <h3 className="font-serif text-base font-bold text-kf-text mt-1 group-hover:text-kf-gold transition-colors">{p.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
