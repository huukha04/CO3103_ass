import express from "express";
import { register, login, checkSession } from "../controllers/authController.js";
import { registerValidator, loginValidator } from "../middlewares/validators/authValidator.js";

const router = express.Router();

// POST
router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
router.get("/checkSession", checkSession);

export default router;
