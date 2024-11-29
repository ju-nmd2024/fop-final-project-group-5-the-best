import Character from "./pigeon.js";
import Fountain from "./fountain.js";
import Tree from "./tree.js";
import Bread from "./bread.js";

//start screen
let q = 80;
let z = 100;
let speed = 2;
let fountain;
let tree;
let bread;
let character;
let state = "game";

//game screen:
// let gameTimer = 0;

// enemy variables
let enemyAngle = 0; //radians angle
let enemySpeed = 0.02;
let fountainX = 400;
let fountainY = 390;
let fountainRadius = 140;

// sencond enemy
let enemy2X = 800;
let enemy2Y = 400;
let enemy2Speed = 2;

function setup() {
  createCanvas(800, 800);
  character = new Character(160, 470, 0.4);
  fountain = new Fountain(228, 260, 0.4);
  tree = new Tree(-600, -600, 0.9);
  bread = new Bread(-200, 200, 0.6);
  loop();
}

function startScreen() {
  push();

  translate(170, 200);
  background(255, 255, 255);
  push();
  textFont("monospace");
  textSize(50);
  fill(0, 0, 0);
  text("Pigeon Lambada", q, z);
  q = q + speed;
  if (q > 100 || q < 50) {
    speed = speed * -1; // Reverse speed
  }
  pop();

  fill(255, 90, 90);
  textSize(20);
  text("< press space to start > ", 200, 300);

  pop();
}

function gameScreen() {
  push();
  background(117, 157, 93);
  fill(207, 203, 126);
  noStroke();

  ellipse(400, 400, 350);
  rect(0, 350, 800, 100);
  rect(350, 0, 100, 800);

  // store
  push();
  fill(0, 0, 0);
  rect(700, 70, 50, 50);
  pop();

  // enemy

  let enemyX = fountainX + fountainRadius * cos(enemyAngle);
  let enemyY = fountainY + fountainRadius * sin(enemyAngle);
  enemyAngle += enemySpeed;

  push();
  fill(255, 0, 0);
  noStroke();
  rect(enemyX - 5, enemyY - 5, 40, 40);
  pop();

  push();
  fill(255, 0, 0);
  noStroke();
  rect(enemy2X - 30, enemy2Y - 20, 40, 40);
  enemy2X = enemy2X - enemy2Speed;
  if (enemy2X <= 150 || enemy2X >= 450) {
    // animation so it moves
    enemy2Speed = enemy2Speed * 1;
  }
  pop();

  bread.draw();

  character.draw();
  character.move();

  fountain.draw();

  push();
  tree.draw();
  pop();
}

function endScreen() {
  push();

  translate(170, 200);
  background(255, 255, 255);
  push();
  textFont("monospace");
  textSize(50);
  fill(0, 0, 0);
  text("You pooped!", q, z);
  q = q + speed;
  if (q > 100 || q < 60) {
    speed = speed * -1; // Reverse speed
  }
  pop();

  fill(255, 90, 90);
  textSize(20);
  text("< press space to play again > ", 120, 300);

  pop();
}

window.setup = setup;

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    //     // gameTimer = gameTimer + 1;
    //     // if(gameTimer >= 200) {
    //     //   gameTimer = 0;
    //     state = "result";
    //     }
  } else if (state === "result") {
    console.log("time end");
    endScreen();
  }
}

window.draw = draw;

function keyPressed() {
  if (keyIsDown(32) && state === "start") {
    console.log("Pressed");
    state = "game";
  } else if (key === 32 && state === "game") state = "game";
  console.log("game time");
}

// else if (key === 32 && state === "game" )
//   state = "time over";

window.keyPressed = keyPressed;

// let gameTimer = 0;

// function mouseClicked() {
//   if (state === "start") {
//     console.log("Start clicked");
//     state = "game";
//   } else if (state === "game") {
//     state = "result";

//   } else if (state === "result") {
//     console.log("again cliked");
//     state = "game";
//   }
// }
