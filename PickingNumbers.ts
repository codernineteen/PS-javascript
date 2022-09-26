//problem link: https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

function pickingNumbers(a: number[]): number {
  // Write your code here
  const numMap: { [key: number]: number } = {};
  for (const num of a) {
    if (numMap[num]) {
      numMap[num] += 1;
    } else {
      numMap[num] = 1;
    }
  }
  let maxLength = 0;
  for (const key in numMap) {
    let curLength = numMap[key];
    const elsOfNextNumber = numMap[parseInt(key) + 1];
    if (elsOfNextNumber) {
      curLength += elsOfNextNumber;
    }

    if (maxLength < curLength) {
      maxLength = curLength;
    }
  }

  return maxLength;
}

pickingNumbers([4, 6, 5, 3, 3, 1]); // 3
