import express from "express";
import { login, register, logout, getUser } from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout",isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);

export default router;