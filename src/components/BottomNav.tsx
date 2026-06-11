import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container dark:bg-surface-container-lowest flex justify-around items-center px-4 pb-safe pt-2 rounded-t-xl shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center rounded-full px-5 py-1.5 transition-all duration-200 active:scale-90 ${
          isActive('/')
            ? 'bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary'
            : 'text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50'
        }`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          local_fire_department
        </span>
        <span className="text-[10px] font-medium">Deals</span>
      </Link>

      <Link
        to="/map"
        className={`flex flex-col items-center justify-center py-2 transition-all duration-200 active:scale-90 ${
          isActive('/map')
            ? 'text-primary dark:text-primary-fixed-dim'
            : 'text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50'
        }`}
      >
        <span className="material-symbols-outlined">map</span>
        <span className="text-[10px] font-medium">Map</span>
      </Link>

      <Link
        to="/chat"
        className={`flex flex-col items-center justify-center py-2 transition-all duration-200 active:scale-90 ${
          isActive('/chat')
            ? 'text-primary dark:text-primary-fixed-dim'
            : 'text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50'
        }`}
      >
        <span className="material-symbols-outlined">forum</span>
        <span className="text-[10px] font-medium">Chat</span>
      </Link>

      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center py-2 transition-all duration-200 active:scale-90 ${
          isActive('/profile')
            ? 'text-primary dark:text-primary-fixed-dim'
            : 'text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50'
        }`}
      >
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-medium">Profile</span>
      </Link>
    </nav>
  );
}
