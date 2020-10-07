/*unlike with CSVs which treat everything as a string, data types matter in JSON files
JSON data types: string, number, JSON object, array, boolean,null
*/

let apiKey = 'oUnrCI11T3dpNiZFniNtrAW23yXSBHJh';

function preload(){
}

function setup(){
	//httpGet('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=' + apiKey,myCallback);
	httpGet('https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key='+apiKey, 'json',myCallback);
}

function myCallback(result){
	console.log(result);
	console.log(typeof result);
	console.log(result.response);
	console.log(Object.keys(result));

	
}


