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
  }
};