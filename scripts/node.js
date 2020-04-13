class Node {
  constructor(val, x, y) {
    this.value = val;
    this.right = null;
    this.left = null;
    this.x = x;
    this.y = y;
  }

  addNode(node) {
    if (node.value <= this.value) {
      if (this.left == null) {
        this.left = node;
        this.left.x = this.x - 100;
        this.left.y = this.y + 80;
      }
      else
        this.left.addNode(node);
    } else {
      if (this.right == null) {
        this.right = node;
        this.right.x = this.x + 100;
        this.right.y = this.y + 80;
      }
      else
        this.right.addNode(node);
    }
  }

  visit(parent) {
    if (this.left != null)
      this.left.visit(this);
    console.log(this.value);
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(16);
    text(this.value, this.x, this.y);
    
    if (this.right != null)
      this.right.visit(this);
  }

  search(val) {
    if (this.value == val)
      return this;
    else if (val <= this.value && this.left != null)
      return this.left.search(val);
    else if (val > this.value && this.right != null)
      return this.right.search(val);
    else
      return `${val} Not Found`;
  }

}