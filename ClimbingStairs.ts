function factorial(n: number): number {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function climbStairs(n: number): number {
  // 4 => 2 2/ 1 1 2 / 1 2 1 / 2 1 1 / 1 1 1 1
  // 5 => 2 2 1
  let remainder = n;
  let factorMap: any = { 1: 0, 2: 0 };
  let cases = 0;

  while (remainder % 2 === 0 || remainder % 2 === 1) {
    remainder %= 2;
    factorMap["2"] += 1;
  }
  if (remainder === 1) {
    factorMap["1"] += 1;
  }

  while (factorMap["2"] !== 0) {
    let oneStep = factorMap["1"];
    let twoStep = factorMap["2"];
    //(oneStep + twoStep)! / (twostep)!(onestep)!

    if (oneStep !== 0 && twoStep !== 0) {
      cases +=
        (factorial(oneStep + twoStep) / factorial(oneStep)) *
        factorial(twoStep);
    } else if (oneStep === 0) {
      cases += 1;
    } else if (twoStep === 0) {
      cases += 1;
    }

    if (twoStep !== 0) {
      factorMap["2"] -= 1;
      factorMap["1"] += 2;
    }
  }

  return cases;
}
