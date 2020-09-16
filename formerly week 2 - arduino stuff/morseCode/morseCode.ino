/*Translates Morse Code from physical button to digital space
 * 
 * Circuit:
 * 1 LED on D2 with 200 ohm resistor
 * 1 button on D3 w/ 10K resistor
 */

const int LED = 2;
const int BUTTON = 3;

int letter = 0;
int space = 0;

int scaler = 2;

String dash = "dash ";
String dot = "dot ";
String oneLetter;
String fullWord;

bool newL = false;

void setup() {
  Serial.begin(9600);

  pinMode(LED,OUTPUT);
  pinMode(BUTTON, INPUT);

  String fullWord = "";
}

void loop() {
  if(digitalRead(BUTTON)){
    digitalWrite(LED,HIGH);
    letter++; //increment letter
    space = 0; //reset space counter
  } else {
    digitalWrite(LED, LOW);
    //check for dot
    if(letter > 0 && letter < (4*scaler)){
      fullWord += dot;
      //oneLetter += dot;
      newL = true;
     //check for dash
    } else if (letter >= (4*scaler)){
      fullWord += dash;
      //oneLetter += dash;
      newL = true;
     //check for new letter
    } else if (space >= (4*scaler) && space < (8*scaler)){
      if (newL){
        fullWord += "| ";
        //fullWord += morseToChar(oneLetter);
        newL = false;
        oneLetter = "";
      }
     //check for end of word
    } else if (space == (8*scaler)){
     //Serial.println(fullWord);
     remLine(fullWord);
     fullWord = "";
    }
    letter = 0; //reset letter counter
    space ++; //increment space
  }

  delay(100);
}

void remLine(String toPrint){
  Serial.println(toPrint.substring(0,toPrint.length()-3));
}

//String morseToChar(String aLetter){
//  String thisLetter = "";
//  
//  aLetter.trim();
//  
//  if (aLetter == "dot dash"){
//    thisLetter = "a";
//  } else if (aLetter == "dash dot dot dot"){
//    thisLetter = "b";
//  }else if (aLetter == "dash dash dash"){
//    thisLetter = "o";
//  }else if (aLetter == "dot dot dot"){
//    thisLetter = "s";
//  } else {
//    thisLetter = "?";
//  }
//
//  Serial.println(thisLetter);
//  return thisLetter;
//}
