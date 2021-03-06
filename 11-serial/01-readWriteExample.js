//based on the example generated by the App...

let serial;
let latestData = "waiting for data";

let xCoord;
let prevXCoord;

let portName = 'COM3';//update this with the port you are using

function setup() {
 createCanvas(windowWidth, windowHeight);
	background(255,255,255)

	xCoord = width/2;

 serial = new p5.SerialPort();

 serial.list();
 serial.open(portName);

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 //console.log(currentString);
 latestData = currentString;
}

function draw() {

 prevXCoord = xCoord;
xCoord = constrain(map(latestData,0,1023,0,width),0,width);

 // Polling method
 
/* if (serial.available() > 0) {
  let data = serial.read();
  ellipse(50,50,data,data);
 }*/
 

 stroke(0);
 strokeWeight(10);
 line(prevXCoord, height/2,xCoord,height/2);
}


function keyPressed(){
	if(key == 'l'){
		writeSerial(key);
	}
}

function writeSerial(writeOut){
	serial.write(writeOut);
}