function search(nums: number[], target: number): number {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let midPoint =
      (max + min) % 2 == 0 ? (max + min) / 2 : Math.floor((max + min) / 2);
    if (nums[midPoint] === target) {
      return midPoint;
    } else if (nums[midPoint] < target) {
      min = midPoint + 1;
    } else if (nums[midPoint] > target) {
      max = midPoint - 1;
    }
  }
  return -1;
}
