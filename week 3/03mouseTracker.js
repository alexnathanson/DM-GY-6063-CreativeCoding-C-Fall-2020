/*An array is a list of data.
In JS an array can contain different types of data*/

let len = 10;

let myArrayX = []; //create an array
let myArrayY = [];

function setup(){
	createCanvas(windowWidth/2, windowHeight/2);

	//populate the array
	for(let a=0;a<len;a++){
		myArrayX[a] = 0;
	}

	//populate the array
	for(let a=0;a<len;a++){
		myArrayY[a] = 0;
	}
}

function draw(){
	background(0,255,0);

	//shift everything over by 1
	for(let d = len; d > 0;d--){
		myArrayX[d]=myArrayX[d-1];
	}

	//shift everything over by 1
	for(let d = len; d > 0;d--){
		myArrayY[d]=myArrayY[d-1];
	}

	//add the new data
	myArrayX[0] = mouseX;
	
	//add the new data
	myArrayY[0] = mouseY;

	//draw it so newer data is drawn over older data
	for (let d = len; d > 0; d--){
		stroke((255/len)*d);//fade data
		line(myArrayX[d-1],myArrayY[d-1],myArrayX[d-1],height);//draw it
	}
}