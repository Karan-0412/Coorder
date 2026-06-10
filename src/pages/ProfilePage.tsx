import { Header } from '../components';

interface ProfileStats {
  label: string;
  value: number | string;
  icon?: string;
}

export default function ProfilePage() {
  const stats: ProfileStats[] = [
    { label: 'Groups Joined', value: 12, icon: 'group' },
    { label: 'Total Saved', value: '$1,248', icon: 'savings' },
    { label: 'Reviews Left', value: 48, icon: 'rate_review' },
  ];

  const recentPurchases = [
    {
      id: 1,
      title: 'ErgoPro X9 Keyboard',
      price: '$149.00',
      date: 'Mar 15, 2024',
      status: 'Delivered',
    },
    {
      id: 2,
      title: 'Smart Home Bundle',
      price: '$59.00',
      date: 'Mar 12, 2024',
      status: 'In Transit',
    },
    {
      id: 3,
      title: 'Coffee Grinder',
      price: '$89.99',
      date: 'Mar 8, 2024',
      status: 'Delivered',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header showUserProfile={false} />

      <main className="max-w-[640px] mx-auto px-margin-mobile md:px-margin-desktop py-6">
        {/* Profile Header */}
        <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 p-6 mb-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden mb-4 border-4 border-primary/20">
              <img
                alt="Profile"
                src="https://via.placeholder.com/80"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-1">Sarah Chen</h2>
            <p className="text-body-md text-on-surface-variant mb-4">@sarahchen • Member since Jan 2024</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button className="px-md py-sm bg-primary text-on-primary rounded-lg font-label-bold hover:opacity-80 transition-opacity">
                Edit Profile
              </button>
              <button className="px-md py-sm bg-surface-container border border-outline-variant text-on-surface rounded-lg font-label-bold hover:opacity-80 transition-opacity">
                Settings
              </button>
              <button className="px-md py-sm bg-surface-container border border-outline-variant text-on-surface rounded-lg font-label-bold hover:opacity-80 transition-opacity">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 p-6 mb-6">
          <h3 className="font-label-bold text-label-bold text-on-surface-variant mb-4">Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                {stat.icon && (
                  <div className="flex justify-center mb-2">
                    <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
                  </div>
                )}
                <p className="font-headline-md text-headline-md text-primary">{stat.value}</p>
                <p className="text-label-sm text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Purchases */}
        <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 p-6 mb-6">
          <h3 className="font-label-bold text-label-bold text-on-surface-variant mb-4">Recent Purchases</h3>
          <div className="space-y-3">
            {recentPurchases.map((purchase) => (
              <div
                key={purchase.id}
                className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-label-bold text-label-bold">{purchase.title}</p>
                  <div className="flex gap-2 text-[10px] text-on-surface-variant mt-1">
                    <span>{purchase.date}</span>
                    <span>•</span>
                    <span
                      className={`font-bold ${
                        purchase.status === 'Delivered'
                          ? 'text-primary'
                          : 'text-secondary'
                      }`}
                    >
                      {purchase.status}
                    </span>
                  </div>
                </div>
                <p className="font-headline-md text-headline-md text-primary">{purchase.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 p-6">
          <h3 className="font-label-bold text-label-bold text-on-surface-variant mb-4">Preferences</h3>
          <div className="space-y-3">
            {['Email Notifications', 'Two-Factor Authentication', 'Public Profile'].map(
              (preference) => (
                <div
                  key={preference}
                  className="flex items-center justify-between p-3 bg-surface rounded-lg"
                >
                  <p className="font-label-bold text-label-bold">{preference}</p>
                  <button className="w-10 h-6 bg-primary rounded-full relative transition-colors hover:opacity-80">
                    <span className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
