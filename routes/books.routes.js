import express from "express";

const router = express.Router();

// /books//books
// Fetch all books (with optional sort & search)
router.get("/", (req, res) => {
    res.send("Fetch all books");
});

// Fetch a single book by ID
router.get("/:id", (req, res) => {
    res.send("Fetch a single book by ID");
});

// Create a new book
router.post("/", (req, res) => {
    res.send("Create a new book");
});

// Update a book by ID
router.put("/:id", (req, res) => {
    res.send("Update a book by ID");
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
    res.send("Delete a book by ID");
});

export default router;