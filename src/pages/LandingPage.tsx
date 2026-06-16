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
        <div className="space-y-6 mt-8 mb-8">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1]">
            Multiply Your<br />Buying Power
          </h1>
          <p className="text-base text-gray-500 max-w-[280px] mx-auto leading-relaxed">
            Join forces with your neighbors to unlock bulk pricing on premium goods.
            Secure, community-driven, and social.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full px-4 mb-6">
          <Link
            to={routes.register}
            className="flex-1 bg-[#ff4500] text-white font-medium py-3.5 px-6 rounded-full shadow-lg active:scale-95 transition-transform text-center hover:bg-[#e53e00]"
          >
            Join a Group
          </Link>
          <Link
            to={routes.home}
            className="flex-1 bg-white text-gray-800 font-medium py-3.5 px-6 rounded-full shadow-md border border-gray-100 active:scale-95 transition-transform text-center hover:bg-gray-50"
          >
            Browse Deals
          </Link>
        </div>
      </main>

      {/* ── Card stack — full width, outside max-w-md ── */}
      <div className="relative z-10 w-full flex justify-center pb-20" style={{ height: '420px' }}>

        {/* Glow blob */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }}
        />

        {/* Left card */}
        <div
          aria-hidden
          className="absolute bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col items-center text-center"
          style={{
            width: '280px',
            height: '288px',
            top: '64px',
            left: 'calc(50% - 310px)',
            transform: 'rotate(-6deg)',
            opacity: 0.9,
            zIndex: 10,
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-white shadow-sm shrink-0">
            <img alt="" className="w-full h-full object-cover" src={LEFT_AVATAR} />
          </div>
          <h3 className="text-base font-medium text-gray-900 leading-snug">
            Why do I feel exhausted even after a full night's sleep?
          </h3>
          <div className="mt-auto flex items-center gap-3 text-[10px] text-gray-500">
            <span>16 answers</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>400 views</span>
          </div>
        </div>

        {/* Right card */}
        <div
          aria-hidden
          className="absolute bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col items-center text-center"
          style={{
            width: '280px',
            height: '288px',
            top: '64px',
            left: 'calc(50% + 30px)',
            transform: 'rotate(6deg)',
            opacity: 0.9,
            zIndex: 10,
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-white shadow-sm shrink-0">
            <img alt="" className="w-full h-full object-cover" src={RIGHT_AVATAR} />
          </div>
          <h3 className="text-base font-medium text-gray-900 leading-snug">
            Is it normal to lose motivation for everything at once?
          </h3>
          <div className="mt-auto flex items-center gap-3 text-[10px] text-gray-500">
            <span>24 answers</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>1.2k views</span>
          </div>
        </div>

        {/* Center card — front, reduced height */}
        <div
          className="absolute bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white p-8 flex flex-col items-center justify-center text-center"
          style={{
            width: '300px',
            height: '320px',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 30,
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#f8f9fa] mb-6 overflow-hidden border-[3px] border-white shadow-md flex items-center justify-center shrink-0">
            <img alt="User" className="w-full h-full object-cover" src={CENTER_AVATAR} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 leading-snug mb-6">
            How do you stop overthinking small social interactions?
          </h3>
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ff4500] rounded-full animate-pulse" />
              Active Now
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
              24 Joined
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
