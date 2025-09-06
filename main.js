import express from "express";

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({ msg: "Welcome" });
});

// Fetch all books (with optional sort & search)
app.get('/books', () => {});

// Fetch a single book by ID
app.get('/books/:id', () => {});

// Create a new book
app.post('/books', () => {});

// Update a book by ID
app.put('/books/:id', () => {});

// Delete a book by ID
app.delete('/books/:id', () => {});


app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});