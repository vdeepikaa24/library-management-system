import Book from "../models/book.model.js";

export const BookIndex = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

export const BookUpdate = async (req, res) => {
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const BookDelete = (req, res) => {
  res.send("Delete a book by ID");
};
