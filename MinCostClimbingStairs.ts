function minCostClimbingStairs(cost: number): number {
  if (cost === 1) {
    return 1;
  }
  if (cost === 0) {
    return 0;
  }
  return minCostClimbingStairs(cost - 1) + minCostClimbingStairs(cost - 2);
}

console.log(minCostClimbingStairs(5));
