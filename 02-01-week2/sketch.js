//Two ways
let myVariable; //this is more correct
var myOtherVariable;

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
	background(0,100,100);

  fill(0);
  ellipse(mouseX,mouseY,5);

  textSize(24);
  text(mouseX + " " + mouseY,100,100);
}