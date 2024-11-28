export default class Bread {
  construction(x, y, scaleFactor) {
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
    rect(this.x, y, 10, 30);
    rect(this.x + 10, y + 30, 10, 10);
    rect(this.x + 20, y + 40, 20, 10);
    rect(this.x + 40, y + 50, 60, 10);
    rect(this.x + 100, y + 40, 30, 10);
    rect(this.x + 130, y + 30, 20, 10);
    rect(this.x + 150, y + 20, 20, 10);
    rect(this.x + 170, y + 10, 20, 10);
    rect(this.x + 190, y, 20, 10);
    rect(this.x + 210, y - 10, 10, 10);
    rect(this.x + 220, y - 20, 10, 10);
    rect(this.x + 230, y - 30, 10, 10);
    rect(this.x + 240, y - 60, 10, 30);
    rect(this.x + 230, y - 80, 10, 20);
    rect(this.x + 220, y - 90, 10, 10);
    rect(this.x + 200, y - 100, 20, 10);
    rect(this.x + 170, y - 110, 30, 10);
    rect(this.x + 140, y - 100, 30, 10);
    rect(this.x + 110, y - 90, 30, 10);
    rect(this.x + 100, y - 80, 10, 10);
    rect(this.x + 70, y - 70, 30, 10);
    rect(this.x + 60, y - 60, 10, 10);
    rect(this.x + 40, y - 50, 20, 10);
    rect(this.x + 30, y - 40, 10, 10);
    rect(this.x + 20, y - 30, 10, 10);
    rect(this.x + 10, y - 20, 10, 20);

    //base
    fill("#d46e1a");
    rect(this.x + 50, y - 40, 50, 50);
    rect(this.x + 80, y - 50, 40, 50);
    rect(this.x + 120, y - 70, 30, 60);
    rect(this.x + 150, y - 90, 10, 70);
    rect(this.x + 140, y - 90, 40, 60);
    rect(this.x + 180, y - 100, 20, 60);
    rect(this.x + 200, y - 90, 10, 40);
    rect(this.x + 210, y - 90, 10, 30);

    //darker part inside
    fill("#88430c"); //7f4f24
    rect(this.x + 20, y - 20, 10, 20);
    rect(this.x + 30, y - 30, 10, 20);
    rect(this.x + 30, y, 10, 10);
    rect(this.x + 40, y - 40, 10, 10);
    rect(this.x + 70, y - 60, 10, 10);
    rect(this.x + 110, y - 80, 10, 10);

    fill("#b65b26"); //936639
    rect(this.x + 30, y - 10, 10, 10);
    rect(this.x + 40, y - 30, 10, 40);
    rect(this.x + 50, y, 10, 10);
    rect(this.x + 50, y - 40, 10, 10);
    rect(this.x + 60, y - 30, 20, 10);
    rect(this.x + 80, y - 60, 30, 10);
    rect(this.x + 70, y - 50, 10, 10);
    rect(this.x + 80, y - 40, 10, 10);
    rect(this.x + 120, y - 80, 20, 10);
    rect(this.x + 120, y - 70, 10, 10);
    rect(this.x + 120, y - 50, 10, 10);
    rect(this.x + 150, y - 70, 20, 10);
    rect(this.x + 160, y - 90, 10, 10);
    rect(this.x + 170, y - 100, 10, 10);

    fill("#bf641d");

    //cuts
    fill("#fdc16d");
    rect(this.x + 70, y - 40, 10, 10);
    rect(this.x + 80, y - 30, 20, 10);
    rect(this.x + 100, y - 20, 10, 10);

    rect(this.x + 100, y - 60, 30, 10);
    rect(this.x + 130, y - 50, 20, 10);

    rect(this.x + 140, y - 90, 20, 10);
    rect(this.x + 140, y - 80, 20, 10);
    rect(this.x + 150, y - 80, 20, 10);
    rect(this.x + 170, y - 70, 20, 10);

    //cuts shadows
    fill("#feab5b");
    rect(this.x + 60, y - 50, 10, 20);
    rect(this.x + 50, y - 40, 10, 10);
    rect(this.x + 70, y - 30, 10, 10);

    rect(this.x + 100, y - 70, 20, 10);
    rect(this.x + 90, y - 60, 10, 10);
    rect(this.x + 120, y - 50, 10, 10);
    rect(this.x + 150, y - 40, 10, 10);

    rect(this.x + 130, y - 80, 10, 10);
    rect(this.x + 140, y - 90, 10, 10);
    rect(this.x + 160, y - 70, 10, 10);
    rect(this.x + 190, y - 60, 10, 10);

    //lighter part inside

    fill("#ef9e4f");
    rect(this.x + 40, y + 10, 60, 40);
    rect(this.x + 30, y + 30, 10, 10);
    rect(this.x + 100, y + 10, 10, 10);
    rect(this.x + 110, y, 30, 10);
    rect(this.x + 140, y - 10, 20, 10);
    rect(this.x + 160, y - 20, 20, 10);
    rect(this.x + 170, y - 30, 20, 10);
    rect(this.x + 190, y - 40, 10, 10);
    rect(this.x + 210, y - 50, 10, 10);
    rect(this.x + 220, y - 60, 10, 10);

    fill("#d98636");
    rect(this.x + 10, y + 10, 40, 20);
    rect(this.x + 50, y + 10, 20, 10);
    rect(this.x + 20, y + 30, 10, 10);
    rect(this.x + 100, y, 10, 10);
    rect(this.x + 120, y - 10, 20, 10);
    rect(this.x + 150, y - 20, 10, 10);
    rect(this.x + 160, y - 30, 10, 10);
    rect(this.x + 180, y - 40, 10, 10);
    rect(this.x + 200, y - 50, 10, 10);
    rect(this.x + 210, y - 60, 10, 10);
    rect(this.x + 220, y - 80, 10, 20);

    fill("#c47c28");
    rect(this.x + 10, y, 20, 20);
    rect(this.x + 10, y + 10, 30, 10);
    rect(this.x + 20, y + 20, 10, 10);

    fill("#ffaf5f");
    rect(this.x + 60, y + 40, 40, 10);
    rect(this.x + 80, y + 30, 50, 10);
    rect(this.x + 90, y + 20, 60, 10);
    rect(this.x + 110, y + 10, 60, 10);
    rect(this.x + 140, y, 50, 10);
    rect(this.x + 160, y - 10, 50, 10);
    rect(this.x + 180, y - 20, 40, 10);
    rect(this.x + 190, y - 30, 40, 10);
    rect(this.x + 190, y - 30, 40, 10);
    rect(this.x + 200, y - 40, 40, 10);
    rect(this.x + 230, y - 60, 10, 10);

    fill("#fdc070");
    rect(this.x + 80, y + 40, 20, 10);
    rect(this.x + 90, y + 30, 30, 10);
    rect(this.x + 110, y + 20, 30, 10);
    rect(this.x + 130, y + 10, 30, 10);
    rect(this.x + 150, y, 30, 10);
    rect(this.x + 170, y - 10, 30, 10);
    rect(this.x + 190, y - 20, 20, 10);
    rect(this.x + 200, y - 30, 20, 10);
    rect(this.x + 210, y - 40, 20, 10);
    rect(this.x + 220, y - 50, 20, 10);
    pop();
  }
}
