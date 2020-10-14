
let iteration = 0;
let x,y;
function setup(){
	createCanvas(windowWidth,600);

	translate(width/2,height/2);
}

function draw(){
	iteration++;

	x = random(width/iteration);
	y = random(height/iteration);

	line(0,0,x,y);

	translate(x,y);

	rotate(random(10));
	/*if(iteration>100){
		iteration = 0;
	}*/

}