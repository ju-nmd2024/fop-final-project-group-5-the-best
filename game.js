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
let state = "start";
let character;

function setup() {
  createCanvas(800, 800);
  character = new Character(460, 470, 0.9);
  fountain = new Fountain(228, 260, 0.4);
  tree = new Tree(180, 200, 0.5);
  bread = new Bread(100, 300, 0.4);
  // loop();
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
  push();
  fill(255, 0, 0);
  noStroke();
  rect(260, 380, 40, 40);
  pop();

  fountain.draw();

  push();
  character.draw();
  character.move();
  pop();

  bread.draw();
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
  gameScreen();

  // if (state === "start") {
  //   startScreen();
  // } else if (state === "game") {
  //   gameScreenn();
  // } else if (state === "result") {
  //   endScreen();
  // }
}

window.draw = draw;

function keyPressed() {
  if (keyIsDown(32) && state === "start") {
    console.log("Pressed");
    state = "game";
  } else if (key === 32 && state === "result") state = "game";
}
window.keyPressed = keyPressed;

// let gameTimer = 0;

// function endScreen() {
//   push();
//   background(0, 255, 0);
//   pop();
// }

// let state = "game";
// function draw() {
//   gameScreen();
//   character.draw();

// if (state === "start") {
//   startScreen();
// } else if (state === "game") {
//   gameScreen();
// //   // gameTimer = gameTimer + 1;
// //   // if(gameTimer >= 200) {
// //   //   gameTimer = 0;
// //   // state = "result";
// //   // }
// } else if (state === "result") {
//   endScreen();
// }
// }

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
