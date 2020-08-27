
//this is a comment.

/*This is a multi-line comment
Arduino expects 2 functions: setup & loop
Setup runs once at the start of your code. After setup, the loop function runs continuously.
*/

/*function declaration
 *the first word specifies what is returned
 *in this case, void means that it doesn't return anything
 *the () is where arguments (if any) are specified
 *inside of the {} is where the code that executes is written
 */
void setup() {
  // put your setup code here, to run once:

  //pinMode specifies what pin we're using and how it should behave
  //the board has a built in LED on pin 13
  pinMode(13, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:

  /*digitalWrite sets the value for a particular pin
   * HIGH = on, which means that the pin is outputting 5 volts
   * LOW = off, which means that the pin is outputting 0 volts   * 
   */
  digitalWrite(13, HIGH);

  /*delay freezes the program.
  the time is specified by an argument in milliseconds
  1000ms = 1 second
  */
  delay(1000);

  digitalWrite(13, LOW);

  delay(1000);
}
