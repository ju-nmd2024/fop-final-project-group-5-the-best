import Character from "./pigeon.js";
import Fountain from "./fountain.js";
import Tree from "./tree.js";
import Bread from "./bread.js";

function setup() {
  createCanvas(800, 800);
  character = new Character(100, 100);
  fountain = new Fountain(150, 300);
  tree = new Tree(180, 200);
  bread = new Bread(280, 200);
  noLoop();
}
window.setup = setup;

function draw() {
  gameScreen();
}

window.draw = draw;

function gameScreen() {
  background(117, 157, 93);

  push();
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
  push();
  character.draw();
  pop();
  push();
  fountain.draw();
  pop();

  tree.draw();

  bread.draw();

  //if (keyIsDown(65)) {
  //   // A key
  //   pigeon.x -= pigeon.Speed;
  // }
  // if (keyIsDown(68)) {
  //   // D key
  //   pigeon.x += pigeon.Speed;
  // }
  // if (keyIsDown(87)) {
  //   // W key
  //   pigeon.y -= pigeon.Speed;
  // }
  // if (keyIsDown(83)) {
  //   // S key
  //   pigeon.y += pigeon.Speed;
  // }
}

// let ts = 20;

// let gameTimer = 0;

// // // function gameScreen() {
// // //   background(117, 157, 93);

// // //   push();

// // //   pop();

// // //   push();
// // //   fill(207, 203, 126);
// // //   noStroke();

// // //   ellipse(400, 400, 350);
// // //   rect(0, 350, 800, 100);
// // //   rect(350, 0, 100, 800);

// // //   // middle
// // //   fill(70, 255, 255);
// // //   ellipse(400, 400, 150);
// // //   pop();

// // //   // store
// // //   push();
// // //   fill(0, 0, 0);
// // //   rect(700, 70, 50, 50);
// // //   pop();

// // //   // enemy
// // //   push();
// // //   fill(255, 0, 0);
// // //   noStroke();
// // //   rect(260, 380, 40, 40);
// // //   pop();

// // //   // pigeon
// // //   // push();

// // //   // Pigeon(pigeon.x, pigeon.y, pigeon.size);
// // //   // pop();

// // //   if (keyIsDown(65)) {
// // //     // A key
// // //     pigeon.x -= pigeon.Speed;
// // //   }
// // //   if (keyIsDown(68)) {
// // //     // D key
// // //     pigeon.x += pigeon.Speed;
// // //   }
// // //   if (keyIsDown(87)) {
// // //     // W key
// // //     pigeon.y -= pigeon.Speed;
// // //   }
// // //   if (keyIsDown(83)) {
// // //     // S key
// // //     pigeon.y += pigeon.Speed;
// // //   }
// // //   // count
// // //   push();
// // //   fill(255, 255, 255);
// // //   noStroke();
// // //   rect(0, 0, 200, 50);

// // //   // timer
// // //   rect(700, 0, 110, 50);
// // //   fill(0, 0, 0);
// // //   textFont("monospace");
// // //   textSize(ts + 10);
// // //   text("3:00", 720, 35);
// // //   pop();
// // // }

// // // function startScreen() {
// // //   push();
// // //   background(0, 0, 255);
// // //   pop();
// // // }

// // // function endScreen() {
// // //   push();
// // //   background(0, 255, 0);
// // //   pop();
// // // }

// // // let state = "game";
// // // function draw() {
// // //   gameScreen();
// // //   character.draw();

// //   // if (state === "start") {
// //   //   startScreen();
// //   // } else if (state === "game") {
// //   //   gameScreen();
// //   // //   // gameTimer = gameTimer + 1;
// //   // //   // if(gameTimer >= 200) {
// //   // //   //   gameTimer = 0;
// //   // //   // state = "result";
// //   // //   // }
// //   // } else if (state === "result") {
// //   //   endScreen();
// //   // }
// // // }

// // // function mouseClicked() {
// // //   if (state === "start") {
// // //     console.log("Start clicked");
// // //     state = "game";
// // //   } else if (state === "game") {
// // //     state = "result";

// // //   } else if (state === "result") {
// // //     console.log("again cliked");
// // //     state = "game";
// // //   }
// // // }
