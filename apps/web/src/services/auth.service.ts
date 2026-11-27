
const API_URL = import.meta.env.VITE_API_URL;

export interface AuthUser {
  id: string;
  email: string;
  displayName: string | null;
}

export interface AuthSession {
  accessToken: string;
  expiresAt: number | null;
}

export interface AuthResponse {
  message: string;
  user: AuthUser;
  session: AuthSession;
}

export interface RegisterInput {
  displayName: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  message: string;
  user: AuthUser;
  requiresEmailConfirmation: boolean;
}

let refreshPromise: Promise<AuthResponse> | null = null;

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${API_URL}/auth${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong. Please try again.",
    );
  }

  return data as T;
}

export const authService = {
  async login(email: string, password: string) {
    return apiRequest<AuthResponse>("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  async register(input: RegisterInput) {
    return apiRequest<RegisterResponse>("/register", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

async refresh() {
  if (!refreshPromise) {
    refreshPromise = apiRequest<AuthResponse>("/refresh", {
      method: "POST",
    }).finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
},

  async logout(accessToken: string) {
    return apiRequest<{ message: string }>("/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
