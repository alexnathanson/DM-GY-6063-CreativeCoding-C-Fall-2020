
function setup() {
  // put setup code here
  createCanvas(600,600);
	background(0,100,100);

}

//as with variables, do not reuse function names or use reserved names
//reserved names are names that are used by default in P5JS
//examples of reserved function names: setup(), draw(),fill(), color(), rect(),etc...
function draw() {
  // put drawing code here

	//makeEllipse();

	let c = color(200,100,250);
	makeRectArg(c,ellapsedFrames(100));
	//console.log(ellapsedFrames(100));
}

function mouseClicked(){
	background(0,100,100);

	chooseShape(width/4,height/2);
	chooseShape((width/4)*2,height/2);
	chooseShape((width/4)*3,height/2);
}

function chooseShape(pX, pY){
	let s = int(random(3));
	console.log(s);
	fill(random(255));

	if(s == 0){
		rectMode(CENTER);
		rect(pX,pY,50,50);
	} else if(s == 1){
		ellipse(pX,pY,50,50);
	} else if (s==2) {
		triangle(pX-25,pY-25,pX,pY+25,pX+25,pY-25);
	}
}

//in js you do not need to specify a return type for a function
function makeEllipse(){
	fill(0,0,250);

	let dx = random(10,100);
	let dy = random(10,100);
	ellipse(mouseX,mouseY,dx, dy);
}

//this function allows you to pass arguments
function makeRectArg(color,dim){
	fill(color);
	rect(mouseX,mouseY,dim,dim);
}

//this function returns a value
function ellapsedFrames(modVal){
	return frameCount%modVal;
}
