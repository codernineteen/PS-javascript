// Problem : https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

function countingValleys(steps: number, path: string): number {
  // Write your code here
  let currentLevel = 0;

  let valleyCount = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "D") {
      currentLevel -= 1;
    } else {
      if (currentLevel < 0 && currentLevel + 1 >= 0) {
        valleyCount += 1;
      }
      currentLevel += 1;
    }
  }

  return valleyCount;
}

console.log(countingValleys(8, "DDUUUUDD")); // 1
