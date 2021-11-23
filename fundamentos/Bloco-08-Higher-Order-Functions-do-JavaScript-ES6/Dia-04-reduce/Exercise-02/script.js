const books = require('../books');


// 2. Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(books) {
  return books.reduce((acc, book) => acc += `, ${book.author.name}`, books[0].author.name);
}

reduceNames(books);
