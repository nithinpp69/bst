class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }

  addNode(node) {
    if (node.value <= this.value) {
      if (this.left == null)
        this.left = node;
      else
        this.left.addNode(node);
    } else {
      if (this.right == null)
        this.right = node;
      else
        this.right.addNode(node);
    }
  }

  visit() {
    if (this.left != null)
      this.left.visit();
    console.log(this.value);
    if (this.right != null)
      this.right.visit();
  }

  search(val) {
    if (this.value == val)
      console.log(this);
    else if (val <= this.value && this.left != null)
      this.left.search(val);
    else if (val > this.value && this.right != null)
      this.right.search(val);
    else
      console.log(`${val} Not Found`);
  }

}