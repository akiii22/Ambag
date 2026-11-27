import { createContext } from "react";
import type { AuthUser } from "../services/auth.service";

export interface AuthContextType {
  user: AuthUser | null;
  accessToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (input: {
    displayName: string;
    email: string;
    password: string;
  }) => Promise<{
    message: string;
    requiresEmailConfirmation: boolean;
  }>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);