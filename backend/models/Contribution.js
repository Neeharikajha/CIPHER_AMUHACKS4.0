const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  weekly_income: Number,
  weekly_expense: Number,
  weekly_saving: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contribution", contributionSchema);
