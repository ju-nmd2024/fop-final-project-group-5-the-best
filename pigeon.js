// let storeX = 700;
// let storeY = 70;

export default class Character {
  constructor(x, y, scaleFactor) {
    this.x = x;
    this.y = y;
    this.scaleFactor = scaleFactor;
    this.speed = 10;
  }

  draw() {
    // body color
    push();
    translate(0, 0);
    scale(this.scaleFactor);
    push();
    fill(130, 130, 130);
    noStroke();
    rect(this.x, this.y - 40, 23, 134);
    rect(this.x - 6, this.y - 39, 14, 34);
    rect(this.x + 22, this.y - 36, 7, 140);
    rect(this.x + 28, this.y - 28, 4, 134);
    rect(this.x - 6, this.y - +2, 76, 94);
    rect(this.x + 52, this.y + 11, 4, 4);
    rect(this.x - 14, this.y + 2, 4, 76);
    rect(this.x - 12, this.y + 7, 8, 76);
    rect(this.x - 21, this.y + 11, 9, 66);
    rect(this.x - 29, this.y + 29, 24, 24);
    rect(this.x - 25, this.y + 24, 6, 44);
    rect(this.x + 30, this.y - 23, 13, 29);
    rect(this.x + 40, this.y - 20, 5, 24);
    rect(this.x + 45, this.y - 6, 14, 14);
    rect(this.x - 10, this.y + 83, 124, 5);
    rect(this.x + 11, this.y + 75, 94, 24);
    rect(this.x + 18, this.y + 95, 72, 10);
    rect(this.x + 34, this.y + 100, 44, 8);
    rect(this.x + 103, this.y + 78, 14, 16);
    rect(this.x + 68, this.y + 70, 12, 14);
    rect(this.x + 48, this.y - 16, 4, 14);
    rect(this.x + 44, this.y - 16, 5, 12);
    rect(this.x + 56, this.y - 2, 8, 4);
    pop();

    // wing
    push();
    noStroke();
    fill(215, 210, 210);
    rect(this.x + 45, this.y + 25, 60, 34);
    rect(this.x + 63, this.y + 3, 9, 67);
    rect(this.x + 60, this.y + 5, 6, 61);
    rect(this.x + 56, this.y + 11, 24, 52);
    rect(this.x + 90, this.y + 59, 34, 19);
    rect(this.x + 53, this.y + 11, 6, 34);
    rect(this.x + 48, this.y + 20, 5, 5);
    rect(this.x + 69, this.y + 7, 11, 4);
    rect(this.x + 79, this.y + 13, 10, 59);
    rect(this.x + 88, this.y + 18, 12, 54);
    rect(this.x + 41, this.y + 33, 6, 19);
    rect(this.x + 53, this.y + 59, 6, 4);
    rect(this.x + 58, this.y + 63, 6, 4);
    rect(this.x + 70, this.y + 63, 10, 6);
    rect(this.x + 103, this.y + 32, 6, 29);
    rect(this.x + 108, this.y + 42, 6, 34);
    rect(this.x + 113, this.y + 42, 6, 34);
    rect(this.x + 124, this.y + 67, 6, 10);
    rect(this.x + 125, this.y + 73, 10, 5);
    pop();

    // tail + mouth + wing strips
    push();
    noStroke();
    fill(60, 60, 60);
    // tail
    rect(this.x + 116, this.y + 82, 26, 14);
    rect(this.x + 141, this.y + 87, 6, 11);
    rect(this.x + 146, this.y + 90, 8, 6);
    rect(this.x + 152, this.y + 94, 10, 4);
    rect(this.x + 111, this.y + 84, 6, 4);
    rect(this.x + 111, this.y + 89, 6, 4);
    pop();

    // mouth
    rect(this.x - 11, this.y - 8, 6, 10);

    // strips
    push();
    rect(this.x + 110, this.y + 42, 6, 9);
    rect(this.x + 107, this.y + 47, 6, 6);
    rect(this.x + 102, this.y + 50, 6, 6);
    rect(this.x + 98, this.y + 54, 6, 6);
    rect(this.x + 94, this.y + 58, 6, 6);
    rect(this.x + 90, this.y + 62, 6, 6);
    rect(this.x + 86, this.y + 66, 6, 6);

    rect(this.x + 120, this.y + 58, 6, 9);
    rect(this.x + 117, this.y + 64, 6, 6);
    rect(this.x + 112, this.y + 67, 6, 6);
    rect(this.x + 107, this.y + 71, 6, 6);

    pop();

    // face
    push();
    noStroke();
    fill(200, 0, 0);
    rect(this.x + 8, this.y - 23, 4, 8);
    pop();

    // legs
    push();
    noStroke();
    fill(210, 0, 30);
    rect(this.x + 67, this.y + 112, 6, 19);
    rect(this.x + 63, this.y + 130, 14, 6);
    rect(this.x + 50, this.y + 112, 6, 19);
    rect(this.x + 45, this.y + 130, 14, 6);
    pop();

    // outline
    // back
    stroke(58, 48, 28);
    fill(58, 48, 28);
    rect(this.x, this.y - 40, 25, 4);
    rect(this.x + 25, this.y - 36, 4, 4);
    rect(this.x + 28, this.y - 32, 4, 4);
    rect(this.x + 32, this.y - 27, 4, 4);
    rect(this.x + 37, this.y - 24, 6, 4);
    rect(this.x + 44, this.y - 20, 4, 4);
    rect(this.x + 48, this.y - 15, 4, 4);
    rect(this.x + 52, this.y - 10, 6, 4);
    rect(this.x + 58, this.y - 6, 6, 4);
    rect(this.x + 64, this.y - 1, 8, 4);
    rect(this.x + 72, this.y + 4, 8, 4);
    rect(this.x + 80, this.y + 9, 8, 4);
    rect(this.x + 88, this.y + 14, 8, 4);
    rect(this.x + 96, this.y + 19, 4, 4);
    rect(this.x + 100, this.y + 24, 4, 4);
    rect(this.x + 104, this.y + 29, 4, 4);
    rect(this.x + 109, this.y + 33, 4, 9);
    rect(this.x + 114, this.y + 42, 4, 9);
    rect(this.x + 119, this.y + 50, 4, 9);
    rect(this.x + 124, this.y + 58, 4, 9);
    rect(this.x + 128, this.y + 68, 4, 4);
    rect(this.x + 132, this.y + 73, 4, 4);
    rect(this.x + 136, this.y + 78, 6, 4);
    rect(this.x + 142, this.y + 83, 4, 4);
    rect(this.x + 147, this.y + 87, 6, 4);
    rect(this.x + 154, this.y + 90, 8, 4);
    rect(this.x + 161, this.y + 94, 4, 4);
    rect(this.x + 60, this.y + 2, 4, 4);
    rect(this.x + 56, this.y + 6, 4, 4);
    rect(this.x + 52, this.y + 11, 4, 4);
    rect(this.x + 48, this.y + 16, 4, 4);
    rect(this.x + 44, this.y + 20, 4, 4);
    rect(this.x + 40, this.y + 24, 4, 8);
    rect(this.x + 112, this.y + 78, 24, 4);
    rect(this.x + 90, this.y + 75, 24, 4);
    rect(this.x + 80, this.y + 71, 10, 4);
    rect(this.x + 73, this.y + 68, 6, 4);

    // front
    rect(this.x - 5, this.y - 38, 4, 4);
    rect(this.x - 10, this.y - 35, 4, 23);
    rect(this.x - 15, this.y - 13, 4, 15);
    rect(this.x - 10, this.y + 2, 4, 5);
    rect(this.x - 5, this.y - 2, 4, 4);
    rect(this.x - 18, this.y + 3, 4, 8);
    rect(this.x - 22, this.y + 11, 4, 4);
    rect(this.x - 25, this.y + 16, 4, 8);
    rect(this.x - 29, this.y + 25, 4, 4);
    rect(this.x - 33, this.y + 30, 4, 15);
    rect(this.x - 28, this.y + 45, 4, 12);
    rect(this.x - 24, this.y + 58, 4, 9);
    rect(this.x - 20, this.y + 68, 4, 8);
    rect(this.x - 15, this.y + 76, 4, 4);
    rect(this.x - 11, this.y + 80, 4, 7);
    rect(this.x - 7, this.y + 88, 4, 7);
    rect(this.x - 3, this.y + 94, 16, 4);
    rect(this.x + 12, this.y + 99, 6, 4);
    rect(this.x + 18, this.y + 104, 16, 4);
    rect(this.x + 34, this.y + 108, 44, 4);
    rect(this.x + 77, this.y + 103, 14, 4);
    rect(this.x + 90, this.y + 98, 14, 4);
    rect(this.x + 102, this.y + 93, 14, 4);
    rect(this.x + 116, this.y + 96, 44, 4);
    pop();
  }

  move() {
    if (keyIsDown(65)) {
      // A key
      this.x -= this.speed;
      if (this.x < 0 + 32) {
        this.x = 0 + 32;
      }
      console.log("A pressed");
    }
    if (keyIsDown(68)) {
      // D key
      this.x += this.speed;
      if (this.x > 1900 - 32) {
        this.x = 1900 - 32;
      }
      console.log("D pressed");
    }
    if (keyIsDown(87)) {
      // W key
      this.y -= this.speed;
      if (this.y < 0 + 40) {
        this.y = 0 + 40;
      }
      console.log("W pressed");
    }
    if (keyIsDown(83)) {
      // S key
      this.y += this.speed;
      if (this.y > 1900 - 40) {
        this.y = 1900 - 40;
      }
      console.log("S pressed");
    }
  }

  // store( storeX, storeY, storeW, storeH){
  // let distance = dist(this.x, this.y, storeX, storeY);
  // return distance < 50;
  // }

  setScale(newScale) {
    this.scaleFactor = newScale;
  }
}

function draw() {
  character.draw();
  // if (keyIsDown(65)) {
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
