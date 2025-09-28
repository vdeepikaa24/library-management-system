import express from "express";
import {
  BookIndex,
  BookFetchSingle,
  BookCreate,
  BookUpdate,
  BookDelete,
  BookSearch,
  BookPaginate,
} from "../controllers/books.controller.js";

const router = express.Router();

router.get("/", BookIndex);
router.get("/search", BookSearch);
router.get("/paginate", BookPaginate);
router.get("/:id", BookFetchSingle);
router.post("/", BookCreate); // requires token
router.put("/:id", BookUpdate); // requires token
router.delete("/:id", BookDelete); // requires token

export default router;
