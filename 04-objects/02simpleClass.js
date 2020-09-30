let myPlanet;

function setup(){
	createCanvas(windowWidth, 600);

	//'new' instantiates a new instance of an object
	myPlanet = new Planet();
}


function draw(){
	background(150);
	ellipse(myPlanet.x,myPlanet.y,myPlanet.diameterX,myPlanet.diameterY);
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
		this.y = 100;
	}


}
