import express from "express";

import {
  bookSession,
  contactUptown,
} from "../controllers/uptown.controllers.js";

const router = express.Router();

router.post("/book", bookSession);
router.post("/contact", contactUptown);

export default router;
