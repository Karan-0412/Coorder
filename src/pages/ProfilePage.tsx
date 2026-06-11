import { Header } from '../components';
import { imageUrls, profileStats, recentPurchases } from '../data/mockData';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />

      <main className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-8 mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Profile Info */}
        <div className="md:col-span-1 space-y-6">
          
          {/* Profile Card */}
          <div className="glass-card rounded-2xl p-6 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto rounded-full p-1 bg-white shadow-sm mb-4">
                <img 
                  alt="Sarah Chen" 
                  className="w-full h-full rounded-full object-cover" 
                  src={imageUrls.profileAvatar}
                />
              </div>
              <h1 className="font-headline-md text-headline-md mb-1">Sarah Chen</h1>
              <p className="text-[12px] text-on-surface-variant mb-4">@sarahc | Joined Jan 2024</p>
              
              <div className="flex justify-center gap-2 mb-6">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Pro Buyer
                </span>
              </div>

              <button className="w-full bg-surface-container border border-outline-variant text-on-surface py-2 rounded-xl font-label-bold hover:bg-surface-container-high transition-colors shadow-sm">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Settings Menu */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors text-left border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                <span className="font-label-bold text-on-surface">Notifications</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors text-left border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">lock</span>
                <span className="font-label-bold text-on-surface">Privacy & Security</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors text-left">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">help</span>
                <span className="font-label-bold text-on-surface">Help & Support</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
            </button>
          </div>
          
          <button className="w-full flex items-center justify-center gap-2 p-4 text-error hover:bg-error/10 transition-colors rounded-2xl font-label-bold">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>

        {/* Middle/Right Column: Stats & Activity */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {profileStats.map((stat) => (
              <div key={stat.label} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 text-center shadow-sm hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-primary mb-2 opacity-80">{stat.icon}</span>
                <p className="font-headline-md text-headline-md">{stat.value}</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Wallet / Escrow Card */}
          <div className="bg-gradient-to-br from-primary to-[#FF6B3D] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">Total in Escrow</p>
                <h2 className="font-headline-lg text-4xl font-black tracking-tight mb-2">$389.00</h2>
                <p className="text-[12px] text-white/80 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  Secured across 2 active groups
                </p>
              </div>
              <button className="bg-white text-primary px-5 py-2.5 rounded-xl font-label-bold shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                Wallet Details
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-sm text-headline-sm">Recent Activity</h3>
              <button className="text-primary text-sm font-label-bold hover:underline">View All</button>
            </div>

            <div className="space-y-4">
              {recentPurchases.map((purchase) => (
                <div key={purchase.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant">shopping_bag</span>
                    </div>
                    <div>
                      <p className="font-label-bold text-label-bold line-clamp-1">{purchase.title}</p>
                      <p className="text-[11px] text-on-surface-variant mt-0.5">{purchase.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                    <p className="font-headline-sm text-headline-sm">{purchase.price}</p>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-1 ${purchase.statusColor} ${purchase.bgStatusColor}`}>
                      {purchase.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
