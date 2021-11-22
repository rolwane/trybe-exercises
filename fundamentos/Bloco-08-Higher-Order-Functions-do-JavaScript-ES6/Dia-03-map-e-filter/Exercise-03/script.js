const books = require('../books');


// 3. Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(books) {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}

fantasyOrScienceFiction(books);
