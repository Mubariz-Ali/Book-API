// routes/helloRoute.js

const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    deleteBook
} = require('../controllers/bookController');

router.get('/', getAllBooks);
router.delete('/deleteBook/:id', deleteBook);

module.exports = router;
