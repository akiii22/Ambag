
import { Router } from "express";
import { registerSchema, loginSchema } from "./auth.schema.js";
import { registerUser, loginUser, logoutUser } from "./auth.service.js";
import { requireAuth } from "../../middleware/auth.js";

const router = Router();

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
      if (process.env.NODE_ENV === "development") {
    console.error("Registration error:", error);
  }


  return res.status(400).json({
    message: "Registration could not be completed. Please check your details or try again.",
  });
  }
});


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

    return res.status(200).json({
      message: "Login successful.",
      ...result,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Login error:", error);
    }

    return res.status(401).json({
      message: "Invalid email or password.",
    });
  }
});


router.post("/logout", requireAuth, async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader?.slice(7).trim();

    if (!accessToken) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    await logoutUser(accessToken);

    return res.status(200).json({
      message: "Logout successful.",
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Logout error:", error);
    }

    return res.status(500).json({
      message: "Unable to complete logout.",
    });
  }
});


export default router;
