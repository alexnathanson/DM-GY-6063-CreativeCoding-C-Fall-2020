
let bckgrnd,img,imgB;

let plantImgs = [];

let plantObj = [];

let plantAmt = 100;

//preload runs once before setup and forces the program to wait until it is finished
function preload(){
	bckgrnd = loadImage("07-media/media/sunflowers.jpg");
	img = loadImage("07-media/media/bee.png");
	imgB = loadImage("07-media/media/bee_reversed.png");

	for (let p = 0; p < 3;p++){
		plantImgs[p] = loadImage('07-media/media/plants' + String(p+1) + '.png');
		//this format is called a template literal - it does the same exact things aboe
//		plantImgs[p] = loadImage(`07-media/media/plants${p+1}.png`);//must use ` not ' for template literals
	}
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	
	MyBee = new Bee(img,imgB,0,0,100,100);

	for (let p = 0; p<plantAmt;p++){
		let aPlant = plantImgs[int(random(plantImgs.length))];
		let pDimScaler = aPlant.height/aPlant.width;
		let pX = int(random(100,500));
		let pY = pX * pDimScaler;
		plantObj[p]= new ImageObject(aPlant,int(random(width))-100,int(random(height/2))-100+(height/2),pX,pY);
	}

}

function draw(){
	//you can use an image as an argument in background to fill the background
	background(bckgrnd);
	
	for(let i =0; i<plantObj.length;i++){
		plantObj[i].display();
	}

	MyBee.display();
}

class ImageObject{
	constructor(tempImg,tempX,tempY,tempDimX,tempDimY){
		this.img = tempImg;
		this.x = tempX;
		this.y = tempY;
		this.dimX = tempDimX;
		this.dimY = tempDimY;
		this.imageScaler = 1.0;
		this.shakeAmt = random(5);
	}

	display(){
		image(this.img,this.x,this.y,this.dimX,this.dimY);
		//this.shake();
	}

	shake(){
		this.x+= (random(this.shakeAmt)-(this.shakeAmt/2));
	}
}

class Bee extends ImageObject {
	constructor(tempImg, tempImg2,tempX,tempY,tempDimX,tempDimY){
		super(tempImg,tempX,tempY,tempDimX,tempDimY);
		this.img2 = tempImg2;
		this.nX = 0.0;
		this.nY = 0;
		this.t = 0.0;
		this.inc= 0.005;
		this.oldNX = 0;
	}

	display(){
		this.noise();
		if (this.oldNX>this.nX){
			image(this.img2,width*this.nX,height*this.nY,this.dimX,this.dimY);
		} else {
			image(this.img,width*this.nX,height*this.nY,this.dimX,this.dimY);
		}
		this.oldNX = this.nX;

	}

	noise(){
		this.nX = noise(this.t);
		this.nY = noise(this.t + 5);
		this.t+= this.inc;
	}
}