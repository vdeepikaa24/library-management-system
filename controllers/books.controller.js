import Book from "../models/book.model.js";

export const BookIndex = (req, res) => {
  res.send("Fetch all books");
};

export const BookFetchSingle = (req, res) => {
  res.send("Fetch a single book by ID");
};

export const BookCreate = async (req, res) => {
  //title, author, year

  console.log(req.body);

  //   validate your data.
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
};

export const BookUpdate = (req, res) => {
  res.send("Update a book by ID");
};

export const BookDelete = (req, res) => {
  res.send("Delete a book by ID");
};
