
function setup() {
  // put setup code here
  createCanvas(400,400);
  	background(255,100,100);

}

function draw() {
  // put drawing code here
  //background(255,100,100);

  stroke(100);
  strokeWeight(3);
  line(mouseX,mouseY,pmouseX, pmouseY);

/*
  rect(pmouseX,pmouseY,20,20);
  rect(mouseX,mouseY,50,50);
*/

}