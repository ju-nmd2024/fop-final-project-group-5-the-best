function setup() {
  createCanvas(800, 800);
  noLoop();
}

let x = 80;
let y = 80;
let pixelSize = 4;
let s = 1;
let plazaSize = 12;
let grassX = 1;
let grassY = 1;
let pathX = 75;
let pathY = 75;
let grassSize = 20;
let ts = 20;

// pigeon
let pigeon = {
  x: 670,
  y: 630,
  Speed: 5,
  size: 0.4,
};

let scaleFactor = 0;

//grass texture loop
let spacing = 80;

let gameTimer = 0;

function bread(x, y, s) {
  push();
  scale(s);
  noStroke();

  fill("#45301f");
  //Outline
  rect(x, y, 10, 30);
  rect(x + 10, y + 30, 10, 10);
  rect(x + 20, y + 40, 20, 10);
  rect(x + 40, y + 50, 60, 10);
  rect(x + 100, y + 40, 30, 10);
  rect(x + 130, y + 30, 20, 10);
  rect(x + 150, y + 20, 20, 10);
  rect(x + 170, y + 10, 20, 10);
  rect(x + 190, y, 20, 10);
  rect(x + 210, y - 10, 10, 10);
  rect(x + 220, y - 20, 10, 10);
  rect(x + 230, y - 30, 10, 10);
  rect(x + 240, y - 60, 10, 30);
  rect(x + 230, y - 80, 10, 20);
  rect(x + 220, y - 90, 10, 10);
  rect(x + 200, y - 100, 20, 10);
  rect(x + 170, y - 110, 30, 10);
  rect(x + 140, y - 100, 30, 10);
  rect(x + 110, y - 90, 30, 10);
  rect(x + 100, y - 80, 10, 10);
  rect(x + 70, y - 70, 30, 10);
  rect(x + 60, y - 60, 10, 10);
  rect(x + 40, y - 50, 20, 10);
  rect(x + 30, y - 40, 10, 10);
  rect(x + 20, y - 30, 10, 10);
  rect(x + 10, y - 20, 10, 20);

  //base
  fill("#d46e1a");
  rect(x + 50, y - 40, 50, 50);
  rect(x + 80, y - 50, 40, 50);
  rect(x + 120, y - 70, 30, 60);
  rect(x + 150, y - 90, 10, 70);
  rect(x + 140, y - 90, 40, 60);
  rect(x + 180, y - 100, 20, 60);
  rect(x + 200, y - 90, 10, 40);
  rect(x + 210, y - 90, 10, 30);

  //darker part inside
  fill("#88430c"); //7f4f24
  rect(x + 20, y - 20, 10, 20);
  rect(x + 30, y - 30, 10, 20);
  rect(x + 30, y, 10, 10);
  rect(x + 40, y - 40, 10, 10);
  rect(x + 70, y - 60, 10, 10);
  rect(x + 110, y - 80, 10, 10);

  fill("#b65b26"); //936639
  rect(x + 30, y - 10, 10, 10);
  rect(x + 40, y - 30, 10, 40);
  rect(x + 50, y, 10, 10);
  rect(x + 50, y - 40, 10, 10);
  rect(x + 60, y - 30, 20, 10);
  rect(x + 80, y - 60, 30, 10);
  rect(x + 70, y - 50, 10, 10);
  rect(x + 80, y - 40, 10, 10);
  rect(x + 120, y - 80, 20, 10);
  rect(x + 120, y - 70, 10, 10);
  rect(x + 120, y - 50, 10, 10);
  rect(x + 150, y - 70, 20, 10);
  rect(x + 160, y - 90, 10, 10);
  rect(x + 170, y - 100, 10, 10);

  fill("#bf641d");

  //cuts
  fill("#fdc16d");
  rect(x + 70, y - 40, 10, 10);
  rect(x + 80, y - 30, 20, 10);
  rect(x + 100, y - 20, 10, 10);

  rect(x + 100, y - 60, 30, 10);
  rect(x + 130, y - 50, 20, 10);

  rect(x + 140, y - 90, 20, 10);
  rect(x + 140, y - 80, 20, 10);
  rect(x + 150, y - 80, 20, 10);
  rect(x + 170, y - 70, 20, 10);

  //cuts shadows
  fill("#feab5b");
  rect(x + 60, y - 50, 10, 20);
  rect(x + 50, y - 40, 10, 10);
  rect(x + 70, y - 30, 10, 10);

  rect(x + 100, y - 70, 20, 10);
  rect(x + 90, y - 60, 10, 10);
  rect(x + 120, y - 50, 10, 10);
  rect(x + 150, y - 40, 10, 10);

  rect(x + 130, y - 80, 10, 10);
  rect(x + 140, y - 90, 10, 10);
  rect(x + 160, y - 70, 10, 10);
  rect(x + 190, y - 60, 10, 10);

  //lighter part inside

  fill("#ef9e4f");
  rect(x + 40, y + 10, 60, 40);
  rect(x + 30, y + 30, 10, 10);
  rect(x + 100, y + 10, 10, 10);
  rect(x + 110, y, 30, 10);
  rect(x + 140, y - 10, 20, 10);
  rect(x + 160, y - 20, 20, 10);
  rect(x + 170, y - 30, 20, 10);
  rect(x + 190, y - 40, 10, 10);
  rect(x + 210, y - 50, 10, 10);
  rect(x + 220, y - 60, 10, 10);

  fill("#d98636");
  rect(x + 10, y + 10, 40, 20);
  rect(x + 50, y + 10, 20, 10);
  rect(x + 20, y + 30, 10, 10);
  rect(x + 100, y, 10, 10);
  rect(x + 120, y - 10, 20, 10);
  rect(x + 150, y - 20, 10, 10);
  rect(x + 160, y - 30, 10, 10);
  rect(x + 180, y - 40, 10, 10);
  rect(x + 200, y - 50, 10, 10);
  rect(x + 210, y - 60, 10, 10);
  rect(x + 220, y - 80, 10, 20);

  fill("#c47c28");
  rect(x + 10, y, 20, 20);
  rect(x + 10, y + 10, 30, 10);
  rect(x + 20, y + 20, 10, 10);

  fill("#ffaf5f");
  rect(x + 60, y + 40, 40, 10);
  rect(x + 80, y + 30, 50, 10);
  rect(x + 90, y + 20, 60, 10);
  rect(x + 110, y + 10, 60, 10);
  rect(x + 140, y, 50, 10);
  rect(x + 160, y - 10, 50, 10);
  rect(x + 180, y - 20, 40, 10);
  rect(x + 190, y - 30, 40, 10);
  rect(x + 190, y - 30, 40, 10);
  rect(x + 200, y - 40, 40, 10);
  rect(x + 230, y - 60, 10, 10);

  fill("#fdc070");
  rect(x + 80, y + 40, 20, 10);
  rect(x + 90, y + 30, 30, 10);
  rect(x + 110, y + 20, 30, 10);
  rect(x + 130, y + 10, 30, 10);
  rect(x + 150, y, 30, 10);
  rect(x + 170, y - 10, 30, 10);
  rect(x + 190, y - 20, 20, 10);
  rect(x + 200, y - 30, 20, 10);
  rect(x + 210, y - 40, 20, 10);
  rect(x + 220, y - 50, 20, 10);
  pop();
}
function tree(x, y, s) {
  push();
  scale(s);
  noStroke();
  //outline
  fill("#565d60");
  rect(x, y, 10, 20);
  rect(x + 10, y + 20, 10, 10);
  rect(x + 20, y + 30, 10, 20);
  rect(x + 10, y + 50, 10, 10);
  rect(x, y + 60, 10, 30);
  rect(x + 10, y + 90, 10, 10);
  rect(x + 20, y + 100, 20, 10);
  rect(x + 30, y + 110, 10, 10);
  rect(x + 40, y + 120, 20, 10);
  rect(x + 40, y + 130, 10, 20);
  rect(x + 50, y + 150, 20, 10);
  rect(x + 70, y + 160, 30, 10);
  rect(x + 100, y + 150, 20, 10);
  rect(x + 120, y + 160, 10, 40);
  rect(x + 110, y + 200, 10, 20);
  rect(x + 100, y + 220, 10, 10);
  rect(x + 90, y + 230, 10, 10);

  rect(x + 200, y + 230, 10, 10);
  rect(x + 190, y + 220, 10, 10);
  rect(x + 180, y + 210, 10, 10);
  rect(x + 170, y + 200, 10, 10);
  rect(x + 180, y + 160, 10, 40);
  rect(x + 170, y + 150, 10, 10);
  rect(x + 190, y + 160, 30, 10);
  rect(x + 220, y + 150, 30, 10);
  rect(x + 220, y + 150, 30, 10);
  rect(x + 250, y + 130, 10, 20);
  rect(x + 240, y + 120, 20, 10);
  rect(x + 260, y + 110, 10, 10);
  rect(x + 270, y + 100, 10, 10);
  rect(x + 280, y + 80, 10, 20);
  rect(x + 290, y + 60, 10, 20);
  rect(x + 280, y + 50, 10, 10);
  rect(x + 270, y + 40, 10, 10);
  rect(x + 280, y + 20, 10, 20);
  rect(x + 290, y, 10, 20);
  rect(x + 280, y - 20, 10, 20);
  rect(x + 270, y - 30, 10, 10);
  rect(x + 240, y - 40, 30, 10);
  rect(x + 210, y - 50, 30, 10);
  rect(x + 190, y - 60, 20, 10);
  rect(x + 170, y - 70, 20, 10);
  rect(x + 110, y - 80, 60, 10);
  rect(x + 90, y - 70, 20, 10);
  rect(x + 70, y - 60, 20, 10);
  rect(x + 60, y - 50, 10, 10);
  rect(x + 50, y - 40, 20, 10);
  rect(x + 30, y - 30, 20, 10);
  rect(x + 20, y - 20, 10, 10);
  rect(x + 10, y - 10, 10, 10);

  //darker part of tree
  fill("#2f6d68"); //main shade/almost darkest
  rect(x + 30, y - 20, 240, 120);
  rect(x + 60, y + 100, 180, 50);
  rect(x + 10, y + 10, 10, 10);
  rect(x + 20, y + 20, 10, 10);
  rect(x + 10, y + 60, 10, 20);
  rect(x + 20, y + 80, 10, 10);
  rect(x + 50, y + 100, 10, 20);
  rect(x + 270, y + 20, 10, 20);
  rect(x + 280, y + 10, 10, 10);
  rect(x + 240, y + 100, 20, 20);

  fill("#303e47"); //darkest shade
  rect(x + 10, y + 80, 10, 10);
  rect(x + 20, y + 90, 40, 10);
  rect(x + 50, y + 80, 20, 10);
  rect(x + 40, y + 100, 10, 20);
  rect(x + 50, y + 130, 10, 20);
  rect(x + 60, y + 120, 10, 10);
  rect(x + 60, y + 140, 130, 10);
  rect(x + 70, y + 150, 30, 10);
  rect(x + 100, y + 130, 90, 10);
  rect(x + 100, y + 120, 30, 10);
  rect(x + 80, y + 110, 30, 10);
  rect(x + 190, y + 120, 10, 10);
  rect(x + 180, y + 150, 40, 10);
  rect(x + 220, y + 140, 30, 10);
  rect(x + 240, y + 130, 10, 10);
  rect(x + 230, y + 120, 10, 10);
  rect(x + 250, y + 110, 10, 10);
  rect(x + 260, y + 100, 10, 10);
  rect(x + 270, y + 80, 10, 20);
  rect(x + 280, y + 70, 10, 10);
  rect(x + 240, y + 70, 30, 10);
  rect(x + 220, y + 60, 20, 10);
  rect(x + 210, y + 50, 10, 10);
  rect(x + 210, y + 100, 20, 10);
  rect(x + 150, y + 100, 40, 10);
  rect(x + 170, y + 110, 10, 10);
  rect(x + 130, y + 90, 30, 10);
  rect(x + 100, y + 80, 20, 10);
  rect(x + 90, y + 70, 10, 10);
  rect(x + 80, y + 60, 10, 10);
  rect(x + 120, y + 70, 10, 10);
  rect(x + 140, y + 60, 10, 10);

  //lightest green/yellow
  fill("#a9c74b");
  rect(x + 70, y - 50, 140, 30);
  rect(x + 90, y - 60, 100, 10);
  rect(x + 110, y - 70, 60, 10);
  rect(x + 50, y - 30, 20, 10);
  rect(x + 30, y - 20, 70, 20);
  rect(x + 20, y - 10, 10, 10);
  rect(x + 210, y - 40, 30, 20);
  rect(x + 140, y - 30, 130, 30);
  rect(x + 130, y, 70, 10);
  rect(x + 210, y, 10, 10);
  rect(x + 270, y - 20, 10, 10);

  rect(x + 230, y + 40, 40, 10);
  rect(x + 250, y + 50, 30, 10);

  rect(x + 180, y + 70, 30, 10);
  rect(x + 190, y + 80, 30, 10);

  rect(x + 100, y + 90, 30, 10);
  rect(x + 120, y + 100, 30, 10);

  rect(x + 110, y + 50, 30, 10);
  rect(x + 100, y + 40, 30, 10);

  rect(x + 30, y + 50, 30, 10);
  rect(x + 40, y + 60, 30, 10);

  //green green
  fill("#47ab51");
  rect(x + 20, y + 50, 10, 30);
  rect(x + 30, y + 60, 10, 30);
  rect(x + 40, y + 70, 10, 20);
  rect(x + 50, y + 70, 30, 10);
  rect(x + 30, y + 40, 20, 10);

  rect(x + 80, y + 90, 20, 10);
  rect(x + 70, y + 100, 50, 10);
  rect(x + 110, y + 110, 60, 10);

  rect(x + 190, y + 100, 20, 10);
  rect(x + 160, y + 90, 80, 10);
  rect(x + 140, y + 80, 50, 10);
  rect(x + 150, y + 70, 30, 10);

  rect(x + 100, y + 70, 20, 10);
  rect(x + 90, y + 60, 50, 10);
  rect(x + 80, y + 50, 30, 10);
  rect(x + 140, y + 50, 20, 10);
  rect(x + 90, y + 30, 10, 20);
  rect(x + 100, y + 20, 20, 20);

  rect(x + 200, y + 40, 30, 10);
  rect(x + 220, y + 50, 30, 10);
  rect(x + 240, y + 60, 50, 10);
  rect(x + 270, y + 70, 10, 10);

  rect(x + 210, y + 10, 70, 10);
  rect(x + 220, y, 70, 10);
  rect(x + 240, y - 10, 40, 10);

  rect(x + 190, y - 10, 30, 10);
  rect(x + 180, y - 20, 50, 10);
  rect(x + 190, y - 30, 10, 10);

  rect(x + 160, y, 30, 10);
  rect(x + 130, y + 10, 60, 10);
  rect(x + 140, y + 20, 40, 10);
  rect(x + 120, y, 10, 10);

  rect(x + 140, y - 20, 10, 10);
  rect(x + 160, y - 30, 10, 10);
  rect(x + 150, y - 40, 30, 10);
  rect(x + 130, y - 50, 20, 10);

  rect(x + 70, y - 30, 60, 10);
  rect(x + 80, y - 20, 50, 10);
  rect(x + 100, y - 10, 10, 10);

  rect(x + 30, y - 10, 30, 10);
  rect(x + 10, y, 90, 10);
  rect(x + 20, y + 10, 60, 10);
  rect(x + 40, y + 20, 30, 10);

  //trunk
  fill("#8b4029");
  rect(x + 130, y + 160, 40, 80);
  rect(x + 120, y + 200, 10, 30);
  rect(x + 190, y + 230, 10, 10);
  rect(x + 170, y + 170, 10, 10);
  rect(x + 120, y + 150, 10, 10);

  fill("#6f272a");
  rect(x + 110, y + 230, 10, 10);
  rect(x + 170, y + 220, 20, 20);
  rect(x + 160, y + 200, 10, 10);
  rect(x + 150, y + 210, 10, 10);
  rect(x + 170, y + 180, 10, 20);
  rect(x + 150, y + 180, 10, 10);
  rect(x + 130, y + 170, 10, 10);
  rect(x + 140, y + 140, 30, 30);
  rect(x + 170, y + 160, 10, 10);
  rect(x + 120, y + 140, 10, 10);

  fill("#c77649");
  rect(x + 100, y + 230, 10, 10);
  rect(x + 110, y + 220, 10, 10);
  rect(x + 140, y + 210, 10, 10);
  rect(x + 150, y + 220, 10, 10);
  rect(x + 170, y + 210, 10, 10);
  rect(x + 180, y + 220, 10, 10);
  rect(x + 130, y + 150, 10, 10);
  rect(x + 140, y + 160, 10, 10);

  fill("#3b1a2f");
  rect(x + 120, y + 230, 20, 10);
  rect(x + 130, y + 220, 10, 10);
  rect(x + 160, y + 220, 10, 10);
  rect(x + 170, y + 230, 10, 10);
  rect(x + 130, y + 180, 20, 10);
  rect(x + 130, y + 190, 10, 10);
  rect(x + 160, y + 160, 10, 10);
  rect(x + 150, y + 150, 20, 10);
  rect(x + 130, y + 140, 30, 10);
  rect(x + 110, y + 130, 20, 10);
  rect(x + 160, y + 130, 20, 10);
  rect(x + 180, y + 120, 10, 10);
  pop();
}

function Poop(x, y, s) {
  push();
  translate(10, 10);
  scale(s);
  push();
  push();
  // color
  fill(89, 74, 50);
  noStroke();
  rect(x + 28, y, pixelSize, pixelSize + 35);
  rect(x + 23, y + 6, pixelSize + 9, pixelSize + 30);
  rect(x + 35, y + 10, pixelSize, pixelSize + 2);
  rect(x + 18, y + 10, pixelSize + 13, pixelSize + 20);
  rect(x + 14, y + 16, pixelSize + 27, pixelSize + 2);
  rect(x + 10, y + 20, pixelSize + 35, pixelSize + 15);
  rect(x + 6, y + 25, pixelSize + 43, pixelSize + 10);
  rect(x + 5, y + 26, pixelSize, pixelSize + 10);

  pop();

  // outline
  push();
  fill(0, 0, 0);
  rect(x + 28, y, pixelSize, pixelSize + 2);
  rect(x + 23, y + 6, pixelSize, pixelSize);
  rect(x + 33, y + 6, pixelSize, pixelSize);
  rect(x + 18, y + 10, pixelSize, pixelSize);
  rect(x + 37, y + 10, pixelSize, pixelSize);
  rect(x + 14, y + 15, pixelSize, pixelSize);
  rect(x + 41, y + 15, pixelSize, pixelSize);
  rect(x + 10, y + 19, pixelSize, pixelSize);
  rect(x + 45, y + 19, pixelSize, pixelSize);
  rect(x + 6, y + 24, pixelSize, pixelSize);
  rect(x + 49, y + 24, pixelSize, pixelSize);
  rect(x + 2, y + 27, pixelSize - 1, pixelSize + 8);
  rect(x + 53, y + 27, pixelSize - 1, pixelSize + 8);
  rect(x + 2, y + 39, pixelSize + 50, pixelSize - 1);

  // oitline lines
  rect(x + 13, y + 22, pixelSize + 10, pixelSize - 2);
  rect(x + 28, y + 14, pixelSize + 10, pixelSize - 2);
  rect(x + 28, y + 32, pixelSize + 13, pixelSize - 2);

  pop();
  pop();
}

function Pigeon(x, y, s) {
  push();

  scale(s);
  // scale(s);
  // body color
  push();
  fill(130, 130, 130);
  noStroke();
  rect(x, y - 40, pixelSize + 19, pixelSize + 130);
  rect(x - 6, y - 39, pixelSize + 10, pixelSize + 30);
  rect(x + 22, y - 36, pixelSize + 3, pixelSize + 136);
  rect(x + 28, y - 28, pixelSize, pixelSize + 130);
  rect(x - 6, y + 2, pixelSize + 72, pixelSize + 90);
  rect(x + 52, y + 11, pixelSize, pixelSize);
  rect(x - 14, y + 2, pixelSize, pixelSize + 72);
  rect(x - 12, y + 7, pixelSize + 4, pixelSize + 72);
  rect(x - 21, y + 11, pixelSize + 5, pixelSize + 62);
  rect(x - 29, y + 29, pixelSize + 20, pixelSize + 20);
  rect(x - 25, y + 24, pixelSize + 2, pixelSize + 40);
  rect(x + 30, y - 23, pixelSize + 9, pixelSize + 25);
  rect(x + 40, y - 20, pixelSize + 1, pixelSize + 20);
  rect(x + 45, y - 6, pixelSize + 10, pixelSize + 10);
  rect(x - 10, y + 83, pixelSize + 120, pixelSize + 1);
  rect(x + 11, y + 75, pixelSize + 90, pixelSize + 20);
  rect(x + 18, y + 95, pixelSize + 68, pixelSize + 6);
  rect(x + 34, y + 100, pixelSize + 40, pixelSize + 4);
  rect(x + 103, y + 78, pixelSize + 10, pixelSize + 12);
  rect(x + 68, y + 70, pixelSize + 8, pixelSize + 10);
  rect(x + 48, y - 16, pixelSize, pixelSize + 10);
  rect(x + 44, y - 16, pixelSize + 1, pixelSize + 8);
  rect(x + 56, y - 2, pixelSize + 4, pixelSize);

  pop();

  // wing

  push();
  noStroke();
  fill(215, 210, 210);
  rect(x + 45, y + 25, pixelSize + 56, pixelSize + 30);
  rect(x + 63, y + 3, pixelSize + 5, pixelSize + 63);
  rect(x + 60, y + 5, pixelSize + 2, pixelSize + 57);
  rect(x + 56, y + 11, pixelSize + 20, pixelSize + 48);
  rect(x + 90, y + 59, pixelSize + 30, pixelSize + 15);
  rect(x + 53, y + 11, pixelSize + 2, pixelSize + 30);
  rect(x + 48, y + 20, pixelSize + 1, pixelSize + 1);
  rect(x + 69, y + 7, pixelSize + 7, pixelSize);
  rect(x + 79, y + 13, pixelSize + 6, pixelSize + 55);
  rect(x + 88, y + 18, pixelSize + 8, pixelSize + 50);
  rect(x + 41, y + 33, pixelSize + 2, pixelSize + 15);
  rect(x + 53, y + 59, pixelSize + 2, pixelSize);
  rect(x + 58, y + 63, pixelSize + 2, pixelSize);
  rect(x + 70, y + 63, pixelSize + 6, pixelSize + 2);
  rect(x + 103, y + 32, pixelSize + 2, pixelSize + 25);
  rect(x + 108, y + 42, pixelSize + 2, pixelSize + 30);
  rect(x + 113, y + 42, pixelSize + 2, pixelSize + 30);
  rect(x + 124, y + 67, pixelSize + 2, pixelSize + 6);
  rect(x + 125, y + 73, pixelSize + 4, pixelSize + 1);
  pop();

  // tail + mouth + wing strips
  push();
  noStroke();
  fill(60, 60, 60);
  // tail
  rect(x + 116, y + 82, pixelSize + 22, pixelSize + 10);
  rect(x + 141, y + 87, pixelSize + 2, pixelSize + 7);
  rect(x + 146, y + 90, pixelSize + 4, pixelSize + 2);
  rect(x + 152, y + 94, pixelSize + 6, pixelSize);
  rect(x + 111, y + 84, pixelSize + 2, pixelSize);
  rect(x + 111, y + 89, pixelSize + 2, pixelSize);

  // mouth
  rect(x - 11, y - 8, pixelSize + 2, pixelSize + 6);

  // strips
  rect(x + 110, y + 42, pixelSize + 2, pixelSize + 5);
  rect(x + 107, y + 47, pixelSize + 2, pixelSize + 2);
  rect(x + 102, y + 50, pixelSize + 2, pixelSize + 2);
  rect(x + 98, y + 54, pixelSize + 2, pixelSize + 2);
  rect(x + 94, y + 58, pixelSize + 2, pixelSize + 2);
  rect(x + 90, y + 62, pixelSize + 2, pixelSize + 2);
  rect(x + 86, y + 66, pixelSize + 2, pixelSize + 2);

  rect(x + 120, y + 58, pixelSize + 2, pixelSize + 5);
  rect(x + 117, y + 64, pixelSize + 2, pixelSize + 2);
  rect(x + 112, y + 67, pixelSize + 2, pixelSize + 2);
  rect(x + 107, y + 71, pixelSize + 2, pixelSize + 2);

  pop();

  // face
  push();
  noStroke();
  fill(200, 0, 0);
  rect(x + 8, y - 23, pixelSize, pixelSize + 4);
  pop();

  // legs
  push();

  noStroke();
  fill(210, 0, 30);
  rect(x + 67, y + 112, pixelSize + 2, pixelSize + 15);
  rect(x + 63, y + 130, pixelSize + 10, pixelSize + 2);
  rect(x + 50, y + 112, pixelSize + 2, pixelSize + 15);
  rect(x + 45, y + 130, pixelSize + 10, pixelSize + 2);

  pop();

  // outline
  // back
  stroke(58, 48, 28);
  fill(58, 48, 28);
  rect(x, y - 40, pixelSize + 21, pixelSize);
  rect(x + 25, y - 36, pixelSize, pixelSize);
  rect(x + 28, y - 32, pixelSize, pixelSize);
  rect(x + 32, y - 27, pixelSize, pixelSize);
  rect(x + 37, y - 24, pixelSize + 2, pixelSize);
  rect(x + 44, y - 20, pixelSize, pixelSize);
  rect(x + 48, y - 15, pixelSize, pixelSize);
  rect(x + 52, y - 10, pixelSize + 2, pixelSize);
  rect(x + 58, y - 6, pixelSize + 2, pixelSize);
  rect(x + 64, y - 1, pixelSize + 4, pixelSize);
  rect(x + 72, y + 4, pixelSize + 4, pixelSize);
  rect(x + 80, y + 9, pixelSize + 4, pixelSize);
  rect(x + 88, y + 14, pixelSize + 4, pixelSize);
  rect(x + 96, y + 19, pixelSize, pixelSize);
  rect(x + 100, y + 24, pixelSize, pixelSize);
  rect(x + 104, y + 29, pixelSize, pixelSize);
  rect(x + 109, y + 33, pixelSize, pixelSize + 5);
  rect(x + 114, y + 42, pixelSize, pixelSize + 5);
  rect(x + 119, y + 50, pixelSize, pixelSize + 5);
  rect(x + 124, y + 58, pixelSize, pixelSize + 5);
  rect(x + 128, y + 68, pixelSize, pixelSize);
  rect(x + 132, y + 73, pixelSize, pixelSize);
  rect(x + 136, y + 78, pixelSize + 2, pixelSize);
  rect(x + 142, y + 83, pixelSize, pixelSize);
  rect(x + 147, y + 87, pixelSize + 2, pixelSize);
  rect(x + 154, y + 90, pixelSize + 4, pixelSize);
  rect(x + 161, y + 94, pixelSize, pixelSize);
  rect(x + 60, y + 2, pixelSize, pixelSize);
  rect(x + 56, y + 6, pixelSize, pixelSize);
  rect(x + 52, y + 11, pixelSize, pixelSize);
  rect(x + 48, y + 16, pixelSize, pixelSize);
  rect(x + 44, y + 20, pixelSize, pixelSize);
  rect(x + 40, y + 24, pixelSize, pixelSize + 4);
  rect(x + 112, y + 78, pixelSize + 20, pixelSize);
  rect(x + 90, y + 75, pixelSize + 20, pixelSize);
  rect(x + 80, y + 71, pixelSize + 6, pixelSize);
  rect(x + 73, y + 68, pixelSize + 2, pixelSize);

  // front
  rect(x - 5, y - 38, pixelSize, pixelSize);
  rect(x - 10, y - 35, pixelSize, pixelSize + 19);
  rect(x - 15, y - 13, pixelSize, pixelSize + 11);
  rect(x - 10, y + 2, pixelSize, pixelSize + 1);
  rect(x - 5, y - 2, pixelSize, pixelSize);
  rect(x - 18, y + 3, pixelSize, pixelSize + 4);
  rect(x - 22, y + 11, pixelSize, pixelSize);
  rect(x - 25, y + 16, pixelSize, pixelSize + 4);
  rect(x - 29, y + 25, pixelSize, pixelSize);
  rect(x - 33, y + 30, pixelSize, pixelSize + 11);
  rect(x - 28, y + 45, pixelSize, pixelSize + 8);
  rect(x - 24, y + 58, pixelSize, pixelSize + 5);
  rect(x - 20, y + 68, pixelSize, pixelSize + 4);
  rect(x - 15, y + 76, pixelSize, pixelSize);
  rect(x - 11, y + 80, pixelSize, pixelSize + 3);
  rect(x - 7, y + 88, pixelSize, pixelSize + 3);
  rect(x - 3, y + 94, pixelSize + 12, pixelSize);
  rect(x + 12, y + 99, pixelSize + 2, pixelSize);
  rect(x + 18, y + 104, pixelSize + 12, pixelSize);
  rect(x + 34, y + 108, pixelSize + 40, pixelSize);
  rect(x + 77, y + 103, pixelSize + 10, pixelSize);
  rect(x + 90, y + 98, pixelSize + 10, pixelSize);
  rect(x + 102, y + 93, pixelSize + 10, pixelSize);
  rect(x + 116, y + 96, pixelSize + 40, pixelSize);
  pop();
}

function gameScreen() {
  background(117, 157, 93);

  push();

  pop();

  push();
  fill(207, 203, 126);
  noStroke();

  ellipse(400, 400, 350);
  rect(0, 350, 800, 100);
  rect(350, 0, 100, 800);

  // middle
  fill(70, 255, 255);
  ellipse(400, 400, 150);
  pop();

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

  // pigeon
  push();

  Pigeon(pigeon.x, pigeon.y, pigeon.size);
  pop();

  if (keyIsDown(65)) {
    // A key
    pigeon.x -= pigeon.Speed;
  }
  if (keyIsDown(68)) {
    // D key
    pigeon.x += pigeon.Speed;
  }
  if (keyIsDown(87)) {
    // W key
    pigeon.y -= pigeon.Speed;
  }
  if (keyIsDown(83)) {
    // S key
    pigeon.y += pigeon.Speed;
  }
  // count
  push();
  fill(255, 255, 255);
  noStroke();
  rect(0, 0, 200, 50);

  // timer
  rect(700, 0, 110, 50);
  fill(0, 0, 0);
  textFont("monospace");
  textSize(ts + 10);
  text("3:00", 720, 35);
  pop();
}

function startScreen() {
  push();
  background(0, 0, 255);
  pop();
}

function endScreen() {
  push();
  background(0, 255, 0);
  pop();
}

let state = "game";
function draw() {
  gameScreen();

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
}

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
