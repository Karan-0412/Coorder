import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearchClick?: () => void;
  showUserProfile?: boolean;
}

export default function Header({ onSearchClick, showUserProfile = true }: HeaderProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-surface shadow-sm">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-gutter py-md">
        <Link to="/" className="flex items-center gap-4">
          <span className="font-headline-lg text-headline-lg text-primary font-black tracking-tight">
            Coorder
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`flex items-center gap-1 font-label-bold text-label-bold transition-opacity ${
              isActive('/') ? 'text-primary' : 'text-on-surface-variant hover:opacity-80'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
            Deals
          </Link>
          <button className="flex items-center gap-1 font-label-bold text-label-bold text-on-surface-variant hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">map</span>
            Map
          </button>
          <Link
            to="/chat"
            className={`flex items-center gap-1 font-label-bold text-label-bold transition-opacity ${
              isActive('/chat') ? 'text-primary' : 'text-on-surface-variant hover:opacity-80'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">forum</span>
            Chat
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSearchClick}
            className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95"
          >
            search
          </button>
          {showUserProfile && (
            <Link
              to="/profile"
              className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
            >
              <img
                alt="User"
                src="https://via.placeholder.com/32"
                className="w-full h-full object-cover"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
