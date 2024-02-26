import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({
  path: "../.env",
});
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
connectDB();

app.use("/", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
