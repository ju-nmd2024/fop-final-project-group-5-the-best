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

//bread couner
let breadCount = 0;

// poop counter
let poopCount = 0;

// poop functions
let lastPoopTimer = 0;
let poopies = [];

// game time

let minutes = 3;
let seconds = 12;

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

function colliding(pigeon, enemy) {
  const pigeonCollision = pigeon.getCollision();
  const enemyCollision = enemy.getCollision();

  return (
    pigeonCollision.x < enemyCollision.x + enemyCollision.width &&
    pigeonCollision.x + pigeonCollision.width > enemyCollision.x &&
    pigeonCollision.y < enemyCollision.y + enemyCollision.height &&
    pigeonCollision.y + pigeonCollision.height > enemyCollision.y
  );
}

function timer() {
  fill(255, 255, 255);
  rect(700, 0, 100, 50);
  fill(0, 0, 0);
  textFont("monospace");
  textSize(30);
  text(minutes, 720, 35);

  if (seconds > 0 && frameCount % 60 === 0) {
    seconds--;
  } else if (seconds === 0 && minutes > 0 && frameCount % 60 === 0) {
    minutes--;
    seconds = 59;
  }

  if (seconds < 10) {
    text(":0", 740, 35);
    text(seconds, 775, 35);
  } else {
    text(":", 740, 35);
    text(seconds, 760, 35);
  }

  if (minutes === 0 && seconds === 0) {
    state = "results";
    console.log("time's up!!!");
  }
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
    breadCount++;
  }

  //bread count
  fill(255, 255, 255);
  rect(0, 0, 100, 50);
  fill(0, 0, 0);
  textFont("monospace");
  textSize(10);
  text("Bread Count: " + breadCount, 10, 30);

  fill(255, 255, 255);
  rect(100, 0, 100, 50);
  fill(0, 0, 0);
  textFont("monospace");
  textSize(10);
  text("Poop Count: " + poopCount, 110, 30);

  timer();

  const currentTime = millis();
  if (currentTime - lastPoopTimer > 10000) {
    poopies.push(new Poop(pigeon.x + 35, pigeon.y + 50, 1.3));
    lastPoopTimer = currentTime;
    poopCount = poopCount + 1;
  }
  for (let poop of poopies) {
    poop.draw();
  }

  bread.draw();

  enemy1.update();
  enemy1.draw();

  tree.draw();

  enemy2.update();
  enemy2.draw();

  enemy3.update();
  enemy3.draw();

  pigeon.draw();
  pigeon.move();

  fountain.draw();

  if (colliding(pigeon, enemy1)) {
    console.log("Collision detected");
    stopPigeon(pigeon, enemy1);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }

  if (colliding(pigeon, enemy2)) {
    console.log("Collision detected");
    stopPigeon(pigeon, enemy2);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }

  if (colliding(pigeon, enemy3)) {
    console.log("Collision detected");
    stopPigeon(pigeon, enemy3);
    breadCount -= 2;
    if (breadCount > 0) {
      breadCount--;
    } else {
      breadCount = 0;
    }
  }
}

function stopPigeon(pigeon, enemy) {
  const pigeonCollision = pigeon.getCollision();
  const enemyCollision = enemy.getCollision();

  if (
    pigeonCollision.x + pigeonCollision.width > enemyCollision.x &&
    pigeonCollision.x < enemyCollision.x + enemyCollision.width
  ) {
    if (
      pigeon.y + pigeon.height > enemyCollision.y &&
      pigeon.y < enemyCollision + enemyCollision.height
    ) {
      pigeon.velocityX = 0;
      pigeon.x = enemyCollision.x - pigeon.width;
    }
  }

  if (
    pigeonCollision.y + pigeonCollision.height > enemyCollision.y &&
    pigeonCollision.y < enemyCollision.y + enemyCollision.height
  ) {
    if (
      pigeon.x + pigeon.width > enemyCollision.x &&
      pigeon.x < enemyCollision.x + enemyCollision.width
    ) {
      pigeon.velocityY = 0;
      pigeon.y = enemyCollision.y - pigeon.height;
    }
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
