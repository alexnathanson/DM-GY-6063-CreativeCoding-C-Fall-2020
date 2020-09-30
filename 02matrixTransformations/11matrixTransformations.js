//translate, rotate, scale

function setup() {
  // put setup code here
  createCanvas(600,600);

}

function draw() {
  // put drawing code here
	background(0,100,100);

	//translate moves the origin point of the matrix
	translate(mouseX,mouseY);

	//in radians, rotates around 0,0
	//radians goes 0-2PI
	rotate(PI);

	//scale scales from origin as well
	scale(mouseY/height);

	stroke(0);
	strokeWeight(10);
	point(0,0);
	
	line(50,height/2,width-50, height/2);


	textSize(30);
	noStroke();
	fill(255);
	textAlign(LEFT, TOP);
	text("0, 0", 5,0);
}
