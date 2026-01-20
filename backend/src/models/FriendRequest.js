import mongoose from "mongoose";

const friendRequestSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    //add reject request after the tutorial
    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);


export default FriendRequest;