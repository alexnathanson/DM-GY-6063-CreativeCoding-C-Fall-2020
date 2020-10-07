let planets = [];

function setup(){
	createCanvas(windowWidth, 600);

	for (let s = 0; s < 100;s++){
		planets[s] = new Planet(75,100);
	}
}


function draw(){
	background(150);

	for(let t=0;t < planets.length;t++){
		planets[t].draw();
	}
}

//class names typically start with an upper case letter
class Planet{
	//the constructor defines the properties in the class
	//you can pass in arguments to the constructor
	constructor(tempDX,tempDY){
		//'this' is a key word that references the current instance
		this.diameterX = tempDX;
		this.diameterY = tempDY;
		this.x = 200;
		this.y = 200;
	}

	move(){
		this.x = this.x + (random(10)-5);
		this.y = this.y + (random(10)-5);
	}

	draw(){
		this.move();
		ellipse(this.x,this.y,this.diameterX,this.diameterY);
	}


}
