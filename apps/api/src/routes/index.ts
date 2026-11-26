
import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { syncUserProfile } from "../modules/users/user.service.js";
import authRouter from "../modules/auth/auth.routes.js";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "ambag-api",
  });
});

// Public authentication routes
router.use("/auth", authRouter);

// Protected profile route
router.get("/auth/me", requireAuth, async (req, res, next) => {
  try {
    const authenticatedUser = req.user;

    if (!authenticatedUser) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const profile = await syncUserProfile({
      id: authenticatedUser.id,
    });

    return res.status(200).json({
      message: "Authentication and profile synchronization successful!",
      user: {
        id: profile.id,
        email: authenticatedUser.email,
        displayName: profile.displayName,
        createdAt: profile.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;

