import Book from "../models/book.model.js";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/auth.js";

// generate token
export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, author: user.author },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Public: anyone can fetch all books
export const BookIndex = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Public: fetch single book
export const BookFetchSingle = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (book == null) {
      return res.status(404).json({ message: "Cannot find book" });
    } else {
      res.json(book);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Protected: only logged-in user can create
export const BookCreate = [
  verifyToken,
  async (req, res) => {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
    });

    try {
      const book = await newBook.save();
      return res.status(201).json(book);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
];

// Protected: only logged-in user can update
export const BookUpdate = [
  verifyToken,
  async (req, res) => {
    try {
      const updatedBook = await Book.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: req.body.title,
          author: req.body.author,
          year: req.body.year,
        },
        { new: true }
      );
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
];

// Protected: only logged-in user can delete
export const BookDelete = [
  verifyToken,
  async (req, res) => {
    const bookId = req.params.id;
    try {
      await Book.deleteOne({ _id: bookId });
      res.json({ message: "Book deleted!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
];

// Public: search
export const BookSearch = async (req, res) => {
  const { title, author } = req.query;
  try {
    const query = {};
    if (title) query.title = { $regex: title, $options: "i" };
    if (author) query.author = { $regex: author, $options: "i" };

    const books = await Book.find(query).sort({ year: 1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Public: pagination
export const BookPaginate = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const offset = parseInt(req.query.offset) || 0;
    const books = await Book.find().skip(offset).limit(limit);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
