
// 1. Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matriz) {
  return matriz.reduce((acc, array) => {
    array.map((element) => acc.push(element));
    return acc;
  });
}

flatten(arrays);
