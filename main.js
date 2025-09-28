import express from "express";
import bookRoutes from "./routes/books.routes.js";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "./middleware/auth.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 6969;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Library Management System!" });
});

// Login Route
app.post("/login", (req, res) => {
  const { username } = req.body;
  if (!username)
    return res.status(400).json({ message: "Username is required" });

  // Create token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Decode Token Route
app.post("/decode", (req, res) => {
  const { token } = req.body || {};
  if (!token) return res.status(400).json({ message: "Token is required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ decoded });
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

// Protected Book Routes
app.use("/books", verifyToken, bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
