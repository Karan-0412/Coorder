import { useState } from 'react';
import { Header, Sidebar, FeaturedDealCard, GroupBuyCard, CategoryFilter } from '../components';
import type { Category } from '../components/CategoryFilter';

export default function HomePage() {
  const [_activeCategory, setActiveCategory] = useState('group-buys');

  const categories: Category[] = [
    { id: 'group-buys', name: 'Group Buys' },
    { id: 'flash-sales', name: 'Flash Sales' },
    { id: 'coupons', name: 'Coupons' },
    { id: 'bundles', name: 'Bundles' },
  ];

  const sampleDeals = [
    {
      id: 1,
      title: 'Ultimate Smart Home Bundle: 4x Smart Plugs + Hub',
      description:
        'Looking for 5 more members to unlock the bulk discount. Currently at 45% off MSRP! All orders handled via Coorder Escrow for guaranteed safety.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      communityIcon: 'T',
      communityName: 'r/TechGroup',
      username: 'u/DealFinder',
      timePosted: '2h ago',
      isEscrowProtected: true,
      groupStatus: 'active' as const,
      currentPrice: '$59.00',
      originalPrice: '$120.00',
      spotsProgress: 70,
      totalSpots: 10,
      joinPrice: '59',
      likes: 1200,
      comments: 84,
    },
    {
      id: 2,
      title: 'Comandante C40 MK4 Grinder - Limited Liquid Amber',
      description: 'Secured a wholesale lot of 12 grinders. 9 already spoken for. Escrow protection enabled.',
      imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&h=600&fit=crop',
      communityIcon: 'C',
      communityName: 'r/CoffeeNerd',
      username: 'u/BaristaLife',
      timePosted: '5h ago',
      isEscrowProtected: true,
      groupStatus: 'active' as const,
      currentPrice: '$89.99',
      originalPrice: '$149.99',
      spotsProgress: 75,
      totalSpots: 12,
      joinPrice: '89.99',
      likes: 452,
      comments: 28,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />

      <main className="max-w-[1200px] mx-auto flex gap-6 px-margin-mobile md:px-margin-desktop py-6 mb-20">
        <Sidebar />

        <section className="flex-1 max-w-max-width-content mx-auto w-full flex flex-col gap-4">
          {/* Category Filter (Mobile/Tablet) */}
          <CategoryFilter
            categories={categories}
            onCategoryChange={setActiveCategory}
            defaultCategory="group-buys"
          />

          {/* Featured Deal */}
          <FeaturedDealCard
            title="ErgoPro X9 Mechanical Keyboard"
            imageUrl="https://images.unsplash.com/photo-1587829191301-c5a9e5f8e6a8?w=800&h=600&fit=crop"
            status="active"
            spotsLeft={3}
            currentPrice="$149.00"
            originalPrice="$229.00"
            badge="Group Active"
            onJoin={() => alert('Joined group!')}
          />

          {/* Feed Posts */}
          <div className="space-y-4">
            {sampleDeals.map((deal) => (
              <GroupBuyCard
                key={deal.id}
                title={deal.title}
                description={deal.description}
                imageUrl={deal.imageUrl}
                communityIcon={deal.communityIcon}
                communityName={deal.communityName}
                username={deal.username}
                timePosted={deal.timePosted}
                isEscrowProtected={deal.isEscrowProtected}
                groupStatus={deal.groupStatus}
                currentPrice={deal.currentPrice}
                originalPrice={deal.originalPrice}
                spotsProgress={deal.spotsProgress}
                totalSpots={deal.totalSpots}
                joinPrice={deal.joinPrice}
                likes={deal.likes}
                comments={deal.comments}
                onJoin={() => alert(`Joined ${deal.title}!`)}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center py-8">
            <button className="px-6 py-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg font-label-bold hover:bg-surface-container-high transition-colors">
              Load More Deals
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
