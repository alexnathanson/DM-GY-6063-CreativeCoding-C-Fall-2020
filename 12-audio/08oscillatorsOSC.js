
let osc;
let freq;

function setup(){
	
	//this is another way to make a sine wave oscillator
	//Options: 'sine' (default), 'triangle', 'sawtooth', 'square'
	osc = new p5.Oscillator();
	osc.amp(1);
	osc.freq(60);
	osc.setType('sine');
	osc.start();


  //use an fft to visualize the sound
  fft = new p5.FFT();

}

function draw(){
	createCanvas(windowWidth,600);

	text("a-s-d-f = sine-square-triangle-saw",20,20);
	text("frequency: " + freq, 20, 80);

	  let waveform = fft.waveform();
	  noFill();
	  beginShape();
	  stroke(20);
	  for (let i = 0; i < waveform.length; i++){
	    let x = map(i, 0, waveform.length, 0, width);
	    let y = map( waveform[i], -1, 1, 0, height);
	    vertex(x,y);
	  }
	  endShape();

}

function keyReleased(){
	if (key == 'a'){
		osc.setType('sine');
		console.log('sine');

	} else if (key=='s'){
		osc.setType('square');
		console.log('square');

	} else if (key=='d'){
		osc.setType('triangle');

		console.log('triangle');

	} else if (key =='f'){
		osc.setType('sawtooth');

		console.log('saw');
	}
}

function mouseDragged(){
	freq = map(mouseX,0,width,20,5000);
	osc.freq(freq);
}