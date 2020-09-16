const int LED = 2;
const int BUTTON = 3;

void setup() {
  pinMode(LED,OUTPUT);
  pinMode(BUTTON, INPUT);

}

void loop() {
  if(digitalRead(BUTTON)){
    digitalWrite(LED,HIGH);
  } else {
    digitalWrite(LED, LOW);
  }

}
