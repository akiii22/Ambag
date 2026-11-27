
import { Router } from "express";

import { env } from "../../config/env.js";
import { requireAuth } from "../../middleware/auth.js";

import {
  REFRESH_COOKIE_NAME,
  refreshCookieOptions,
  refreshCookieClearOptions,
} from "../../config/auth-cookie.js";

import {
  registerUser,
  loginUser,
  refreshUserSession,
  logoutUser,
} from "./auth.service.js";

import { registerSchema, loginSchema } from "./auth.schema.js";

const router = Router();

// Register
router.post("/register", async (req, res) => {
  const validation = registerSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      message: "Invalid registration details.",
      errors: validation.error.flatten().fieldErrors,
    });
  }

  try {
    const result = await registerUser(validation.data);

    return res.status(201).json({
      message: result.requiresEmailConfirmation
        ? "Account created. Please check your email to verify your account."
        : "Account created successfully.",
      ...result,
    });
  } catch (error) {
    if (env.NODE_ENV === "development") {
      console.error("Registration error:", error);
    }

    return res.status(400).json({
      message:
        "Registration could not be completed. Please check your details or try again.",
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  const validation = loginSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      message: "Invalid login details.",
      errors: validation.error.flatten().fieldErrors,
    });
  }

  try {
    const result = await loginUser(validation.data);

    // Store the refresh token in an HttpOnly cookie.
    res.cookie(
      REFRESH_COOKIE_NAME,
      result.session.refreshToken,
      refreshCookieOptions,
    );

    // Never return the refresh token in the JSON response.
    return res.status(200).json({
      message: "Login successful.",
      user: result.user,
      session: {
        accessToken: result.session.accessToken,
        expiresAt: result.session.expiresAt,
      },
    });
  } catch (error) {
    if (env.NODE_ENV === "development") {
      console.error("Login error:", error);
    }

    return res.status(401).json({
      message: "Invalid email or password.",
    });
  }
});

// Refresh session
router.post("/refresh", async (req, res) => {
  // Refresh is cookie-based, so validate the browser origin.
  if (req.get("origin") !== env.CORS_ORIGIN) {
    return res.status(403).json({
      message: "Request origin is not allowed.",
    });
  }

  const refreshToken = req.cookies?.[REFRESH_COOKIE_NAME];

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh session not found.",
    });
  }

  try {
    const result = await refreshUserSession(refreshToken);

    // Replace the old refresh token with the rotated token.
    res.cookie(
      REFRESH_COOKIE_NAME,
      result.session.refreshToken,
      refreshCookieOptions,
    );

    return res.status(200).json({
      message: "Session refreshed successfully.",
      user: result.user,
      session: {
        accessToken: result.session.accessToken,
        expiresAt: result.session.expiresAt,
      },
    });
  } catch (error) {
    if (env.NODE_ENV === "development") {
      console.error("Session refresh error:", error);
    }

    res.clearCookie(
      REFRESH_COOKIE_NAME,
      refreshCookieClearOptions,
    );

    return res.status(401).json({
      message: "Session expired. Please log in again.",
    });
  }
});

// Logout
router.post("/logout", requireAuth, async (req, res) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader?.slice(7).trim();

  if (!accessToken) {
    res.clearCookie(
      REFRESH_COOKIE_NAME,
      refreshCookieClearOptions,
    );

    return res.status(401).json({
      message: "Authentication required.",
    });
  }

  try {
    await logoutUser(accessToken);

    res.clearCookie(
      REFRESH_COOKIE_NAME,
      refreshCookieClearOptions,
    );

    return res.status(200).json({
      message: "Logout successful.",
    });
  } catch (error) {
    if (env.NODE_ENV === "development") {
      console.error("Logout error:", error);
    }

    // Clear the browser's local refresh cookie even if
    // the remote logout request fails.
    res.clearCookie(
      REFRESH_COOKIE_NAME,
      refreshCookieClearOptions,
    );

    return res.status(500).json({
      message: "Unable to complete logout.",
    });
  }
});

export default router;
