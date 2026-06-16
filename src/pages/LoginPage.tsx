import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { routes } from '../routes/paths';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate   = useNavigate();
  const location   = useLocation();

  // Redirect back to the page that triggered the login, or home
  const from = (location.state as { from?: Location })?.from?.pathname ?? routes.home;

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,    setIsLoading]    = useState(false);
  const [error,        setError]        = useState<string | null>(null);
  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await login({ email: form.email, password: form.password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-dvh bg-[#fef4f1] dark:bg-background text-on-surface flex flex-col items-center transition-colors duration-300">

      {/* ── Header ── */}
      <header className="w-full flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 bg-transparent sticky top-0 z-50">
        <Link to={routes.home} className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            group_work
          </span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
            Coorder
          </span>
        </Link>
        <Link
          to={routes.register}
          className="text-on-surface font-label-bold text-label-bold bg-white/80 dark:bg-surface/80 backdrop-blur px-5 py-2 rounded-full border border-outline-variant/30 shadow-sm hover:shadow transition-all active:scale-95"
        >
          Sign Up
        </Link>
      </header>

      {/* ── Main ── */}
      <main className="w-full flex-grow flex items-center justify-center p-gutter lg:p-xl relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary opacity-[0.04] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary opacity-[0.04] rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-[480px]">
          <div className="bg-surface-container-lowest dark:bg-surface-container shadow-[0_20px_40px_-12px_rgba(173,44,0,0.12)] rounded-xl border border-outline-variant/30 p-xl text-center transition-colors duration-300">

            {/* Icon + heading */}
            <div className="mb-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-md">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  handshake
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                Welcome Back
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Sign in to your Coorder account.
              </p>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-md mb-lg">
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 bg-surface-container-lowest dark:bg-surface-container border border-outline-variant/60 rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all active:scale-95"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="font-label-bold text-label-bold text-on-surface">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 bg-surface-container-lowest dark:bg-surface-container border border-outline-variant/60 rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all active:scale-95"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.11.8 1.12-.11 2.31-.87 3.66-.75 1.55.15 2.68.73 3.4 1.79-3.2 1.93-2.68 6.04.42 7.34-.63 1.58-1.5 3.13-2.59 3.79zM12.03 7.25c-.14-2.73 2.15-5.11 4.61-5.25.32 2.94-2.88 5.25-4.61 5.25z" />
                </svg>
                <span className="font-label-bold text-label-bold text-on-surface">Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-lg">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t-2 border-dashed border-outline-variant/30" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-surface-container-lowest dark:bg-surface-container text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                  Or use email
                </span>
              </div>
            </div>

            {/* Error banner */}
            {error && (
              <div className="mb-md flex items-center gap-2 bg-error-container/40 border border-error/20 text-error text-label-bold font-label-bold px-md py-sm rounded-xl text-left" role="alert">
                <span className="material-symbols-outlined text-[18px] shrink-0">error</span>
                {error}
              </div>
            )}

            {/* Form */}
            <form className="space-y-md text-left" onSubmit={handleSubmit} noValidate>

              {/* Email */}
              <div className="space-y-xs">
                <label className="font-label-bold text-label-bold text-on-surface-variant px-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 group-focus-within:text-primary text-[20px] transition-colors">
                    mail
                  </span>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-surface-container-lowest dark:bg-surface-container-low border-2 border-outline-variant/40 rounded-xl font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-xs">
                <div className="flex items-center justify-between px-1">
                  <label className="font-label-bold text-label-bold text-on-surface-variant" htmlFor="password">
                    Password
                  </label>
                  <a href="#" className="font-label-bold text-label-bold text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 group-focus-within:text-primary text-[20px] transition-colors">
                    lock
                  </span>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    placeholder="Your password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full pl-11 pr-12 py-3.5 bg-surface-container-lowest dark:bg-surface-container-low border-2 border-outline-variant/40 rounded-xl font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading || !form.email || !form.password}
                className="w-full bg-primary text-on-primary font-label-bold text-[15px] py-4 rounded-xl transition-all active:scale-[0.98] shadow-[0_8px_20px_-6px_rgba(173,44,0,0.35)] hover:shadow-[0_12px_24px_-6px_rgba(173,44,0,0.45)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">
                      progress_activity
                    </span>
                    Signing in…
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-lg pt-lg border-t border-outline-variant/30">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Don't have an account?{' '}
                <Link to={routes.register} className="text-primary font-bold hover:underline transition-all">
                  Create one
                </Link>
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full py-md px-margin-mobile text-center">
        <p className="font-label-sm text-label-sm text-on-surface-variant/60">
          © 2024 Coorder Collective. Built for communities, by communities.
        </p>
      </footer>
    </div>
  );
}
