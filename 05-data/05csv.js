let boundaries, parsedBoundaries;
let minMax = [];
let xDim,yDim, dimRatio;

function preload(){

/*load table is an asynchronous function that can
load a local file or a remote URL.
the default format is csv,
must explicitly indicate if a header is present*/

//data source: https://data.cityofnewyork.us/City-Government/Borough-Boundaries-Water-Areas-Included-/tv64-9x69
 boundaries = loadTable('/05-data/data/nybb.csv', 'csv', 'header');

}

function setup(){
	createCanvas(windowWidth,600);
	background(200);
	
	//if header is specified this will return the column names
	//console.log(typeof table.getColumn(2)[0]);
	console.log("BOUNDARIES");
	console.log(boundaries);
	
	//this will change depending on if header is specified
	rowAmt = boundaries.getRowCount();
	console.log("row count: " + rowAmt);
	
	//look at a row - not that there is a lot of junk to sort through
	console.log(boundaries.getRow(0));
	console.log(boundaries.getRow(0).arr);

	//1 without water, 2 with
	parsedBoundaries = parseMultipolygon(boundaries.getColumn(1)[2]);
	console.log(parsedBoundaries);

	findMinMax(parsedBoundaries);
	console.log(minMax);

	plot(parsedBoundaries);

}

function draw(){
	//background(abs(sin(millis()/1000))*255,255-(abs(sin(millis()/1000))*255),abs(cos(millis()/1000))*255);
	//translate(mouseX-250,mouseY-250);
//	image(staticData,0,0);

}

function plot(toPlot){
	stroke(1);
	push();
	for(let s =0;s< toPlot.length;s++){
		fill(random(255),random(255),random(255));
		beginShape();
		for(let p =0; p<toPlot[s].length;p++){
			//console.log(toPlot[s][p]);
			let tP = latLongScale(toPlot[s][p]);
			vertex(tP[0],tP[1]);
			//ellipse(tP[0],tP[1],1,1);
			//vertex(toPlot[s][p]);
		}
		endShape(CLOSE);//close?
	}
	pop();
}

//multipolygon is a string containing a bunch of polygons that make up the borrough and any islands associated with it
function parseMultipolygon(aMP){
	console.log("MULTIPOLYGON");
	console.log(aMP);
	console.log(typeof aMP);


	//remove begining and end junk
	aMP = aMP.split('(((')[1];
	aMP = aMP.split(')))')[0];

	//split up all the little islands
	aMP = aMP.split(')), ((');
	//console.log(aMP);// now we have the individual bodies seperated, but they are still being treated as strings, not points

	let parsedIt = [];
	for(let i =0;i<aMP.length;i++){
		let parsedIs = [];
		//turn the strings into a 2d array
		let islands = aMP[i].split(', ');
		for(let p = 0;p<islands.length;p++){
			//split, convert to floats, and remap
			let coordPairs = islands[p].split(' ');
			parsedIs.push(coordPairs);
		}
		parsedIt.push(parsedIs);
	}

	console.log(parsedIt);
	return parsedIt;
}

function latLongScale(aPoint){

	aPoint[0] =  map(aPoint[0],minMax[0],minMax[2],0,width*dimRatio);
	aPoint[1] = map(aPoint[1],minMax[1],minMax[3],0,height);

	//console.log(aPoint);
	return aPoint;
}

function findMinMax(arrayOfPoints){
	console.log(arrayOfPoints);
	let tempMinX = 1000000;
	let tempMinY = 1000000;
	let tempMaxX = -1000000;
	let tempMaxY = -1000000;

	for (let a = 0; a < arrayOfPoints.length; a++){
		for (let b =0;b<arrayOfPoints[a].length;b++){
			if(arrayOfPoints[a][b][0]<tempMinX){
				tempMinX = arrayOfPoints[a][b][0];
			}else if(arrayOfPoints[a][b][0]>tempMaxX){
				tempMaxX = arrayOfPoints[a][b][0];
			}

			if(arrayOfPoints[a][b][1]<tempMinY){
				tempMinY = arrayOfPoints[a][b][1];
			}else if(arrayOfPoints[a][b][1]>tempMaxY){
				tempMaxY = arrayOfPoints[a][b][1];
			}
		}
	}

	xDim = abs(tempMaxX - tempMinX);
	yDim = abs(tempMaxY - tempMinY)

	//needed for scaling appropriately
	dimRatio = yDim/xDim;

	minMax = [tempMinX,tempMinY,tempMaxX,tempMaxY];
}