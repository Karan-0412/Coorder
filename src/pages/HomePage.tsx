import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar, FeaturedDealCard, GroupBuyCard, CategoryFilter } from '../components';
import type { Category } from '../components/CategoryFilter';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('group-buys');

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
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvBysmIp848sGcF4LaKhQeMOdpE9lpNOkd6exqrQv6zi3s_YhEabCvOfHY7oRJBLWPpsnP74ndQtfFLKJakOL-RrGrqEhvwOMj39Q7PsyKyTuZHg3CMMiCuAHlTCDOz7qsOlmc6wCfVL_t0yXWqwr5rn3_P-7l4h0RxC5raKbEMDWPsDQdbowPO_SAQK-Xtgc3RyYIOkawSUA-G7C7CK44HfhsD4TMTXYOV83zcqx5kxEIzrMNfg1idwz0dl12-t-NUEZz8N_iw2c',
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
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWqkOhN08yuztUOOL1wPxInkPIYAnUDhI0PYFKv7NtwocUT8zXr5WFUyR8kM8MF1OuAdwbW9-Op3lOUCypgCppN4ZPfnN-H0a2OwFyRqLepllW2e6GieZxy_4gi2l7ExZmJRhAKxIQzWzc_X1gE7EBpv3c1_d7EaPUHLcZidz5UJ2bBpdwjJ-OE8s9Vu94Cbt4LjKPglbpyHpII528OhRcFIWVS8y5vO25Hwm20uw5RLP6vCWDCPtODdfHuG38HeCbTJwkDeOKEsU',
      communityIcon: 'C',
      communityName: 'r/CoffeeNerd',
      username: 'u/BaristaLife',
      timePosted: '5h ago',
      isEscrowProtected: true,
      groupStatus: 'active' as const,
      currentPrice: '$240.00',
      originalPrice: '$320.00',
      spotsProgress: 75,
      totalSpots: 12,
      joinPrice: '240',
      likes: 452,
      comments: 12,
    },
  ];

  return (
    <div className="bg-background text-on-surface">
      <Header />

      <main className="max-w-[1200px] mx-auto flex gap-6 px-margin-mobile md:px-margin-desktop py-6 mb-20">
        <Sidebar />

        <section className="flex-1 flex flex-col gap-4">
          {/* Category Filter (Mobile/Tablet) */}
          <CategoryFilter
            categories={categories}
            onCategoryChange={setActiveCategory}
            defaultCategory={activeCategory}
          />

          {/* Featured Deal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="md:col-span-2">
              <Link to="/group/1">
                <FeaturedDealCard
                  title="ErgoPro X9 Mechanical Keyboard"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAGYsEI_hskevDIZ3GNTB5wnekX4JmnMq2W_x2Aqzfp1z_xBRwL_ZxOdkBWqbpC9uYj0AWaRmDrNYlSvVpgxi78ddgCQ2pIpx7mAiTrnkDIMVSBGGX6FCLmJIoXFYFdJWHb7ex0enp_b07gLT5jeAYu7E_SalcZGrwO_xrLXCeqLD31HfeCVCNyGHnk7Vq2xbLMGwAstH6_QFcbkVMeLtDT0uL4ke0b1Ih0g8zIqABJdwuHKfDwoPKRzbZXQsKFJFQP_BV1PFm69G0"
                  status="active"
                  spotsLeft={3}
                  currentPrice="$149.00"
                  originalPrice="$229.00"
                  badge="Group Active"
                  onJoin={() => {}}
                />
              </Link>
            </div>
          </div>

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
                onJoin={() => {}}
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

        {/* Right Sidebar (Desktop Only) */}
        <aside className="hidden xl:flex flex-col w-[300px] sticky top-24 h-fit gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30">
            <h4 className="font-headline-md text-headline-md mb-4">About Coorder</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              The democratic way to shop. Leverage collective bargaining to get wholesale prices on the products you love.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  security
                </span>
                <div>
                  <p className="font-label-bold text-label-bold">Escrow Protected</p>
                  <p className="text-[11px] text-on-surface-variant">Funds are only released once the group buy is fulfilled.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  groups
                </span>
                <div>
                  <p className="font-label-bold text-label-bold">Power in Numbers</p>
                  <p className="text-[11px] text-on-surface-variant">Unlock tier-based discounts as more people join.</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-primary text-white py-3 rounded-full font-label-bold text-label-bold shadow-lg hover:opacity-90 active:scale-95 transition-all">
              Start Your Own Group
            </button>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30">
            <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-3 uppercase">TOP ACTIVE GROUPS</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-headline-md text-headline-md text-surface-variant">01</span>
                <div className="flex-1">
                  <p className="font-label-bold text-label-bold line-clamp-1">RTX 4080 Founders Ed.</p>
                  <p className="text-[10px] text-primary font-bold">95% Complete</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-3">
                <span className="font-headline-md text-headline-md text-surface-variant">02</span>
                <div className="flex-1">
                  <p className="font-label-bold text-label-bold line-clamp-1">Herman Miller Embody</p>
                  <p className="text-[10px] text-primary font-bold">82% Complete</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-3">
                <span className="font-headline-md text-headline-md text-surface-variant">03</span>
                <div className="flex-1">
                  <p className="font-label-bold text-label-bold line-clamp-1">Sony WH-1000XM5</p>
                  <p className="text-[10px] text-primary font-bold">60% Complete</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container dark:bg-surface-container-lowest flex justify-around items-center px-4 pb-safe pt-2 rounded-t-xl shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <Link to="/" className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-5 py-1.5 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
          <span className="text-[10px] font-medium">Deals</span>
        </Link>
        <Link to="/map" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant py-2 hover:bg-surface-variant/50 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined">map</span>
          <span className="text-[10px] font-medium">Map</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant py-2 hover:bg-surface-variant/50 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-[10px] font-medium">Chat</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant py-2 hover:bg-surface-variant/50 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
