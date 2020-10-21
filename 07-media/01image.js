
let img;

/*function preload(){
	img = loadImage('07-media/media/hotsaucespongepants2.jpg');
}*/

function setup(){
	createCanvas(400,400);
	background(0);

	//we can also load an image with a callback
	loadImage('07-media/media/hotsaucespongepants2.jpg',myCallback);

}

function draw(){
	//4th and 5th params are optional
	//they set the dims for the drawn image
	//image(img,0,0);

	//remember if we're using a callback, we need a way to check if the image has loaded
	if(img){
			image(img,0,0,100,300);
	}

	//copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  //newImage.copy(img2,475,100,400,400,300,100,400,400);
  //image(newImage, 0, 0);
}

function myCallback(result){
	img = result;

}