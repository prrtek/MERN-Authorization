import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
dotenv.config({
  path: "../.env",
});
const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
