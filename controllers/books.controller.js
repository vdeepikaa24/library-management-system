export const BookIndex = (req, res) => {
    res.send("Fetch all books");
};

export const BookFetchSingle = (req, res) => {
    res.send("Fetch a single book by ID");
};

export const BookCreate = (req, res) => {
    res.send("Create a new book");
};

export const BookUpdate = (req, res) => {
    res.send("Update a book by ID");
};

export const BookDelete = (req, res) => {
    res.send("Delete a book by ID");
};