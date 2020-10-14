function setup(){
	createCanvas(windowWidth, 400);
	//frameRate(2);
}

function draw(){
	//random returns a float up to, but not including the number given
	background(random(255),random(255),random(255),map(random(mouseX),0,width,0,20));


	/*for(let r  = 0; r<random(5);r++){
		let x = random(width);
		let y = random(height);

		fill(random(255),random(255),random(255));
		ellipse(x,y,50,50);
	}*/

	//random with array
	let textArray = ['this','is','some','random','text'];

	//random seed
	//randomSeed(160);


	textSize(random(50)+10);
	text(random(textArray),random(width),random(height));


	//random Gaussian
	//returns a random number fitting a random distribution
	//mean (average), standard deviation (how spread out the numbers are on either side of the mean)
	//default is 0 and 1
	/*for (let y = 0; y < height; y++) {
	  let x = randomGaussian(50, 15);
	  let midX = width/2;
	  line(midX-x, y, midX+x, y);
	}*/
	
}