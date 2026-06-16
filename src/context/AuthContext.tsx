import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as authApi from '../api/auth';
import type { AuthUser, LoginPayload, RegisterPayload } from '../api/auth';

// ─── Storage keys ─────────────────────────────────────────────────────────────

const ACCESS_KEY  = 'coorder-access-token';
const REFRESH_KEY = 'coorder-refresh-token';

// ─── Context shape ────────────────────────────────────────────────────────────

interface AuthContextValue {
  user: AuthUser | null;
  accessToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  register:  (payload: RegisterPayload) => Promise<void>;
  login:     (payload: LoginPayload)    => Promise<void>;
  logout:    () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  accessToken: null,
  isLoading: true,
  isAuthenticated: false,
  register:        async () => {},
  login:           async () => {},
  logout:          async () => {},
  refreshSession:  async () => {},
});

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user,         setUser]        = useState<AuthUser | null>(null);
  const [accessToken,  setAccessToken] = useState<string | null>(
    () => localStorage.getItem(ACCESS_KEY),
  );
  const [isLoading, setIsLoading] = useState(true);

  // Keep a ref so callbacks always see the latest token without re-creating
  const tokenRef = useRef(accessToken);
  tokenRef.current = accessToken;

  // ── Persist tokens ─────────────────────────────────────────────────────────

  const storeTokens = useCallback(
    (tokens: { accessToken: string; refreshToken: string }) => {
      localStorage.setItem(ACCESS_KEY,  tokens.accessToken);
      localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
      setAccessToken(tokens.accessToken);
      tokenRef.current = tokens.accessToken;
    },
    [],
  );

  const clearTokens = useCallback(() => {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    setAccessToken(null);
    tokenRef.current = null;
    setUser(null);
  }, []);

  // ── Bootstrap: rehydrate user from stored token ────────────────────────────

  useEffect(() => {
    const stored = localStorage.getItem(ACCESS_KEY);
    if (!stored) {
      setIsLoading(false);
      return;
    }
    authApi
      .getMe(stored)
      .then((u) => setUser(u))
      .catch(() => {
        // Token expired — try refresh
        const rt = localStorage.getItem(REFRESH_KEY);
        if (!rt) { clearTokens(); return; }
        return authApi
          .refreshTokens(rt)
          .then((tokens) => {
            storeTokens(tokens);
            return authApi.getMe(tokens.accessToken);
          })
          .then((u) => setUser(u))
          .catch(clearTokens);
      })
      .finally(() => setIsLoading(false));
  }, [clearTokens, storeTokens]);

  // ── Proactive token refresh (5 min before a nominal 15-min expiry) ─────────

  useEffect(() => {
    const interval = setInterval(async () => {
      const rt = localStorage.getItem(REFRESH_KEY);
      if (!rt) return;
      try {
        const tokens = await authApi.refreshTokens(rt);
        storeTokens(tokens);
      } catch {
        clearTokens();
      }
    }, 10 * 60 * 1000); // every 10 minutes

    return () => clearInterval(interval);
  }, [clearTokens, storeTokens]);

  // ── Auth actions ───────────────────────────────────────────────────────────

  const register = useCallback(async (payload: RegisterPayload) => {
    const { user: u, ...tokens } = await authApi.register(payload);
    storeTokens(tokens);
    setUser(u);
  }, [storeTokens]);

  const login = useCallback(async (payload: LoginPayload) => {
    const { user: u, ...tokens } = await authApi.login(payload);
    storeTokens(tokens);
    setUser(u);
  }, [storeTokens]);

  const logout = useCallback(async () => {
    if (tokenRef.current) {
      await authApi.logout(tokenRef.current).catch(() => {}); // best-effort
    }
    clearTokens();
  }, [clearTokens]);

  const refreshSession = useCallback(async () => {
    const rt = localStorage.getItem(REFRESH_KEY);
    if (!rt) throw new Error('No refresh token');
    const tokens = await authApi.refreshTokens(rt);
    storeTokens(tokens);
  }, [storeTokens]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isLoading,
        isAuthenticated: !!user,
        register,
        login,
        logout,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  return useContext(AuthContext);
}
