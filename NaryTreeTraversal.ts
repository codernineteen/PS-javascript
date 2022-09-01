class Node1 {
  val: number;
  children: Node1[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: Node1 | null, arr: number[] = []): number[] {
  if (!root) return [];
  if (root) arr.push(root.val);

  for (let el of root?.children) {
    preorder(el, arr);
  }

  return arr;
}
