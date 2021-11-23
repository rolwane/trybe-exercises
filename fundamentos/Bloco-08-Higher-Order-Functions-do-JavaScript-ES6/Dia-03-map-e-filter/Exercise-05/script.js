const books = require('../books');


// 5. Crie um array em ordem alfabética apenas com os nomes de todas as pessoas
// autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors(books) {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => book.author.name).sort();
}

fantasyOrScienceFictionAuthors(books);
