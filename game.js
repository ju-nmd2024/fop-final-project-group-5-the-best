// import Character from "./pigeon.js";
import Fountain from "./fountain.js";
import Tree from "./tree.js";
import Bread from "./bread.js";
import PixelPigeon from "./new_pigeon.js";
import Enemy1 from "./enemy1.js";
import Enemy2 from "./enemy2.js";
import Enemy3 from "./enemy3.js";

//start screen
let q = 80;
let z = 100;
let speed = 2;
let lambadaBackground;
let fountain;
let tree;
let bread;
let breadArray = [];
let pigeon;
let state = "game";

//game screen:
// let gameTimer = 0;

// enemy variables
let enemy1;
let enemyAngle = 0; //radians angle
let enemySpeed = 0.02;
let fountainX = 400;
let fountainY = 390;
let fountainRadius = 140;

// sencond enemy
let enemy2;
let enemy2X = 800;
let enemy2Y = 390;
let enemy2Speed = 2;

//3rd enemy
let enemy3;
let enemy3X = 0;
let enemy3Y = 400;
let enemy3Speed = 2.5;

// store
let storePopup = false;
let storeX = 700;
let storeY = 70;
let storeW = 50;
let storeH = 50;

function setup() {
  createCanvas(800, 800);
  // character = new Character(1650, 100, 0.4);
  fountain = new Fountain(228, 260, 0.4);
  tree = new Tree(-600, -600, 0.9);
  // breadArray.push(new Bread(random(width), random(height), 0.55));
  pigeon = new PixelPigeon(500, 100, 2);
  // enemy1 = new Enemy1(400, 100, 3, 0.02);
  // enemy2 = new Enemy2(700, 370, 3, 2);
  // enemy3 = new Enemy3(0, 370, 3, 2);
  bread = new Bread(200, 200, 2.5);
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

function preload() {
  lambadaBackground = loadImage("Pigeon Lambada.png");
}

function gameScreen() {
  push();
  push();
  image(lambadaBackground, 0, 0, 800, 800);
  pop();

  // store
  push();
  fill(0, 0, 0);
  rect(storeX, storeY, storeW, storeH);
  pop();

  // enemy1.update();
  // enemy1.draw();

  // enemy2.update();
  // enemy2.draw();

  // enemy3.update();
  // enemy3.draw();

  bread.draw();

  pigeon.draw();
  pigeon.move();

  // push();
  // for (let i = breadArray.length - 1; i >= 0; i--) {
  //   let bread = breadArray[i];
  //   if (pigeon.breadCollision(bread)) {
  //     console.log("collision detected");
  //     breadArray.splice(i, 1);
  //   } else {
  //     bread.draw();
  //   }
  // }
  // pop();
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

function showPopup() {
  background(0, 0, 0, 180);
  fill(255, 255, 255);
  rect(300, 200, 350, 350);
}

// function pigeonBread(){
//   if(distance < 30){
//     bread.x = random(width);
//     bread.y = random(height);
//   }

// }

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
