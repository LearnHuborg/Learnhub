const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  quizId: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
