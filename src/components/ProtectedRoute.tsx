import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { routes } from '../routes/paths';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Wraps any route that requires authentication.
 * Redirects to /login with the original path saved in `state.from`
 * so the user can be sent back after logging in.
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Still bootstrapping — show nothing to avoid flash
  if (isLoading) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-background">
        <span className="material-symbols-outlined text-primary text-[48px] animate-spin">
          progress_activity
        </span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={routes.login}
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
}
