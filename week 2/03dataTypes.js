let myNumber = 500;
let myBool = true;
let myString = "some text";
let myStringNumber = "500";
let myUndefined;

function setup(){
	createCanvas(400,400);
	background(200);

	console.log(typeof myNumber);
	console.log(typeof myBool);
	console.log(typeof myString);
	console.log(typeof myUndefined);
	console.log(typeof myNull);

	/*console.log(myUndefined);
	console.log(myNull);*/

}

function draw(){
	fill(0);

	//in JS this will run
	if(myNumber == myStringNumber){
		fill(100);
		rect(50,50,200,100);
	}

	//in JS this wont run
	//=== compares BOTH value and type
	if(myNumber === myStringNumber){
		fill(255,0,0);
		ellipse(200,100,200,100);
	}

	//this will not throw an error, but it wont run because they aren't equal
	if(myNumber == myUndefined){
		fill(0,100,0);
		rect(50,height,200,100);
	}

	//this will throw an error
	/*if(myNumber == myNull){
		fill(100,0,0);
		rect(50,50,200,100);
	}*/

}