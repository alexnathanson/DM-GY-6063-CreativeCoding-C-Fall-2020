//deep vs shallow copy
/*
shallow:
only references are copied
if the original data changes, the shallow copy changes and vice versa

deep:
a true copy that exists independently of the original
new data is created
a new array with the original data duplicated
*/

let original = [];
let shallow = [];
let deep = [];

function setup(){
	createCanvas(400,400);

	for (let o = 0;o < 10; o++){
		original[o]=random(100);
	}

	//shallow copy
	shallow = original;
	

	//deep copy
	for(let d =0; d<original.length;d++){
		deep[d]=original[d];
	}
	
	print("*****INITIAL VALUES******");
	printIt();

	//change original
	for(let d =0; d<original.length;d++){
		original[d] = original[d] * 2;
	}

	print("*****CHANGE ORIGINAL******");
	printIt();

	//but what happens when we change the shallow copy????
	for(let d =0; d<shallow.length;d++){
		shallow[d] = shallow[d] * 2;
	}

	print("*****CHANGE SHALLOW COPY******");
	printIt();

	//but what happens when we change the shallow copy????
	for(let d =0; d<deep.length;d++){
		deep[d] = deep[d] * .5;
	}

	print("*****CHANGE DEEP COPY******");
	printIt();
}

function draw(){
	
}

function printIt(){
	console.log("original:");
	console.log(original);
	console.log("shallow");
	console.log(shallow);
	console.log("deep");
	console.log(deep);
}