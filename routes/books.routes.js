import express from "express";
import {
    BookIndex,
    BookFetchSingle,
    BookCreate,
    BookUpdate,
    BookDelete,
} from "../controllers/books.controller";

const router = express.Router();


// Fetch all books (with optional sort & search)
router.get("/", BookIndex);

// Fetch a single book by ID
router.get("/:id", BookFetchSingle);

// Create a new book
router.post("/", BookCreate);

// Update a book by ID
router.put("/:id", BookUpdate);

// Delete a book by ID
router.delete("/:id", BookDelete);

export default router;