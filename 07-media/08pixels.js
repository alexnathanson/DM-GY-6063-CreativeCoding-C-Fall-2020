let yLine;

function setup(){

	createCanvas(windowWidth,400);
	yLine = 50;
	
	//pixel density is needed for some displays, like Apple Retina displays
	pixelDensity(1);

	//load pixels loads the necessary data
	loadPixels();//this loads the pixels from the canvas
	console.log("Canvas: " + width + ' * ' + height + ' = ' + (width*height));
	console.log((width*height) + ' * 4 = ' +(width*height*4));
	console.log('Pixel length: ' + pixels.length);

	//fill the canvas with random RGBA values
	for(let index = 0;index<width*height*4;index++){
		pixels[index]=int(random(255));
	}

	/*
	for (let pX = 0; pX < width; pX++) {
	  for (let pY = 0; pY < height; pY++) {
	    // loop over
	    index =  4 *(pX+(pY*width));
	    //console.log(index);
	    if(pY != yLine){
		    	pixels[index] = map(pX,0,width,0,255);
			    pixels[index+1] = map(pY,0,height,0,255);
			    pixels[index+2] = map(pY,0,height,255,0);
			    pixels[index+3] = 255;
			} else {
				pixels[index] = 255;
			    pixels[index+1] = 0;
			    pixels[index+2] = 0;
			    pixels[index+3] = 255;
			}
	  	}
	}*/
	
	updatePixels();//update pixels is needed for the change to take effect

}

function draw(){

}

function mouseClicked(){
	console.log(get(mouseX,mouseY));
	noStroke();
	fill(255);
	rect(0,height-100,100,height);
	fill(get(mouseX,mouseY));
	rect(0,height-100,100,height);
}