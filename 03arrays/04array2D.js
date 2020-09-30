/*An array is a list of data.
In JS an array can contain different types of data*/

let myArray = []; //create an array

/*//js doesn't have an explicit multidimensional array type, but arrays can always be placed inside of other arrays
//this is a 2 dimensional array (4x4)
let myDimensionalArray = [
	[1,0,0,0],
	[0,1,0,0],
	[0,0,1,0],
	[0,0,0,1]
];
*/

let startColor, endColor;

function setup(){
	createCanvas(windowWidth/2, windowHeight/2);

	background(0,0,255);

	noStroke();
	
	for (let mX = 0; mX < width/4; mX++){
		myArray[mX] = [];
		for (let mY = 0; mY < height/4; mY++){
			myArray[mX][mY] = random(0,255);
		}
	}

	/*//this accomplishes the same thing
	for (let mX = 0; mX < width/4; mX++){
		let tempArray = [];
		for (let mY = 0; mY < height/4; mY++){
			tempArray[mY] = random(0,255);
		}
		myArray[mX] = tempArray;
	}*/

	console.log(myArray);
	console.log(myArray.length);

}

function draw(){
	for (let x = 0; x < myArray.length;x++){
		for (let y = 0; y< myArray[x].length;y++){
			fill(myArray[x][y]);
			rect(x*4,y*4,4,4);
		}
	}
}

function keyPressed(){
	for (let mX = 0; mX < myArray.length; mX++){
		for (let mY = 0; mY < myArray[mX].length; mY++){
			myArray[mX][mY] = random(0,255);
		}
	}
}