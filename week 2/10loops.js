let i = 1;

function setup() {
  // put setup code here
  createCanvas(windowWidth,400);

}

function draw() {
  // put drawing code here
	background(0,100,100);

	//for loop
	/*for(let x = 1; x <= 10; x++){
		//console.log(x);
		stroke(255/x);
		//strokeWeight(10-x);
		line((width/11)*x,0,(width/11)*x,height);
	}*/

	//console.log(x);
	
	//nested for loop
/*	for(let x = 1; x < 10; x++){
		for(let y = 1; y <5;y++){
			fill(255/x,255/y,0);
			ellipse((width/10)*x,(height/5)*y,10,10);
		}
	}*/

	//while loop
	while(i < 10){
		fill(0);
		line((width/10)*i, 0, 0, height);
		i++;

		let x = 1;
		if(x == 10){
			break;
		}
	}
	i=1;

}
