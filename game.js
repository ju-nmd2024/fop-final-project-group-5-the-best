import Fountain from "./new_fountain.js";
import Tree from "./new_tree.js";
import Bread from "./bread.js";
import PixelPigeon from "./new_pigeon.js";
import Enemy1 from "./enemy1.js";
import Enemy2 from "./enemy2.js";
import Enemy3 from "./enemy3.js";
import Poop from "./poop.js";
import Bench from "./bench.js";

//start screen
let q = 80;
let z = 100;
let speed = 2;
let lambadaBackground;
let fountain;
let benches = [];
let trees = [];
let state = "start";
let storeBackground;
let endScreenBackground;
let startScreenBackground;
let rulesBackground;

//game screen:

// enemy variables
let enemy1;
let enemy2;
let enemy3;

// store
let storePopup = false;
let speedPurchases = 0;
let pigeonPurchases = 0;
let timePurchases = 0;

//bread grid
let cols;
let rows;
let size = 80;
let bread;

//bread counter
let breadCount = 0;

// poop counter
let poopCount = 0;

// poop functions
let lastPoopTimer = 0;
let poopies = [];

// game time
let minutes = 3;
let seconds = 0;

//pigeons
let pigeons = [];

//boost colors
let c = 1; // every boost color - https://www.youtube.com/watch?v=kyN0pe42uhM
let c2 = 1;
let c3 = 1;
let c4 = 1;
let c5 = 1;
let c6 = 1;
let c7 = 1;
let c8 = 1;
let c9 = 1;

function setup() {
  createCanvas(800, 800);
  // character = new Character(1650, 100, 0.4);
  fountain = new Fountain(300, 240, 5);
  trees.push(new Tree(20, 190, 3));
  trees.push(new Tree(190, 50, 3));
  trees.push(new Tree(580, 20, 3));
  trees.push(new Tree(650, 520, 3));
  trees.push(new Tree(500, 650, 3));
  trees.push(new Tree(10, 680, 3));
  // breadArray.push(new Bread(random(width), random(height), 0.55));
  pigeons.push(new PixelPigeon(500, 100, 2));
  enemy1 = new Enemy1(400, 100, 3, 0.02);
  enemy2 = new Enemy2(700, 370, 3, 2);
  enemy3 = new Enemy3(0, 370, 3, 2);
  benches.push(new Bench(150, 520, 3.5));
  benches.push(new Bench(690, 280, 3.5));
  benches.push(new Bench(120, 100, 3.5));

  // poop = new Poop(100, 200, 1.3);

  cols = width / size; // snake inspo w food https://www.youtube.com/watch?v=dEUQYmnt1RI & https://www.youtube.com/watch?v=fTKUPehFF2A

  rows = height / size;

  bread = new Bread(0, 0, size / 35);
  placeBread();
  loop();
}

function startScreen() {
  push();
  image(startScreenBackground, 0, 0, 800, 800);
  translate(170, 200);

  push();
  textFont("monospace");
  textSize(50);
  fill(0, 0, 0);
  text("Pigeon Lambada", q - 50, z + 70);
  q = q + speed;
  if (q > 100 || q < 50) {
    speed = speed * -1; // Reverse speed
  }
  pop();

  fill(255, 90, 90);
  textSize(20);
  text("< press space to rules > ", 150, 300);

  pop();
}

function ruleScreen() {
  image(rulesBackground, 0, 0, 800, 800);

  fill(255, 90, 90);
  textSize(20);
  text("< press space to play > ", 280, 750);
}

function preload() {
  lambadaBackground = loadImage("Lambada Pigeon.png");
  storeBackground = loadImage("Store.png");
  endScreenBackground = loadImage("End Screen.png");
  startScreenBackground = loadImage("Start Screen.png");
  rulesBackground = loadImage("RULESS.png");
}
window.preload = preload;

function colliding(pigeon, enemy) {
  // Character enemy collision - https://chatgpt.com/share/675173a2-a7e0-800a-99c1-49bb0cc13b5e
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
  // Timer: https://editor.p5js.org/jas920/sketches/GvjzfEFzk & https://www.youtube.com/watch?v=rKhwDhp9dcs & https://editor.p5js.org/juliamlu/sketches/s42TrSkcr
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
    state = "result";
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
  image(storeBackground, 730, 120, 70, 70);
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
  text("Bread $ " + breadCount, 20, 30);

  fill(255, 255, 255);
  rect(100, 0, 100, 50);
  fill(0, 0, 0);
  textFont("monospace");
  textSize(10);
  text("Poop Count: " + poopCount, 110, 30);

  timer();

  const currentTime = millis();
  if (currentTime - lastPoopTimer > 10000) {
    for (let pigeon of pigeons) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
      poopies.push(new Poop(pigeon.x + 35, pigeon.y + 50, 1.3));
      poopCount++; // Follower Pigeons Auto Poop Feature - https://chatgpt.com/share/6751cc34-261c-8002-af84-63c54affefa2
    }
    lastPoopTimer = currentTime;
  }
  for (let poop of poopies) {
    // https://www.w3schools.com/js/js_loop_forof.asp
    poop.draw(); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  }

  bread.draw();

  enemy1.update();
  enemy1.draw();

  for (let tree of trees) {
    tree.draw();
  }

  enemy2.update();
  enemy2.draw();

  enemy3.update();
  enemy3.draw();

  for (let bench of benches) {
    bench.draw();
  }

  pigeons[0].draw();
  pigeons[0].move();

  if (pigeons[0].walkShop()) {
    showPopup();
    storePopup = true;
    fountain.x = -600;
    fountain.y = -600;
  } else {
    fountain.x = 300;
    fountain.y = 240;
  }

  fountain.draw();

  for (let i = 1; i < pigeons.length; i++) {
    // // Boosters: https://chatgpt.com/share/675173d1-2730-800a-a207-0e7c3fe940ca
    const pigeon = pigeons[i];
    pigeons[i].draw();
    pigeons[i].move();

    if (i > 0) {
      const followingPigeon = pigeons[i - 1];
      const offsetX = 40;
      const offsetY = 0;
      pigeon.x = lerp(pigeon.x, followingPigeon.x + offsetX, 0.1);
      pigeon.y = lerp(pigeon.y, followingPigeon.y + offsetY, 0.1);
    }
  }

  if (colliding(pigeons[0], enemy1)) {
    // Character enemy collision - https://chatgpt.com/share/675173a2-a7e0-800a-99c1-49bb0cc13b5e
    console.log("Collision detected");
    stopPigeon(pigeons[0], enemy1);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }

  if (colliding(pigeons[0], enemy2)) {
    // Character enemy collision - https://chatgpt.com/share/675173a2-a7e0-800a-99c1-49bb0cc13b5e
    console.log("Collision detected");
    stopPigeon(pigeons[0], enemy2);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }

  if (colliding(pigeons[0], enemy3)) {
    // Character enemy collision - https://chatgpt.com/share/675173a2-a7e0-800a-99c1-49bb0cc13b5e
    console.log("Collision detected");
    stopPigeon(pigeons[0], enemy3);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }
}

function stopPigeon(pigeon, enemy) {
  // Character enemy collision - https://chatgpt.com/share/675173a2-a7e0-800a-99c1-49bb0cc13b5e
  const pigeonCollision = pigeon.getCollision();
  const enemyCollision = enemy.getCollision();

  if (
    pigeonCollision.x + pigeonCollision.width > enemyCollision.x &&
    pigeonCollision.x < enemyCollision.x + enemyCollision.width - 40
  ) {
    if (
      pigeons[0].y + pigeons[0].height > enemyCollision.y &&
      pigeons[0].y < enemyCollision + enemyCollision.height - 40
    ) {
      pigeons[0].velocityX = 0;
      pigeons[0].x = enemyCollision.x - pigeons[0].width;
    }
  }

  if (
    pigeonCollision.y + pigeonCollision.height > enemyCollision.y &&
    pigeonCollision.y < enemyCollision.y + enemyCollision.height - 40
  ) {
    if (
      pigeons[0].x + pigeons[0].width > enemyCollision.x &&
      pigeons[0].x < enemyCollision.x + enemyCollision.width - 40
    ) {
      pigeons[0].velocityY = 0;
      pigeons[0].y = enemyCollision.y - pigeons[0].height;
    }
  }
}

function endScreen() {
  push();
  image(endScreenBackground, 0, 0, 800, 800);
  translate(170, 200);

  if (poopCount >= 55) {
    textFont("monospace");
    textSize(50);
    fill(0, 0, 0);
    text(poopCount, 210, 60);
    text("Yay! You pooped", q - 60, z + 40);
    text("the park", q + 40, z + 110);
    q = q + speed;
    if (q > 100 || q < 60) {
      speed = speed * -1; // Reverse speed
    }
  } else if (poopCount < 55) {
    textFont("monospace");
    textSize(50);
    fill(0, 0, 0);
    text(poopCount, 220, 60);
    text("You haven't", q, z + 40);
    text("pooped enough", q - 30, z + 110);
    q = q + speed;
    if (q > 100 || q < 60) {
      speed = speed * -1; // Reverse speed
    }
  }

  fill(255, 90, 90);
  textSize(20);
  text("< press space to play again > ", 70, 350);

  pop();
}

function resetGame() {
  breadCount = 0;
  speedPurchases = 0;
  pigeonPurchases = 0;
  timePurchases = 0;
  minutes = 3;
  seconds = 0;
  pigeons = [new PixelPigeon(500, 100, 2)];
  poopies = [];
  console.log("reset the game");
  c = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = 1;
}

window.setup = setup;

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "rules") {
    ruleScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resetGame();
    endScreen();
  }
}
function breadCollision() {
  let pigeon = pigeons[0];
  let d = dist(pigeon.x, pigeon.y, bread.x, bread.y);
  return d < size / 2;
}
function displayBoard() {
  //  snake inspo w food https://www.youtube.com/watch?v=dEUQYmnt1RI & https://www.youtube.com/watch?v=fTKUPehFF2A
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noStroke();
      rect(i * size, j * size, size, size);
    }
  }
}
function placeBread() {
  //  snake inspo w food https://www.youtube.com/watch?v=dEUQYmnt1RI & https://www.youtube.com/watch?v=fTKUPehFF2A
  let randomX = Math.floor(Math.random() * cols);
  let randomY = Math.floor(Math.random() * rows);
  bread.x = randomX * size;
  bread.y = randomY * size;
}

window.draw = draw;

function keyPressed() {
  if (keyIsDown(32) && state === "start") {
    console.log("Pressed");
    state = "rules";
  } else if (keyIsDown(32) && state === "rules") {
    state = "game";
  } else if (keyIsDown(32) && state === "result") {
    state = "game";
    poopCount = 0;
  }
}

// else if (key === 32 && state === "game" )
//   state = "time over";

window.keyPressed = keyPressed;

// let gameTimer = 0;

function mousePressed() {
  // Boosters: https://chatgpt.com/share/675173d1-2730-800a-a207-0e7c3fe940ca
  if (storePopup) {
    if (mouseX > 475 && mouseX < 515 && mouseY > 215 && mouseY < 255) {
      if (speedPurchases === 0) {
        if (breadCount >= 5) {
          breadCount -= 5;
          pigeons[0].speed += 2;
          speedPurchases++;
          c = 2;
          console.log("Speed +3 purchased!" + (3 - speedPurchases));
        } else {
          console.log("Not enought Bread $!");
        }
      } else if (speedPurchases === 1) {
        if (breadCount >= 5) {
          breadCount -= 5;
          pigeons[0].speed += 2;
          speedPurchases++;
          c2 = 2;
          console.log("Speed +3 purchased!" + (3 - speedPurchases));
        } else {
          console.log("Not enought Bread $!");
        }
      } else if (speedPurchases === 2) {
        if (breadCount >= 5) {
          breadCount -= 5;
          pigeons[0].speed += 2;
          speedPurchases++;
          c3 = 2;
          console.log("Speed +3 purchased!" + (3 - speedPurchases));
        } else {
          console.log("Not enought Bread $!");
        }
      } else {
        console.log("limit has reached!");
      }
    }
  }

  if (mouseX > 475 && mouseX < 515 && mouseY > 365 && mouseY < 405) {
    console.log("Clicked");
    if (pigeonPurchases === 0) {
      if (breadCount >= 8) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c4 = 2;
          pigeonPurchases++;
          breadCount -= 8;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 1) {
      if (breadCount >= 8) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c5 = 2;
          pigeonPurchases++;
          breadCount -= 8;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 2) {
      if (breadCount >= 8) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c6 = 2;
          pigeonPurchases++;
          breadCount -= 8;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 3) {
      if (breadCount >= 8) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c7 = 2;
          pigeonPurchases++;
          breadCount -= 8;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 4) {
      if (breadCount >= 8) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c8 = 2;
          pigeonPurchases++;
          breadCount -= 8;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else {
      console.log("Limit Reached!");
    }
  }
  if (mouseX > 475 && mouseX < 515 && mouseY > 515 && mouseY < 555) {
    console.log("Clicked");
    if (timePurchases === 0) {
      if (breadCount >= 20) {
        let addedSeconds = 0;
        breadCount -= 20;
        timePurchases++;
        c9 = 2;
        if (seconds > 30) {
          addedSeconds = 60 - seconds;
          seconds = -addedSeconds + 30;
          minutes++;
        } else {
          seconds += 30;
        }
        console.log("Time +30 purchased!" + minutes + "m" + seconds + "s");
      } else {
        console.log("Not enough Bread $!");
      }
    } else {
      console.log("Limit Reached!");
    }
  }
}

window.mousePressed = mousePressed;

function showPopup() {
  // Pigeon store logic https://chatgpt.com/share/6751737a-5a90-800a-9e13-ec313215ce46
  noStroke();
  background(0, 0, 0, 180);
  strokeWeight(5);
  fill("#fcefb4");
  rect(250, 100, 300, 550);
  push();
  noStroke();
  fill(0, 0, 0);
  textStyle(BOLD);
  textSize(25);
  textFont("monospace");
  text("Bread Store", 270, 140);
  pop();
  push();
  noStroke();
  fill(0, 0, 0);
  textSize(15);
  textStyle(BOLD);
  textFont("monospace");
  text("Speed +3", 275, 190);
  text("Pigeon +1", 275, 340);
  text("Time +30s", 275, 490);
  text("$" + breadCount, 500, 140);
  pop();

  push();
  stroke("#710000");
  //boost main rectangles
  push();
  //speed boost rectangles
  if (c === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c === 2) fill("#710000");
  rect(275, 200, 60, 70);
  pop();

  push();
  if (c2 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c2 === 2) fill("#710000");
  rect(335, 200, 60, 70);
  pop();

  push();
  if (c3 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c3 === 2) fill("#710000");
  rect(395, 200, 60, 70);
  pop();

  push();
  //pigeon boost rectangles
  if (c4 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c4 === 2) fill("#710000");
  rect(275, 350, 36, 70);
  pop();

  push();
  if (c5 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c5 === 2) fill("#710000");
  rect(311, 350, 36, 70);
  pop();

  push();
  if (c6 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c6 === 2) fill("#710000");
  rect(347, 350, 36, 70);
  pop();

  push();
  if (c7 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c7 === 2) fill("#710000");
  rect(383, 350, 36, 70);
  pop();

  push();
  if (c8 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c8 === 2) fill("#710000");
  rect(419, 350, 36, 70);
  pop();

  push();
  if (c9 === 1) fill("#fcefb4"); // https://www.youtube.com/watch?v=kyN0pe42uhM
  if (c9 === 2) fill("#710000");
  rect(275, 500, 180, 70);
  pop();

  rect(475, 215, 40, 40);
  rect(475, 365, 40, 40);
  rect(475, 515, 40, 40);
  pop();

  push();
  noStroke();
  fill(0, 0, 0);
  textSize(15);
  textStyle(BOLD);
  textFont("monospace");
  text("$5", 486, 240);
  text("$8", 485, 390);
  text("$20", 482, 540);
  pop();
}

window.showPopup = showPopup;
