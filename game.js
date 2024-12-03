import Fountain from "./new_fountain.js";
import Tree from "./new_tree.js";
import Bread from "./bread.js";
import PixelPigeon from "./new_pigeon.js";
import Enemy1 from "./enemy1.js";
import Enemy2 from "./enemy2.js";
import Enemy3 from "./enemy3.js";
import Poop from "./poop.js";

//start screen
let q = 80;
let z = 100;
let speed = 2;
let lambadaBackground;
let fountain;
let tree;
let pigeon;
let poop;
let state = "game";

//game screen:
// let gameTimer = 0;

// enemy variables
let enemy1;
let enemy2;
let enemy3;

// store
let storePopup = false;
let storeX = 700;
let storeY = 70;
let storeW = 50;
let storeH = 50;

//bread grid
let cols;
let rows;
let size = 80;
let bread;

// poop functions
let lastPoopTimer = 0;
let poopies = [];

function setup() {
  createCanvas(800, 800);
  // character = new Character(1650, 100, 0.4);
  fountain = new Fountain(300, 240, 5);
  tree = new Tree(50, 50, 3);
  // breadArray.push(new Bread(random(width), random(height), 0.55));
  pigeon = new PixelPigeon(500, 100, 2);
  enemy1 = new Enemy1(400, 100, 3, 0.02);
  enemy2 = new Enemy2(700, 370, 3, 2);
  enemy3 = new Enemy3(0, 370, 3, 2);

  // poop = new Poop(100, 200, 1.3);

  cols = width / size;
  rows = height / size;

  bread = new Bread(0, 0, size / 35);
  placeBread();
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
window.preload = preload;

function colliding(pigeon, enemy1) {
  const pigeonCollision = pigeon.getCollision();
  const enemy1Collision = enemy1.getCollision();

  return (
    pigeonCollision.x < enemy1Collision.x + enemy1Collision.width &&
    pigeonCollision.x + pigeonCollision.width > enemy1Collision.x &&
    pigeonCollision.y < enemy1Collision.y + enemy1Collision.height &&
    pigeonCollision.y + pigeonCollision.height > enemy1Collision.y
  );
}

function gameScreen() {
  push();
  push();
  displayBoard();
  image(lambadaBackground, 0, 0, 800, 800);
  pop();

  // store
  push();
  fill(0, 0, 0);
  rect(750, 120, 60, 60);
  pop();

  if (breadCollision()) {
    placeBread();
  }

  bread.draw();

  enemy1.update();
  enemy1.draw();

  tree.draw();

  enemy2.update();
  enemy2.draw();

  enemy3.update();
  enemy3.draw();

  const currentTime = millis();
  if (currentTime - lastPoopTimer > 10000) {
    poopies.push(new Poop(pigeon.x + 15, pigeon.y + 50, 1.3));
    lastPoopTimer = currentTime;
  }
  for (let poop of poopies) {
    poop.draw();
  }

  pigeon.draw();
  pigeon.move();

  fountain.draw();

  if (colliding(pigeon, enemy1)) {
    console.log("Collision detected");
  }
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
function breadCollision() {
  let d = dist(pigeon.x, pigeon.y, bread.x, bread.y);
  return d < size / 2;
}
function displayBoard() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noStroke();
      rect(i * size, j * size, size, size);
    }
  }
}
function placeBread() {
  let randomX = Math.floor(Math.random() * cols);
  let randomY = Math.floor(Math.random() * rows);
  bread.x = randomX * size;
  bread.y = randomY * size;
}

window.draw = draw;

function showPopup() {
  background(0, 0, 0, 180);
  fill(255, 255, 255);
  rect(250, 100, 300, 550);
}
window.showPopup = showPopup;

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
