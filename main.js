import express from "express";

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({ msg: "Welcome" });
});

//For fetching books
app.get('/books', () => {});

//For creating books
app.post('/books', () => {});

//For updating books
app.put('/books/:id', () => {});

//For deleting books
app.delete('/books/:id', () => {});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});