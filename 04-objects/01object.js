
//objects allow you to group data together

let myObject = {
	x: 200,
	y: 200,
	s: 50,
	c: [100,0,150],
	7: 200
};

function setup(){
	createCanvas(windowWidth, 400);
	
	console.log(typeof myObject);
	console.log(typeof myObject.x);
	console.log(typeof myObject.c);

	console.log(myObject[7]);

}

function draw(){
	background(200);

	//this is called dot notation
	fill(myObject.c);
	ellipse(myObject.x,myObject.y,myObject.s);

	//we can also interact with the contents of our object with this notation
	myObject['x'] = myObject['x'] + (random(10)-5);
	myObject['y'] = myObject['y'] + (random(10)-5);

}