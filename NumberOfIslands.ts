function numIslands(grid: string[][]): nubmer {
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function findLand(sr: number, sc: number) {
    if (sr >= 0 && sc >= 0 && sr < grid.length && sc < grid[0].length) {
      if (grid[sr][sc] === "1") {
        for (let d of directions) {
          grid[sr][sc] = "c";
          findLand(sr + d[0], sc + d[1]);
        }
      }
    }
  }

  let LandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        LandCount += 1;
        findLand(i, j);
      }
    }
  }

  return LandCount;
}
