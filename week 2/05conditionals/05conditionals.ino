/*Conditional statements are control mechanisms  
 *These sections of code only run if the statement resolves to true
 */
const int LED = 2;
const int BUTTON = 3;

int counter = 0;

void setup() {
  pinMode(LED,OUTPUT);
  pinMode(BUTTON, INPUT);
}

void loop() {
  counter++;

  if(counter < 10){
    digitalWrite(LED,HIGH);
  }
  else if (counter >= 10 && counter < 20){
    digitalWrite(LED,LOW);
  }
  else if (digitalRead(BUTTON) && (counter >= 20)){
    digitalWrite(LED,LOW);
  } else {
    digitalWrite(LED,HIGH);
  }
  delay(500);
}
