import config from "config";
import cors from "cors";
import express from "express";

const router = express.Router();

router.post(
  "/upt/contact",
  cors({ origin: config.get("cors.uptownstudio") }),
  (req, res) => {
    res.send("send mail");
  }
);

router.post(
  "/upt/session",
  cors({ origin: config.get("cors.uptownstudio") }),
  (req, res) => {
    res.send("session");
  }
);

router.get("/health", (req, res) => {
  res.sendStatus(200);
});

export default router;
