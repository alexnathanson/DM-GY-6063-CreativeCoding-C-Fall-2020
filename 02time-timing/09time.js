//time & timing examples

let eventTime;

function setup() {
  // put setup code here
  createCanvas(400,400);

  eventTime = millis();
}

function draw() {
  // put drawing code here
	background(0,100,100);

	//run every second
	if(millis() - eventTime > 1000){
		console.log("Date info based on local computer's clock");
	    console.log("Year: " + year());
	    console.log("Month: " + month());
	    console.log("Day: " +day());
	    console.log("Hour: " + hour());
	    console.log("Minute: " + minute());
	    console.log("Second: " + second());

	    console.log("Millis since start of sketch: " + millis());

	    eventTime = millis();
	}

	timedMotion();
}

function timedMotion(){
	let xSize = 50;
	//this moves (1 pixel * scaler) per millisecond
	let xPos = (millis()*.1) % (width + xSize);

	fill(0,255,0);
	rect(xPos-xSize, width/2, xSize, 50);
}