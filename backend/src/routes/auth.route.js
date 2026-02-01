import express from "express";
import {
  login,
  signup,
  logout,
  onboard,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout); //logout is post becouse it changes the state of server

//check i user is aunthaticated or not

router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

router.post("/onboarding", protectRoute, onboard);

export default router;
