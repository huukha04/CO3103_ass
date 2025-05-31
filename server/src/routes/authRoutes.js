import express from "express";
import { register, login } from "../controllers/authController.js";
import { registerValidator, loginValidator } from "../middlewares/validators/authValidator.js";

const router = express.Router();

// POST
router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);

export default router;
