import express from "express";
import "dotenv/config";

if (!process.env.JWT_SECRET_KEY) {
  console.error("FATAL ERROR: JWT_SECRET_KEY is not defined in environment variables.");
  process.exit(1);
}
import cors from "cors";

import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});
