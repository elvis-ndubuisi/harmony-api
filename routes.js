import config from "config";
import cors from "cors";
import express from "express";

import {
  contactUptown,
  bookSession,
} from "./controllers/uptown.controllers.js";

const router = express.Router();

router.post(
  "/upt/contact",
  cors({ origin: config.get("cors.uptownstudio") }),
  contactUptown
);

router.post(
  "/upt/session",
  cors({ origin: config.get("cors.uptownstudio") }),
  bookSession
);

router.get("/health", (req, res) => {
  res.sendStatus(200);
});

export default router;
