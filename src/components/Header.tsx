import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearchClick?: () => void;
  showUserProfile?: boolean;
}

export default function Header({ onSearchClick, showUserProfile = true }: HeaderProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full top-0 sticky z-[100] shadow-sm dark:shadow-none bg-surface dark:bg-surface-dim flex justify-between items-center px-gutter py-md">
      <Link to="/" className="flex items-center gap-4">
        <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed font-black tracking-tight">
          Coorder
        </span>
      </Link>

      {/* Desktop Nav Center */}
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
        <Link
          to="/map"
          className={`flex items-center gap-1 font-label-bold text-label-bold transition-opacity ${
            isActive('/map') ? 'text-primary' : 'text-on-surface-variant hover:opacity-80'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">map</span>
          Map
        </Link>
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
          className="material-symbols-outlined text-primary dark:text-primary-fixed-dim hover:opacity-80 transition-opacity active:scale-95 duration-150"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbFrafJmmVIAGXC--XwoVR1t7swTRgRDY5mR6nWC-CnrXUGhO1_4NORfJfnMfwHlJ3JhVqi8I_zp9Q5SBg-v1MQT7-4ghn7w-OEt2TDRbS_KxwEw5FDZGYVlSNZaaz9C8MgZpc1jADcjYrGdZyzExv1qW2Y96k6kYedSy_uHxGgz-Tfh4wWaqAcDXefPOsl047nPMvyMeQcT9EN7T59O_qxyw3MD5G7vWZF1NeO0WKe40BtZyeXFwY2IKhnpVvF6YPcSa5liVANN0"
              className="w-full h-full object-cover"
            />
          </Link>
        )}
      </div>
    </header>
  );
}
