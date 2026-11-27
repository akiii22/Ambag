
import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  authService,
  type AuthUser,
  type RegisterInput,
} from "../services/auth.service";

import {
  AuthContext,
} from "./auth-context";

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function restoreSession() {
      try {
        const response = await authService.refresh();

        if (active) {
          setUser(response.user);
          setAccessToken(response.session.accessToken);
        }
      } catch {
        if (active) {
          setUser(null);
          setAccessToken(null);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    restoreSession();

    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      const response = await authService.login(email, password);

      setUser(response.user);
      setAccessToken(response.session.accessToken);
    },
    [],
  );

  const register = useCallback(async (input: RegisterInput) => {
    const response = await authService.register(input);

    return {
      message: response.message,
      requiresEmailConfirmation: response.requiresEmailConfirmation,
    };
  }, []);

  const logout = useCallback(async () => {
    const token = accessToken;

    setUser(null);
    setAccessToken(null);

    if (token) {
      await authService.logout(token);
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isLoading,
        isAuthenticated: Boolean(user && accessToken),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
