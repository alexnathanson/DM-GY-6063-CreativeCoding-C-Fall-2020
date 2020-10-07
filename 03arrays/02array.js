/*An array is a list of data.
In JS an array can contain different types of data*/

let myArray = []; //create an array

let myImageArray = ['image1.jpg','image2.jpg'];

//let myHardcodedArray = [4,6,2,10];

function setup(){
	createCanvas(windowWidth, windowHeight/2);

	//there are a number of ways to populate an array
	/*myArray[0] = 4;
	myArray[1] = 6;*/
	//myArray[3] = 8; //dont skip

	let arraySize = width/2;
	for (let mA = 0; mA < arraySize; mA++){
		myArray[mA] = random(0,255);
	}

	console.log(myArray);
	console.log(myArray.length);
	console.log(myArray[0]);

	isThisRunning();
}

function draw(){

	for (let d = 0; d < myArray.length;d++){
		stroke(myArray[d]);
		line(d,0,d,height);
	}


	//another type of loop syntax
	/*for (let d in myArray){
		//typeof is an operator
		console.log(typeof myArray[d]);

		console.log(myArray[d]);
	}*/
}

//fill the array with new values on key press
function keyPressed(){
	for (let mA = 0; mA < myArray.length; mA++){
		myArray[mA] = random(0,255);
	}
}

//add 10 to the array on mouse click
function mousePressed(){
	//both of these loops accomplish the same thing

	/*for(let a = 0;a < 10;a++){
		//remember array position starts at 0, but length starts at 1
		myArray[myArray.length] =random(0,255);
	}*/

	for(let a = 0;a < 10;a++){
		myArray.push(random(0,255));
	}
}

function isThisRunning(){

	let status = 'YES!';

	console.log(status);

	console.log(typeof status);
	//consolelog(fill*2);
}