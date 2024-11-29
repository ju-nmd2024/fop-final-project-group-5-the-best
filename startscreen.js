// start text
let q = 80;
let z = 100;
let speed = 2;

function StartScreen() {
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

function draw() {
  startScreen();
}

// function mouseClicked() {
//     if (dist(mouseX, mouseY, x + 100, y + 60) < s/2) {
//       console.log("again");
//     }
//   }
