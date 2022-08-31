var maxProfit = function (prices) {
  let min = 0;
  let max = prices.length - 1;

  let maxProfit = 0;

  while (min <= max) {
    for (let i = min + 1; i <= max; i++) {
      let profit = prices[i] - prices[min];
      console.log(prices[i], prices[min]);
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
    min++;
  }
  return maxProfit;
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
