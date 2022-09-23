//problem: https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

//O(N2)
function getMoneySpent(keyboards, drives, b) {
  let maxCost = -1;
  for (const k of keyboards) {
    for (const d of drives) {
      if (k + d <= b && k + d > maxCost) {
        maxCost = k + d;
      }
    }
  }
  return maxCost;
}

getMoneySpent([3, 1], [5, 2, 8], 10); //9
