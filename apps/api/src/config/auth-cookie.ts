
import type { CookieOptions } from "express";
import { env } from "./env.js";

export const REFRESH_COOKIE_NAME = "ambag_refresh";

export const refreshCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: env.NODE_ENV === "production" ? "none" : "lax",
  path: "/api/v1/auth",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const { maxAge: _maxAge, ...clearOptions } = refreshCookieOptions;

export const refreshCookieClearOptions: CookieOptions = clearOptions;
