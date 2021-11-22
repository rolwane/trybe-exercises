const books = require('../books');


// 4. Crie um array ordenado pelos livros com mais de 60 anos de publicação
// e ordene-o pelo livro mais velho.

function oldBooksOrdered(books) {
  const data = new Date();
  return books.filter((book) => data.getFullYear() - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

oldBooksOrdered(books);
