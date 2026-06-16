import { Link } from 'react-router-dom';
import { imageUrls } from '../data/mockData';
import { routes } from '../routes/paths';

const LEFT_AVATAR   = imageUrls.userAvatar;
const RIGHT_AVATAR  = imageUrls.profileAvatar;
const CENTER_AVATAR = imageUrls.userAvatar;

export default function LandingPage() {
  return (
    <div
      className="min-h-screen text-[#1c1c1c] font-sans antialiased overflow-x-hidden"
      style={{ background: 'linear-gradient(to bottom right, #fff7ed, #ffffff, #f3f4f6)' }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right,rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,0.03) 1px,transparent 1px)',
        }}
      />

      {/* Floating heart — fixed so it never overlaps content */}
      <div
        aria-hidden
        className="fixed top-24 right-6 z-30 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#ff4500] animate-pulse pointer-events-none"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
        </svg>
      </div>

      {/* Floating ring — fixed */}
      <div
        aria-hidden
        className="fixed top-72 left-4 z-30 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none"
      >
        <div className="w-6 h-6 rounded-full border-4 border-orange-200 flex items-center justify-center">
          <div className="w-2 h-2 bg-orange-400 rounded-full" />
        </div>
      </div>

      {/* ── Header ── */}
      <header className="relative z-50 px-6 py-10 flex items-center justify-between max-w-6xl mx-auto w-full">
        <span className="text-2xl font-semibold tracking-tight text-gray-900">Coorder</span>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a className="hover:text-gray-900 transition-colors" href="#">How It Works</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Community</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
          <a className="hover:text-gray-900 transition-colors" href="#">About</a>
        </nav>

        <div className="flex items-center gap-6">
          <Link to={routes.login} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Log In
          </Link>
          <Link
            to={routes.register}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-gray-800 active:scale-95 transition-all"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* ── Hero + CTAs ── */}
      <main className="relative z-10 flex flex-col items-center text-center px-4 pt-10 pb-16 max-w-md mx-auto">
        <div className="space-y-6 mt-8 mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight max-w-xs">
            Multiply Your Buying Power
          </h1>
          <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
            Join forces with your neighbors to unlock bulk pricing on premium goods.
            Secure, community-driven, and social.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <Link
            to={routes.register}
            className="bg-[#ff4500] text-white font-semibold py-3 px-8 rounded-full shadow-lg active:scale-95 transition-transform text-center hover:bg-[#e53e00] whitespace-nowrap"
          >
            Join a Group
          </Link>
          <Link
            to={routes.home}
            className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full shadow-md border border-gray-200 active:scale-95 transition-transform text-center hover:bg-gray-50 whitespace-nowrap"
          >
            Browse Deals
          </Link>
        </div>
      </main>

    </div>
  );
}
