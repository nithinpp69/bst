var root;
var tree;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(51);
  tree = new Tree();
  for (var i = 0; i < 10; i++)
    tree.addValue(floor(random(50)));

  console.log(tree);
  tree.traverse();
  var search = tree.search(floor(random(50)));
  console.log(search);
}

function draw() {

}