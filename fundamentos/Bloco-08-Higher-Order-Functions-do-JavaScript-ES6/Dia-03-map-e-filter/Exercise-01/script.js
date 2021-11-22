const books = require('../books');


// 1. Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(books) {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

formatedBookNames(books);
