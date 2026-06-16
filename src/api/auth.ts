/**
 * Auth API layer
 * All calls target /auth/* as defined in BACKEND_REQUIREMENTS.md.
 * BASE_URL defaults to the env var; falls back to localhost for local dev.
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

// ─── helpers ──────────────────────────────────────────────────────────────────

async function request<T>(
  path: string,
  options: RequestInit = {},
  token?: string,
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { message?: string }).message ?? `HTTP ${res.status}`);
  }

  // 204 No Content
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

// ─── types ────────────────────────────────────────────────────────────────────

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  name: string;
  username: string;
  email: string;
  avatarUrl?: string;
  karma: number;
  trustScore: number;
  level: number;
  isEmailVerified: boolean;
  isIdentityVerified: boolean;
  role: 'user' | 'admin';
  walletAddress?: string;
  joinedAt: string;
}

export interface RegisterPayload {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface KycPayload {
  documentType: string;
  documentNumber: string;
  country: string;
}

// ─── POST /auth/register ──────────────────────────────────────────────────────

export async function register(
  payload: RegisterPayload,
): Promise<AuthTokens & { user: AuthUser }> {
  return request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ─── POST /auth/login ─────────────────────────────────────────────────────────

export async function login(
  payload: LoginPayload,
): Promise<AuthTokens & { user: AuthUser }> {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ─── POST /auth/logout ────────────────────────────────────────────────────────

export async function logout(token: string): Promise<void> {
  return request('/auth/logout', { method: 'POST' }, token);
}

// ─── GET /auth/me ─────────────────────────────────────────────────────────────

export async function getMe(token: string): Promise<AuthUser> {
  return request('/auth/me', { method: 'GET' }, token);
}

// ─── POST /auth/refresh ───────────────────────────────────────────────────────

export async function refreshTokens(refreshToken: string): Promise<AuthTokens> {
  return request('/auth/refresh', {
    method: 'POST',
    body: JSON.stringify({ refreshToken }),
  });
}

// ─── POST /auth/verify-identity ───────────────────────────────────────────────

export async function verifyIdentity(
  payload: KycPayload,
  token: string,
): Promise<{ success: boolean }> {
  return request('/auth/verify-identity', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, token);
}

// ─── POST /auth/connect-wallet ────────────────────────────────────────────────

export async function connectWallet(
  walletAddress: string,
  token: string,
): Promise<{ walletAddress: string }> {
  return request('/auth/connect-wallet', {
    method: 'POST',
    body: JSON.stringify({ walletAddress }),
  }, token);
}
