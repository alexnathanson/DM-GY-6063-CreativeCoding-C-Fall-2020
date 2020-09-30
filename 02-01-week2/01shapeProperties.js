//this is a comment

function setup() {
  // put setup code here
  createCanvas(400,400);

  print("Hello world!");
}

function draw() {
  // put drawing code here
	background(0,100,100);

	//stroke determines line color
	stroke(200,0,0);
	//strokeWeight determines line thickness
	strokeWeight(mouseX/10);

	strokeJoin(BEVEL);//determines corner joints for shapes


  noFill();
  //ellipse(mouseX,mouseY,50);

  rectMode(CORNERS); //determines draw position, default is corner

  //noStroke();
  rect(mouseX,mouseY, 50,50);

  strokeWeight(20);
  stroke(0,100, 200,200);
  strokeCap(ROUND); //determines line endings
  line(40,50,width-20,height-60);

}