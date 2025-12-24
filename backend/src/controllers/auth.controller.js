import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  const { email, password, fullName } = req.body;

  try {
    if (!email || !password || !fullname) {
      return res.status(400).json({ messsage: "all fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ messsage: "password must be of at least 6 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists please use a diffrent one" });
    }

    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvtar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = new User.create({
      email,
      fullName,
      password,
      profilePic: randomAvtar,
    });

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
  } catch (error) { }
}
export async function login(req, res) {
  res.send("login Routes");
}
export function logout(req, res) {
  res.send("logout Routes");
}
