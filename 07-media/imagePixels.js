
let img,bk;

function preload(){
	img = loadImage('07-media/media/hotsaucespongepants2.jpg');
	bk = loadImage('07-media/media/sunflowers.jpg');
}

function setup(){
	createCanvas(windowWidth,400);
	background(0);

	pixelDensity(1);

	img.loadPixels();

	for (let ix = 0;ix < img.width;ix++){
		for(let iy=0;iy< img.height;iy++){
			let index = 4*(ix+(iy*img.width));

			//simple blue screen FX
			if(img.pixels[index]< 150 && img.pixels[index+1] < 150 && img.pixels[index+2]> 120){
				img.pixels[index+3] = 0;
			}
		}
	}

	img.updatePixels();
}

function draw(){
	image(bk,0,0,img.width,img.height);
	image(img,0,0);


}
