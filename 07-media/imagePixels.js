
let img;

function preload(){
	img = loadImage('07-media/media/hotsaucespongepants2.jpg');
}

function setup(){
	createCanvas(windowWidth,400);
	background(0);

	pixelDensity(1);

	img.loadPixels();

	for (let ix = 0;ix < img.width;ix++){
		for(let iy=0;iy< img.height;iy++){
			let index = 4*(ix+(iy*img.width));

			//simple green screen FX
			if(img.pixels[index+1]> 200){
				img.pixels[index+3] = 0;
			}
		}
	}

	img.updatePixels();
}

function draw(){
	
	image(img,0,0);


}
