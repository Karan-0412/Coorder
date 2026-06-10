import { Header } from '../components';

interface LocalDeal {
  id: number;
  title: string;
  location: string;
  members: number;
  distance: string;
  image: string;
}

export default function MapPage() {
  const localDeals: LocalDeal[] = [
    {
      id: 1,
      title: 'Coffee Grinder Group',
      location: 'Downtown Coffee Shop',
      members: 8,
      distance: '0.3 mi',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Gaming Peripherals Meetup',
      location: 'Central Mall - 3rd Floor',
      members: 12,
      distance: '0.8 mi',
      image: 'https://images.unsplash.com/photo-1587829191301-c5a9e5f8e6a8?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Smart Home Devices',
      location: 'Tech Hub Downtown',
      members: 5,
      distance: '1.2 mi',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />

      <main className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-100px)]">
        {/* Map Area (Placeholder) */}
        <div className="hidden lg:flex flex-1 bg-surface-container items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">
              map
            </span>
            <p className="text-body-md text-on-surface-variant">Map integration placeholder</p>
            <p className="text-label-sm text-on-surface-variant mt-2">
              Integrate with Google Maps or Mapbox for live location data
            </p>
          </div>
        </div>

        {/* Deals List */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 max-w-md lg:max-w-full">
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-headline-lg text-headline-lg">Local Deals</h1>
            <button className="px-md py-sm bg-primary text-on-primary rounded-lg font-label-bold hover:opacity-80 transition-opacity">
              Filter
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search local deals..."
              className="w-full px-md py-sm rounded-lg bg-surface-container border border-outline-variant text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Deals Grid */}
          <div className="space-y-4">
            {localDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden hover:border-primary/30 transition-colors shadow-sm cursor-pointer"
              >
                <div className="flex gap-4 p-3">
                  <img
                    alt={deal.title}
                    src={deal.image}
                    className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline-md text-headline-md truncate mb-1">
                      {deal.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] text-on-surface-variant mb-2">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      <span className="truncate">{deal.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[10px] text-on-surface-variant">
                        <span className="material-symbols-outlined text-[14px]">group</span>
                        {deal.members} members
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-primary font-bold">
                        <span className="material-symbols-outlined text-[14px]">near_me</span>
                        {deal.distance}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-6">
            <button className="px-6 py-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg font-label-bold hover:bg-surface-container-high transition-colors">
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
