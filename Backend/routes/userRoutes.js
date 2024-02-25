import express, { Router } from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/userController.js";

const router = Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;
