let myPlanet,myEarth;

function setup(){
	createCanvas(windowWidth, 600);

	//'new' instantiates a new instance of an object
	myPlanet = new Planet(100,200);
	myEarth = new Earth(400,200);
}


function draw(){
	background(150);
	
	myPlanet.draw();
	myEarth.draw();

}

//class names typically start with an upper case letter
class Planet{
	//the constructor defines the properties in the class
	constructor(tempX,tempY){
		this.diameterX = 50;
		this.diameterY = 200;
		this.x = tempX;
		this.y = tempY;
		this.c = [200,0,0];
	}

	draw(){
		this.random();
		fill(this.c);
		noStroke();
		ellipse(this.x,this.y,this.diameterX,this.diameterY);
	}

	random(){
		this.c = [random(255),random(255),random(255)];
	}
}

class Earth extends Planet{
	//you don't necessarily need to have a constructor for a child class in JS, but its good practice
	constructor(tempX,tempY){
		super(tempX,tempY);//the super() function executes the constructor for the parent class
		this.diameterX=200;
		this.x = tempX;
	}

	draw(){
		this.random()
		noFill();
		stroke(this.c);
		ellipse(this.x,this.y,this.diameterX,this.diameterY);
	}

	random(){
		super.random();//run the version of the function in the parent class
		this.x = random(100)+ 50;
	}
}