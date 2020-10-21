
let img1, img2;

let imgs = [];

let amtImg = 10;

function preload(){
	/*img1 = loadImage('07-media/media/hotsaucespongepants2.jpg');
	img2 = loadImage('07-media/media/bee.png');*/

	for (let i =0; i < amtImg; i++){
		imgs[i]= loadImage('07-media/media/hotsaucespongepants2.jpg');
	}
}

function setup(){
	createCanvas(windowWidth,600);
	background(0);

	frameRate(10);
	
	imageMode(CENTER);

}

function draw(){
	background(255*(abs(sin(frameCount*0.01))));

	for(let i = 0; i < imgs.length; i++){
		image(imgs[i],random(width),random(height),width/amtImg,height/amtImg);
	}
	
}
