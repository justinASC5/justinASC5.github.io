
var platform = {
    x: 0,
    y: 0,
    w: 390, //510
    h: 20 //30
}
var player = {
    x: 110,
    y: 360,
    w: 50,
    h: 50
}
var bigBall = {
    x: 195,
    y: -85,
    w: 150
}

// Position Variables
var x = player.x;
var y = player.y;
var speed = 0;
var gravity = 0.1;
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;
 
var vMultiplier = 0.007;
var bMultiplier = 0.6;

//canvas
function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
}
var angle = 0.0;


// let positionX = width;
// let positionY = 400 ;
var angle = 0.0;

function draw() {
    background(103, 252, 180);
    fill(130, 200, 50);
    //player ball
    ellipse(x, y, player.w, player.h);

    ballMove();

    
    
	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
    if (keyIsDown(LEFT_ARROW)) {
        angle -= 0.05;
        //rotate(radians(frameCount));
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        angle += 0.05;
        //rotate(radians(frameCount));
    }
    translate(300, 400); 
    rotate(angle);
    rect(platform.x, platform.y, platform.w, platform.h);
    //big ball
    //translate(500, 285);
    ellipse(bigBall.x, bigBall.y, bigBall.w);
}

function ballMove() {
 ax = accelerationX;
 ay = accelerationY;

vx = vx + ay + 2;
vy = vy + ax + 2;
 y = y + vy * vMultiplier; 
 x = x + vx * vMultiplier;

//Bounce when touch the edge of the canvas
 if (x < 0) { 
 	x = 0; 
 	vx = -vx * bMultiplier; 
 }
 if (y < 0) { 
 	y = 0; 
 	vy = -vy * bMultiplier; 
 }
 if (x > width - 20) { 
 	x = width - 20; 
 	vx = -vx * bMultiplier; 
 }
 if (y > height - 20) { 
 	y = height - 20; 
 	vy = -vy * bMultiplier; 
 }

}
// const 



