interface FeaturedDealCardProps {
  title: string;
  imageUrl: string;
  status: 'active' | 'pending';
  spotsLeft: number;
  currentPrice: string;
  originalPrice: string;
  onJoin?: () => void;
  badge?: string;
}

export default function FeaturedDealCard({
  title,
  imageUrl,
  status,
  spotsLeft,
  currentPrice,
  originalPrice,
  onJoin,
}: FeaturedDealCardProps) {
  return (
    <div className="w-full relative h-[320px] rounded-xl overflow-hidden shadow-sm group cursor-pointer">
      {/* Background Image */}
      <img
        alt={title}
        src={imageUrl}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
        {/* Top Badges */}
        <div className="flex gap-2 mb-3">
          <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
            {status === 'active' ? 'Group Active' : 'Group Pending'}
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-white/30">
            {spotsLeft} Spots Left
          </span>
        </div>

        {/* Title */}
        <h2 className="font-headline-lg text-headline-lg text-white mb-2">
          {title}
        </h2>

        {/* Footer with Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl">{currentPrice}</span>
            <span className="text-white/60 line-through text-sm">{originalPrice}</span>
          </div>
          <button
            onClick={onJoin}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-label-bold text-label-bold transition-all shadow-lg active:scale-95"
          >
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
}
