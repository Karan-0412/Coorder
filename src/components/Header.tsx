import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onSearchClick?: () => void;
  showUserProfile?: boolean;
}

export default function Header({ onSearchClick, showUserProfile = true }: HeaderProps) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full top-0 sticky z-[100] bg-surface border-b border-surface-container-highest shadow-sm flex justify-between items-center px-gutter py-md transition-colors duration-300">
      <Link to="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
        <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-black tracking-tight">Coorder</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {[
          { to: '/',     icon: 'local_fire_department', label: 'Deals' },
          { to: '/map',  icon: 'map',                   label: 'Map'   },
          { to: '/chat', icon: 'forum',                 label: 'Chat'  },
        ].map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-1 font-label-bold text-label-bold transition-opacity ${
              isActive(to) ? 'text-primary' : 'text-on-surface-variant hover:opacity-80'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={onSearchClick}
          className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95"
          aria-label="Search"
        >
          search
        </button>

        {/* Dark mode toggle — animated sun/moon swap */}
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors duration-200"
        >
          <span
            className={`material-symbols-outlined text-[22px] absolute transition-all duration-300 text-primary
              ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            light_mode
          </span>
          <span
            className={`material-symbols-outlined text-[22px] absolute transition-all duration-300 text-on-surface-variant
              ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
          >
            dark_mode
          </span>
        </button>

        {showUserProfile && (
          <Link
            to="/profile"
            className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity ring-2 ring-transparent hover:ring-primary/30"
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
