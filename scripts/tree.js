class Tree {
  constructor() {
    this.root = null;
  }

  addValue(val) {
    var n = new Node(val);
    if (this.root == null) {
      this.root = n;
    } else {
      this.root.addNode(n);
    }
  }

  traverse() {
    this.root.visit();
  }

  search(value) {
    return this.root.search(value);
  }

}