const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Test route: create a user
router.post("/create-user", async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: "User created!", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
