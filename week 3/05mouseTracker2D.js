/*An array is a list of data.
In JS an array can contain different types of data*/

let len = 10;

let myArray = []; //create an array

function setup(){
	createCanvas(windowWidth/2, windowHeight/2);

	//populate the array
	for(let a=0;a<len;a++){
		myArray[a] = [];
		myArray[a][0] = 0;
		myArray[a][1] = 0;
	}

	//console.log(myArray);
}

function draw(){
	background(0,255,0);

	//shift everything over by 1
	for(let d = len-1; d > 0;d--){
			myArray[d]=myArray[d-1];
	}

	//add the new data
	myArray[0] = [mouseX,mouseY];

	//console.log(myArray);
	//draw it so newer data is drawn over older data
	for (let d = len-1; d > 0; d--){
		for (let s = 0; s < myArray[d].length;s++){
			stroke((255/len)*d);//fade data
			ellipse(myArray[d][0],myArray[d][1],5,5);//draw it
		}
	}
}