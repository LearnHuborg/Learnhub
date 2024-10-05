const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Score = require("../models/Score");
const nodemailer = require("nodemailer");
require("dotenv").config();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
let tempUsers = {};
router.post("/signup", async (req, res) => {
  console.log("Signup route hit");
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    tempUsers[email] = { username, email, password, otp };
    const user = new User({ username, password: hashedPassword, email, otp });
    // await user.save();

    const mailOptions = {
      from: `"QuizApp Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Email Verification - OTP",
      html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .header h1 {
                color: #007bff;
            }
            .content {
                font-size: 16px;
                line-height: 1.5;
                margin-bottom: 20px;
            }
            .otp {
                font-size: 24px;
                font-weight: bold;
                color: #007bff;
                text-align: center;
                display: block;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                font-size: 14px;
                color: #777;
            }
            .footer a {
                color: #007bff;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Email Verification</h1>
            </div>
            <div class="content">
                <p>Hi ${user.username || "User"},</p>
                <p>Thank you for signing up. Please use the OTP below to verify your email address:</p>
                <span class="otp">${otp}</span>
                <p>This OTP is valid for the next 10 minutes. If you did not request this verification, please ignore this email.</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>The QuizApp Team</p>
                <p>If you have any questions, feel free to <a href="mailto:chanchalsen500@gmail.com">contact us</a>.</p>
            </div>
        </div>
    </body>
    </html>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        return res.status(500).json({ message: "Error sending OTP email" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({
          message:
            "Signup successful! Please verify your email using the OTP sent to your email.",
        });
      }
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({
      message:
        "Server error occurred while signing up. Please try again later.",
    });
  }
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  const tempUser = tempUsers[email];
  if (!tempUser) {
    return res.status(404).json({ message: "User not found or OTP expired" });
  }

  if (tempUser.otp !== otp) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  try {
    const newUser = new User({
      username: tempUser.username,
      email: tempUser.email,
      password: tempUser.password,
      verified: true,
    });
    await newUser.save();
    delete tempUsers[email];

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Email verified successfully!",
      userId: newUser._id,
      token,
    });
  } catch (error) {
    console.error("Verification Error:", error);
    res.status(500).json({ message: "Error saving user to the database" });
  }
});
// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token,
      userId: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/saveScore", async (req, res) => {
  const { userId, quizId, score } = req.body;

  if (!userId || !quizId || score === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (typeof score !== "number" || !Number.isFinite(score)) {
    return res.status(400).json({ message: "Invalid score value" });
  }

  try {
    const user = await User.findOne({ email: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingScoreIndex = user.scores.findIndex(
      (s) => s.quizId === quizId
    );

    if (existingScoreIndex !== -1) {
      user.scores[existingScoreIndex] = { quizId, score, date: new Date() };
    } else {
      user.scores.push({ quizId, score, date: new Date() });
    }

    await user.save();
    res.status(200).json({ message: "Score saved successfully" });
  } catch (error) {
    console.error("Save Score Error:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
});

router.get("/userProfile/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      scores: user.scores,
    });
  } catch (error) {
    console.error("User Profile Error:", error);
    res.status(500).json({ message: "Database error" });
  }
});

router.get("/userScores/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.scores);
  } catch (error) {
    console.error("User Scores Error:", error);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;
