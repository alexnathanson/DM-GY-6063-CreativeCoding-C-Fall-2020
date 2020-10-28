
let img;
let alphaImg;
let bck;

function preload(){
	alphaImg = loadImage('07-media/media/bee.png');
	img = 	loadImage('07-media/media/hotsaucespongepants2.jpg');
	bck = 	loadImage('07-media/media/sunflowers.jpg');

}

function setup(){
	createCanvas(400,400);
	background(0);

	//we can also load an image with a callback

}

function draw(){
	background(200);


	noStroke();
	fill(255,0,0);
	rect(260,200,10,60);
	
	//push()

	//remember if we're using a callback, we need a way to check if the image has loaded
	image(img,0,0,100,300);

	//filter impacts the entire canvas
	//this will keep looping and bluring more if the background isn't reset
	filter(BLUR,10);
	//pop()

	//mask applies the alpha of 1 image to another
	/*img.mask(alphaImg);//this requires a 2nd image with an alpha
	image(img,0,0,100,300);*/

	noStroke();
	fill(255,0,0);
	ellipse(20,20,20,20);
}
