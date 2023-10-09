const bookService = require('../services/bookService');
const Joi = require("joi");

const bookSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  title: Joi.string().min(1).max(30).required(),
  author: Joi.string().min(1).max(30).required()
})

module.exports = {
  getAllBooks: (req, res) => {
    const books = bookService.getAllBooks();
    res.send(books);
  },

  deleteBook: (req, res) => {
    const book = bookService.deleteBook(req.params.id);
    res.send(book);
  },

  addBook: (req, res) => {
    try {
      const validate = bookSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const book = bookService.addBook(req.body);
      res.send(book);
    } catch {
      res.send(500).send("Something went Wrong");
    }
  }
};