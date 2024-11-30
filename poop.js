const size = 15;

let data = [
  [0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 8, 1, 5, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 1, 2, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 5, 7, 1, 5, 1, 4, 0, 0, 0, 0, 0],
  [0, 0, 4, 8, 1, 9, 7, 7, 1, 1, 4, 4, 0, 0, 0],
  [0, 4, 1, 5, 7, 8, 9, 6, 7, 7, 1, 8, 4, 0, 0],
  [4, 1, 8, 6, 6, 7, 7, 9, 6, 7, 7, 8, 4, 0, 0],
  [4, 9, 1, 8, 8, 6, 6, 7, 1, 6, 7, 5, 1, 4, 0],
  [4, 1, 9, 1, 1, 1, 5, 6, 7, 8, 1, 1, 2, 4, 0],
  [4, 1, 1, 1, 1, 1, 8, 6, 5, 7, 1, 1, 1, 4, 0],
  [4, 4, 9, 2, 1, 1, 1, 8, 8, 8, 5, 2, 4, 4, 0],
  [0, 4, 4, 9, 9, 2, 1, 1, 1, 1, 2, 4, 4, 0, 0],
  [0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0],
];

function draw() {
  background(255, 255, 255);

  push();
  translate(100, 100);
  for (let y in data) {
    for (let x in data[y]) {
      let pixel = data[y][x];
      if (pixel !== 0) {
        if (pixel === 1) {
          noStroke();
          fill(84, 50, 49);
        } else if (pixel === 2) {
          noStroke();
          fill(121, 79, 55);
        } else if (pixel === 3) {
          noStroke();
          fill(255, 240, 195);
        } else if (pixel === 4) {
          noStroke();
          fill(23, 6, 38);
        } else if (pixel === 5) {
          noStroke();
          fill(124, 76, 58);
        } else if (pixel === 6) {
          noStroke();
          fill(121, 79, 55);
        } else if (pixel === 7) {
          noStroke();
          fill(186, 150, 100);
        } else if (pixel === 8) {
          noStroke();
          fill(85, 46, 36);
        } else if (pixel === 9) {
          noStroke();
          fill(110, 82, 77);
        }
        rect(x * size, y * size, size, size);
      }
    }
  }
  pop();
}
