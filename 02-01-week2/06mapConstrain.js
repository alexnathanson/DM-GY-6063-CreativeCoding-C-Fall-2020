/*
Map allows you to transpose on value range to another
Constrain limits the range of a number
*/

function setup() {
  // put setup code here
  createCanvas(windowWidth,400);
}

function draw() {
  // put drawing code here
	background(0,100,100);

	rectMode(CENTER);

	fill(255,100,160);
	rect(width/3,height/2,200,200);
	rect((width/3)*2,height/2,200,200);

	fill(100, 49,200);
	ellipse(map(mouseX, 0, width, -75, 75)+width/3,map(mouseY, 0, windowHeight, -75,75)+(height/2),50,50);
	//ellipse(map(mouseX, 0, width, -75, 75)+(width/3)*2,map(mouseY, 0, windowHeight, -75,75)+(height/2),50,50);
	

	ellipse(constrain(mouseX, ((width/3)*2)-75, ((width/3)*2)+75),constrain(mouseY, (height/2)-75,(height/2)+75),50,50);


}
