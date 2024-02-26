import express, { Router } from "express";
import {
  authUser,
  registerUser,
  logoutUser,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/login", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);

export default router;
