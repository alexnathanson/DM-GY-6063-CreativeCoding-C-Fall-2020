let randomArray = [];
let noiseArray = [];

let xOff = 0.0;

function setup(){
	createCanvas(windowWidth, 400);
	//frameRate(2);

	//create an array for random values
	for (let r = 0; r < windowWidth;r++){
		randomArray[r] = random() * height/2;
	}

	//create an array for noise values
	for (let r = 0; r < windowWidth;r++){
		//noise returns a value between 1 and 0
		noiseArray[r] = noise(xOff) * height/2;
		xOff = xOff + 0.01;
	}
}

function draw(){
	//random returns a float up to, but not including the number given
	background(100,113,100);

	strokeWeight(1);
	stroke(255,0,0);
	beginShape();
	for (let r = 0; r < randomArray.length;r++){
		vertex(r,randomArray[r]);
	}
	endShape();

	stroke(0,255,0);
	noFill();
	beginShape();
	for (let r = 0; r < noiseArray.length;r++){
		vertex(r,noiseArray[r]+height/2);
	}
	endShape();

	stroke(0);
	textSize(20);
	text('random',20,20);
	text('noise',20,(height/2)+20);

	randomArray = shiftArray(randomArray,random() * height/2);
	noiseArray = shiftArray(noiseArray,noise(xOff) * height/2);
	xOff = xOff + 0.01;
}

function shiftArray(myArray,myValue){
	myArray.shift();//shift removes the first position in the array
	myArray.push(myValue); //push adds an element to an array

	return myArray;
}