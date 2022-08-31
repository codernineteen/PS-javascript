var longestPalindrome = function (s) {
  let map = {};
  for (let c of s) {
    if (map[c] === undefined) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  let palindromeCount = 0;
  let isOdd = false;

  for (const key in map) {
    if (map[key] % 2 == 0) {
      palindromeCount += map[key];
    } else {
      isOdd = true;
      palindromeCount += map[key] - 1;
    }
  }

  return isOdd ? palindromeCount + 1 : palindromeCount;
};

console.log(longestPalindrome("abccccdd"));
