var cnv;
var root;
var tree;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(51);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  tree = new Tree();
  for (var i = 0; i < 10; i++)
    tree.addValue(floor(random(50)));

  console.log(tree);
  tree.traverse();
  var search = tree.search(floor(random(50)));
  console.log(search);
}


function windowResized() {
  centerCanvas();
}

function draw() {

}