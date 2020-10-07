let myPlanet, myOtherPlanet;

function setup(){
	createCanvas(windowWidth, 600);

	//'new' instantiates a new instance of an object
	myPlanet = new Planet();

	myOtherPlanet = new Earth();

}


function draw(){
	background(150);
	//ellipse(myPlanet.x,myPlanet.y,myPlanet.diameterX,myPlanet.diameterY);

	//ellipse(myOtherPlanet.x,myOtherPlanet.y,myOtherPlanet.diameterX,myOtherPlanet.diameterY);

	myPlanet.draw();
	myOtherPlanet.draw();

	someFunction("print this");
}

function someFunction(somethingToPrint){
	console.log(somethingToPrint);
}

//class names typically start with an upper case letter
class Planet{
	//the constructor defines the properties in the class
	//you can pass in arguments to the constructor
	constructor(){
		//'this' is a key word that references the current instance
		this.diameterX = 50;
		this.diameterY = 200;
		this.x = 200;
		this.y = 200;
		this.c = [255,0,0];
	}

	draw(){
		fill(this.c);
		this.move();
		ellipse(this.x,this.y,this.diameterX,this.diameterY);
	}

	move(){
		this.x =this.x + (random(10)-5);
		this.y =this.y + (random(10)-5);
	}
}

class Earth extends Planet{
	constructor(){
		super();
		this.diameterX = 250;
	}

	draw(){
		noFill();
		this.move();
		ellipse(this.x,this.y,this.diameterX,this.diameterY);
	}

	move(){
		super.move();
		this.diameterY = this.diameterY + (random(10)-5);
	}
}