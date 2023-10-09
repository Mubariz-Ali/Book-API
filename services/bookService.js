const { addBook } = require("../controllers/bookController");

const books = [
  { id: 1, title: "The Great Gatsby", auther: "F. Scott Fitzgerald" },
  { id: 2, title: "The Lord of the Rings", auther: "John Ronald Reuel Tolkien" },
  { id: 3, title: "A Beautiful Mind", auther: "Sylvia Nasar" },
  { id: 4, title: "Alan Turing: The Enigma", auther: "Andrew Hodges" },
  { id: 5, title: "A Game of Thrones", auther: "George R. R. Martin" },
]

module.exports = {
  getAllBooks: () => {
    return books;
  },
  deleteBook: (id) => {
    const book = books.find((c) => c.id === parseInt(id));
    if (!book) {
      return "There is no book against the given id";
    } else {
      const index = books.indexOf(book);
      books.splice(index, 1);
      return book;
    }
  },
  addBook: (bookToAdd) => {
    const book = {
      id: books.length + 1,
      name: book.name,
      author: book.author
    };
    books.push(book);
    return book;
  }

}