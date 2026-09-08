'use client';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import PortfolioGrid from '@/components/PortfolioGrid';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';

export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageHero title="Portfolio" subtitle="Real people, real stories, real emotions. Browse our collection of captured moments." image="https://images.pexels.com/photos/37597038/pexels-photo-37597038.jpeg?auto=compress&cs=tinysrgb&w=1920" breadcrumb="Home / Portfolio" />
      
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <PortfolioGrid items={portfolioItems} categories={portfolioCategories} />
        </div>
      </section>
    </SiteShell>
  );
}
