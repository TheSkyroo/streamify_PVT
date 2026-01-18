import { upsertStreamUser } from "../lib/stream.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  const { email, password, fullName } = req.body;

  try {
    if (!email || !password || !fullName) {
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

    //avtar start (may change in future)

    const avtar = [
      "Riley",
      "Jude",
      "Alexander",
      "Chase",
      "Leah",
      "Adrian",
      "Christopher",
      "Caleb",
      "George",
      "Kimberly",
      "Sophia",
      "Andrea",
      "Valentina",
    ];

    function getRandomElement(arr) {
      if (arr.length === 0) return null; // safety net
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    const randomAvtar = getRandomElement(avtar);

    const genAvtar = `https://api.dicebear.com/9.x/thumbs/svg?seed=${randomAvtar}`;

    //avtar end

    const newUser = await User.create({
      email,
      fullName,
      password,
      profilePic: genAvtar,
    });
    try {
      await upsertStreamUser({
        id: newUser._id.toString(),
        name: newUser.fullName,
        image: newUser.profilePic || " ",
      });
      console.log(`Stream user created for ${newUser.fullName} `);
    } catch (error) {
      console.log("Error creating Stream user:", error);
    }

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      },
    );
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, //prevent XSS attack,
      sameSite: "strict", //prevent CSRF attacks,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });
    const isPasswordCorrect = await user.matchPassword(password);
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, //prevent XSS attack,
      sameSite: "strict", //prevent CSRF attacks,
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("error in login controler", error.message);
    res.status(500).json({ message: "internal Server Error" });
  }
}
export function logout(req, res) {
  res.clearCookie("jwt");
  res.status(200).json({ success: true, message: "logout successful" });
}
