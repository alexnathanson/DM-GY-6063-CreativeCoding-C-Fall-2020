let noiseArray = [];

let xOff = 0.0;
let xOffz = 0.0;

function setup(){
	createCanvas(windowWidth, 400);
	//frameRate(2);

}

function draw(){
	xOff = xOff + 0.01;
	background(200,130,45);

	noStroke();
	fill(234,161,245);
	
	let eSizeN = height*noise(xOff);
	ellipse(width/3,height/2,eSizeN,eSizeN);

	xOffz = xOffz + 0.001;
	let eSizeNz = height*noise(xOffz);
	ellipse((width/3)*2,height/2,eSizeNz,eSizeNz);

/*	let eSizeR = height * random();
	ellipse((width/3)*2,height/2,eSizeR,eSizeR);*/
}