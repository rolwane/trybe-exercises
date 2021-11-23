const books = require('../books');

// 4. Encontre o livro com o maior nome.

function longestNamedBook(books) {
  return books.reduce((acc, book) => book.name.length > acc.length ? book : acc);
}

longestNamedBook(books);
