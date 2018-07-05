import BeeTreeNode from "./BeeTreeNode";

export default class BeeTree {
  public _head: BeeTreeNode | null;
  public key: string;
  constructor(node: BeeTreeNode | null) {
    this._head = node;
    this.key = Math.random()
      .toString(36)
      .substr(2, 9);
  }

  public add(node: BeeTreeNode) {
    if (this._head === null) {
      this._head = new BeeTreeNode(node.root);
    } else {
      this.addTo(this._head, node);
    }
  }

  private addTo(node: BeeTreeNode, newNode: BeeTreeNode) {
    if (node.compareTo(newNode) > 0) {
      if (node.leftLeaf === null) {
        node.leftLeaf = new BeeTreeNode(newNode.root);
      } else {
        this.addTo(node.leftLeaf, newNode);
      }
    } else {
      if (node.rightLeaf === null) {
        node.rightLeaf = new BeeTreeNode(newNode.root);
      } else {
        this.addTo(node.rightLeaf, newNode);
      }
    }
  }
}
