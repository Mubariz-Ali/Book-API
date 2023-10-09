const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  deleteBook,
  addBook,
  updateBook,
} = require("../controllers/bookController");

router.get("/", getAllBooks);
router.delete("/deleteBook/:id", deleteBook);
router.post("/addBook", addBook);
router.put("/updateBook/:id", updateBook);

module.exports = router;
