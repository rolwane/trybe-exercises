const books = require('../books');


// 6. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(books) {
  return books.filter((book) => 2021 - book.releaseYear > 60).map((book) => book.name);
}

oldBooks(books);
