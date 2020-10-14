
let iteration = 0;

function setup(){
	createCanvas(windowWidth,600);

}

function draw(){
	iteration++;

	noFill();
/*	for(let i = 0;i<iteration;i++){
		ellipse((width/iteration)*i,height/iteration,iteration);
	}*/

	ellipse(width/iteration,height/2, iteration,iteration);
	ellipse(width-(width/iteration),height/2, iteration,iteration);
	ellipse(width/2,(height/iteration), iteration,iteration);
	ellipse(width/2,height-(height/iteration), iteration,iteration);

	if(iteration>100){
		iteration = 0;
	}

}