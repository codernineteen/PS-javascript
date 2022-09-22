//problem link : https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function pageCount(n: number, p: number): number {
  // Write your code here
  let start = 1;
  let last = n % 2 === 0 ? n : n - 1;

  const fromStartToP = p - 1;
  const fromEndToP = n - p;

  let turningCount = 0;
  if (fromStartToP < fromEndToP) {
    while (true) {
      if (start - 1 === p || start === p) {
        return turningCount;
      }
      start += 2;
      turningCount += 1;
    }
  } else {
    while (true) {
      if (last + 1 === p || last === p) {
        return turningCount;
      }
      last -= 2;
      turningCount += 1;
    }
  }
}

console.log(pageCount(6, 2)); // 1
