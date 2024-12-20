export default class Enemy3 {
  constructor(x = 0, y = 0, size = 10, speed = 2) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.leftTurn = -10;
    this.rightTurn = 280;
    this.turnLeft = false;
    this.data = [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 3, 3, 3, 3, 2, 1, 2, 3, 3, 1, 0, 0],
      [0, 0, 1, 3, 4, 4, 4, 3, 3, 2, 1, 2, 3, 4, 1, 0],
      [0, 1, 3, 4, 4, 4, 3, 3, 2, 2, 2, 2, 2, 3, 4, 1],
      [1, 3, 4, 4, 3, 3, 2, 2, 5, 5, 5, 5, 5, 2, 3, 1],
      [1, 4, 3, 3, 2, 2, 5, 5, 6, 6, 6, 6, 6, 5, 2, 1],
      [1, 3, 3, 2, 5, 5, 6, 1, 1, 6, 6, 1, 1, 6, 1, 1],
      [1, 3, 2, 6, 5, 6, 6, 8, 1, 6, 6, 8, 1, 6, 1, 0],
      [1, 3, 2, 6, 5, 6, 7, 8, 1, 7, 7, 8, 1, 7, 1, 0],
      [1, 2, 2, 2, 1, 5, 6, 6, 6, 6, 6, 6, 6, 5, 1, 0],
      [1, 2, 2, 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0],
      [0, 1, 1, 1, 9, 9, 9, 9, 9, 9, 10, 9, 9, 9, 1, 0],
      [0, 0, 1, 9, 9, 9, 9, 9, 9, 9, 10, 9, 9, 9, 9, 0],
      [0, 0, 1, 9, 9, 10, 9, 9, 9, 9, 10, 9, 9, 10, 9, 1],
      [0, 0, 1, 6, 6, 10, 11, 11, 11, 11, 11, 11, 11, 10, 6, 1],
      [0, 0, 0, 1, 1, 10, 9, 9, 9, 11, 9, 11, 9, 10, 1, 0],
      [0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1, 0],
      [0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ];

    this.width = this.data[0].length * this.size;
    this.height = this.data.length * this.size;
  }

  draw() {
    push();
    translate(this.x, this.y);

    if (this.turnLeft) {
      scale(-1, 1);
      translate(-this.width, 0);
    }

    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel !== 0) {
          if (pixel === 1) {
            noStroke();
            fill(88, 41, 59);
          } else if (pixel === 2) {
            noStroke();
            fill(88, 36, 56);
          } else if (pixel === 3) {
            noStroke();
            fill(139, 68, 72);
          } else if (pixel === 4) {
            noStroke();
            fill(193, 120, 85);
          } else if (pixel === 5) {
            noStroke();
            fill(190, 119, 87);
          } else if (pixel === 6) {
            noStroke();
            fill(226, 178, 129);
          } else if (pixel === 7) {
            noStroke();
            fill(248, 205, 160);
          } else if (pixel === 8) {
            noStroke();
            fill(255, 255, 255);
          } else if (pixel === 9) {
            noStroke();
            fill(76, 149, 108);
          } else if (pixel === 10) {
            noStroke();
            fill(44, 110, 73);
          } else if (pixel === 11) {
            noStroke();
            fill(123, 241, 168);
          }

          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }
    pop();
  }

  update() {
    this.x += this.speed;

    if (this.x <= this.leftTurn || this.x >= this.rightTurn) {
      this.speed *= -1;
      this.turnLeft = !this.turnLeft;
    }
  }

  getCollision() {
    // Character enemy collision - https://chatgpt.com/share/675173a2-a7e0-800a-99c1-49bb0cc13b5e
    return {
      x: this.x - this.width / 2,
      y: this.y - this.height / 2,
      width: this.width,
      height: this.height,
    };
  }
}
