function formingMagicSquare(s: number[][]): number {
  // Write your code here
  const possibleMagicSquares: number[][] = [
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
  ];

  const flatSquare: number[] = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[0].length; j++) {
      flatSquare.push(s[i][j]);
    }
  }

  let result = Infinity;
  possibleMagicSquares.forEach((el) => {
    let currentResult = 0;
    for (let i = 0; i < el.length; i++) {
      if (el[i] !== flatSquare[i]) {
        currentResult += Math.abs(el[i] - flatSquare[i]);
      }
    }
    if (result > currentResult) {
      result = currentResult;
    }
  });

  return result;
}

formingMagicSquare([
  [2, 5, 4],
  [4, 6, 9],
  [4, 5, 2],
]);
