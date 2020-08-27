//constant values cannot be changed
const boolean myConstant = true;

//declarations here are global in scope
const int LED = 2;

void setup() {
  //declarations within a function are local in scope
  const int localVar = 10;
  
  pinMode(LED, OUTPUT);

  //this will give us an error
  //myConstant = false;
}

void loop() {

  digitalWrite(LED, HIGH);

  delay(1000);

  digitalWrite(LED, LOW);

  delay(1000);
  
 //this will give us an error
  /*digitalWrite(localVar, LOW);
  delay(1000);
  */
}
