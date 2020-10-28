let clap, drum, slam, explode, thud, whack;

function preload(){
	clap = loadSound('07-media/media/clap.mp3');
	drum = 	loadSound('07-media/media/drum.mp3');
	slam = 	loadSound('07-media/media/slam.mp3');
	explode = 	loadSound('07-media/media/explosion.mp3');
	thud = 	loadSound('07-media/media/thud.wav');
	whack = 	loadSound('07-media/media/whack.wav');

}

function setup(){
	createCanvas(windowWidth,600);
	background(random(255));
}

function draw(){
	/*if(frameCount%60==0){
		thud.play();
	}

	if(frameCount%100==0){
		drum.play();
	}

	if(frameCount%50==0){
		clap.play();
	}*/
}


function keyPressed(){
	if (key== 'd'){
		drum.play();
	} else if (key == "c"){
		clap.jump(clap.duration*.75);
		clap.play();
	} else if (key == "e"){
		explode.play();
	} else if (key == "s"){
		slam.play();
	}else if (key == "t"){
		thud.play();
	}else if (key == "w"){
		whack.play();
	}
}