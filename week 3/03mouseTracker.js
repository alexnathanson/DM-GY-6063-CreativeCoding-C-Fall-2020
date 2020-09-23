/*An array is a list of data.
In JS an array can contain different types of data*/

let len = 10;

let myArrayX = []; //create an array

function setup(){
	createCanvas(windowWidth/2, windowHeight/2);

	//populate the array
	for(let a=0;a<len;a++){
		myArrayX[a] = 0;
	}
}

function draw(){
	background(0,255,0);

	//shift everything over by 1
	for(let d = len; d > 0;d--){
		myArrayX[d]=myArrayX[d-1];
	}

	//add the new data
	myArrayX[0] = mouseX;

	//draw it so newer data is drawn over older data
	for (let d = len; d > 0; d--){
		stroke((255/len)*d);//fade data
		line(myArrayX[d-1],0,myArrayX[d-1],height);//draw it
	}
}