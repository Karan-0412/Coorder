import { useState } from 'react';

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
  spotsProgress: number;
  totalSpots: number;
  joinPrice?: string;
  likes: number;
  comments: number;
  onJoin?: () => void;
}

export default function GroupBuyCard({
  title, description, imageUrl, communityIcon, communityName, username, timePosted,
  isEscrowProtected = true, spotsProgress, totalSpots, joinPrice, likes, comments, onJoin,
}: GroupBuyCardProps) {
  const filledSpots = Math.round((spotsProgress / 100) * totalSpots);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [burst, setBurst] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((n) => n - 1);
    } else {
      setLiked(true);
      setLikeCount((n) => n + 1);
      setBurst(true);
      setTimeout(() => setBurst(false), 600);
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden hover:border-primary/40 transition-colors shadow-sm">
      <div className="p-3 md:p-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary">
              {communityIcon}
            </div>
            <div className="flex flex-col">
              <span className="font-label-bold text-label-bold text-on-surface">{communityName}</span>
              <span className="text-[10px] text-on-surface-variant">Posted by {username} · {timePosted}</span>
            </div>
          </div>
          {isEscrowProtected && (
            <div className="flex items-center gap-1 px-2 py-1 bg-tertiary/10 text-tertiary rounded-full">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Escrow</span>
            </div>
          )}
        </div>

        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">{description}</p>

        {/* Image */}
        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-surface-container mb-4 group">
          <img alt={title} src={imageUrl} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Progress */}
        <div className="w-full mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[11px] font-bold text-primary">GROUP PROGRESS</span>
            <span className="text-[11px] font-bold text-on-surface-variant">{filledSpots}/{totalSpots} SPOTS FILLED</span>
          </div>
          <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${spotsProgress}%` }} />
          </div>
        </div>

        {/* Engagement */}
        <div className="flex items-center justify-between border-t border-outline-variant/20 pt-3">
          <div className="flex gap-4">
            {/* Like with burst */}
            <button onClick={handleLike} className="relative flex items-center gap-1.5 group" aria-label={liked ? 'Unlike' : 'Like'}>
              {burst && (
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-primary animate-like-burst"
                      style={{ transform: `rotate(${i * 60}deg) translateY(-14px)`, animationDelay: `${i * 30}ms` }}
                    />
                  ))}
                </span>
              )}
              <span
                className={`material-symbols-outlined text-[20px] transition-all duration-200 ${liked ? 'text-primary scale-125' : 'text-on-surface-variant group-hover:text-primary'}`}
                style={liked ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                thumb_up
              </span>
              <span className={`font-label-bold text-label-bold ${liked ? 'text-primary' : 'text-on-surface-variant'}`}>
                {likeCount > 999 ? `${(likeCount / 1000).toFixed(1)}k` : likeCount}
              </span>
            </button>

            <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">mode_comment</span>
              <span className="font-label-bold text-label-bold">{comments > 999 ? `${(comments / 1000).toFixed(1)}k` : comments}</span>
            </button>
            <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
          </div>

          {joinPrice && (
            <button onClick={onJoin} className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-bold text-label-bold active:scale-95 transition-all hover:opacity-80">
              Join for ${joinPrice}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
