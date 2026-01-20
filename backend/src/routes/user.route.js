import express from "express";
import { protectRoute } from "../middleware/auth.middlewars.js";
import {getRecommendedUsers,getMyFriends,sendFriendRequest} from "../controllers/user.cotroller.js"
const router=express.Router();

router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);

router.post("/friend-request/:id",sendFriendRequest);

export default router;