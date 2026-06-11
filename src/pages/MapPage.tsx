import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LocalDeal {
  id: number;
  title: string;
  location: string;
  members: number;
  distance: string;
  image: string;
  price: string;
}

export default function MapPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(true);

  const localDeals: LocalDeal[] = [
    {
      id: 1,
      title: 'Coffee Grinder Group Buy',
      location: 'Downtown Coffee Shop',
      members: 8,
      distance: '0.3 mi',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWqkOhN08yuztUOOL1wPxInkPIYAnUDhI0PYFKv7NtwocUT8zXr5WFUyR8kM8MF1OuAdwbW9-Op3lOUCypgCppN4ZPfnN-H0a2OwFyRqLepllW2e6GieZxy_4gi2l7ExZmJRhAKxIQzWzc_X1gE7EBpv3c1_d7EaPUHLcZidz5UJ2bBpdwjJ-OE8s9Vu94Cbt4LjKPglbpyHpII528OhRcFIWVS8y5vO25Hwm20uw5RLP6vCWDCPtODdfHuG38HeCbTJwkDeOKEsU',
      price: '$240',
    },
    {
      id: 2,
      title: 'Smart Home Devices',
      location: 'Tech Hub Downtown',
      members: 5,
      distance: '1.2 mi',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvBysmIp848sGcF4LaKhQeMOdpE9lpNOkd6exqrQv6zi3s_YhEabCvOfHY7oRJBLWPpsnP74ndQtfFLKJakOL-RrGrqEhvwOMj39Q7PsyKyTuZHg3CMMiCuAHlTCDOz7qsOlmc6wCfVL_t0yXWqwr5rn3_P-7l4h0RxC5raKbEMDWPsDQdbowPO_SAQK-Xtgc3RyYIOkawSUA-G7C7CK44HfhsD4TMTXYOV83zcqx5kxEIzrMNfg1idwz0dl12-t-NUEZz8N_iw2c',
      price: '$59',
    },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden text-on-surface">
      
      {/* Interactive Map Background */}
      <div className="fixed inset-0 z-0 bg-[#E8EAED]">
        <img 
          alt="Map Background" 
          className="w-full h-full object-cover opacity-80" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEV5-D4jT-3-r5bF9A_FzWj9R9H-P1Zc5oK8Iq9y3VqQJ_3I_R4hB9Y2lK-A2K8b-8gH6Z8Wc2I5H2K7R9y7F3J4M0L5v8o_x_C3E5T0N8S5A1J7g6Q4c8N8P0Q5Q3P0Q5A9J4G8L0E8Q0E0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0" 
        />
        
        {/* Map Markers */}
        <div className="absolute top-[30%] left-[40%] group cursor-pointer z-10 transform -translate-x-1/2 -translate-y-full hover:z-20">
          <div className="bg-primary text-white font-bold text-[12px] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 marker-pulse group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[14px]">local_cafe</span>
            $240
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary mx-auto"></div>
        </div>

        <div className="absolute top-[50%] left-[60%] group cursor-pointer z-10 transform -translate-x-1/2 -translate-y-full hover:z-20">
          <div className="bg-surface text-on-surface font-bold text-[12px] px-3 py-1.5 rounded-full shadow-lg border border-outline-variant/30 flex items-center gap-1 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all group-hover:border-primary">
            <span className="material-symbols-outlined text-[14px]">router</span>
            $59
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-surface group-hover:border-t-primary mx-auto transition-colors"></div>
        </div>
        
        {/* User Location Marker */}
        <div className="absolute top-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-[#4285F4] rounded-full border-2 border-white shadow-[0_0_10px_rgba(66,133,244,0.6)] relative">
            <div className="absolute inset-0 bg-[#4285F4] rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
      </div>

      {/* Floating Top Bar */}
      <div className="fixed top-4 left-4 right-4 z-20 flex gap-2 pointer-events-none">
        <Link to="/" className="w-12 h-12 bg-surface rounded-full shadow-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors pointer-events-auto shrink-0">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="flex-1 max-w-[400px] bg-surface rounded-full shadow-md flex items-center px-4 pointer-events-auto border border-outline-variant/20 focus-within:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
          <input 
            type="text" 
            placeholder="Search deals nearby..." 
            className="w-full bg-transparent border-none outline-none py-3 text-body-md text-on-surface placeholder:text-on-surface-variant" 
          />
        </div>
      </div>

      {/* Bottom Sheet Container (Desktop: Side Panel, Mobile: Bottom Sheet) */}
      <div className={`fixed bottom-0 left-0 w-full lg:w-[400px] lg:left-4 lg:bottom-4 lg:top-24 bg-surface lg:rounded-2xl rounded-t-3xl shadow-[0_-8px_32px_rgba(0,0,0,0.12)] lg:shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-30 flex flex-col bottom-sheet-transition max-h-[85vh] lg:max-h-none h-fit ${isSheetOpen ? 'translate-y-0' : 'translate-y-[calc(100%-80px)] lg:translate-y-0 lg:-translate-x-[110%]'}`}>
        
        {/* Sheet Handle (Mobile Only) */}
        <div className="lg:hidden w-full flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing" onClick={() => setIsSheetOpen(!isSheetOpen)}>
          <div className="w-12 h-1.5 bg-outline-variant/40 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface rounded-t-3xl lg:rounded-t-2xl">
          <h2 className="font-headline-md text-headline-md">Local Deals</h2>
          <button className="text-primary text-sm font-label-bold flex items-center gap-1 hover:opacity-80">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filters
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="overflow-y-auto flex-1 p-4 pb-24 lg:pb-4 space-y-4 hide-scrollbar">
          {localDeals.map(deal => (
            <div key={deal.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary/30 transition-colors shadow-sm cursor-pointer p-3 flex gap-4">
              <img 
                alt={deal.title} 
                className="w-20 h-20 rounded-lg object-cover shrink-0" 
                src={deal.image} 
              />
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-label-bold text-label-bold line-clamp-1 mb-1">{deal.title}</h3>
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {deal.distance} • {deal.location}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[11px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">groups</span>
                    {deal.members} joining
                  </span>
                  <span className="font-headline-sm text-primary">{deal.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Button for Desktop when Sidebar is hidden */}
      <button 
        onClick={() => setIsSheetOpen(true)}
        className={`hidden lg:flex fixed left-4 top-24 w-12 h-12 bg-surface rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] items-center justify-center text-on-surface-variant hover:text-primary transition-all z-20 ${!isSheetOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Bottom Navigation Component would usually go here, omitting for focus on map UI */}
    </div>
  );
}
