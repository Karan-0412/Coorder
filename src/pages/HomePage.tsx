import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar, FeaturedDealCard, GroupBuyCard, CategoryFilter } from '../components';
import { categories, featuredDeal, groupBuyDeals } from '../data/mockData';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('group-buys');

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />

      <main className="max-w-[1200px] mx-auto flex gap-6 px-margin-mobile md:px-margin-desktop py-6 mb-20">
        <Sidebar />

        <section className="flex-1 max-w-max-width-content mx-auto w-full flex flex-col gap-4">
          <CategoryFilter categories={categories} onCategoryChange={setActiveCategory} defaultCategory={activeCategory} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="md:col-span-2">
              <Link to="/group/1">
                <FeaturedDealCard {...featuredDeal} onJoin={() => {}} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {groupBuyDeals.map((deal) => (
              <GroupBuyCard key={deal.id} {...deal} onJoin={() => {}} />
            ))}
          </div>

          <div className="flex justify-center py-8">
            <button className="px-6 py-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg font-label-bold hover:bg-surface-container-high transition-colors">
              Load More Deals
            </button>
          </div>
        </section>

        {/* Right Sidebar (Desktop Only) */}
        <aside className="hidden xl:flex flex-col w-[300px] sticky top-24 h-fit gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30">
            <h4 className="font-headline-md text-headline-md mb-4">About Coorder</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              The democratic way to shop. Leverage collective bargaining to get wholesale prices on the products you love.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <div>
                  <p className="font-label-bold text-label-bold">Escrow Protected</p>
                  <p className="text-[11px] text-on-surface-variant">Funds are only released once the group buy is fulfilled.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                <div>
                  <p className="font-label-bold text-label-bold">Power in Numbers</p>
                  <p className="text-[11px] text-on-surface-variant">Unlock tier-based discounts as more people join.</p>
                </div>
              </div>
            </div>
            <Link
              to="/post-deal"
              className="block w-full mt-6 bg-primary text-on-primary py-3 rounded-full font-label-bold text-label-bold shadow-lg hover:opacity-90 active:scale-95 transition-all text-center"
            >
              Start Your Own Group
            </Link>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30">
            <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-3 uppercase">Top Active Groups</h4>
            <div className="space-y-4">
              {[
                { rank: '01', name: 'RTX 4080 Founders Ed.', pct: '95%' },
                { rank: '02', name: 'Herman Miller Embody', pct: '82%' },
                { rank: '03', name: 'Sony WH-1000XM5', pct: '60%' },
              ].map(({ rank, name, pct }, i) => (
                <div key={rank} className={`flex items-center gap-3 ${i > 0 ? 'border-t border-outline-variant/10 pt-3' : ''}`}>
                  <span className="font-headline-md text-headline-md text-surface-variant">{rank}</span>
                  <div className="flex-1">
                    <p className="font-label-bold text-label-bold line-clamp-1">{name}</p>
                    <p className="text-[10px] text-primary font-bold">{pct} Complete</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
