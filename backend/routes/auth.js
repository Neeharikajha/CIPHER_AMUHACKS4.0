const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = require("../middleware/auth"); // 🔐 Import middleware

const router = express.Router();

// JWT secret
const JWT_SECRET = "neeharika_super_secret"; // Replace with env var in production

// ✅ Signup (Hashing is handled in User model)
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ email, password }); // No manual hashing here
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ message: "Signup successful", token });
  } catch (err) {
    res.status(500).json({ message: "Signup error" });
  }
});

// ✅ Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
});

// ✅ Protected Route (e.g. Profile)
router.get("/profile", protect, async (req, res) => {
  try {
    const user = req.user; // Set in middleware
    res.status(200).json({ message: "User profile fetched successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;


