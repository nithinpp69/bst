class Tree {
  constructor() {
    this.root = null;
  }

  addValue(val) {
    var n = new Node(val);
    if (this.root == null) {
      this.root = n;
      this.root.x = width / 2;
      this.root.y = 30;
    } else {
      this.root.addNode(n);
    }
  }

  traverse() {
    this.root.visit(this.root);
  }

  search(value) {
    return this.root.search(value);
  }

}