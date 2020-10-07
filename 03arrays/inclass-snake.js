//Create a 2 dimensional array
//have some mechanism for the array to grow
//have some mechanism for changing the contents of array

let classSnake = [];

//classSnake = [100,200];

//these two lines do the same thing
//classSnake = [[100,200],[50,100]];

//classSnake[0] = [100,200];
//classSnake[1] = [50,100];

//classSnake[0] = [200];
//classSnake[0] = 200;

function setup(){
	createCanvas(400,400);

	/*classSnake[0] = [width/2,height/2];
	console.log(classSnake);
	//classSnake[1] = [random(width),random(height)];
	classSnake.push([50,76]);
	//classSnake[classSnake.length] = [random(width),random(height)];
	console.log(classSnake);*/


/*	console.log('setup!');

	console.log(typeof classSnake);
	console.log(classSnake);
	console.log(classSnake.length);
	console.log(classSnake[0][0]);*/

	for(let a =0; a < 10;a++){
		classSnake[a] = [a*5,a*7];
	}
	console.log(classSnake);
}


function draw(){
	background(200);

	fill(255,0,0);

	ellipse(classSnake[0][0],classSnake[0][1],6,10);

	//classSnake.push([random(width),random(height)]);

	for(let a =0; a < 10;a++){
		classSnake[a] = [random(100),random(100)];
	}
	console.log(classSnake);

}