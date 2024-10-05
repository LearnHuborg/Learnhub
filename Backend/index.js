const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();

const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsConfig)); 
app.use(express.json()); 

mongoose
  .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);

app.get('*', (req, res) => {
  res.send('Welcome to the Quiz App Backend!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "An internal server error occurred." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
