
let iteration = 0;

let fX,fY,fXB,fYB;

function setup(){
	createCanvas(windowWidth,600);
	fX =0;
	fY = 0;
}

function draw(){
	iteration++;

	noFill();
/*	for(let i = 0;i<iteration;i++){
		ellipse((width/iteration)*i,height/iteration,iteration);
	}*/

	/*ellipse(width/iteration,height/2, iteration*iteration,iteration);
	ellipse(width-(width/iteration),height/2, iteration*iteration,iteration);
	ellipse(width/2,(height/iteration), iteration,iteration*iteration);
	ellipse(width/2,height-(height/iteration), iteration,iteration*iteration);*/

	fXB = random(width/iteration);
	fYB = random(width/iteration);

	line(fX,fY,fXB,fYB);
	fX = fXB;
	fY= fYB;
	if(iteration>20){
		iteration = 0;
	}

}