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

function isValidBST(root: TreeNode | null): boolean {
  const traverse = (node: TreeNode | null, min: number, max: number): any => {
    if (!node) return true;

    if (node.val <= min) return false;
    if (node.val >= max) return false;

    return (
      traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
    );
  };

  return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

//[5,4,6,null,null,3,7
let input = new TreeNode(
  5,
  new TreeNode(4),
  new TreeNode(6, new TreeNode(3), new TreeNode(7))
);

console.log(isValidBST(input));
