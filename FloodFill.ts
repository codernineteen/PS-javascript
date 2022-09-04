function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) {
    return image;
  }

  let directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  function filling(
    image: number[][],
    sr: number,
    sc: number,
    color: number,
    targetColor: number
  ): void {
    if (sr >= 0 && sc >= 0 && sr < image.length && sc < image[0].length) {
      let curColor = image[sr][sc];
      if (curColor === color) {
        for (let d of directions) {
          image[sr][sc] = targetColor;
          filling(image, sr + d[0], sc + d[1], color, targetColor);
        }
      }
    }
  }

  filling(image, sr, sc, image[sr][sc], color);

  return image;
}
