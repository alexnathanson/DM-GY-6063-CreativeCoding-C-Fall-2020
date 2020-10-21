let capture;
let tv;

function preload(){
	tv = loadImage('07-media/media/retroTV_noScreen.png');
}

function setup() {
  createCanvas(tv.width/2, tv.height/2);

  //this is very similar to loading images and video files, except that it is in setup and a callback isn't required
  //this automatically creates a HTML5 video element, which is why it needs to be hidden
  capture = createCapture(VIDEO);
  capture.hide();

}

function draw() {
  image(capture, 0, 0, capture.width, capture.height);
  //filter(INVERT);
	//filter(BLUR,2);
  image(tv,0,0,width,height);

}
