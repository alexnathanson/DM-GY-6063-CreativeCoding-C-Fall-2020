
function setup() {
  // put setup code here
  createCanvas(windowWidth,400);

}

function draw() {
  // put drawing code here
	background(0,100,100);

	
	//nested for loop
	for(let x = 1; x < 10; x++){
		for(let y = 1; y <5;y++){
			fill(255/x,255/y,0);
			ellipse((width/10)*x,(height/5)*y,10,10);
		}
	}

}
