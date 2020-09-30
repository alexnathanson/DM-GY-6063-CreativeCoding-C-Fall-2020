
function setup() {
  // put setup code here
  createCanvas(600,600);

}

function draw() {
  // put drawing code here
	background(0,100,100);

	push();
		translate(width/2,height/2);

		//rotate(map(mouseX,0,windowWidth,0,TWO_PI));

		textSize(30);
		noStroke();
		fill(255);
		textAlign(LEFT, TOP);
		text("0, 0", 5,0);

		push();
			//rotate(mouseX*TWO_PI);
			fill(0,255,0);
			rotate(map(mouseX,0,windowWidth,0,TWO_PI))
			rectMode(CENTER);
			rect(10,10,50,50);
		pop();

		fill(255,0,0);
		rectMode(CENTER);
		rect(20,20,50,50);
	pop();

	stroke(0);
	strokeWeight(10);	
	line(0,0,width, height);
}
