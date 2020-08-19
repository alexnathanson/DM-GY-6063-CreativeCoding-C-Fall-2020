/*turn on an LED for 10 seconds
 *Wiring: pin 8 -> LED -> 220ohm R -> GND
 */
int counter = 0;
int maxCount = 10;

const int LED = 8;

void setup() {
  // put your setup code here, to run once:
  pinMode(LED, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  counter++;

  if(counter < maxCount){
    digitalWrite(LED,HIGH);
  }
  else if (counter >= (maxCount *2)){
    digitalWrite(LED,HIGH);
  }
  else {
    digitalWrite(LED,LOW);
  }

  delay(500);
}
