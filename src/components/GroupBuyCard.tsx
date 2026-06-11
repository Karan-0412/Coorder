interface GroupBuyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  communityIcon: string;
  communityName: string;
  username: string;
  timePosted: string;
  isEscrowProtected?: boolean;
  groupStatus?: 'active' | 'pending' | 'filled';
  spotsLeft?: number;
  currentPrice: string;
  originalPrice?: string;
  spotsProgress: number; // 0-100
  totalSpots: number;
  joinPrice?: string;
  likes: number;
  comments: number;
  onJoin?: () => void;
}

export default function GroupBuyCard({
  title,
  description,
  imageUrl,
  communityIcon,
  communityName,
  username,
  timePosted,
  isEscrowProtected = true,
  spotsProgress,
  totalSpots,
  joinPrice,
  likes,
  comments,
  onJoin,
}: GroupBuyCardProps) {
  const filledSpots = Math.round((spotsProgress / 100) * totalSpots);

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden hover:border-primary/30 transition-colors shadow-sm">
      <div className="p-3 md:p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary">
              {communityIcon}
            </div>
            <div className="flex flex-col">
              <span className="font-label-bold text-label-bold">{communityName}</span>
              <span className="text-[10px] text-on-surface-variant">
                Posted by {username} | {timePosted}
              </span>
            </div>
          </div>
          {isEscrowProtected && (
            <div className="flex items-center gap-1 px-2 py-1 bg-tertiary/10 text-tertiary rounded-full">
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Escrow Protected
              </span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">
          {description}
        </p>

        {/* Image */}
        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-surface-container mb-4 group">
          <img
            alt={title}
            src={imageUrl}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Stats and Actions */}
        <div className="flex flex-col gap-4">
          {/* Progress Bar */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-primary">GROUP PROGRESS</span>
              <span className="text-[11px] font-bold text-on-surface-variant">
                {filledSpots}/{totalSpots} SPOTS FILLED
              </span>
            </div>
            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-1000"
                style={{ width: `${spotsProgress}%` }}
              />
            </div>
          </div>

          {/* Engagement */}
          <div className="flex items-center justify-between border-t border-outline-variant/20 pt-3">
            <div className="flex gap-4">
              <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                <span className="font-label-bold text-label-bold">
                  {likes > 999 ? `${(likes / 1000).toFixed(1)}k` : likes}
                </span>
              </button>
              <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">mode_comment</span>
                <span className="font-label-bold text-label-bold">
                  {comments > 999 ? `${(comments / 1000).toFixed(1)}k` : comments}
                </span>
              </button>
              <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </button>
            </div>
            {joinPrice && (
              <button
                onClick={onJoin}
                className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-bold text-label-bold active:scale-95 transition-all hover:opacity-80"
              >
                Join for ${joinPrice}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
