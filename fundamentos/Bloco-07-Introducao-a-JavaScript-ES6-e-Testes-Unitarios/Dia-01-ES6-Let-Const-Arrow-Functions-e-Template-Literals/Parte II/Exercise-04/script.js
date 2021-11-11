// Função 1 : Escreva uma função que vai receber uma string como parâmetro.
// Sua função deverá procurar pela letra x em uma string qualquer que você determinar
// e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

function stringReplace(string) {
  let stringBase = 'Tryber x aqui!';
  return stringBase.replace(/x/g, string);
}

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
// Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro.
// Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'];

function prhaseComplete(stringRef, skills) {
  return `${stringRef} Minhas cinco principais habilidades são: ${skills.sort()}`;
}
