export default class Bread {
  constructor(x, y, scaleFactor) {
    this.x = x;
    this.y = y;
    this.scaleFactor = scaleFactor;
  }
  draw() {
    translate(this.x, this.y);
    scale(this.scaleFactor);
    noStroke();
    fill("#45301f");
    push();
    //Outline
    rect(this.x, this.y, 10, 30);
    pop();
    rect(this.x + 10, this.y + 30, 10, 10);
    rect(this.x + 20, this.y + 40, 20, 10);
    rect(this.x + 40, this.y + 50, 60, 10);
    rect(this.x + 100, this.y + 40, 30, 10);
    rect(this.x + 130, this.y + 30, 20, 10);
    rect(this.x + 150, this.y + 20, 20, 10);
    rect(this.x + 170, this.y + 10, 20, 10);
    rect(this.x + 190, this.y, 20, 10);
    rect(this.x + 210, this.y - 10, 10, 10);
    rect(this.x + 220, this.y - 20, 10, 10);
    rect(this.x + 230, this.y - 30, 10, 10);
    rect(this.x + 240, this.y - 60, 10, 30);
    rect(this.x + 230, this.y - 80, 10, 20);
    rect(this.x + 220, this.y - 90, 10, 10);
    rect(this.x + 200, this.y - 100, 20, 10);
    rect(this.x + 170, this.y - 110, 30, 10);
    rect(this.x + 140, this.y - 100, 30, 10);
    rect(this.x + 110, this.y - 90, 30, 10);
    rect(this.x + 100, this.y - 80, 10, 10);
    rect(this.x + 70, this.y - 70, 30, 10);
    rect(this.x + 60, this.y - 60, 10, 10);
    rect(this.x + 40, this.y - 50, 20, 10);
    rect(this.x + 30, this.y - 40, 10, 10);
    rect(this.x + 20, this.y - 30, 10, 10);
    rect(this.x + 10, this.y - 20, 10, 20);

    //base
    fill("#d46e1a");
    rect(this.x + 50, this.y - 40, 50, 50);
    rect(this.x + 80, this.y - 50, 40, 50);
    rect(this.x + 120, this.y - 70, 30, 60);
    rect(this.x + 150, this.y - 90, 10, 70);
    rect(this.x + 140, this.y - 90, 40, 60);
    rect(this.x + 180, this.y - 100, 20, 60);
    rect(this.x + 200, this.y - 90, 10, 40);
    rect(this.x + 210, this.y - 90, 10, 30);

    //darker part inside
    fill("#88430c"); //7f4f24
    rect(this.x + 20, this.y - 20, 10, 20);
    rect(this.x + 30, this.y - 30, 10, 20);
    rect(this.x + 30, this.y, 10, 10);
    rect(this.x + 40, this.y - 40, 10, 10);
    rect(this.x + 70, this.y - 60, 10, 10);
    rect(this.x + 110, this.y - 80, 10, 10);

    fill("#b65b26"); //936639
    rect(this.x + 30, this.y - 10, 10, 10);
    rect(this.x + 40, this.y - 30, 10, 40);
    rect(this.x + 50, this.y, 10, 10);
    rect(this.x + 50, this.y - 40, 10, 10);
    rect(this.x + 60, this.y - 30, 20, 10);
    rect(this.x + 80, this.y - 60, 30, 10);
    rect(this.x + 70, this.y - 50, 10, 10);
    rect(this.x + 80, this.y - 40, 10, 10);
    rect(this.x + 120, this.y - 80, 20, 10);
    rect(this.x + 120, this.y - 70, 10, 10);
    rect(this.x + 120, this.y - 50, 10, 10);
    rect(this.x + 150, this.y - 70, 20, 10);
    rect(this.x + 160, this.y - 90, 10, 10);
    rect(this.x + 170, this.y - 100, 10, 10);

    fill("#bf641d");

    //cuts
    fill("#fdc16d");
    rect(this.x + 70, this.y - 40, 10, 10);
    rect(this.x + 80, this.y - 30, 20, 10);
    rect(this.x + 100, this.y - 20, 10, 10);

    rect(this.x + 100, this.y - 60, 30, 10);
    rect(this.x + 130, this.y - 50, 20, 10);

    rect(this.x + 140, this.y - 90, 20, 10);
    rect(this.x + 140, this.y - 80, 20, 10);
    rect(this.x + 150, this.y - 80, 20, 10);
    rect(this.x + 170, this.y - 70, 20, 10);

    //cuts shadows
    fill("#feab5b");
    rect(this.x + 60, this.y - 50, 10, 20);
    rect(this.x + 50, this.y - 40, 10, 10);
    rect(this.x + 70, this.y - 30, 10, 10);

    rect(this.x + 100, this.y - 70, 20, 10);
    rect(this.x + 90, this.y - 60, 10, 10);
    rect(this.x + 120, this.y - 50, 10, 10);
    rect(this.x + 150, this.y - 40, 10, 10);

    rect(this.x + 130, this.y - 80, 10, 10);
    rect(this.x + 140, this.y - 90, 10, 10);
    rect(this.x + 160, this.y - 70, 10, 10);
    rect(this.x + 190, this.y - 60, 10, 10);

    //lighter part inside

    fill("#ef9e4f");
    rect(this.x + 40, this.y + 10, 60, 40);
    rect(this.x + 30, this.y + 30, 10, 10);
    rect(this.x + 100, this.y + 10, 10, 10);
    rect(this.x + 110, this.y, 30, 10);
    rect(this.x + 140, this.y - 10, 20, 10);
    rect(this.x + 160, this.y - 20, 20, 10);
    rect(this.x + 170, this.y - 30, 20, 10);
    rect(this.x + 190, this.y - 40, 10, 10);
    rect(this.x + 210, this.y - 50, 10, 10);
    rect(this.x + 220, this.y - 60, 10, 10);

    fill("#d98636");
    rect(this.x + 10, this.y + 10, 40, 20);
    rect(this.x + 50, this.y + 10, 20, 10);
    rect(this.x + 20, this.y + 30, 10, 10);
    rect(this.x + 100, this.y, 10, 10);
    rect(this.x + 120, this.y - 10, 20, 10);
    rect(this.x + 150, this.y - 20, 10, 10);
    rect(this.x + 160, this.y - 30, 10, 10);
    rect(this.x + 180, this.y - 40, 10, 10);
    rect(this.x + 200, this.y - 50, 10, 10);
    rect(this.x + 210, this.y - 60, 10, 10);
    rect(this.x + 220, this.y - 80, 10, 20);

    fill("#c47c28");
    rect(this.x + 10, this.y, 20, 20);
    rect(this.x + 10, this.y + 10, 30, 10);
    rect(this.x + 20, this.y + 20, 10, 10);

    fill("#ffaf5f");
    rect(this.x + 60, this.y + 40, 40, 10);
    rect(this.x + 80, this.y + 30, 50, 10);
    rect(this.x + 90, this.y + 20, 60, 10);
    rect(this.x + 110, this.y + 10, 60, 10);
    rect(this.x + 140, this.y, 50, 10);
    rect(this.x + 160, this.y - 10, 50, 10);
    rect(this.x + 180, this.y - 20, 40, 10);
    rect(this.x + 190, this.y - 30, 40, 10);
    rect(this.x + 190, this.y - 30, 40, 10);
    rect(this.x + 200, this.y - 40, 40, 10);
    rect(this.x + 230, this.y - 60, 10, 10);

    fill("#fdc070");
    rect(this.x + 80, this.y + 40, 20, 10);
    rect(this.x + 90, this.y + 30, 30, 10);
    rect(this.x + 110, this.y + 20, 30, 10);
    rect(this.x + 130, this.y + 10, 30, 10);
    rect(this.x + 150, this.y, 30, 10);
    rect(this.x + 170, this.y - 10, 30, 10);
    rect(this.x + 190, this.y - 20, 20, 10);
    rect(this.x + 200, this.y - 30, 20, 10);
    rect(this.x + 210, this.y - 40, 20, 10);
    rect(this.x + 220, this.y - 50, 20, 10);
    pop();
  }
}
