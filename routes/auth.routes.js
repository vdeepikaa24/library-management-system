import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Fake login (for testing)
router.post("/login", (req, res) => {
  const user = { _id: "12345", author: "Deepikaa" };

  const token = jwt.sign(
    { id: user._id, author: user.author },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;
