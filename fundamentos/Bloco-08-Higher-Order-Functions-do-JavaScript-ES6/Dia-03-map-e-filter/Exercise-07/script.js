const books = require('../books');


// 7. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName(books) {
  return books.find((book) => {
    const name = book.author.name.replace(/ /g, '').split('.');
    return (name[0].length === 1 && name[1].length === 1 && name[2].length === 1)
  }).name;
}

authorWith3DotsOnName(books);
