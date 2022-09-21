//Problem link : https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

//Solution
function getTotalX(a: number[], b: number[]): number {
  // Write your code here
  // 2, 4 -> 4, 8, 16 can divide 16, 32, 96 -> return 3
  let biggestFactor = a[0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % biggestFactor === 0) {
      biggestFactor = a[i];
    } else {
      for (let j = 1; j <= 100; j++) {
        if (j % biggestFactor === 0 && j % a[i] === 0) {
          biggestFactor = j;
          break;
        }
      }
    }
  }
  console.log(biggestFactor);
  let count = 1;
  let resultCount = 0;
  let consideredNumber = biggestFactor;
  let isDivided = true;
  while (consideredNumber <= b[0]) {
    isDivided = true;
    for (const num of b) {
      if (num % consideredNumber !== 0) {
        isDivided = false;
        break;
      }
    }

    if (isDivided === true) {
      resultCount += 1;
    }
    count += 1;
    consideredNumber = biggestFactor * count;
  }
  return resultCount;
}

getTotalX([2, 6], [24, 36]); // expected output : 2
