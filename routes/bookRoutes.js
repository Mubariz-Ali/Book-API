const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    deleteBook,
    addBook
} = require('../controllers/bookController');

router.get('/', getAllBooks);
router.delete('/deleteBook/:id', deleteBook);
router.post('/addBook', addBook);

module.exports = router;
