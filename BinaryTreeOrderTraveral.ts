class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(
  root: TreeNode | null,
  arr: number[][] = [],
  depth: number = 0
): number[][] {
  if (!root) return arr;
  if (!arr[depth]) {
    arr.push([root.val]);
  } else {
    arr[depth].push(root.val);
  }

  if (root.left) {
    levelOrder(root.left, arr, depth + 1);
  }
  if (root.right) {
    levelOrder(root.right, arr, depth + 1);
  }

  return arr;
}
