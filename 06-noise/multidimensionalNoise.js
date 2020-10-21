
let xOff = 0.0;
let yOff = 0.0;
let zOff = 0.0;

function setup(){
	createCanvas(windowWidth, 400);
	//frameRate(2);

	//oneDimNoise();
	//anotherOneDimNoise();
	//twoDimNoise();

}

function draw(){
	background(100);
	
	/*anotherTwoDimNoise();
	yOff = yOff+ 0.01;*/

	threeDimNoise();
}

function oneDimNoise(){

	xOff = 0.0;

	fill(0,255,0);
	noStroke();
	beginShape();
	vertex(0,height);
	for (let r = 0; r < width;r++){
		vertex(r,noise(xOff)*height);
		xOff = xOff + 0.01;
	}
	vertex(width,height);
	endShape();
}

function anotherOneDimNoise(){
	xOff = 0.0;
	for(let x = 0;x < width;x++){
		xOff = xOff + 0.01;
			stroke(noise(xOff)*255);
			line(x,0,x,height);
	}
}

function twoDimNoise(){

	//noisy tv screen
	//1st dim = x coordinate
	//2nd dim = y coordinate
	xOff = 0.0;
	for(let x = 0;x < width;x++){
		xOff = xOff + 0.01;
		yOff=0.0;
		for(let y = 0;y< height;y++){
			yOff = yOff + 0.01;
			stroke(noise(xOff,yOff)*255);
			point(x,y);
		}
	}
}

function anotherTwoDimNoise(){

	//undulating wave
	//1st dim = x coordinate
	//2nd dim = time

	xOff = 0.0;
	fill(0,255,0);
	noStroke();
	beginShape();
	vertex(0,height);
	for (let r = 0; r < width;r++){
		vertex(r,noise(xOff,yOff)*height);
		xOff = xOff + 0.01;
	}
	vertex(width,height);
	endShape();
}

function threeDimNoise(){
	noStroke();
	//noisy tv screen
	//1st dim = x coordinate
	//2nd dim = y coordinate
	//3rd dim = time
	xOff = 0.0;
	for(let x = 0;x < width/4;x++){
		xOff = xOff + 0.01;
		yOff=0.0;
		for(let y = 0;y< height/4;y++){
			yOff = yOff + 0.01;
			fill(noise(xOff,yOff,zOff)*255);
			rect(x*4,y*4,4,4);
		}
	}

	zOff = zOff + 0.1;
}