let myText = "Hello, world!";

function setup(){
	createCanvas(windowWidth,600);

	console.log(myText);
}

function draw(){
	background(100);
	textSize(frameCount%50);
	text(myText,width/2,height/2);
}