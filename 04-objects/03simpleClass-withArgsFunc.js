let myPlanet, myOtherPlanet;

function setup(){
	createCanvas(windowWidth, 600);

	//'new' instantiates a new instance of an object
	myPlanet = new Planet(200,200,6);
	myOtherPlanet = new Planet(300,200,10);
}


function draw(){
	background(150);
	ellipse(myPlanet.x,myPlanet.y,myPlanet.diameterX,myPlanet.diameterY);
	ellipse(myOtherPlanet.x,myOtherPlanet.y,myOtherPlanet.diameterX,myOtherPlanet.diameterY);

	myPlanet.shake();
	myOtherPlanet.shake();
}

//class names typically start with an upper case letter
class Planet{
	//the constructor defines the properties in the class
	//you can pass in arguments to the constructor
	constructor(tempPosX,tempPosY,tempRange){
		//'this' is a key word that references the current instance
		this.diameterX = 50;
		this.diameterY = 200;
		this.x = tempPosX;
		this.y = tempPosY;
		this.shakeRange = tempRange;
	}

	shake(){
		//note the use of 'this' here
		this.x = this.x + (random(this.shakeRange)-(this.shakeRange*.5));
		this.y = this.y + (random(this.shakeRange)-(this.shakeRange*.5));
	}
}
