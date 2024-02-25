import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "register User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout  User" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile update" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
