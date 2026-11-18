import express from "express";
import cors from "cors";
import helmet from "helmet";

import apiRouter from "./routes/index.js";

const app = express();

// Security headers
app.use(helmet());

// Cross-origin requests
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// API routes
app.use("/api/v1", apiRouter);

export default app;