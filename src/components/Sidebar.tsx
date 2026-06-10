import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}

function NavItem({ icon, label, href, isActive }: NavItemProps) {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 p-2 rounded-lg font-label-bold text-label-bold transition-colors ${
        isActive
          ? 'bg-primary-container/10 text-primary'
          : 'text-on-surface-variant hover:bg-surface-variant/50'
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      {label}
    </Link>
  );
}

interface CommunityItemProps {
  icon: string;
  label: string;
  href: string;
}

function CommunityItem({ icon, label, href }: CommunityItemProps) {
  return (
    <Link
      to={href}
      className="flex items-center gap-3 p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg font-label-bold text-label-bold transition-colors"
    >
      <span className="w-6 h-6 rounded bg-tertiary flex items-center justify-center text-[10px] text-white font-bold">
        {icon}
      </span>
      {label}
    </Link>
  );
}

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`hidden lg:flex flex-col w-[240px] sticky top-24 h-fit gap-4 ${className}`}>
      {/* Feed Section */}
      <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30">
        <p className="font-label-bold text-label-bold text-on-surface-variant mb-3 px-2">
          FEED
        </p>
        <nav className="flex flex-col gap-1">
          <NavItem
            icon="group"
            label="Group Buys"
            href="/"
            isActive={isActive('/')}
          />
          <NavItem icon="trending_up" label="Popular" href="/" />
          <NavItem icon="new_releases" label="Newest" href="/" />
        </nav>
      </div>

      {/* Communities Section */}
      <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30">
        <p className="font-label-bold text-label-bold text-on-surface-variant mb-3 px-2">
          COMMUNITIES
        </p>
        <nav className="flex flex-col gap-1">
          <CommunityItem icon="T" label="Tech Gear" href="/" />
          <CommunityItem icon="H" label="Home Essentials" href="/" />
          <CommunityItem icon="F" label="Fashion & Beauty" href="/" />
          <CommunityItem icon="G" label="Gaming Gear" href="/" />
        </nav>
      </div>
    </aside>
  );
}
