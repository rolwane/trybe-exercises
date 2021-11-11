// 1. Crie uma função que receba um número e retorne seu fatorial.

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(4));