var root;
var tree;

function setup() {
  noCanvas();
  tree = new Tree();
  for (var i = 0; i < 10; i++)
    tree.addValue(floor(random(50)));

  console.log(tree);
  tree.traverse();
  tree.search(floor(random(50)));
}

function draw() {

}