/*
basic playing and manipulation of an audio file including:
playback, looping, pause, stop, volume, rate, panning, cueing, duration, currenttime, etc.
*/

let bkgrnd;
let track,explosion;
let channel = 2;
let c5  = true;

function preload(){
	track = loadSound('07-media/media/TomWaitsEmotionalWeatherReport.mp3');
}

function setup(){
	createCanvas(400,400);

	bkgrnd = color(255,0,0);
	background(bkgrnd);

	//track.onended(resetCues);//this only works if its not set to loop

	track.loop();
	//track.play();

	//addCue isn't working properly atm
	track.addCue(0.5,bkChange);
	track.addCue(5,bkChange);
}

function draw(){
	background(bkgrnd);
	track.pan(map(mouseX,0,windowWidth,-1,1));
	console.log(track.getPan());
	diyCue();

	progress();
}

function keyPressed(){
	if (key== 'j'){
		jumpAhead(20);//jump ahead by 2 seconds
	} else if (key == "p"){
		if(track.isPlaying()){
			track.pause();
			console.log("pause");
		} else {
			track.loop();
			console.log('loop');
		}
	} else if (key == "s"){
		if(track.isPlaying()){
			track.stop();
			console.log('stop');
		} else {
			track.loop();
			console.log('loop');
		}
	}
}

function mouseDragged(){
	updateProperties();
}

function updateProperties(){
	track.setVolume(map(mouseY,0,windowHeight,0,2));//scale 0-2
	track.rate(map(mouseX,0,windowHeight,0,5));//scale 0-5
}	

//pass this function a floating point number 0.0-1.0
function jumpAhead(arg){
	let len = track.duration();
	let cT = track.currentTime();
	console.log(cT);

	if(cT + arg < len){
		track.jump(cT + arg);
	} else {
		track.jump(0);
	}
}

function diyCue(){

	let cT = track.currentTime();

	if(cT >= 10 && c5){
		console.log("DIY CUE!");
		bkgrnd = int(random(255));
		c5 = false;
	}
}

function resetCues(){
	c5 = true;
	console.log("reset");
}

function bkChange(){
	bkgrnd = int(random(255));
	console.log("CUE!");
}

function progress(){
	fill(255,0,0);
	rect(0,height-10,map(track.currentTime(),0,track.duration(),0,width),height);
}