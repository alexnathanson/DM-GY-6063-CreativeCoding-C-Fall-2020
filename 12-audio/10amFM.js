/*
Modulation is when two oscillators are used to create a rhythm.
These two oscillators are called the carrier and the modulator.

The carrier is what is heard. The modulator is generally not heard.

Amplitude Modulation (am) uses the modulator to control the amplitude of the carrier.
Frequency Modulation (fm) uses the modulator to controle the frequency of the carrier.
*/


let carrier; // this is the oscillator we will hear
let modulator; // this oscillator will modulate the amplitude of the carrier
let fft; // we'll visualize the waveform 
let displayText, displayType;
let oscType;

// min/max ranges for modulator
let modMaxFreq = 112;
let modMinFreq = 0;
let modMaxDepth = 150;
let modMinDepth = -150;

let amB = true;

function setup() {
  createCanvas(windowWidth,600);
  noFill();

  carrier = new p5.Oscillator('sine');
  carrier.amp(0); // set amplitude
  carrier.freq(220); // set frequency
  carrier.start(); // start oscillating

  modulator = new p5.Oscillator('square');
  modulator.disconnect();
  //modulator.amp(1)
  //modulator.mult(300).add(100)
  //modulator.freq(4); // will map to mouseY
  modulator.start();

  carrier.freq(modulator);
  
  // create an fft to analyze the audio
  fft = new p5.FFT();
  fft.setInput(carrier);

  fm();
}

function draw() {
  background(30);

	push();
	fill(255,0,0);
	strokeWeight(3);
	textSize(24);
	text(displayText,20,100);
	text(displayType,20,130);
	pop();


 let modDepth = map(mouseX, 0, width, modMinDepth, modMaxDepth);
  modulator.amp(modDepth);

  // map mouseY to moodulator freq between 0 and 20hz
  let modFreq = map(mouseY, 0, height, 0, 20);
  modulator.freq(modFreq);

  // analyze the waveform
  waveform = fft.waveform();
 // waveformMod = fftM.waveform();

  // draw the shape of the waveform
  stroke(255);
  strokeWeight(10);
  
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y + height/2);
  }
  endShape();

}


function keyPressed(){
	if(key=='a'){
		am();
	} else if (key =='f'){
		fm();
	} else {
		switch(key){
			case '1':
				oscType = 'sine';
				break;			
			case '2':
				oscType='square';
				break;
			case '3':
				oscType='sawtooth';
				break;
			case '4':
				oscType='triangle';
		}
	//	modulatorAM.setType(oscType);
		modulator.setType(oscType);
		displayType=oscType;
	}
}

function fm(){
  amB = false;

	displayText='FM';

  //carrier.amp(1);
    // multiply amplitude range by 200, then add 100
  carrier.freq(modulator);

}

function am(){
    carrier.amp(modulator);
    carrier.freq(420);
  amB = true;
	displayText='AM';

}