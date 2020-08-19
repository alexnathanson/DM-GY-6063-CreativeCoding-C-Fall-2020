/*DATA TYPES
Data types relate to a specific quantity of memory that is allocated for that type.
8 bits = 1 byte (2^8 = 256)
*/

//a boolean can equal true or false
boolean myBool = true;

//a char can hold a single character, like D, or numbers between -128 to 127. This represents 1 byte
char myChar = 'x';

//a byte can hold a number between 0 and 255
byte myByte = 255;

//an int uses 2 bytes and can hold number between -32,768 and 32,767
// (256 * 256)/2 = 65,536/2 = 32,768
int myInt = 30000;

//an unsigned int also uses 2 bytes, but only positive numbers, between 0 and 65,535
unsigned int myUnsignedInt = 60001;

//a long is twice the memory as an int
//65,536 * 65,536
//-2,147,483,648 to 2,147,483,647
long myLong = -1000000;

unsigned long myUnsignedLong = 4000000000;

//floating point numbers are numbers with a decimal point. they can take up 4 bytes of memory
float myFloat = 3.14;

//a double has twice the precisions of floats
double myDouble = 30342342342;

//a string sort of a data type but more of a class (which is why it has a capital S in the name)
//This holds text or numbers that are treated like text.
//strings values are indicated by "".
String myString = "test";

void setup() {
  // put your setup code here, to run once: 
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  myByte ++;
  Serial.println(myByte);
  Serial.println(myString + myByte);
  delay(100);
}
