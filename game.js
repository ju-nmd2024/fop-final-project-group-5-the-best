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
let poop;
let state = "game";

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
let storeX = 700;
let storeY = 70;
let storeW = 50;
let storeH = 50;

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
let seconds = 12;

//pigeons
let pigeons = [];

//boost colors
let c = 1;
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
  tree = new Tree(50, 50, 3);
  // breadArray.push(new Bread(random(width), random(height), 0.55));
  pigeons.push(new PixelPigeon(500, 100, 2));
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
      //pigeons auto poop feature (N)
      poopies.push(new Poop(pigeon.x + 35, pigeon.y + 50, 1.3));
      poopCount++;
    }
    lastPoopTimer = currentTime;
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

  pigeons[0].draw();
  pigeons[0].move();

  fountain.draw();

  for (let i = 1; i < pigeons.length; i++) {
    const pigeon = pigeons[i];
    pigeons[i].draw();
    pigeons[i].move();

    if (i > 0) {
      const followingPigeon = pigeons[i - 1];

      // const leader = pigeons[i ];
      // const follower = pigeons[i - 1];

      const offsetX = 40;
      const offsetY = 0;
      pigeon.x = lerp(pigeon.x, followingPigeon.x + offsetX, 0.1);
      pigeon.y = lerp(pigeon.y, followingPigeon.y + offsetY, 0.1);
    }

    // leader.x = follower.x - 100;
    // leader.y = follower.y;

    // Draw the follower
    // follower.draw();
  }

  if (colliding(pigeons[0], enemy1)) {
    console.log("Collision detected");
    stopPigeon(pigeons[0], enemy1);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }

  if (colliding(pigeons[0], enemy2)) {
    console.log("Collision detected");
    stopPigeon(pigeons[0], enemy2);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }

  if (colliding(pigeons[0], enemy3)) {
    console.log("Collision detected");
    stopPigeon(pigeons[0], enemy3);
    if (breadCount > 0) {
      breadCount -= 2;
    } else {
      breadCount = 0;
    }
  }

  //     if (storePopup){
  //       showPopup();

  //     }
}

function stopPigeon(pigeon, enemy) {
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
  }

  // else if (state === "result") {
  //   console.log("time end");
  //   endScreen();
  // }
}
function breadCollision() {
  let pigeon = pigeons[0];
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

function keyPressed() {
  if (keyIsDown(32) && state === "start") {
    console.log("Pressed");
    state = "game";
    // } else if (key === 32 && state === "game") state = "game";
    // console.log("game time");
  }
}

// else if (key === 32 && state === "game" )
//   state = "time over";

window.keyPressed = keyPressed;

// let gameTimer = 0;

function mousePressed() {
  if (storePopup) {
    if (mouseX > 475 && mouseX < 515 && mouseY > 215 && mouseY < 255) {
      if (speedPurchases === 0) {
        if (breadCount >= 5) {
          breadCount -= 5;
          pigeons[0].speed += 3;
          speedPurchases++;
          c = 2;
          console.log("Speed +3 purchased!" + (3 - speedPurchases));
        } else {
          console.log("Not enought Bread $!");
        }
      } else if (speedPurchases === 1) {
        if (breadCount >= 5) {
          breadCount -= 5;
          pigeons[0].speed += 3;
          speedPurchases++;
          c2 = 2;
          console.log("Speed +3 purchased!" + (3 - speedPurchases));
        } else {
          console.log("Not enought Bread $!");
        }
      } else if (speedPurchases === 2) {
        if (breadCount >= 5) {
          breadCount -= 5;
          pigeons[0].speed += 3;
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
      if (breadCount >= 2) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c4 = 2;
          pigeonPurchases++;
          breadCount -= 2;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 1) {
      if (breadCount >= 2) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c5 = 2;
          pigeonPurchases++;
          breadCount -= 2;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 2) {
      if (breadCount >= 2) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c6 = 2;
          pigeonPurchases++;
          breadCount -= 2;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 3) {
      if (breadCount >= 2) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c7 = 2;
          pigeonPurchases++;
          breadCount -= 2;
          console.log("Pigeon +1 purchased!");
        } else {
          console.log("Not enough bread$!");
        }
      }
    } else if (pigeonPurchases === 4) {
      if (breadCount >= 2) {
        if (pigeons.length > 0) {
          const lastPigeon = pigeons[pigeons.length - 1];
          const newPigeon = new PixelPigeon(lastPigeon.x + 40, lastPigeon.y, 2);
          pigeons.push(newPigeon);
          c8 = 2;
          pigeonPurchases++;
          breadCount -= 2;
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
      if (breadCount >= 6) {
        let addedSeconds = 0;
        breadCount -= 6;
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

// if (state === "start") {
//   console.log("Start clicked");
//   state = "game";
// } else if (state === "game") {
//   state = "result";

// } else if (state === "result") {
//   console.log("again cliked");
//   state = "game";
// }

window.mousePressed = mousePressed;

function showPopup() {
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
  if (c === 1) fill("#fcefb4");
  if (c === 2) fill("#710000");
  rect(275, 200, 60, 70);
  pop();

  push();
  if (c2 === 1) fill("#fcefb4");
  if (c2 === 2) fill("#710000");
  rect(335, 200, 60, 70);
  pop();

  push();
  if (c3 === 1) fill("#fcefb4");
  if (c3 === 2) fill("#710000");
  rect(395, 200, 60, 70);
  pop();

  push();
  //pigeon boost rectangles
  if (c4 === 1) fill("#fcefb4");
  if (c4 === 2) fill("#710000");
  rect(275, 350, 36, 70);
  pop();

  push();
  if (c5 === 1) fill("#fcefb4");
  if (c5 === 2) fill("#710000");
  rect(311, 350, 36, 70);
  pop();

  push();
  if (c6 === 1) fill("#fcefb4");
  if (c6 === 2) fill("#710000");
  rect(347, 350, 36, 70);
  pop();

  push();
  if (c7 === 1) fill("#fcefb4");
  if (c7 === 2) fill("#710000");
  rect(383, 350, 36, 70);
  pop();

  push();
  if (c8 === 1) fill("#fcefb4");
  if (c8 === 2) fill("#710000");
  rect(419, 350, 36, 70);
  pop();

  push();
  if (c9 === 1) fill("#fcefb4");
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
  text("$15", 482, 390);
  text("$35", 482, 540);
  pop();
}

window.showPopup = showPopup;
