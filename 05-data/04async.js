//preload is a P5JS function that lets us avoid using callbacks
//it ensures that this code finishes executing before running setup
/*function preload() {
  result = loadStrings('/05/assets/example.txt');
}
*/
function setup(){
	createCanvas(windowWidth,600);

	first();
	secondd();
	third();
}

function draw(){
	background(100);

}

// Define three example functions, but one of them contains asynchronous code
function first() {
  console.log(1)
}

//note second is a built-in function in P5 JS which is why I added a 2nd 'd' to the function name
function secondd() {

	//this is an async function - similar to an API call
 /* setTimeout(() => {
    console.log(2)
  }, 0)*/

	//this will also run sycnhronously
	loadStrings('/05/assets/example.txt', readText);

  //this will run synchronously
  //console.log(2)
}

function third() {
  console.log(3)
}

function readText(r){
	console.log(2);
}