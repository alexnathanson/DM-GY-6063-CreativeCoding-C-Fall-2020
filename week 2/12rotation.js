
function setup() {
  // put setup code here
  createCanvas(600,600);

}

function draw() {
  // put drawing code here
	background(0,100,100);

	rect(200,200,50,50);

	//translate moves matrix
	translate(width/2,height/2);


	//in radians, rotates around 0,0
	//radians goes 0-2PI
	rotate(mouseX * (TWO_PI/width));


	/*//to rotate center of object, center it on 0,0
	rectMode(CENTER)
	rect(0,0,100,20);

	//to rotate by corner of object, place corner at 0,0
	rectMode(CORNER)
	rect(0,0,100,20);
*/


	rectMode(CORNER)
	//chaining rotations together
	rect(-10,0,20,100);
	ellipse(0,0,20,20);

	translate(0,100);
	

	rotate(mouseX * (TWO_PI/width));
	rect(-10,0,20,100);
	ellipse(0,0,20,20);


}
