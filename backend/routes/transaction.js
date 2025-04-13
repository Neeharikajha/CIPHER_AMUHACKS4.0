const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const protect = require("../middleware/auth");

// POST: Create new transaction
router.post("/create", protect, async (req, res) => {
  try {
    const { name, amount, paymentStatus, invoice } = req.body;

    if (!name || !amount || !paymentStatus || !invoice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTransaction = new Transaction({
      userId: req.user._id,
      name,
      amount,
      paymentStatus,
      invoice,
    });

    await newTransaction.save();
    res.status(201).json({ message: "Transaction recorded", transaction: newTransaction });
  } catch (err) {
    console.error("Transaction error:", err);
    res.status(500).json({ message: "Error saving transaction", error: err.message });
  }
});

// (Optional) GET: List all transactions of the logged-in user
router.get("/my-transactions", protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching transactions", error: err.message });
  }
});

module.exports = router;
