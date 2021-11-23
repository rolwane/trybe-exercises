const books = require('../books');

// 3. Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge(books) {
  return books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0) / books.length;
}

averageAge(books);