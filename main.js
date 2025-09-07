import express from "express";
import bookRoutes from "./routes/books.routes.js";
const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({ msg: "Welcome!" });
});

// CLIENT -> MIDDLEWARE -> SERVER
app.use("/books", bookRoutes);


app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});