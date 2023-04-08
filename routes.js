import config from "config";
import cors from "cors";
import express from "express";

import { contactUptown, bookSession } from "./controllers/uptown.controllers";

const router = express.Router();

/** Send contact and message to updownstudio
 * Uptownstudio receives email message
 */
router.post(
  "/upt/contact",
  cors({ origin: config.get("cors.uptownstudio") }),
  contactUptown
);

/** Book a session from uptownstudio website
 * Uptownstudio receives email message
 */
router.post(
  "/upt/session",
  cors({ origin: config.get("cors.uptownstudio") }),
  bookSession
);

router.get("/health", (req, res) => {
  res.sendStatus(200);
});

export default router;
