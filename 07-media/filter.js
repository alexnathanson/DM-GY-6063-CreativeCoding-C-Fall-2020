
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
	background(0);

	noStroke();
	fill(255,0,0);
	rect(260,200,10,60);

	//remember if we're using a callback, we need a way to check if the image has loaded
	if(img){
			image(img,0,0,100,300);
	}

	//filter impacts the entire canvas
	//this will keep looping and bluring more if the background isn't reset
	//push()
	filter(BLUR,10);
	//pop()

	//mask applies the alpha of 1 image to another
	//img.mask();//this requires a 2nd image with an alpha

	noStroke();
	fill(255,0,0);
	ellipse(20,20,20,20);
}

function myCallback(result){
	img = result;

}