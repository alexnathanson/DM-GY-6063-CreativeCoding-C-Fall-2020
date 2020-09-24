//a game of snake

/*
You can use this as a starting point/ template for your homework. Feel free to start from scratch or heavily tweak this...
*/
let snake = [];
let dir, speed;
let goal = [];
let size = 10;

function setup(){
	createCanvas(400,400);

	//position the snake in the center of the screen
	snake[0] = [width/2,height/2];

	//position the goal
 	goal = [random(width),random(height)];

	background(100);

//direction
	dir = 0;
//speed
	speed = 1;
}

function draw(){
	background(100);

	//draw goal
	fill(0,255,0);
	ellipse(goal[0],goal[1],size);

	if(dir == 1){
		//move up
		moveSnake([snake[0][0],snake[0][1]-speed]);
	} else if (dir == 2){
		//move down
		moveSnake([snake[0][0],snake[0][1]+speed]);
	}else if (dir == 3){
		//move left
		moveSnake([snake[0][0]-speed,snake[0][1]]);
	}else if (dir == 4){
		//move right
		moveSnake([snake[0][0]+speed,snake[0][1]]);
	}

	drawSnake();

	checkGoal();

	fill(0);

}

//simple collision detection
function checkGoal(){
	let marginOfError = 5;

	if(dist(goal[0],goal[1],snake[0][0],snake[0][1]) < marginOfError){
		console.log('goal');
		//growSnake();
		goal[0]=random(width);
		goal[1]=random(height);
	}
}

function drawSnake(){
	fill(255);

	for (let sX = 0; sX < snake.length;sX++){
		for (let sY = 0; sY < snake.length;sY++){
			ellipse(snake[sX][0],snake[sX][1],size,size);
		}
	}
}

function moveSnake(newXY){
	snake[0]=newXY;
}

function keyPressed() {
	console.log(key)
//w
  if (key == 'w') {
  	dir = 1;
//s
  } else if (key == 's'){
    dir = 2;
//a
  } else if (key == 'a'){
  	dir = 3;
//d
  }else if (key == 'd'){
  	dir = 4;
  }
}