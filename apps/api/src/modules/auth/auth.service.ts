
import { supabase } from "../../config/supabase.js";
import { env } from "../../config/env.js";
import { syncUserProfile } from "../users/user.service.js";

import type { RegisterInput, LoginInput } from "./auth.schema.js";

export async function registerUser(input: RegisterInput) {
  const { data, error } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        display_name: input.displayName,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.user) {
    throw new Error("Unable to create user account.");
  }

  if (data.session) {
    await syncUserProfile({
      id: data.user.id,
      displayName: input.displayName,
    });
  }

  return {
    user: {
      id: data.user.id,
      email: data.user.email,
      displayName: input.displayName,
    },
    requiresEmailConfirmation: !data.session,
  };
}

export async function loginUser(input: LoginInput) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.user || !data.session) {
    throw new Error("Unable to authenticate user.");
  }

  const profile = await syncUserProfile({
    id: data.user.id,
  });

  return {
    user: {
      id: data.user.id,
      email: data.user.email,
      displayName: profile.displayName,
    },
    session: {
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token,
      expiresAt: data.session.expires_at,
    },
  };
}

export async function refreshUserSession(refreshToken: string) {
  const { data, error } = await supabase.auth.refreshSession({
    refresh_token: refreshToken,
  });

  if (error || !data.user || !data.session) {
    throw new Error("Unable to refresh session.");
  }

  const profile = await syncUserProfile({
    id: data.user.id,
  });

  return {
    user: {
      id: data.user.id,
      email: data.user.email,
      displayName: profile.displayName,
    },
    session: {
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token,
      expiresAt: data.session.expires_at,
    },
  };
}

export async function logoutUser(accessToken: string) {
  const response = await fetch(
    `${env.SUPABASE_URL}/auth/v1/logout?scope=local`,
    {
      method: "POST",
      headers: {
        apikey: env.SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Supabase logout failed with status ${response.status}`,
    );
  }

  return { success: true };
}
