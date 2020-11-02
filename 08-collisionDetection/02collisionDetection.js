let shapes = [];
let amtShape = 7;

function setup(){
	createCanvas(windowWidth,700);
	
	//create the shapes
	for (let h = 0; h < amtShape; h++){
		shapes[h] = new SomeShapes(int(random(2)));
	}

}

function draw(){
	background(240);

	//move it
	for(let s = 0; s < shapes.length;s++){
		shapes[s].moveIt();
	}

	shapes[1].mouseIt();

	//check for collisions
	for(let sB = 0; sB < shapes.length;sB++){
		for(let sA = sB+1; sA < shapes.length;sA++){
			//if they collided, update the 2nd shape
			if(shapes[sB].detectCollision(shapes[sA])){
				shapes[sA].collision = true;
			}
		}
	}

	//display it
	for(let s = 0; s < shapes.length;s++){
		shapes[s].display();
	}
	
}

class SomeShapes{
	constructor(tempShape){
		this.shape = tempShape;//0 = ellipse, 1 = rectangle
		this.x = width/2;//location
		this.y = height/2;//location
		this.dimX = int(random(50,150));//shape dimension
		this.dimY = int(random(50,150));//shape dimension
		this.noiseOffX = int(random(100));// noise offset
		this.noiseOffY = int(random(100));//noise offset
		this.color = color(20,20,20,0);//border color
		this.hitColor = color(int(random(255)),int(random(255)),int(random(255)),150);//interior color
		this.collision = false;
		this.collisionVisual = true;
		this.inc = map(random(10),0.0,9.0,0.001,0.003);
		this.noise = 0;
	}

	moveIt(){
		this.noise += this.inc;
		this.x = width * noise(this.noise + this.noiseOffX);
		this.y = height * noise(this.noise + this.noiseOffY);
	}

	mouseIt(){
		this.x = mouseX;
		this.y = mouseY;
	}

	detectCollision(arg){
		let result = false;
		//circle to circle
		if(this.shape == 0 && arg.shape ==0){
			//check if the distance between centers is less
			//than the radii combined
			if(dist(this.x,this.y,arg.x,arg.y) < (this.dimX/2)+(arg.dimX/2)){
				this.collision = true;
				result = true;
			}
		} else if (this.shape == 1 && arg.shape ==1){ //rect to rect
			let minDistX = (this.dimX/2) + (arg.dimX/2);
			let minDistY = (this.dimY/2) + (arg.dimY/2);

			if(abs(this.x-arg.x) < minDistX && abs(this.y-arg.y) < minDistY){
				this.collision = true;
				result = true;
			}
		} else if (this.shape != arg.shape){//circle to rect

			let circX,circY,circDia, rectX, rectY,rectDimX,rectDimY;
			//if this is a circle & arg is a rect
			if (this.shape == 0){
				circX = this.x;
				circY = this.y;
				circDia = this.dimX;
				rectX = arg.x;
				rectY = arg.y;
				rectDimX = arg.dimX;
				rectDimY= arg.dimY;

			//if this is a rectangle and arg is a circle
			} else{
				circX = arg.x;
				circY = arg.y;
				circDia = arg.dimX;
				rectX = this.x;
				rectY = this.y;
				rectDimX = this.dimX;
				rectDimY= this.dimY;
			}
			/*1) check if the circle is inside the outer radius of the rectangle
			2) check if the circle is inside the inner radius of the circle
			3) check the points*/
			
			
			//outer radius of rect
			let outerRect;
			//inner radius of rect
			let innerRect;
			
			outerRect = dist(rectX,rectY, rectX-(rectDimX),rectY-(rectDimY));

			if(rectDimX > rectDimY){
				innerRect = rectDimY;
			} else{
				innerRect = rectDimX;
			}

			//part 1check if its within the outer radius
			//if it is outside this circle, we can rule out any collision
			if(dist(circX,circY,rectX,rectY) < (circDia/2)+(outerRect/2)){
				if(this.collisionVisual){
					noFill();
					stroke(255,0,0);
					ellipse(rectX,rectY,outerRect,outerRect);
				}
				//part 2 check if its within the inner radius (this step is sort of optional)
				//if it is inside this circle, we can quickly confirm a collision
				if(dist(circX,circY,rectX,rectY) < (circDia/2)+(innerRect/2)){
					//display inner radius
					if(this.collisionVisual){
						ellipse(rectX,rectY,innerRect,innerRect);
					}
					this.collision = true;
					result = true;
				//part 3
				} else {//if it is inside the outer circle but outside of the inner circle, it still may or may not have actually collided

					//check where the shapes are in relation to one another
					//if the bottom of the circle is below the top of the rectangle
					//and if the top of the circle is above the bottom of the rectangle
					//then check the sides
					if(circY + (circDia/2) > rectY - (rectDimY/2) && circY - (circDia/2) < rectY + (rectDimY/2)){
						if(circX < rectX){//if the center of circle is to the left of the center of rect
							if(dist(circX,circY,rectX-(rectDimX/2),circY) < circDia/2){
								this.collision = true;
								result = true;
							}			
						} else {//if the center of circle is to the right of the center of rect
							if(dist(circX,circY,rectX+(rectDimX/2),circY) < circDia/2){
								this.collision = true;
								result = true;
							}
						}
					
					} else {
						if(circY < rectY){//if the center of circle is above the center of the rect
							if(dist(circX,circY,circX,rectY-(rectDimY/2)) < circDia/2){//check if the side of the circle is within the boundary of the rect
								this.collision = true;
								result = true;
							}			
						} else {//if the center of circle is below the center of the rect
							if(dist(circX,circY,circX,rectY+(rectDimY/2))< circDia/2){//check if the side of the circle is within the boundary of the rect
								this.collision = true;
								result = true;
							}
						}
					}
				}
			}
		} else {
			this.collision = false;
			result = false;
		}

		return result;
	}

	display(){
		//the mode is important for the collision detection to work
		rectMode(CENTER);
		ellipseMode(CENTER);

		if(this.collision == true){
			fill(this.hitColor);
		} else if (this.collision == false) {
			fill(this.color);
		}

		if(this.shape == 0){
			ellipse(this.x,this.y,this.dimX,this.dimX);
		} else if (this.shape ==1){
			rect(this.x,this.y,this.dimX,this.dimY);
		}

		this.collision = false;
	}
}