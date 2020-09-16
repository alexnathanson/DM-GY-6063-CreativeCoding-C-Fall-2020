//this is a comment

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
	background(0,100,100);

	stroke(200,0,0);
	strokeWeight(mouseX/10);
  noFill();
  //ellipse(mouseX,mouseY,50);

  rect(mouseX,mouseY, 50,50);
}