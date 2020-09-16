//scope determines the level of access or persistence of a variable

//there are two types of variables in JS, var and let.
//Use let, which is considered more up to date, unless you have a specific reason to use var.

//var is scoped to the nearest function block
//let is scoped to the nearest enclosing {} block, which is smaller than function blocks (like in Processing)

//this are global variables
var var1 = 'var 1';
let let1 = 'let 1';

//fyi this is a constant
const const1 = 'const 1'; //not really necessary, but more efficient for constants - scoped to block, like let

function setup() {
	//these are local variables
	var var2 = 'var 2';
	let let2 = 'let 2';
	
	createCanvas(windowWidth, windowHeight);
	background(100);
	
	console.log(var1);
	console.log(let1);
	
	if(var1 == 'var 1'){
		console.log(var2);
		console.log(let2);
		
		//behind the scenes - JS is 'hoisting' var3 to the top of the function, which can lead to errors
		var var3= 'var 3';
		let let3= 'let 3';
	}
	
	console.log(var3);

	//this will throw an error
	//console.log(let3);
	
}

function draw() {
	textSize(40);
	text("var is scoped to the nearest function block", 100, 40);
	text("let is scoped to the nearest enclosing { } block", 100, 100);
	//both of these will throw an error
	/*text(var2, 100, 110);
	text(let2, 100, 150);*/
}