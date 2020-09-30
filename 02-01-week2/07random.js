let walkDimX, walkDimY;

let oldLX, oldLY;

function setup() {
  // put setup code here
  createCanvas(windowWidth,400);


	oldLX = random(width);
	oldLY = random(height);

  walkDimX = random(width);
  walkDimY = random(height);

  //frameRate(5);
  fill(random(255),random(255), random(255));
}

function draw() {
  // put drawing code here
  	stroke(random(255));

	background(0,100,100);

  	let newLX = random(width);
  	let newLY = random(height);
  	line(newLX,newLY, oldLX,oldLY);
  	oldLX = newLX;
  	oldLY = newLY;

	//fill(random(255),random(255), random(255));
	//ellipse(width/2,height/2,random(width),random(height))

	randomWalks();
	ellipse(width/2,height/2,walkDimX,walkDimY);
}

function randomWalks(){
	walkDimX = constrain(walkDimX + random(10)-5,0,width);
	walkDimY = constrain(walkDimY + random(10)-5,0, height);
}
