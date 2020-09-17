/*
== equal value
=== compares both value and type
!= not equal
< less than
> greater than
>= greater than or equal to
<= less than or equal to

&& and
|| or

*/
let myBool;

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
	background(0,100,100);

	fill(0,0,255);
/*
	if(mouseX > width/2){
		myBool = false;
	}
*/
/*	if(!myBool){
		rect(50,50,100,100);
	}*/

/*	if(mouseX == mouseY){
		rect(50,50,100,100);
	} else {
		ellipse(50,50,100,100);

	}
*/
	if(dist(mouseX,mouseY,width/2,height/2) < 25){
		fill(255,255,255);
		ellipse(width/2,height/2,50,50);
	} else {
		noFill();
		ellipse(width/2,height/2,50,50);
	}
}
