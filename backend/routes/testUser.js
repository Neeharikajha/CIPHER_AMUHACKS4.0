const express = require("express");
const User = require("../models/User");
const router = express.Router();
const Contribution = require("../models/Contribution"); // make sure you have this


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



router.post("/contributions/add", protect, async (req, res) => {
  try {
    const { weekly_income, weekly_expense } = req.body;
    const weekly_saving = weekly_income - weekly_expense;

    const contribution = new Contribution({
      userId: req.user._id,
      weekly_income,
      weekly_expense,
      weekly_saving,
      timestamp: Date.now(),
    });

    await contribution.save();
    res.status(201).json({ message: "Contribution added", weekly_saving });
  } catch (err) {
    res.status(500).json({ message: "Error saving contribution", error: err.message });
  }
});

