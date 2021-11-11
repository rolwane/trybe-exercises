// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

function longestWord(phrase) {
  const words = phrase.split(' ');
  let resultWord = words[0];
  words.forEach(word => resultWord = word.length > resultWord.length ? word : resultWord);
  return resultWord;
}
