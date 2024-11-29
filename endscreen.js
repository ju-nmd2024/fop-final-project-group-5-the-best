let q = 80;
let z = 100;
let speed = 2;

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

function draw() {
  endScreen();
}
