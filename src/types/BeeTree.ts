import BeeTreeNode from "./BeeTreeNode";

export default class BeeTree {
  public _head: BeeTreeNode | null = null;
  public key: string;
  private _count: number = 0;
  constructor(node: BeeTreeNode | null) {
    this._head = node;
    this.key = Math.random()
      .toString(36)
      .substr(2, 9);
    if (this._head) {
      this._count = 1;
    }
  }

  public add(node: BeeTreeNode) {
    if (this._head === null) {
      this._head = new BeeTreeNode(node.root);
    } else {
      this.addTo(this._head, node);
    }
    this._count++;
  }

  public remove(node: BeeTreeNode): boolean {
    const { current, parent } = this.findWithParent(node);
    if (current === null) {
      return false;
    }
    this._count--;

    if (current.rightLeaf == null) {
      // если это начало дерева (нет родителя)
      if (parent == null) {
        this._head = current.leftLeaf;
      } else {
        const result = parent.compareTo(current);

        if (result > 0) {
          parent.leftLeaf = current.leftLeaf;
        } else if (result < 0) {
          parent.leftLeaf = current.rightLeaf;
        }
      }
    }
    return true;
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

  private findWithParent(targetNode: BeeTreeNode): any {
    let current = this._head;
    let parent = null;

    while (current != null) {
      let result: number = current.compareTo(targetNode);
      if (result > 0) {
        parent = current;
        current = current.leftLeaf;
      } else if (result < 0) {
        parent = current;
        current = current.rightLeaf;
      } else {
        break;
      }
    }
    return { current, parent };
  }

  private contains(node: BeeTreeNode): boolean {
    return this.findWithParent(node).current !== null;
  }

  get counter() {
    return this._count;
  }
}
