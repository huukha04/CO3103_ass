import express from "express";
import { getShowing } from "../controllers/movieController.js";

const router = express.Router();

// POST
router.get("/getShowing", getShowing);

export default router;