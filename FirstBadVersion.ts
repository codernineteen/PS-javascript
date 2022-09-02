/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    if (n === 1) {
      return 1;
    }

    let currentBadVersion = -1;

    while (left <= right) {
      let midPoint =
        (left + right) % 2 === 0
          ? (left + right) / 2
          : Math.floor((left + right) / 2);
      if (isBadVersion(midPoint) === true) {
        currentBadVersion = midPoint;
        right = midPoint - 1;
      } else {
        left = midPoint + 1;
      }
    }

    return currentBadVersion;
  };
};
