export default function RightSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-[300px] sticky top-24 h-fit gap-4">
      {/* About Coorder */}
      <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30">
        <h4 className="font-headline-md text-headline-md mb-4">About Coorder</h4>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
          The democratic way to shop. Leverage collective bargaining to get wholesale prices on the products you love.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-primary flex-shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              security
            </span>
            <div>
              <p className="font-label-bold text-label-bold">Escrow Protected</p>
              <p className="text-[11px] text-on-surface-variant">Funds are only released once the group buy is fulfilled.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-primary flex-shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
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

      {/* Top Active Groups */}
      <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30">
        <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-3 uppercase">
          TOP ACTIVE GROUPS
        </h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-headline-md text-headline-md text-surface-variant">01</span>
            <div className="flex-1 min-w-0">
              <p className="font-label-bold text-label-bold line-clamp-1">RTX 4080 Founders Ed.</p>
              <p className="text-[10px] text-primary font-bold">95% Complete</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-3">
            <span className="font-headline-md text-headline-md text-surface-variant">02</span>
            <div className="flex-1 min-w-0">
              <p className="font-label-bold text-label-bold line-clamp-1">Herman Miller Embody</p>
              <p className="text-[10px] text-primary font-bold">82% Complete</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-3">
            <span className="font-headline-md text-headline-md text-surface-variant">03</span>
            <div className="flex-1 min-w-0">
              <p className="font-label-bold text-label-bold line-clamp-1">Sony WH-1000XM5</p>
              <p className="text-[10px] text-primary font-bold">60% Complete</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
