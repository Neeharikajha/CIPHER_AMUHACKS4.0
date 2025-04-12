
const express = require("express");
const axios = require("axios");
const router = express.Router();
const protect = require("../middleware/auth");

// ✅ Route 1: Goal-Based Recommendation
router.post("/savings-goal", protect, async (req, res) => {
  try {
    const { weekly_income, weekly_expense, goal_amount } = req.body;

    const response = await axios.post("http://localhost:8000/savings_goal", {
      weekly_income,
      weekly_expense,
      goal_amount,
    });

    res.status(200).json(response.data);
  }
  catch (error) {
    console.error("AI savings goal route error:", error); // This logs the full error
    res.status(500).json({ message: "Error fetching savings goal data", error: error.message });
  }  
});

// ✅ Route 2: Year Forecast for Free Contributions
router.post("/forecast-year", protect, async (req, res) => {
  try {
    const { weekly_income, weekly_expense } = req.body;
    const weeks = 52; // 1 year forecast

    const response = await axios.post("http://localhost:8000/forecast_duration", {
      weekly_income,
      weekly_expense,
      weeks,
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error forecasting savings", error: err.message });
  }
});

module.exports = router;
