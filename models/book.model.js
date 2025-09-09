import { Schema, model } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
    unique: true,
  },
});

//Create your model
const Book = model("Book", schema);

export default Book;
