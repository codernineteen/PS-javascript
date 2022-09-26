function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  // Write your code here
  const rankResult = [];
  for (const pScore of player) {
    if (ranked[ranked.length - 1] > pScore) {
      rankResult.push(ranked.length);
    } else if (pScore > ranked[0]) {
      rankResult.push(1);
    } else {
      let curRank = 1;
      for (const score of ranked) {
        if (pScore < score) {
          curRank += 1;
        } else {
          rankResult.push(curRank - 1);
          break;
        }
      }
    }
  }
  return rankResult;
}

climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
