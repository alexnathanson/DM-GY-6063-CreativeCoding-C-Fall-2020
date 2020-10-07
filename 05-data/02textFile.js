//preload is a P5JS function that lets us avoid using callbacks
//it ensures that this code finishes executing before running setup
function preload() {
  result = loadStrings('/05/data/creativeCodingInfo.txt');
}

function setup(){
	createCanvas(windowWidth,600);

	//loading the text file here requires a callback
	//the result of loadString is passed to the callback as an argument
	loadStrings('/05/data/creativeCodingInfo.txt', readText);

	//readText(result);
}

function draw(){
	background(100);
}

function readText(r){
	console.log(r);
}