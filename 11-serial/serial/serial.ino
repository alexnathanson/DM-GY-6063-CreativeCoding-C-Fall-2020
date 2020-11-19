//based on Serial Call and Response by Tom Igoe and Scott Fitzgerald

const int pot1 = A0;
const int LED = 12;

int inByte = 0;// incoming serial byte
int potVal1; //potentiameter 1

void setup() {

  Serial.begin(9600);
  
  //wait for serial port to connect before proceeding
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  pinMode(LED,OUTPUT);

}

void loop() {

potVal1 = analogRead(pot1);

Serial.println(potVal1);

  //check if there is an data available in the buffer
  if (Serial.available() > 0) {
    inByte = Serial.read();

    if(inByte == 'l'){
      digitalWrite(LED, HIGH);
      delay(1000);
      digitalWrite(LED,LOW);
    }
  }
  
delay(10);
}
