import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import genrateToken from "../utils/genrateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    genrateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(401).send("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("User already exists");
  } else {
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      console.log(user);
      genrateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } else {
      res.status(400).send("Invalid user data");
    }
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "logout", {
    httpOnly: true,
    maxAge: 1,
  });
  res.status(200).json({ message: "User logout" });
});

export { authUser, registerUser, logoutUser };
