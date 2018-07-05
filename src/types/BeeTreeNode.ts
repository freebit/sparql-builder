export default class BeeTreeNode {
  public root: number;
  public leftLeaf: BeeTreeNode | null;
  public rightLeaf: BeeTreeNode | null;

  constructor(value: number) {
    this.root = value;
    this.leftLeaf = null;
    this.rightLeaf = null;
  }

  public compareTo(node: BeeTreeNode): number {
    return this.root > node.root ? 1 : this.root < node.root ? -1 : 0;
  }
}
