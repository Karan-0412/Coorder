import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import { imageUrls, localDeals } from '../data/mockData';

export default function MapPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden text-on-surface">

      {/* Shared top nav — desktop only */}
      <div className="hidden md:block relative z-[100]">
        <Header />
      </div>

      {/* Full-screen map background */}
      <div className="fixed inset-0 z-0 bg-surface-container-lowest">
        <img
          alt="Map Background"
          className="w-full h-full object-cover opacity-80"
          src={imageUrls.mapBackground}
        />

        {/* Deal markers */}
        {localDeals.map((deal, index) => (
          <div
            key={deal.id}
            className={`absolute ${deal.markerClassName} group cursor-pointer z-10 -translate-x-1/2 -translate-y-full hover:z-20`}
          >
            <div className={`font-bold text-[12px] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 group-hover:scale-110 transition-all ${
              index === 0
                ? 'bg-primary text-on-primary marker-pulse'
                : 'bg-surface text-on-surface border border-outline-variant/30 group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary'
            }`}>
              <span className="material-symbols-outlined text-[14px]">{deal.markerIcon}</span>
              {deal.price}
            </div>
            <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] mx-auto transition-colors ${
              index === 0 ? 'border-t-primary' : 'border-t-surface group-hover:border-t-primary'
            }`} />
          </div>
        ))}

        {/* User location dot */}
        <div className="absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-[#4285F4] rounded-full border-2 border-white shadow-[0_0_10px_rgba(66,133,244,0.6)] relative">
            <div className="absolute inset-0 bg-[#4285F4] rounded-full animate-ping opacity-75" />
          </div>
        </div>
      </div>

      {/* Floating search bar
          Mobile:  top-4  (no header above)
          Desktop: top-[72px] (below the 56px Header) */}
      <div className="fixed top-4 md:top-[72px] left-4 right-4 z-40 flex gap-2 pointer-events-none">
        {/* Back arrow — mobile only */}
        <Link
          to="/"
          className="md:hidden w-12 h-12 bg-surface rounded-full shadow-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors pointer-events-auto shrink-0"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>

        <div className="flex-1 max-w-[400px] bg-surface rounded-full shadow-md flex items-center px-4 pointer-events-auto border border-outline-variant/30 focus-within:border-primary transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
          <input
            type="text"
            placeholder="Search deals nearby..."
            className="w-full bg-transparent border-none outline-none py-3 text-body-md text-on-surface placeholder:text-on-surface-variant"
          />
        </div>
      </div>

      {/* Bottom sheet (mobile) / Side panel (desktop) */}
      <div className={`
        fixed z-30 flex flex-col bottom-sheet-transition bg-surface
        bottom-16 left-0 w-full rounded-t-3xl max-h-[75vh] h-fit
        shadow-[0_-8px_32px_rgba(0,0,0,0.12)]
        lg:bottom-4 lg:left-4 lg:top-[80px] lg:w-[400px] lg:rounded-2xl lg:max-h-none
        lg:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        ${isSheetOpen
          ? 'translate-y-0 lg:translate-x-0'
          : 'translate-y-[calc(100%-80px)] lg:translate-y-0 lg:-translate-x-[110%]'
        }
      `}>

        {/* Drag handle — mobile only */}
        <div
          className="lg:hidden w-full flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing"
          onClick={() => setIsSheetOpen(!isSheetOpen)}
        >
          <div className="w-12 h-1.5 bg-outline-variant/40 rounded-full" />
        </div>

        {/* Panel header */}
        <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center rounded-t-3xl lg:rounded-t-2xl">
          <h2 className="font-headline-md text-headline-md text-on-surface">Local Deals</h2>
          <button className="text-primary text-sm font-label-bold flex items-center gap-1 hover:opacity-80">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filters
          </button>
        </div>

        {/* Deal list */}
        <div className="overflow-y-auto flex-1 p-4 space-y-4 hide-scrollbar">
          {localDeals.map(deal => (
            <div
              key={deal.id}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary/40 transition-colors shadow-sm cursor-pointer p-3 flex gap-4"
            >
              <img alt={deal.title} className="w-20 h-20 rounded-lg object-cover shrink-0" src={deal.image} />
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-label-bold text-label-bold text-on-surface line-clamp-1 mb-1">{deal.title}</h3>
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {deal.distance} · {deal.location}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[11px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">groups</span>
                    {deal.members} joining
                  </span>
                  <span className="font-label-bold text-primary">{deal.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Re-open button — desktop, only when panel is closed */}
      <button
        onClick={() => setIsSheetOpen(true)}
        className={`hidden lg:flex fixed left-4 top-24 w-12 h-12 bg-surface rounded-full shadow items-center justify-center text-on-surface-variant hover:text-primary transition-all z-20 ${
          !isSheetOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  );
}
