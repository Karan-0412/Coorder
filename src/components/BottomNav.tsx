import { Link, useLocation } from 'react-router-dom';
import { routes } from '../routes/paths';

const NAV_ITEMS = [
  { to: routes.home,    icon: 'local_fire_department', label: 'Deals' },
  { to: routes.map,     icon: 'map',                   label: 'Map' },
  { to: routes.chat,    icon: 'forum',                 label: 'Chat' },
  { to: routes.profile, icon: 'person',                label: 'Profile' },
] as const;

// Pages where BottomNav should NOT appear
const HIDDEN_ON = [routes.landing, routes.login, routes.register];

export default function BottomNav() {
  const { pathname } = useLocation();

  if (HIDDEN_ON.includes(pathname as typeof HIDDEN_ON[number])) return null;

  const isActive = (to: string) =>
    to === routes.home ? pathname === routes.home : pathname.startsWith(to);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface border-t border-surface-container-highest flex justify-around items-center px-4 pt-2 pb-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      {NAV_ITEMS.map(({ to, icon, label }) => {
        const active = isActive(to);
        return (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center justify-center gap-0.5 px-4 py-1 rounded-xl transition-all duration-200 active:scale-90
              ${active
                ? 'bg-secondary-container text-primary'
                : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {icon}
            </span>
            <span className="text-[10px] font-medium leading-none">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
