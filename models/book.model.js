import { Schema, model } from "mongoose";

const schema = new Schema({
  title: String,
  author: String,
  year: String,
});

//Create your model
const Book = model("Book", schema);

export default Book;
