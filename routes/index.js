import cors from "cors";
import config from "config";
import express from "express";
import { Resend } from "resend";

import uptownRoutes from "./uptown.routes.js";
import aircabRoutes from "./aircab.route.js";

const router = express.Router();

router.use(
  "/api/uptown",
  cors({ origin: config.get("origins.uptownstudio") }),
  uptownRoutes
);
router.use("/api/aircab", cors({ origin: "*" }), aircabRoutes);
router.get("/health", (_, res) => {
  res.sendStatus(200);
});

router.get("*", (_, res) => {
  res.status(404).send("Resources not found");
});

export default router;
