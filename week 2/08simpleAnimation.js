/*
Animation examples:
1) incrementing and resetting
2) incrementing with modulos
3) framecount with modulos
*/

//let eSize = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);

 /* //default frame rate is 60 frames per second
 //this will return 0 because draw must run at least once for this to work
  console.log("current frame rate: " + frameRate());
  console.log("current frame rate: " + getFrameRate());*/

  //set frame rate
  //frameRate(24);
}

function draw() {
	//draw must run at least once for this to work
  	//console.log("current frame rate: " + getFrameRate());

	// put drawing code here
	background(0,100,100);
	noStroke();

	//increment eSize every loop
	//eSize++;

	fill(0,0,255);
	//width and height refer to drawing canvas
	//ellipse(width/2,height/2,eSize);
	//windowWidth and windowHeight refer to browser window
	//  ellipse(windowWidth/2,windowHeight/2,eSize);

/*
	if(eSize > 400){
		eSize = 0;
	}
*/
	
	//this does the same thing
/*		fill(255,0,0);
	ellipse(width/2,height/2,eSize%400);*/
	

	//we can also do this with frameCount and forget about eSize all together.
	//console.log(frameCount);
	fill(0,255,0);
	ellipse(width/2,height/2,frameCount%400);

}