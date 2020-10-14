/*unlike with CSVs which treat everything as a string, data types matter in JSON files
JSON data types: string, number, JSON object, array, boolean,null
*/

let apiKey = 'oUnrCI11T3dpNiZFniNtrAW23yXSBHJh';

let myData;

let phrase = "New York";

let newData = false;

let phraseCount = 0;

function setup(){
	//httpGet('https://api.kanye.rest', myCallback);

	//httpGet('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=' + apiKey,myCallback);
	httpGet('https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key='+apiKey, 'json',myCallback);
	
	createCanvas(400,400);
	background(200);
}

function draw(){
	if (myData != undefined && newData){
		phraseCount = 0;
		for (let d = 0; d < myData.length; d++){
			if (myData[d].abstract.search(phrase) >= 0){
				phraseCount++;
			}
		}

		console.log(phraseCount);

		newData = false;
	}

	fill(255%phraseCount,100,200);
	ellipse(width/2,height/2, phraseCount,phraseCount);
}

function myCallback(result){
	console.log(result);
	console.log(typeof result);
	
	console.log(result.response.docs[0].abstract);

	myData = result.response.docs;

	let myKeys = Object.keys(result.response.docs);


	console.log(myKeys);

	newData = true;

}


