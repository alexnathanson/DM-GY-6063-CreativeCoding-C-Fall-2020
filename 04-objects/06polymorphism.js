let planets = [];

function setup(){
	createCanvas(windowWidth, 600);

	for (let s = 0; s < 10;s++){
		if(random(1.0)>0.5){
			planets[s] = new Planet(75,100);
		} else {
			planets[s] = new Earth(75,100);
		}
	}
}


function draw(){
	background(150);

	/*polymorphisms allows us to call the draw method on any object as long as it is inherited from the same object
	(this is less relevent in JS because it isn't explicitly typed
	i.e. you dont need to state data types and variables can change data types*/
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
		fill(255);
		this.move();
		ellipse(this.x,this.y,this.diameterX,this.diameterY);
	}
}

//class names typically start with an upper case letter
class Earth extends Planet{
	//the constructor defines the properties in the class
	//you can pass in arguments to the constructor
	constructor(tempDX,tempDY){
		super();
		//'this' is a key word that references the current instance
		this.diameterX = tempDX;
		this.diameterY = tempDY;
		this.x = 200;
		this.y = 200;
	}

	move(){
		this.x = this.x + (random(20)-10);
		this.y = this.y + (random(20)-10);
	}

	draw(){
		this.move();
		noFill();
		ellipse(this.x,this.y,this.diameterX,this.diameterY);
	}
}
